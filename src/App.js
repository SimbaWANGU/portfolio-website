import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
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
          <Navbar />
        ) : (
          <LoadingScreen />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
