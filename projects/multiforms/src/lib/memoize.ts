import * as memoizee_ from 'memoizee';
const memoizee = memoizee_;

export function memoize() {
  return function(target, key, descriptor) {
    const oldFunction = descriptor.value;
    const newFunction = memoizee(oldFunction);
    descriptor.value = function () {
      return newFunction.apply(this, arguments);
    };
  };
};