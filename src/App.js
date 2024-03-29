import React, { lazy, Suspense, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, useRoutes, useLocation } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/footer/footer';
const Landing = lazy(() => import('./components/Landing/Landing'));
const Articles = lazy(() => import('./components/articles'));
const Arcicle = lazy(() => import('./components/article'));
const Plans = lazy(() => import('./components/plans/plans'));
const Plan = lazy(() => import('./components/plans/plan'));
const Builder = lazy(() => import('./components/planBuilder/builder'));
const NotFound = lazy(() => import('./components/notfound'));
const Tools = lazy(() => import('./components/tools/tools'));
const ToolsDynamic = lazy(() => import('./components/tools/toolsDynamic'))

const routes = [
  {
    path: '*',
    element: <NotFound />
  },
  {
    path: '/',
    element: <Landing />
  },
  {
    path: '/plans',
    element: <Plans />
  },
  {
    path: '/articles',
    element: <Articles />
  },
  {
    path: '/tools',
    element: <Tools />
  },
  {
    path: '/plans/builder',
    element: <Builder />
  },
  {
    path: '/tools/:tool',
    element: <ToolsDynamic props="tools/:tool"/>
  },
  {
    path: '/plans/:planTitle',
    element: <Plan />
  },
  {
    path: '/articles/:title',
    element: <Arcicle />
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
      <Suspense fallback={<h1 style={{PaddingTop: 50, display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'#1c1c1c'}} className='vh-100'>Loading...</h1>}>
          <App/>
      </Suspense>
      <Footer />
    </Router>
  )
}

export default AppWithRouter;
