import './App.css';
import { lazy, Suspense } from 'react';

import { Router } from './components/Router';
import { Route } from './components/Route';

import { Page404 } from './pages/404';
import SearchPage from './pages/Search';

const LazyHomePage = lazy(() => import('./pages/Home.jsx')); //Lazy Loading
const LazyAboutPage = lazy(() => import('./pages/About.jsx')); //Lazy Loading

const routes = [
  {
    path: '/search/:query',
    Component: SearchPage,
  },
];

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Router routes={routes} defaultComponent={Page404}>
          <Route path="/" Component={LazyHomePage} />
          <Route path="/:lang/about" Component={LazyAboutPage} />
        </Router>
      </Suspense>
    </main>
  );
}

export default App;

// Continue the lesson here https://www.youtube.com/watch?v=K2NcGYajvY4&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&index=7&ab_channel=midulive 01:26:42 - Testing our Router package
