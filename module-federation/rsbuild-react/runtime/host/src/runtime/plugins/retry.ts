import { RetryPlugin } from '@module-federation/retry-plugin';

const retryPlugin = () =>
  RetryPlugin({
    fetch: {},
    script: {
      retryTimes: 3,
      retryDelay: 1000,
      cb: (resolve, error) => {
        return setTimeout(() => {
          resolve(error);
        }, 1000);
      },
    },
  });
export default retryPlugin;