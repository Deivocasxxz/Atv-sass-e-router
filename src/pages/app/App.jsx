import './App.scss';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
<div className='pag'>
      <h1>Clique aqui para ganhar na mega sena</h1>
      <Link to= '/ganho' className='bot'>Clique aqui para ganhar.</Link>
</div>
<div className='im'>
     <img src="./assets/images/tele.jfif" alt="" className='porc' />

</div>

    </div>
  );
}

export default App;
