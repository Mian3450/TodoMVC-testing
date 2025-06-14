class XPathBuilder {
  constructor(selector = '') {
    this.selector = selector
  }

  static all(tag = '*') {
    return new XPathBuilder(`//${tag}`)
  }

  by(condition) {
    return new XPathBuilder(this.selector + `[${condition}]`)
  }

  child(tag = '*') {
    return new XPathBuilder(this.selector + `/${tag}`)
  }

  descendant(tag = '*') {
    return new XPathBuilder(this.selector + `//${tag}`)
  }

  get x() {
    return this.selector
  }
}

export { XPathBuilder as x }
