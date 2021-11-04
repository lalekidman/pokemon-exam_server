interface ILengthArgs {
  max?: number
  min?: number
}
interface IisStringOptions {
  required?: boolean,
  maxLength?: number
  minLength?: number
}
interface IisNumericOptions {
  required?: boolean,
  max?: number
  min?: number
}
export const IsString = (options?: IisStringOptions) => {
  const {
    maxLength = -1,
    minLength = -1,
    required = false
  } = options ?? {}
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const setter = function (declaredValue: any) {
      if (!(typeof declaredValue === 'string')) {
        throw new Error(`"${propertyKey}" must be string. found ${typeof declaredValue}.`)
      }
      if (required && !declaredValue) {
        throw new Error(`"${propertyKey}" must is a required field.`)
      }
      if (maxLength >= 0 && declaredValue.length > maxLength) {
        throw new Error(`"${propertyKey}" exceed the maximum character limit which is ${maxLength}.`)
      }
      if (minLength >= 0 && declaredValue.length < minLength) {
        throw new Error(`"${propertyKey}" exceed the minimum character limit which is ${minLength}.`)
      }
    }
    Object.defineProperty(target, propertyKey, {
      ...descriptor,
      set: setter,
    })
  };
}
export const IsBoolean = () => {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const setter = function (declaredValue: any) {
      if (!(typeof declaredValue === 'boolean')) {
        throw new Error(`"${propertyKey}" must be boolean. found ${typeof declaredValue}.`)
      }
    }
    Object.defineProperty(target, propertyKey, {
      ...descriptor,
      set: setter,
    })
  };
}
export const IsNumeric = (options?: IisNumericOptions) => {
  const {
    min = -1,
    max = -1,
    required = false
  } = options ?? {}
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const setter = function (declaredValue: any) {
      if (!(typeof declaredValue === 'number')) {
        throw new Error(`"${propertyKey}" must be number. found ${typeof declaredValue}.`)
      }
      if (max >= 0 && declaredValue < max) {
        throw new Error(`"${propertyKey}" must be less than ${max}.`)
      }
      if (min >= 0 && declaredValue < min) {
        throw new Error(`"${propertyKey}" must be greather than ${min}.`)
      }
    }
    Object.defineProperty(target, propertyKey, {
      ...descriptor,
      set: setter,
    })
  };
}