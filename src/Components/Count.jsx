//criar um contador em react
//3 elementos html
    //2 botoes contador
    // 1 titulo elementos
    //Quando a pessoa usuaria interagirclicando no mais, eu quero que so
    // ao valor que está na tela
    //Quando a pessoa usuario interagir clicandoo no mesno, eu quero que o valor diminua o valo que está naela 
   
    //Usar Hook useState
   // 1 passo importar
   //2 passo declarar por desestruturação o estado inicial e a funcao atualizadora 
   // ligar o gancho (hooks no html) com interpolação {hooks}

import React, {useState} from 'react'

const Count = () => {
    const [count, setCount] = useState(0)

    function diminui(){
        setCount(count-1)
    }

    function soma(){
        setCount(count+1)
    }

    return (
        <>
            <button onClick={diminui}>Diminui: - </button>
            <h1>{count}</h1>  
            <button onClick={soma}>Soma: + </button>
        </>

)
}

export default Count