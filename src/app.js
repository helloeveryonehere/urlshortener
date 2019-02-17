import path from 'path';

import WebServer from './infrastructures/Server';
import ApiHandlerInterface from './interfaces/ApiHandler';
import RedirectorInterface from './interfaces/Redirector';
import ShortenerInteractor from './usecases/Shortener';
import RedirectorInteractor from './usecases/Redirector';
import DbInterface from './interfaces/Db';
import DbAdapter from './infrastructures/JsonDb';
import UniqueKeyGenerator from './infrastructures/UniqueKey';

const dbInterface = new DbInterface({
  dbAdapter: new DbAdapter(path.resolve('./db/data.json'))
});

const shortenerInteractor = new ShortenerInteractor({
  dbInterface,
  keyGenerator: UniqueKeyGenerator
});
const redirectorInteractor = new RedirectorInteractor({ dbInterface });
const apiHandlerInterface = new ApiHandlerInterface({ shortenerInteractor });
const redirectorInterface = new RedirectorInterface({ redirectorInteractor });

const webServer = new WebServer({
  apiHandlerInterface,
  redirectorInterface
});

webServer.start();
