import { createInstance } from '@module-federation/enhanced/runtime';
import retryPlugin from './plugins/retry';

// Initialize Module Federation runtime instance
const mf = createInstance({
  name: '@runtime/host',
  remotes: [
    {
      name: "@remote1",
      alias: "remote1",
      entry: "http://localhost:3001/mf-manifest.json",
    },
    {
      name: "@remote2",
      alias: "remote2",
      entry: "http://localhost:3002/mf-manifest.json",
    }
  ],
  plugins: [retryPlugin()],
});

// Export the MF instance for manual loading
export { mf };