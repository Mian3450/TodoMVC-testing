// support/xPath.js

const xPath = {
  getClass(classForXPath) {
    return `contains(concat(" ", normalize-space(@class), " "), " ${classForXPath} ")`
  },
}

export default xPath
