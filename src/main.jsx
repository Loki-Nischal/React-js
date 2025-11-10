
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider,QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  
    // App lai wrap gare paxi BrowserRouter ko feature haru use garna pauxa
   <BrowserRouter> 
     <QueryClientProvider client={queryClient}>
          <App />
     </QueryClientProvider>
   </BrowserRouter>

)
