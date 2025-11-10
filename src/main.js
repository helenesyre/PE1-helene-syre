import './assets/styles/style.css'
import { setupCounter } from './counter.js'
import { navbar } from './components/navbar.js'

// Initialize navbar
navbar(document.querySelector('#header'))

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
