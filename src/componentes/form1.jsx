import React from "react"
import { ReactDOM } from "react"
import style from "../css/style.css"
import { cpf, tel, nasc, entrada } from "../validações/validaçõesPag1"



class Form1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cpf: '',
            messageNoValidoCPF: '',
            telefone: '',
            messageNoValidoTEL: '',
            nasc: '',
            messageNoValidoNASC: '',
            moto: '',
            messageNoValidoMOTO: '',
            entrada: '',
            messageNoValidoENTRADA: '',
            prazo: '', 
            messageNoValidoPRAZO: '',
        }

        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnblur = this.handleOnblur.bind(this)
        this.handleSubmitProx = this.handleSubmitProx.bind(this)
        this.handleSubmitEnv = this.handleSubmitEnv.bind(this)

    }

    handleOnblur(e) {
        const target = e.target
        const name = target.name
        const value = target.value
        /* Pagina 1 */
        if(name === 'cpf') {
            if (cpf(value)) {
                this.setState({messageNoValidoCPF: ''})
            }else {
                this.setState({messageNoValidoCPF: 'CPF INVALIDO'}) 
            } 
        }
        if(name === 'telefone') {
            
            if(tel(value)){
                this.setState({messageNoValidoTEL: ''})
            }else{
                this.setState({messageNoValidoTEL: 'TELEFONE INVALIDO'})
            }
        }
        if(name === 'nasc') {
            if(nasc(value)){
                 this.setState({messageNoValidoNASC: ''})
            }else{
                 this.setState({messageNoValidoNASC: 'DATA INVALIDA'})
            }
             
        }
        if(name === 'moto'){
            if(this.state.moto === '' || this.state.moto === 'selected' ){
                this.setState({messageNoValidoMOTO: 'ESCOLHA UMA OPÇÂO'})
            }else {
                this.setState({messageNoValidoMOTO: ''})
            }
        }
        if(name === 'entrada'){
            if(entrada(value)){
                this.setState({messageNoValidoENTRADA: ''})
            }else{
                this.setState({messageNoValidoENTRADA: 'ENTRADA INVALIDA'})
            }
        }
        if(name === 'prazo'){
            if(this.state.prazo === '' || this.state.prazo === 'selected' ){
                this.setState({messageNoValidoPRAZO: 'ESCOLHA UMA OPÇÂO'})
            }else {
                this.setState({messageNoValidoPRAZO: ''})
            }
        }
    }

    handleOnChange(e) {
        const target = e.target
        const name = target.name
        const value = target.value
        /* Pagina 1 */
        if(name === 'cpf') {
            
            if (cpf(value)) {
                this.setState({messageNoValidoCPF: ''})
                this.setState({[name]: value})
            }else {
                this.setState({[name]: ''}) 
            } 
        }
        if(name === 'telefone') {
            
            if(tel(value)){
                this.setState({[name]: value})
                this.setState({messageNoValidoTEL: ''})
            }else{
                this.setState({[name]: ''})
            }
        }
        if(name === 'nasc') {
           if(nasc(value)){
                this.setState({messageNoValidoNASC: ''})
               this.setState({[name]: value})
           }else{
                this.setState({[name]: ''})
                this.setState({messageNoValidoNASC: 'DATA INVALIDA'})
           }
            
        }
        if(name === 'moto'){
            this.setState({[name]: value})  
        }
        if(name === 'entrada'){
            if(entrada(value)){
                this.setState({messageNoValidoENTRADA: ''})
                this.setState({[name]: value})
            }else{
                this.setState({[name]: ''})
                
            }
        }
        if(name === 'prazo'){
            this.setState({[name]: value})
        }

    }
    handleSubmitProx(e) {
        console.log(this.state)
        /* pagina 1 */
        if(this.state.cpf !== ''){
            if(this.state.telefone !== ''){
                if(this.state.nasc !== ''){
                    if(this.state.moto !== ''){
                        if(this.state.entrada !== ''){
                            if(this.state.prazo !== ''){
                                window.location.href = "#form2"
                            }else{
                                alert('Cadastro Invalido, verifique informações')
                            }
                        }else{
                            alert('Cadastro Invalido, verifique informações')
                        }
                    }else{
                        alert('Cadastro Invalido, verifique informações')
                    }
                }else{
                    alert('Cadastro Invalido, verifique informações')
                }
            }else{
                alert('Cadastro Invalido, verifique informações')
            }
        }else{
            alert('Cadastro Invalido, verifique informações')
        }
        e.preventDefault()
    }
    handleSubmitEnv(e) {
        const { cpf, telefone, nasc, moto, entrada, prazo } = this.state
        alert(`CPF : ${cpf} , telefone : ${telefone}, nascimento : ${nasc}, Moto, ${moto} Entrada: ${entrada}, Prazo : ${prazo}`)
        e.preventDefault()
    }

    

    render() {
        return (
            <div>
                {/* Pagina1 */}
                <form id="form1" onSubmit={this.handleSubmitProx} className="form form1">
                    <div className="title">Ola,</div>
                    <div className="subtitle">Preencha os dados abaixo :</div>
                   <div className="input-container ic1 cpf">
                       <input name="cpf" onChange={this.handleOnChange} onBlur={this.handleOnblur} type="text" className="input" placeholder=" "/>
                       <div className="cut"></div>
                       <label className="placeholder" htmlFor="firsname">CPF</label>
                       <div className="error">{this.state.messageNoValidoCPF}</div>
                   </div>
                   <div className="input-container ic2">
                       <input name="telefone" onChange={this.handleOnChange} onBlur={this.handleOnblur} type="text" className="input" placeholder=" "/>
                       <div className="cut"></div>
                       <label className="placeholder" htmlFor="firsname">Telefone</label>
                       <div className="error">{this.state.messageNoValidoTEL}</div>
                   </div>
                   <div className="input-container ic2">
                       <input name="nasc" onChange={this.handleOnChange} onBlur={this.handleOnblur} type="date" className="input" placeholder=" "/>
                       <div className="cut"></div>
                       <label className="placeholder" htmlFor="firsname">Data de nascimento</label>
                       <div className="error messageNaoValido">{this.state.messageNoValidoNASC}</div>
                   </div>
                   <div className="input-container ic2">
                       <select name="moto" id="" onChange={this.handleOnChange} onBlur={this.handleOnblur}  className="input" placeholder=" ">
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
                       <div className="error messageNaoValido">{this.state.messageNoValidoMOTO}</div>
                   </div>
                   <div className="input-container ic2">
                       <input name="entrada" onChange={this.handleOnChange} onBlur={this.handleOnblur} type="text" className="input" placeholder=" "/>
                       <div className="cut"></div>
                       <label className="placeholder" htmlFor="firsname">Entrada</label>
                       <div className="error messageNaoValido">{this.state.messageNoValidoENTRADA}</div>
                   </div>
                   <div className="input-container ic2">
                       <select name="prazo" id=""onChange={this.handleOnChange} onBlur={this.handleOnblur}  className="input" placeholder=" ">
                           <option value="selected"></option>
                           <option value="60">60x</option>
                           <option value="48">48x</option>
                           <option value="24">24x</option>
                           <option value="12">12x</option>
                       </select>
                       <div className="cut"></div>
                       <label className="placeholder" htmlFor="firsname">Prazo</label>
                       <div className="error messageNaoValido">{this.state.messageNoValidoPRAZO}</div>
                       <button type="submit" className="submit">Proximo</button>
                   </div>
                
                </form>
                {/* Pagina2 */}
                <form id="form2" onSubmit={this.handleSubmitProx} className="form form2">
                    <div className="title">Ola,</div>
                    <div className="subtitle">Preencha os dados abaixo :</div>
                   <div className="input-container ic1 cpf">
                       <input name="cpf" onChange={this.handleOnChange} onBlur={this.handleOnblur} type="text" className="input" placeholder=" "/>
                       <div className="cut"></div>
                       <label className="placeholder" htmlFor="firsname">CPF</label>
                       <div className="error">{this.state.messageNoValidoCPF}</div>
                   </div>
                   <div className="input-container ic2">
                       <input name="telefone" onChange={this.handleOnChange} onBlur={this.handleOnblur} type="text" className="input" placeholder=" "/>
                       <div className="cut"></div>
                       <label className="placeholder" htmlFor="firsname">Telefone</label>
                       <div className="error">{this.state.messageNoValidoTEL}</div>
                   </div>
                   <div className="input-container ic2">
                       <input name="nasc" onChange={this.handleOnChange} onBlur={this.handleOnblur} type="date" className="input" placeholder=" "/>
                       <div className="cut"></div>
                       <label className="placeholder" htmlFor="firsname">Data de nascimento</label>
                       <div className="error messageNaoValido">{this.state.messageNoValidoNASC}</div>
                   </div>
                   <div className="input-container ic2">
                       <select name="moto" id="" onChange={this.handleOnChange} onBlur={this.handleOnblur}  className="input" placeholder=" ">
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
                       <div className="error messageNaoValido">{this.state.messageNoValidoMOTO}</div>
                   </div>
                   <div className="input-container ic2">
                       <input name="entrada" onChange={this.handleOnChange} onBlur={this.handleOnblur} type="text" className="input" placeholder=" "/>
                       <div className="cut"></div>
                       <label className="placeholder" htmlFor="firsname">Entrada</label>
                       <div className="error messageNaoValido">{this.state.messageNoValidoENTRADA}</div>
                   </div>
                   <div className="input-container ic2">
                       <select name="prazo" id=""onChange={this.handleOnChange} onBlur={this.handleOnblur}  className="input" placeholder=" ">
                           <option value="selected"></option>
                           <option value="60">60x</option>
                           <option value="48">48x</option>
                           <option value="24">24x</option>
                           <option value="12">12x</option>
                       </select>
                       <div className="cut"></div>
                       <label className="placeholder" htmlFor="firsname">Prazo</label>
                       <div className="error messageNaoValido">{this.state.messageNoValidoPRAZO}</div>
                       <button type="submit" className="submit">Proximo</button>
                   </div>
                
                </form>
            </div>
        )
    }
}

export default Form1