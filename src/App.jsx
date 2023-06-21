import { Route, Routes } from 'react-router-dom';
import AboutUs from "../src/pages/AboutUs";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs"
import Services from "./pages/Services"

const App = () => {
  const routes = [
    { path: '/', component: <Home /> },
    { path: '/about', component: <AboutUs /> },
    { path: '/contact', component: <ContactUs /> },
    { path: '/services', component: <Services /> }
  ];

  return (
    <Routes className="font-sora " >
      {routes.map(({ path, component }) => (
        <Route key={path} path={path} element={component}  />
      ))}
    </Routes>
  );
}

export default App;