import './App.css'
import imagen0 from './assets/img/rey_atanagildo.png'
import imagen1 from './assets/img/rey_sisebuto.png'
import { useRef } from 'react'


function App() {

  const refCaja = useRef();
  const dolar = 4710;

  const incrementar = (e) => {
    e.target.innerHTML = Number(e.target.innerHTML) + 1

    if (e.target.innerHTML >= 10) {
      e.target.innerHTML = 1;
    }

    if (e.target.innerHTML >= 8) {
      e.target.style.backgroundColor = 'yellow'
    } else {
      e.target.style.backgroundColor = 'white'
    }
  }

  const convertir = () => {
    refCaja.current.innerHTML = Number(refCaja.current.innerHTML) * dolar;
  }

  const cambioImg = (j) => {
    j.target.src.includes('rey_atanagildo') ? j.target.src = imagen1 : j.target.src = imagen0;
  }

  const lectura = (a) => {
    refCaja.current.innerHTML = a.target.value;
    console.log(a.target.value);
  }

  return (
    <>
      <div className='caja' onClick={incrementar} ref={refCaja}>1</div>
      <button onClick={convertir}>Aceptar</button>
      <div>
        <img src={imagen0} onClick={cambioImg} />
      </div>
      <input type="text" className='campo' onChange={lectura} />

    </>
  )
}

export default App
