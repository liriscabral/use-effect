import { Fragment, useEffect, useState } from "react";

const SelectEstadoIBGE = () => {

    const [estados, setEstado] = useState([]);

    useEffect(() => {
        const loadEstado = async () => {
            try {
                const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`);
                if (!response.ok) {
                    throw new Error("Ops! Algo deu errado :(");
                }
                const data = await response.json();
                setEstado(data);
            } catch (error) {
                alert("Ops erro")
            }
        }
        loadEstado();
    });

    return (
        <Fragment>
            <label>Selecione um Estado:</label>
            <select id="estado">
                {estados.map(estado => (
                    <option key={estado.id} value={estado.nome}>
                        {`${estado.sigla} - ${estado.nome}`}
                    </option>
                ))}
            </select>
        </Fragment>
    );
}

export default SelectEstadoIBGE;