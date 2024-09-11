import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import './App.css';
import HomePage from './components/Home.page';
import RQSuperHerosPage from './components/RQSuperHeros.page';
import SuperHerosPage from './components/SuperHeros.page';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heros">Old Super Heros</Link>
              </li>
              <li>
                <Link to="/rq-super-heros">React Query Super Heros</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/super-heros" element={<SuperHerosPage />}></Route>
            <Route
              path="/rq-super-heros"
              element={<RQSuperHerosPage />}
            ></Route>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
