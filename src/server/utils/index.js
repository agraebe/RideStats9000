const promisify = func => {
  return (...args) => {
    const context = this;
    return new Promise((resolve, reject) => {
      const callback = (error, result, secondary) => {
        if (error) {
          return reject(error.toString());
        }
        resolve(result, secondary);
      };
      args.push(callback);
      func.apply(context, args)
    });
  }
};

module.exports = {
  promisify
};
