import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contextuse from './Contextuse.jsx'


createRoot(document.getElementById('root')).render(
<Contextuse>
    <App/>
</Contextuse>
)
