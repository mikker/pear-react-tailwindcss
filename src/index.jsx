import { createRoot } from 'react-dom/client'
import App from './App.js'

if (typeof Pear !== 'undefined' && Pear.updates) {
  Pear.updates(() => Pear.reload())
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)
