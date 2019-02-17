import express from 'express';
import bodyParser from 'body-parser';
import validUrl from 'valid-url';

import {
  wrongUrlMsg,
  noSuchUrl,
  listenerMsg,
  routes,
  urlNotSpecified
} from '../constants';
import { Console } from '../utils';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.all('/*', (_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');
  next();
});

export default class WebServer {
  constructor(props) {
    this.apiHandlerInterface = props.apiHandlerInterface;
    this.redirectorInterface = props.redirectorInterface;
  }

  start() {
    app.post(routes.api, async (req, res) => {
      try {
        if (!req.body.url) {
          res.status(400).json({ error: urlNotSpecified });
          res.end();
        }
        const { url } = req.body;
        const newUrl = await this.apiHandlerInterface.generateShortUrl(url);

        res.status(200).json(newUrl);
        res.end();
      } catch (error) {
        res.status(500).json({ error: error.toString() });
        res.end();
      }
    });

    app.get(routes.saveKey, (req, res) => {
      const { key } = req.params;
      const originalUrl = this.redirectorInterface.fetchOriginalUrl(key);

      if (originalUrl) {
        if (validUrl.isUri(originalUrl)) {
          res.redirect(originalUrl);
        } else {
          // @TODO send proper html template OR redirect to FE /error route
          res.status(404).send(wrongUrlMsg(key, originalUrl));
        }
        res.end();
      } else {
        // @TODO send proper html template OR redirect to FE /error route
        res.status(404).send(noSuchUrl);
        res.end();
      }
    });

    // @TODO port can be sent as param and used from process args
    app.listen(5000, () => {
      // @TODO there can be simple logger object for printing such infos
      Console.log(listenerMsg(5000)); //
    });
  }
}
