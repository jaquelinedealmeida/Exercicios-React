import React, {useState} from 'react'

const Curtida = () => {
    const [valorAtual, setValor] = useState(0) //desestruturação de array

    function somaCurtidas() {
        setValor(valorAtual+1)
    } // a função escreve antes do return
            
    return (
        <>
            <p>{valorAtual}</p>
            <button onClick={somaCurtidas}>❤️</button>
        </>
    )
}

export default Curtida