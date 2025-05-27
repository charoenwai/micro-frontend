import './App.css';
import Remote1 from 'remote1/App';
import Remote2 from 'remote2/App';

const App = () => {
  return (
    <div className="content">
      <h1>Host</h1>
      <Remote1 />
      <Remote2 />
    </div>
  );
};

export default App;
