import { RetryPlugin } from '@module-federation/retry-plugin';

const retryPlugin = () =>
  RetryPlugin({
    retryTimes: 3,
    retryDelay: 1000,
    onRetry: ({ times, url }) => console.log('Retrying...', times, url),
    onSuccess: ({ url }) => console.log('Success!', url),
    onError: ({ url }) => console.log('Failed!', url),
  });
export default retryPlugin;