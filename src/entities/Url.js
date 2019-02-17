import { servers } from '../constants';

export default class Url {
  constructor(baseUrl) {
    this.baseUrl = baseUrl || servers.shortenerRoute;
  }

  get OriginalUrl() {
    return this.originalUrl;
  }

  set OriginalUrl(url) {
    this.originalUrl = url;
  }

  get ShortKey() {
    return this.shortKey;
  }

  set ShortKey(shortKey) {
    this.shortKey = shortKey;
  }

  get ShortUrl() {
    return `${this.baseUrl}/${this.shortKey}`;
  }
}
