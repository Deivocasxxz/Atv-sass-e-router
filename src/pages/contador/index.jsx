import './index.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';




export default function Contador() {

  const [valor, setValor] = useState ("Vai mudar aqui")

  function Mude(e) {
    let novovalor = e.target.value
    setValor (novovalor)
  }

   const [tela, settela] = useState (0) 

       function Soma() {
        settela(tela + 1)

    }

      function Dim() {
        settela(tela - 1)
      }

      function Resetar () {
        settela(tela - tela)
      }

    return (
        <div className='pag-cont'>
            <h1>Contador</h1>

            <div className='co'>

                <button onClick={Soma} className='aumentar'> + </button>
                <p>{tela}</p>
                <button onClick={Dim} className='diminuir'> - </button>
            </div>
            
            <div className='pt2'>
             <button onClick={Resetar} className='reset'> Reset </button>
            </div>


<div className='sect2'>


<p>{valor}</p>

<input type="text" placeholder='Escreva oque você mais gosta' onChange={Mude} className='escreve'/>

</div>

        </div>
    )
}