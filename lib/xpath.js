class XPathBuilder {
  constructor(path = '') {
    this.path = path
  }

  static all() {
    return new XPathBuilder('//*')
  }

  by(expression) {
    this.path += `[${expression}]`
    return this
  }

  child(tag = '*') {
    this.path += `/${tag}`
    return this
  }

  descendant(tag = '*') {
    this.path += `//${tag}`
    return this
  }

  get x() {
    return this.path
  }
}

const its = {
  id: (value) => `@id="${value}"`,
  descendantWithText: (text) => `.//text()="${text}"`,
  cssClass: (className) =>
    `contains(concat(" ", normalize-space(@class), " "), " ${className} ")`,
}

const x = XPathBuilder

export { x, its }
