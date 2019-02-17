import UrlDomain from '../entities/Url';

export default class Shortener {
  constructor(props) {
    this.dbInterface = props.dbInterface;
    this.keyGenerator = props.keyGenerator;
  }

  createNewShortUrl(url) {
    const urlDomain = new UrlDomain();
    urlDomain.OriginalUrl = url;
    urlDomain.ShortKey = this.keyGenerator.generate();

    // @NOTE the case that random key can be duplicate of an existing key is not considered
    if (this.dbInterface.storeUrl({
      key: urlDomain.ShortKey,
      url: urlDomain.OriginalUrl
    })) {
      return urlDomain;
    }
    return null;
  }
}
