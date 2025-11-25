
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider,QueryClient } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store,persistor} from './redux/store.js'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  
    // App lai wrap gare paxi BrowserRouter ko feature haru use garna pauxa
   <BrowserRouter> 
     <QueryClientProvider client={queryClient}>
        <Provider store = {store}>
          <PersistGate loading={null} persistor={persistor}>
             <App />
          </PersistGate> 
        </Provider>
     </QueryClientProvider>
   </BrowserRouter>

)
