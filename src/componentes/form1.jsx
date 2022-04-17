import React from "react"
import style from "../css/style.css"
import { cpf, tel, nasc, entrada } from "../validações/validações"


class Form1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cpf: '',
            telefone: '',
            nasc: '',
            moto: '',
            entrada: '',
            prazo: '',
        }

        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleSubmitProx = this.handleSubmitProx.bind(this)
        this.handleSubmitEnv = this.handleSubmitEnv.bind(this)
    }

    handleOnChange(e) {
        const target = e.target
        const name = target.name
        const value = target.value
        console.log(name)
        if(name === 'cpf') {
            if (cpf(value)) {
                console.log('cpf valido')
                this.setState({[name]: value})
            }else {
                console.log('cpf invalido')
            } 
        }
        if(name === 'telefone') {
            
            if(tel(value)){
                console.log('Telefone Valido')
                this.setState({[name]: value})
            }else{
                console.log('Telefone Invalido')
            }
        }
        if(name === 'nasc') {
           if(nasc(value)){
               console.log('Data valida')
               this.setState({[name]: value})
           }else{
                console.log('Data invalida')
           }
            
        }
        if(name === 'moto'){
            this.setState({[name]: value})
        }
        if(name === 'entrada'){
            if(entrada(value)){
                console.log('Entrada Valida')
                this.setState({[name]: value})
            }else{
                console.log('Entrada Invalida')
            }
        }
        if(name === 'prazo'){
            this.setState({[name]: value})
        }

    }
    handleSubmitProx(e) {

    }
    handleSubmitEnv(e) {
        const { cpf, telefone, nasc, moto, entrada, prazo } = this.state
        alert(`CPF : ${cpf} , telefone : ${telefone}, nascimento : ${nasc}, Moto, ${moto} Entrada: ${entrada}, Prazo : ${prazo}`)
        e.preventDefault()
    }

    

    render() {
        return (
            <form onSubmit={this.handleSubmitEnv} className="form">
                <div className="title">Ola,</div>
                <div className="subtitle">Preencha os dados abaixo :</div>
               <div className="input-container ic1">
                   <input name="cpf" onChange={this.handleOnChange} type="text" className="input" placeholder=" "/>
                   <div className="cut"></div>
                   <label className="placeholder" htmlFor="firsname">CPF</label>
               </div>
               <div className="input-container ic2">
                   <input name="telefone" onChange={this.handleOnChange} type="text" className="input" placeholder=" "/>
                   <div className="cut"></div>
                   <label className="placeholder" htmlFor="firsname">Telefone</label>
               </div>
               <div className="input-container ic2">
                   <input name="nasc" onChange={this.handleOnChange} type="date" className="input" placeholder=" "/>
                   <div className="cut"></div>
                   <label className="placeholder" htmlFor="firsname">Data de nascimento</label>
               </div>
               <div className="input-container ic2">
                   <select name="moto" id="" onChange={this.handleOnChange}  className="input" placeholder=" ">
                       <option value="selected"></option>
                       <option value="Meteor 350 Fireball">Meteor 350 Fireball</option>
                       <option value="Meteor 350 Stellar">Meteor 350 Stellar</option>
                       <option value="Meteor 350 Supernova">Meteor 350 Supernova</option>
                       <option value="Himalayan">Himalayan 411</option>
                       <option value="Interceptor">Interceptor 650</option>
                       <option value="Continental">Continental 650</option>
                   </select>
                   <div className="cut"></div>
                   <label className="placeholder" htmlFor="firsname">Moto</label>
               </div>
               <div className="input-container ic2">
                   <input name="entrada" onChange={this.handleOnChange} type="text" className="input" placeholder=" "/>
                   <div className="cut"></div>
                   <label className="placeholder" htmlFor="firsname">Entrada</label>
               </div>
               <div className="input-container ic2">
                   <select name="prazo" id=""onChange={this.handleOnChange}  className="input" placeholder=" ">
                       <option value="selected"></option>
                       <option value="60">60x</option>
                       <option value="48">48x</option>
                       <option value="24">24x</option>
                       <option value="12">12x</option>
                   </select>
                   <div className="cut"></div>
                   <label className="placeholder" htmlFor="firsname">Prazo</label>
                   <button type="submit" className="submit">Proximo</button>
               </div>
            </form>
        )
    }
}

export default Form1