export default class UrlBuilder {
  constructor (baseUrl) {
    this.baseUrl = baseUrl
    this.withFieldList = []
    this.withMetaFieldList = []
    this.queryFilter = null
    this.sortField = {field: undefined, order: 'asc'}
  }

  addFilter (filter) {
    this.queryFilter = filter
    return this
  }

  addWithClause (fieldList) {
    this.withFieldList = Array.from(new Set([...this.withFieldList, ...fieldList]))
    return this
  }

  addWithMetaDataClause(fieldList) {
    this.withMetaFieldList = Array.from(new Set([...this.withMetaFieldList, ...fieldList]))
    return this
  }

  sortBy (fieldName, order = 'asc') {
    this.sortField['field'] = fieldName

    if (order !== 'desc') {
      order = 'asc'
    }

    this.sortField['order'] = order
    return this
  }

  toString () {
    let withClause = this.getWithClause()
    let filterClause = this.getFilerClause()
    let withMetaClause = this.getWithMetaDataClause()
    let sortClause = this.getSortClause()
    let url = this.baseUrl

    let urlSnippet = [
      withClause,
      filterClause,
      withMetaClause,
      sortClause,
    ].filter((item) => item)

    if (urlSnippet.length !== 0) {
      url += '?' + urlSnippet.reduce((a, b) => a + '&' + b)
    }
    return url
  }

  getWithClause () {
    this.withFieldList = Array.from(new Set(this.withFieldList))
    if (this.withFieldList.length === 0) {
      return ''
    }
    return 'with=' + this.withFieldList.reduce((a, b) => a + ',' + b)
  }

  getWithMetaDataClause () {
    this.withMetaFieldList = Array.from(new Set(this.withMetaFieldList))
    if (this.withMetaFieldList.length === 0) {
      return ''
    }
    return 'with-metadata=' + this.withMetaFieldList.reduce((a, b) => a + ',' + b)
  }

  getFilerClause () {
    if (this.queryFilter === null) {
      return ''
    }
    return 'filter=' + this.queryFilter.toString()
  }

  getSortClause () {
    if (this.sortField.field) {
      return `sort=${this.sortField.field}&order=${this.sortField.order}`
    }
    return ''
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

export class OrFilter {
  constructor (filter1, filter2) {
    this.filter1 = filter1
    this.filter2 = filter2
  }
  toString () {
    return `${this.filter1.toString()} or ${this.filter2.toString()}`
  }
}

export class AndFilter {
  constructor (filter1, filter2) {
    this.filter1 = filter1
    this.filter2 = filter2
  }
  toString () {
    return `${this.filter1.toString()} and ${this.filter2.toString()}`
  }
}
export class Filter {
  constructor (field, value) {
    this.field = field
    this.value = value
  }
  getValueString () {
    if (typeof this.value === 'string'){
      return `"${this.value}"`
    }
    return this.value
  }
  toString () {
    return `${this.field}:${this.getValueString()}`
  }
}
//tests
//const queryFilter = (
//  new AndFilter(
//    new Filter('hello', 'hello'),
//    new AndFilter(
//      new Filter('truth', true),
//      new OrFilter(
//        new Filter('he', 'sing'),
//        new Filter('neat', 1)
//      )
//    )
//  ))
//console.log(
//  new UrlBuilder('http://hello.com')
//    .addWithClause(['cat', 'dog', 'dog'])
//    .addFilter(queryFilter)
//    .sortby("hello", 'ascending')
//    .toString())
