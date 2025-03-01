const xpath = {
  hasClass(value) {
    return `contains(concat(" ", normalize-space(@class), " "), " ${value} ")`
  },
}

export default xpath
