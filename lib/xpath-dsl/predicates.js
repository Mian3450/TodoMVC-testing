const its = {
  id: (value) => `@id="${value}"`,
  descendantWithText: (value) => `.//text()="${value}"`,
  cssClass: (value) =>
    `contains(concat(" ", normalize-space(@class), " "), " ${value} ")`,
}

export { its }
