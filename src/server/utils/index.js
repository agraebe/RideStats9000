const promisify = func => {
  return (...args) => {
    const context = this;
    return new Promise((resolve, reject) => {
      const callback = (error, result) => {
        if (error) {
          return reject(error);
        }
        resolve(result);
      }
      args.push(callback);
      func.apply(context, args)
    });
  }
};

module.exports = {
  promisify
};
