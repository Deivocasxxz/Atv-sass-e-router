import './index.scss'

export default function Cabecalho(props){
    return(
    
        <div className='comp-cabecalho'>
                <h1> {props.titulo ?? 'Titulo Original - Exercício React'} </h1>
        </div>
    )
}