import { createRoot } from 'react-dom/client'
import App from './App.js'

Pear.updates(() => Pear.reload())

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
