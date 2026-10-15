import './index.scss'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cabecalho from '../../components/cabeçalho';




export default function Calculadora() {

    const [num1, setnum1] = useState("")
    const [num2, setnum2] = useState("")
    const [resp, setresp] = useState("")

    const [corFundo, setcorFundo] = useState("rgb(240, 180, 180)")


    function alterarCorFundo(e) {
        let novovalor = e.target.value;
        setcorFundo(novovalor);

    }


    function Somar() {
        let soma = Number(num1) + Number(num2)
        setresp(soma)
    }

    function Subtrair() {
        let sub = Number(num1) - Number(num2)
        setresp(sub)
    }

    function Dividr() {
        let divd = Number(num1) / Number(num2)
        setresp(divd)
    }

    function Multiplicar() {
        let mult = Number(num1) * Number(num2)
        setresp(mult)
    }


    return (
        <div className='pag-calc'>
                   <Cabecalho titulo="Exercicio Calculadora"/>
            <h1>CALCULADORA</h1>

            <div className='prince'>
             

                <section className='inputs' style={{ backgroundColor: corFundo }}>

                    <h2>Calculadora Master 2000</h2>



                    <div className='soma' >
                        <div className='inp1'>
                            <input type="text" value={num1} onChange={(e) => setnum1(e.target.value)} />
                        </div>

                        <div className='inp2'>
                            <input type="text" value={num2} onChange={(e) => setnum2(e.target.value)} />
                        </div>
                        = <br />
                        <div>{resp}</div>
                    </div>

                    <div className='bots'>

                        <button onClick={Somar} className='resp'>Somar</button>
                        <button onClick={Subtrair} className='resp'>Subtrair</button>
                        <button onClick={Dividr} className='resp'>Dividir</button>
                        <button onClick={Multiplicar} className='resp'>Multiplicar</button>

                    </div>

                    <div className='lin'>
                        <Link to='/' className='bot'>Pagina inicial.</Link>
                    </div>

                    <div>
                    <h3>Troque a cor da Calculadora Master 2000</h3>
                    <input type="color" value={corFundo} onChange={alterarCorFundo} />
                    </div>
                  

                </section>



            </div>



        </div>
    )
}