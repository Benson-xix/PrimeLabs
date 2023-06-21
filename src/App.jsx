import  { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import AboutUs from "../src/pages/AboutUs";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs"
import Services from "./pages/Services"
import LoadingOverlay from './LoadingOverlay'; 

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [location]);

  const routes = [
    { path: '/', component: <Home /> },
    { path: '/about', component: <AboutUs /> },
    { path: '/contact', component: <ContactUs /> },
    { path: '/services', component: <Services /> }
  ];

  return (
    <>
      {isLoading && <LoadingOverlay />} 
      <Routes className="font-sora">
        {routes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Routes>
    </>
  );
}

export default App;