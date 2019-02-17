import UrlDomain from '../entities/Url';
import { isObjEmpty } from '../utils';

export default class Redirector {
  constructor(props) {
    this.dbInterface = props.dbInterface;
  }

  fetchOriginalUrl(key) {
    const urlObject = this.dbInterface.getUrlByKey(key);

    if (!isObjEmpty(urlObject) && urlObject.url) {
      const urlDomain = new UrlDomain();
      urlDomain.OriginalUrl = urlObject.url;
      urlDomain.ShortKey = urlObject.key;

      return urlDomain;
    }

    return null;
  }
}
