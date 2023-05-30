export function arrayOrObjIsEmpty(obj, property) {
  if (!obj) {
    return true;
  }
  if (Array.isArray(obj)) {
    for (let item of obj) {
      if (item[property] && item[property].length) {
        return false;
      }
    }
  } else if (obj.constructor === Object) {
    if (obj[property] && obj[property].length) {
      return false;
    }
  }
  return true;
}
