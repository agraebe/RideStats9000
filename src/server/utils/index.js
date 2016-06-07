const promisify = (func, context = this) => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      const callback = (error, ...results) => {
        if (error) {
          return reject(error);
        }
        if (results.length > 1) {
          return resolve(results);
        }
        resolve(results[0]);
      };
      args.push(callback);
      func.apply(context, args);
    });
  };
};

module.exports = {
  promisify,
};
