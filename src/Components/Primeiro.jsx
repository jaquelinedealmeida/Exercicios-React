//consumir dados internos e mostrar valor na tela
import React, {useState} from 'react'

const Primeiro = () => {
    const [repositorios, setRepositorio] = useState([
    ])

        function adcionaRepo(){
            setRepositorio(

            )
        }
        
    //pode ser array, string, objeti
    return(
        <>
            <ul>
                 {repositorios.map(repo=>(
                    <li>{repo.nome}</li>
            ))}
            </ul>
            <button onClick={adcionaRepo}>Add Repo</button>
        </>
        
    )
}

export default Primeiro