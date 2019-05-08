const { classSearch, identifierSearch, classNamesSearch } = require('./utilityFunctions')


class View {
  constructor(state) {
    this.state = state;
  }
  find(term) {
    if (term[0] === '/') {
      return identifierSearch(this.state, term.slice(1, term.length))
    }
    if (term[0] === '.') {
      return classNamesSearch(this.state, term.slice(1, term.length))
    }
    return classSearch(this.state, term)
  }
}
module.exports = { View }