import fs from 'fs';

// @NOTE the concurrency issue is skipped, with real database it can be done easier

export default class JsonDb {
  constructor(dbFile) {
    this.dbFile = dbFile;
  }

  storeUrl(urlObject) {
    const data = this._getData();
    data.push(urlObject);

    try {
      this._setData(data);
      return true;
    } catch (error) {
      return false;
    }
  }

  _getData() {
    const content = fs.readFileSync(this.dbFile);

    const toJson = JSON.parse(content);
    return toJson;
  }

  _setData(data) {
    fs.writeFileSync(this.dbFile, JSON.stringify(data));
  }

  getUrlByKey(key) {
    const data = this._getData();

    const urlObject = data.find(instance => instance.key === key);

    return urlObject || {};
  }
}
