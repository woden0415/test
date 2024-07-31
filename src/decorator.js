export const prevIncrement=() =>{
  return (target, name, descriptor) => {
    const original = descriptor.value;
    descriptor.value = function() {
      console.log('+1拦截');
      return original.apply(this, arguments);
    };
    return descriptor;
  };
}

export const prevSubtract=()=> {
  return (target, name, descriptor) => {
    const original = descriptor.value;
    descriptor.value = function() {
      console.log('-1拦截');
      return original.apply(this, arguments);
    };
    return descriptor;
  };
}