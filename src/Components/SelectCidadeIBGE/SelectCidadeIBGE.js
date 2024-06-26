import { Fragment, useEffect, useState } from "react";

const SelectCidadeIBGE = (props) => {

    const [cidades, setCidade] = useState([]);

    useEffect(() => {
        const loadCidade = async () => { // async antes da passagem de parametro
            try {
                let response;
                if (props.uf) {
                    response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${props.uf}/distritos?orderBy=nome`);   //fetch é uma api do js que consome requisições web
                } else {
                    response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios?orderBy=nome');
                }
                if (!response.ok) {
                    throw new Error("Ops! Algo deu errado :(");
                }
                const data = await response.json(); // convertendo em json
                setCidade(data);

            } catch (error) {
                alert("Ops erro")
            }

        }

        loadCidade();
    }, [props.uf]);

    return (
        <Fragment>
            <label>Selecione uma Cidade:</label>
            <select id="cidade">
                {cidades.map(cidade => (
                    <option key={cidade.id} value={cidade.nome}>
                        {cidade.nome}
                    </option>
                ))}
            </select>
        </Fragment>
    );
}


export default SelectCidadeIBGE;