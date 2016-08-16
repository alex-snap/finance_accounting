/**
 * @public
 * @param {Array.<*>} array
 * @param {Function.<Boolean>} predicate - true: need remove
 * @returns {Array.<*>}
 */
export function removeFromArray(array, predicate) {
  return array.filter((item) => !predicate(item));
}

/**
 * @public
 * @param {Array.<*>} array
 * @param {*} item
 * @param {boolean} [toEnd = true]
 * @returns {Array.<*>}
 */
export function addToArray(array, item, toEnd = true) {
  if (toEnd) {
    return [...array, item];
  }
  return [item, ...array];
}

/**
 * @public
 * @param {Array.<Object>} args
 * @returns {Object}
 */
export function objectAssign(...args) {
  const sources = [{}, ...args];
  return Object.assign.apply(Object, sources);
}