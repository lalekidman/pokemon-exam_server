interface ILengthArgs {
  max?: number
  min?: number
}
export const IsString = () => {
  console.log("first(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("first(): called");
  };
}
export const IsBoolean = () => {
  console.log("IsBoolean(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("IsBoolean(): called");
  };
}
export const IsNumber = () => {
  console.log("IsNumber(): factory evaluated");
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("IsNumber(): num");
  };
}
// export const Number = () => {
//   return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

//     console.log("first(): called");
//   };
// }

export const Length = (args?: ILengthArgs) => {
  const {
    max,
    min = 0,
  } = args || {}
  
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const original = descriptor.get
    console.log('target :>> ', target);
    console.log('propertyKey :>> ', propertyKey);
    descriptor.get = function () {
      const result = original?.apply(this)
      if (max && max > result) {
        throw new Error('Exceed the allow maximum characters.')
      }
      if (min >= 0 && min > result) {
        throw new Error('Exceed the allow maximum characters.')
      }
      console.log('result :>> ', result);
      return result
    }
    return descriptor
  };
}