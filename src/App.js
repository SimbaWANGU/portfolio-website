import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import LoadingScreen from './components/LoadingScreen';
import Landing from './pages/Landing';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        {loading === false ? (
          <Landing />
        ) : (
          <LoadingScreen />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
