export const servers = {
  shortenerRoute: 'http://localhost:5000'
};

export const wrongUrlMsg = (key, url) => `The key "${key}" is intended to redirect to url "${url}",\
    but unfortunately it is not a valid url`;
export const noSuchUrl = 'there is not such url available';

export const listenerMsg = port => `URL shortener app is listening on port ${port}!`;

export const routes = {
  api: '/api/shortener',
  saveKey: '/:key'
};

export const urlNotSpecified = 'URL is not specified';
