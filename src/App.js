import React from 'react';
import Layout from './components/layouts/layout.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Index from './pages/Index.js';

const router = createBrowserRouter([
  {path: '/', 
  element: <Layout />, 
  children: [
    {index: true, element: <Index />}, 
  ]}
]);
function App() {
  return (
    <RouterProvider router = {router}/>
  )
    
}

export default App;
