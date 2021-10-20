export const PI = 3.14;

export const sort = (...args) => args.sort((a, b) => a - b);

export function sortReverse(...args) {
  return args.sort((a, b) => b - a);
}
//export { PI, sort, sortReverse };

export const E = 2.71;

//const clone = (obj) => ({ ...obj });
//export { clone as cloneShallow }; //clone'u cloneshallow olarak çağıracaz
