import './index.scss'
import { Link } from 'react-router-dom';

export default function Ganhe() {
    return (
        <div className='pagina-ganhe'>

            <div className='pagina'>
                <h1>Parabéns, você ganhou nada!! Tente novamente</h1>
                <Link to='/' className='bt'>Clique aqui para voltar.</Link>
            </div>

            <div className='imag'>
                <img src="./assets/images/erro.jfif" alt="" />
        
            </div>
        </div>
    );
}