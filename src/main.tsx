
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import ShopProvider from "./Context/ShopProvider";

createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
    <ShopProvider>
    <App />
    </ShopProvider>
    
    </BrowserRouter>
  
)
