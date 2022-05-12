const isUpperCase = (str: string):boolean => /^[A-Z]*$/.test(str);

const startsWithUpperCase = (str: string):boolean =>/^[A-Z]/.test(str);

export {
  isUpperCase,
  startsWithUpperCase
}
