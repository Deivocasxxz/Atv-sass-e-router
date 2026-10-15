import './App.scss';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <div className='tit'>
        <h1>Clique aqui para ganhar na mega sena</h1>
      </div>

      <div className='pag'>
        <Link to='/ganho' className='bot'>Clique aqui para ganhar.</Link>
        <Link to='/cadastro' className='bot'>Clique aqui para se cadastrar 2.</Link>
        <Link to='/form' className='bot'>Clique aqui para se cadastrar.</Link>
        <Link to='/contador' className='bot'> Clique aqui para ir ao contar</Link>
        <Link to='/calculadora' className='bot'>Clique aqui para ir para calculadora</Link>
      </div>

      <div className='im'>
        <img src="./assets/images/tele.jfif" alt="" className='porc' />
      </div>

    </div>
  );
}

export default App;
