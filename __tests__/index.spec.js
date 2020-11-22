(function () {
  require('../src');

  describe('api.basic test', () => {
    test('should throw when target is null/undefined', () => {
      expect(nx.safeAssign(null, {})).toEqual({});
      expect(nx.safeAssign(undefined, {})).toEqual({});
    });

    test('should fail silently when source is null/undefined', () => {
      expect(nx.safeAssign({ foo: 1 }, undefined)).toEqual({ foo: 1 });
      expect(nx.safeAssign({ foo: 1 }, null)).toEqual({ foo: 1 });
    });

    test('should throw when source is primiry type', () => {
      expect(() => nx.safeAssign({ foo: 1 }, 'string')).toThrow();
      expect(() => nx.safeAssign({ foo: 1 }, 1)).toThrow();
    });

    test('should assign with same attributes successfully', () => {
      expect(nx.safeAssign({ foo: 1 }, { foo: 2 })).toEqual({ foo: 2 });
    });

    test('should not assign values with different type', () => {
      expect(nx.safeAssign({ foo: 1 }, { foo: '2' })).toEqual({ foo: '2' });
    });

    test('should assign with new attributes successfully', () => {
      expect(nx.safeAssign({ foo: 1 }, { bar: 2 })).toEqual({ foo: 1, bar: 2 });
    });

    test('should work with multiple source', () => {
      expect(
        nx.safeAssign({ foo: 1, bar: 2, baz: 3 }, { foo: 4 }, { bar: 5, baz: 6 }, { abc: { foo: 7 } })
      ).toEqual({ foo: 4, bar: 5, baz: 6, abc: { foo: 7 } });
    });

    test('should not iterate prototype keys', () => {
      function Source(v) {
        this.foo = v;
      }
      Source.prototype.bar = 1;
      const source = new Source(0);
      expect(nx.safeAssign({}, source)).toEqual({ foo: 0 });
    });

    test('should assign deeply', () => {
      const target = { foo: 1 };
      const source = { bar: { baz: 2 } };
      nx.safeAssign(target, source);
      expect(target).toEqual({ foo: 1, bar: { baz: 2 } });
      source.baz = 3;
      expect(target).toEqual({ foo: 1, bar: { baz: 2 } });
    });

    test('customize ignore function', () => {
      const res1 = nx.safeAssign(
        { a: 1, b: 2 },
        { c: 2, a: '' },
        (key, value) => {
          return value == null;
        }
      );

      const res2 = nx.safeAssign(
        { a: 1, b: 2 },
        { c: 2, a: '' },
        (key, value) => {
          return value == null || value === '';
        }
      );
      expect(res1).toEqual({ a: '', b: 2, c: 2 });
      expect(res2).toEqual({ a: 1, b: 2, c: 2 });
    });
  });
})();
