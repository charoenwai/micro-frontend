import { Suspense } from 'react';
import './App.css';
import { init } from '@module-federation/enhanced/runtime';
import { getRemote } from './runtime/loadRemote';

init({
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
});

// Module loading
const Remote1 = await getRemote('remote1', 'App')
const Remote2 = await getRemote('remote2', 'App')

const App = () => {
  return (
    <div className="content">
      <h1>Host</h1>
      <Suspense fallback={<div> Loading Remote App ...</div>}>
        <Remote1 />
        <Remote2 />
      </Suspense>
    </div>
  );
};

export default App;
