export default class ApiHandler {
  constructor(props) {
    this.shortenerInteractor = props.shortenerInteractor;
  }

  generateShortUrl(url) {
    const urlDomain = this.shortenerInteractor.createNewShortUrl(url);
    return urlDomain ? {
      key: urlDomain.ShortKey,
      url: urlDomain.OriginalUrl,
      shortUrl: urlDomain.ShortUrl
    } : null;
  }
}
