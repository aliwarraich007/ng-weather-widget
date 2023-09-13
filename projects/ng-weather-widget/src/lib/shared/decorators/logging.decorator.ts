export function Logging() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const targetMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.log('logging decorator working');
      return targetMethod.apply(this, args);
    };
    return descriptor;
  };
}
