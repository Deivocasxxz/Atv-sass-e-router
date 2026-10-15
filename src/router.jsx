import './index.scss';
import App from './pages/app/App';
import Ganhe from './pages/ganhe/index.jsx'
import './pages/ganhe/index.scss'
import Formulario from './pages/form/index.jsx'
import './pages/form/index.scss'
import Cadastro from './pages/cadastro/index.jsx';
import './pages/cadastro/index.scss'
import Contador from './pages/contador/index.jsx';
import './pages/contador/index.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './pages/calculadora/index.scss'
import Calculadora from './pages/calculadora/index.jsx';

export default function Router(){
    return(
<BrowserRouter>
        <Routes>
      <Route path='/' element={<App/>}/>
        <Route path='/ganho' element={<Ganhe/>}/>
        <Route path='/form' element={<Formulario/>}/>
        <Route path='/cadastro' element={<Cadastro/>}/>
        <Route path='/contador' element={<Contador/>}/>
        <Route path='/calculadora' element={<Calculadora/>}/>
        </Routes>
</BrowserRouter>
    );
}