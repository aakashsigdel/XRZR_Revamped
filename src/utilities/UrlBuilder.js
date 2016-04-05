export default class UrlBuilder {
  constructor (baseUrl) {
    this.baseUrl = baseUrl
    this.withFieldList = []
    this.andFilters = {}
    //this.orFilters = {}
  }

  getWithClause () {
    this.withFieldList = Array.from(new Set(this.withFieldList))
    if (this.withFieldList.length === 0) {
      return ''
    }
    return 'with=' + this.withFieldList.reduce((a, b) => a + ',' + b)
  }

  getFilerClause () {
    let andFilters = ''
    if (!this.isEmpty(this.andFilters)) {
      andFilters = Object.keys(this.andFilters).map(
        (field) => {
          let value = this.andFilters[ field ]
          if (typeof value === 'string') {
            return field + ':"' + value + '"'
          }
          return field + ':' + value
        }
      ).reduce(
        (a, b) => a + ' and ' + b
      )
    }

    //let orFilters = ''
    //if (!this.isEmpty(this.orFilters)) {
    //  orFilters = Object.keys(this.orFilters).map(
    //    (field) => field + ':' + this.orFilters[ field ]
    //  ).reduce(
    //    (a, b) => a + ' or ' + b
    //  )
    //}
    if (andFilters) {
      return 'filter=' + andFilters
    }
    return ''
  }

  addAndFilter (field, value) {
    this.andFilters[field] = value
    return this
  }

  addOrFilter (field, value) {
    this.orFilters[field] = value
    return this
  }

  addWithClause (fieldList) {
    this.withFieldList = Array.from(new Set([...this.withFieldList, ...fieldList]))
    return this
  }

  toString () {
    let withClause = this.getWithClause()
    let filterClause = this.getFilerClause()
    let url = this.baseUrl
    if (withClause) {
      url += '?' + withClause
    }
    if (filterClause) {
      url += '&' + filterClause
    }
    return url
  }

  isEmpty (obj) {
    // null and undefined are "empty"
    if (obj == null) return true

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0)    return false
    if (obj.length === 0)  return true

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) return false
    }

    return true
  }
}

// tests
//console.log(
  //new UrlBuilder("http://hello.com")
  //  .addWithClause(['cat', 'dog', 'dog'])
    //.addAndFilter('field', true)
    //.addAndFilter('fi', 'hello')
    //.addOrFilter()
    //.toString())
