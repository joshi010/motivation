import React, { lazy, Suspense, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, useRoutes, useLocation } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/footer';

const Landing = lazy(() => import('./components/Landing/Landing'));
const Articles = lazy(() => import('./components/articles'));
const Arcicle = lazy(() => import('./components/article'));

const routes = [
  {
    path: '/articles/:title',
    element: <Arcicle />
  },
  {
    path: '/articles',
    element: <Articles />
  },
  {
    path: '/',
    element: <Landing />
  },
  
]


function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const element = useRoutes(routes);
  return element;
}

function AppWithRouter() {

  return(
    <Router>
      <Nav />
      <Suspense fallback={<h1 style={{PaddingTop: 50, display:'flex', alignItems:'center', justifyContent:'center'}} className='vh-100'>Loading...</h1>}>
          <App/>
      </Suspense>
      <Footer />
    </Router>
  )
}

export default AppWithRouter;
