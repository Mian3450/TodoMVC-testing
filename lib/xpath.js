const predicate = {
  /**
   * @param {string} value
   * @returns {string}
   */
  hasCssClass(value) {
    return `contains(concat(" ", normalize-space(@class), " "), " ${value} ")`
  },

  /**
   * @param {string} predicate
   * @returns {string}
   */
  not(predicate) {
    return `not(${predicate})`
  },
}

const filteredBy = (predicate) => {
  return `[${predicate}]`
}

export const filterBy = {
  /**
   * @param {string} value
   * @returns {string}
   */
  cssClass(value) {
    return filteredBy(predicate.hasCssClass(value))
  },

  /**
   * @param {string} value
   * @returns {string}
   */
  noCssClass(value) {
    return filteredBy(predicate.not(predicate.hasCssClass(value)))
  },
}
