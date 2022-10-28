import got from 'got'

export class JsonRequest {
  options = {
    responseType: 'json',
  }

  url(url) {
    this.options.url = url
    return this
  }

  searchParams(params) {
    this.options.searchParams = params
    return this
  }

  async send() {
    return got(this.options)
  }
}
