export const getUrlFromParts = (host, port, gatewayPath) => `${host}:${port}${gatewayPath}`;

export const isObjEmpty = (obj) => {
  if (Object.keys(obj).length) {
    return false;
  }

  return true;
};

export const Console = console;
