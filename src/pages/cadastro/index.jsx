import './index.scss'

import { Link } from 'react-router-dom';

export default function Cadastro() {

    function Cadastro (){
        alert('Funcionário cadastrado com sucesso!')
    }

    function Mouse() {
        alert('O mouse entrou na área!')
    }

    function Saiu() {
        alert('O mouse saiu da área!')
    }


    function Nome(e) {
        let valor = e.target.value;
        alert('Nome Digitado: ' + valor)
    }

    function Departamento(a) {
        let v = a.target.value;
        alert('Departamento selecionado: ' + v)
    }

     function Funcionario(b) {
        let va = b.target.value;
        alert('Tipo de funcionário ' + va)
    }


    return (
        <div className='pages-cadastro'>

            <div className='part1'>
                <div className='section'>
                    <img src="./assets/images/nike.png" className='logo1' alt="" />
                    <h1>FORMULÁRIO PARA CONTRATAÇÂO</h1>
                </div>
            </div>

            <div className='part2'>
                <div className='cad'>
                        <h2>Formulário</h2>
                   <label><input type="text" placeholder='Digite seu Nome'className='nome' onChange={Nome} /> Nome do funcionário <br /> </label> 
                  <label className='lb'><select onChange={Departamento}>
                    <option>Administração</option>
                    <option>Recursos Humanos</option>
                    <option>Financeiro</option>
                    <option>Marketing</option>
                    <option>TI</option>
                    </select> Selecione seu departamento</label>  <br />

                    <div className='radi'  onChange={Funcionario}>
                    <p>Tipo de funcionario.</p>
                    <input type="radio" name="opcao" />
                    Efetivo
                    <input type="radio" name="opcao" />
                    Temporário
                    <input type="radio" name="opcao" />
                    Estagiário
                    <input type="radio" name="opcao" />
                    Jovem Aprendiz
                    </div>
                    

                    <div className='local' onMouseEnter={Mouse} onMouseLeave={Saiu}>
                        <p2>PASSE O MOUSE AQUI!</p2>
                    </div>

                    <a href="" onClick={Cadastro}>Cadastrar Funcionário</a>


                </div>

            </div>


        </div>
    )
}