import React, {useState, useEffect} from 'react'
//useState
const Terceiro = () =>{
    const [personagens, setPersonagem] = useState([]) //pega os personagens
     //da API e atualiza para mostrar na tela 
    const [filtroPersonagem, setFiltroPersonagem] = useState ([])
    const [busca, setBusca] = useState('')

    //pegar dados da api
    useEffect(()=>{ //hook 
        fetch('https://rickandmortyapi.com/api/character')//inserir api
            .then(resposta => resposta.json())
            .then(dados => setPersonagem(dados.results))
            //console.log(dados.results)) //pode incluir aqui tratamento de erro
    },[])

    function addCurtida(id) {
        const novaListaPersonagens = personagens.map(personagem => {
           return personagem.id === id ?
            {...personagem, favorite:!personagem.favorite}
            :personagem //tras as informações contidas
        //: true // != false
        })
      setPersonagem(novaListaPersonagens)
    }

    useEffect(()=>{ 
        setFiltroPersonagem(
            personagens.filter(personagem => {
                return personagem.name.includes(busca)
            })
        )

    },[busca,personagens])

    return(
        <>
            <input placeholder="Digite um personagem" onChange={e=>{setBusca(e.target.value)}}/>
            {filtroPersonagem.map(personagem=> (
                <div key={personagem.id}>
                    <p>{personagem.name}</p>
                    <img src={personagem.image} alt={personagem.name}/>
                    {personagem.favorite && <span>Favorito</span>} 
                    <button onClick={()=>addCurtida(personagem.id)}>Favoritar ❤️</button>
                </div>
                
            ))}
        </>
    )
}

export default Terceiro //exportar para usar em qualuer componente, inclusive app