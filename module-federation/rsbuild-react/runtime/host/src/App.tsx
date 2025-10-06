import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { getRemote } from './runtime/loadRemote';
import Sidebar from './components/Sidebar';
import './runtime/mfInstance';

// Module loading
const Remote1 = await getRemote('remote1', 'App')
const Remote2 = await getRemote('remote2', 'App')

const Home = () => (
  <Suspense fallback={<div> Loading Remote Apps ...</div>}>
    <Remote1 />
    <Remote2 />
  </Suspense>
);

const Remote1Page = () => (
  <Suspense fallback={<div> Loading Remote 1 ...</div>}>
    <Remote1 />
  </Suspense>
);

const Remote2Page = () => (
  <Suspense fallback={<div> Loading Remote 2 ...</div>}>
    <Remote2 />
  </Suspense>
);

const Layout = () => {
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Home';
      case '/remote1':
        return 'Remote 1';
      case '/remote2':
        return 'Remote 2';
      default:
        return '404 - Page Not Found';
    }
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <header className="page-header">
          <h1>{getPageTitle()}</h1>
        </header>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/remote1" element={<Remote1Page />} />
            <Route path="/remote2" element={<Remote2Page />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;