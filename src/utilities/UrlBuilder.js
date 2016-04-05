export default class UrlBuilder {
  constructor (baseUrl) {
    this.baseUrl = baseUrl
    this.withFieldList = []
    this.filterField = {}
  }

  getWithClause () {
    this.withFieldList = Array.from(new Set(this.withFieldList))
    if (this.withFieldList.length === 0) {
      return ''
    }
    return 'with=' + this.withFieldList.reduce((a, b) => a + ',' + b)
  }

  addWithClause (fieldList) {
    this.withFieldList = Array.from(new Set([...this.withFieldList, ...fieldList]))
    return this
  }

  toString () {
    let withClause = this.getWithClause()
    let url = this.baseUrl
    if (withClause) {
      url += '?' + withClause
    }
    return url
  }

}

// tests
//console.log(new UrlBuilder("http://hello.com").addWithClause(['cat', 'dog', 'dog']).toString())
