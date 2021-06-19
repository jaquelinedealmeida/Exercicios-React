import React, {useState} from 'react'

const Relogio = () => {
    let horaInicial = new Date().toLocaleTimeString()
    const [hora, setHora] = useState(horaInicial)

    function atualizaHora() {
        horaInicial = new Date().toLocaleTimeString()
        setHora(horaInicial)
    }

    setInterval(atualizaHora,1000)

    return (
     <div>
           <p>{hora}</p>
     </div>
    
    )
}

export default Relogio 