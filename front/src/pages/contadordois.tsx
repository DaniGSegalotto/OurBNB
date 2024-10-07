import React, { useEffect, useState } from "react";
import { Alert, Button } from "react-bootstrap";

const ContadorDois: React.FC = () => {
    const [contador, setContador] = useState(0)

    useEffect( () => {
        console.log("Contador iniciado")
    }, [contador])
    
    const incrementar = () => {
        setContador(contador +1)
    }
    
    const zerar = () => {
        setContador(0)
    }

    const decrementar = () => {
        setContador(contador -1)
    }

    return(
    <>
        <h1>Contador: {contador}</h1>
        <Button onClick={decrementar}>Decrementar</Button>
        <Button onClick={incrementar}>Incrementar</Button>
        <Button onClick={zerar}>Zerar</Button>

    </>
    )
};

export default ContadorDois;