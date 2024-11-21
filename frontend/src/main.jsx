import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from '../src/router/router';
import { Toaster } from 'sonner';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster richColors position="bottom-right" /> 
  </StrictMode>
);
