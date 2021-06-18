import React, {useState, useEffect} from 'react'

const Segundo = () => {
    const [repositorios, setRepositorios] = useState([])
   

    useEffect(()=>{
        const pegaDados = async () => {
            const resposta = await fetch('http://api.github.com/users/jaquelinedealmeida/repos')
            const dados = await resposta.json()
            setRepositorios(dados)
            //console.log(dados)      
        }
        pegaDados()
    },[]) // aguarda dois paramentros - funcão e array

    return(
        <ul>
            {repositorios.map(repo => (
                <li key={repo.id}>{repo.name}</li>
            ))}
        </ul>
    )
}

export default Segundo