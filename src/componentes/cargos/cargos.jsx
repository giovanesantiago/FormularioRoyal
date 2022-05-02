import Form1 from "../form1"


const Aposentado = (props) => {
    return (
        <div className="input-container ic1">
            <input name="instituicao" onChange={props.change} onBlur={props.blur} type="text" className="input" placeholder=" "/>
            <div className="cut"></div>
            <label className="placeholder" htmlFor="firsname">Nome da instituição</label>
            <div className="error messageNaoValido">{props.message}</div>
        </div>
    )
}
const Assalariado = (props) => {
    return (
        <div>
            <div className="input-container ic1">
                <input name="empresa" onChange={props.change} onBlur={props.blur} type="text" className="input" placeholder=" "/>
                <div className="cut"></div>
                <label className="placeholder" htmlFor="firsname">Nome da Empresa</label>
                <div className="error messageNaoValido">{props.message1}</div>
            </div>
            <div className="input-container ic2">
            <input name="admissao" onChange={props.change} onBlur={props.blur} type="date" className="input" placeholder=" "/>
            <div className="cut"></div>
            <label className="placeholder" htmlFor="firsname">Data de Admissão</label>
            <div className="error messageNaoValido">{props.message2}</div>
            </div>
        </div>
    )
}
const Empresario = (props) => {
    return (
        <div>
            <div className="input-container ic1">
                <input name="cnpj" onChange={props.change} onBlur={props.blur} type="text" className="input" placeholder=" "/>
                <div className="cut"></div>
                <label className="placeholder" htmlFor="firsname">CNPJ</label>
                <div className="error messageNaoValido">{props.message1}</div>
            </div>
            <div className="input-container ic1">
                <input name="empresa" onChange={props.change} onBlur={props.blur} type="text" className="input" placeholder=" "/>
                <div className="cut"></div>
                <label className="placeholder" htmlFor="firsname">Nome da Empresa</label>
                <div className="error messageNaoValido">{props.message2}</div>
            </div>
            <div className="input-container ic2">
            <input name="admissao" onChange={props.change} onBlur={props.blur} type="date" className="input" placeholder=" "/>
            <div className="cut"></div>
            <label className="placeholder" htmlFor="firsname">Data de Admissão</label>
            <div className="error messageNaoValido">{props.message3}</div>
            </div>
        </div>
    )
}

export {Aposentado, Assalariado, Empresario}