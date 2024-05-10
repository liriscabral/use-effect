import { Fragment, useEffect, useState } from 'react';

const Contador = () => {
    
    const setCookie = (nome, valor, tempo) => {
        const data = new Date();
        data.setTime(data.getTime + tempo * 24 * 60 * 60 * 1000);
        const expira = "expires=" + data.toUTCString();
        document.cookie = nome + "=" + valor + ";" + expira;
    }

    const [cont, setCont] = useState(0);

    useEffect(() =>{
        document.title = `Contador:  ${cont}`;
        setCookie('Contador', cont, 7)
    }, [cont]);
    
    return(
        <Fragment>
            <button onClick={() => setCont(cont + 1)}>Contar</button>
        </Fragment>
    )

}

export default Contador