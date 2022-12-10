// import logo from './logo.svg';
import { useContext } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { ThemeContext } from './Context/ThemeProvider';
import { router } from './Routes/Router';

function App() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className="w-full !h-full mx-auto" data-theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
