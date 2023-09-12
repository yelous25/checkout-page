import { increment, decrement } from './js'
import './styles/index.css'

window.increment = increment
window.decrement = decrement

const form = document.querySelector('.form')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    alert('Checkout Validated')

});


