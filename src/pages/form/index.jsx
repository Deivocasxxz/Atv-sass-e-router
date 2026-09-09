import './index.scss'

import { Link } from 'react-router-dom';

export default function Formulario() {
    
    
    function Alterar (){
        alert('Ta mechendo no input né..🤨')
    }
    
    function Mouse (){
        alert('Passou o mouse?? goxto é 😑')
    }
    
    
    function Valores (e){
    let valor = e.target.value;
    alert('O valor ta sendo mudado para = ' + valor + ' 🙄')
}


    return (
        <div className='pag-form'>
           

            <div className='container'>
                <h1 className='s'>Cadastro do GOV</h1>
                <p className='s'>Digite suas informações abaixo.</p>
                <div className='d1'>
                    <label className='s'>CPF:  <input type="text" onChange={Valores} placeholder='Digite seu CPF' className='cpf'/></label>
                </div>
                <div className='d2'>
                  <label className='s'>Email: <input type="email"onChange={Alterar} placeholder='Seu Email' className='eml'/></label>  
                </div>
                <div className='d3'>
              ,      <label className='s'>Senha: <input type="password" placeholder='Sua senha'className='senh' /></label> 
                </div>

                <select onMouseMove={Mouse}>
                    <option>Descobrir Senha</option>
                    <option>Ja tenho conta no GOV</option>
                </select>
            </div>
            <img src="./assets/images/gov.png" alt="" className='govs'/>
        </div>
    )
}