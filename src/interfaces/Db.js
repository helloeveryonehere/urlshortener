export default class Db {
  constructor(props) {
    this.dbAdapter = props.dbAdapter;
  }

  storeUrl(url) {
    return this.dbAdapter.storeUrl(url);
  }

  getUrlByKey(key) {
    return this.dbAdapter.getUrlByKey(key);
  }
}
