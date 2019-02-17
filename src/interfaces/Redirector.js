export default class Redirector {
  constructor(props) {
    this.redirectorInteractor = props.redirectorInteractor;
  }

  fetchOriginalUrl(key) {
    const urlDomain = this.redirectorInteractor.fetchOriginalUrl(key);

    return urlDomain ? urlDomain.OriginalUrl : null;
  }
}
