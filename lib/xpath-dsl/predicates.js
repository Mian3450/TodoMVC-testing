const its = {
  id: (value) => `@id="${value}"`,
  descendantWithText: (value) => `.//text()="${value}"`,
  cssClass: (className) =>
    `contains(concat(" ", normalize-space(@class), " "), " ${className} ")`,
}

export { its }
