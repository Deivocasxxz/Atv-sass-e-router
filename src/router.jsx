import './index.scss';
import App from './pages/app/App';
import Ganhe from './pages/ganhe/index.jsx'
import './pages/ganhe/index.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function Router(){
    return(
<BrowserRouter>
        <Routes>
      <Route path='/' element={<App/>}/>
        <Route path='/ganho' element={<Ganhe/>}/>
        </Routes>
</BrowserRouter>
    );
}