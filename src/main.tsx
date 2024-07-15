
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GeneralContextProvider } from './Components/GeneralContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <GeneralContextProvider>
    <App />
  </GeneralContextProvider>,
)
