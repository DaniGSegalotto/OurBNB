import React, { useState } from "react";
import { Button } from "react-bootstrap";

const Contador: React.FC = () => {
    const [contador, setContador] = useState(0)
    
    const incrementar = () => {
        setContador(contador +1)
    }

    const decrementar = () => {
        setContador(contador -1)
    }

    return(
    <>
        <h1>Contador: {contador}</h1>
        <Button onClick={decrementar}>Decrementar</Button>
        <Button onClick={incrementar}>Incrementar</Button>
    </>
    )
};

export default Contador;