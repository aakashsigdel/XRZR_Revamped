export const isObjectEmpty = (obj) => {
  return Object.keys(obj).length === 0 && JSON.stringify(obj) === JSON.stringify({})
}
