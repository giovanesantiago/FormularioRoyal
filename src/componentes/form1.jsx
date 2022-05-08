import React from "react"
import { ReactDOM } from "react"
import style from "../css/style.css"
import { cpf, tel, nasc, entrada } from "../validações/validaçõesPag1"
import { nome, rg, emissao, naturalidade, email } from "../validações/validaçõesPag2"
import { cnpj } from "../validações/validaçõesPag3"
import {Aposentado, Assalariado, Empresario} from "./cargos/cargos"



class Form1 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            /* pagina 1  */
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
            /* pagina 2 */
            nome: '',
            messageNoValidoNOME: '',
            genero: '',
            messageNoValidoGENERO: '',
            rg: '',
            messageNoValidoGENERO: '',
            emissao: '',
            messageNoValidoEMISSAO: '',
            ufdoc: '',
            messageNoValidoUFDOC: '',
            uf: '',
            messageNoValidoUF: '',
            naturalidade: '',
            messageNoValidoNATURALIDADE: '',
            email: '',
            messageNoValidoEMAIL: '',
            mae: '',
            messageNoValidoMAE: '',
            pai: '',
            messageNoValidoPAI: '',
            /* pagina 3 */
            cargo: '',
            messageNoValidoCARGO: '',
            profissao: '',
            messageNoValidoPROFISSAO: '',
            instituicao: '',
            messageNoValidoINSTITUICAO: '',
            cnpj: '',
            messageNoValidoCNPJ: '',
            empresa: '',
            messageNoValidoEMPRESA: '',
            admissao: '',
            messageNoValidoADMISSAO: '',
            estadoCargo: [],
            telcomercial: '',
            messageNoValidoTELCOMERCIAL: '',
            renda: '',
            messageNoValidoRENDA: '',
            
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
        /* Pagina 2 */
        if(name === 'nome'){
            if(nome(value)){
                this.setState({messageNoValidoNOME: ''})
            }else{
                this.setState({messageNoValidoNOME: 'NOME INVALIDO'})
            }
        }
        if(name === 'genero') {
            if(this.state.genero === '' || this.state.genero === 'selected' ){
                this.setState({messageNoValidoGENERO: 'ESCOLHA UMA OPÇÂO'})
            }else {
                this.setState({messageNoValidoGENERO: ''})
            }
        }
        if(name === 'rg'){
            if(rg(value)){
                this.setState({messageNoValidoRG: ''})
            }else {
                this.setState({messageNoValidoRG: 'RG INVALIDO'})
            }
        }
        if(name === 'emissao'){
            if(emissao(value)) {
                this.setState({messageNoValidoEMISSAO: ''})
            }else {
                this.setState({messageNoValidoEMISSAO: 'DATA INVALADA'})
            }
        }
        if(name === 'ufdoc'){
            if(this.state.ufdoc === '' || this.state.ufdoc === 'selected' ){
                this.setState({messageNoValidoUFDOC: 'ESCOLHA UMA OPÇÂO'})
            }else {
                this.setState({messageNoValidoUFDOC: ''})
            }
        }
        if(name === 'uf'){
            if(this.state.uf === '' || this.state.uf === 'selected' ){
                this.setState({messageNoValidoUF: 'ESCOLHA UMA OPÇÂO'})
            }else {
                this.setState({messageNoValidoUF: ''})
            }
        }
        if(name === 'naturalidade'){
            if(naturalidade(value) && value !== ''){
                this.setState({messageNoValidoNATURALIDADE: ''})
            }else{
                this.setState({messageNoValidoNATURALIDADE: 'NATURALIDADE INVALIDA'})
            }
        }
        if(name === 'email'){
            
            if(email(value)){
                this.setState({messageNoValidoEMAIL: ''})
            }else{
                this.setState({messageNoValidoEMAIL: 'EMAIL INVALIDO'})
            }
        }
        if(name === 'mae'){
            if(nome(value)){
                this.setState({messageNoValidoMAE: ''})
            }else{
                this.setState({messageNoValidoMAE: 'NOME INVALIDO'})
            }
        }
        if(name === 'pai'){
            if(nome(value)){
                this.setState({messageNoValidoPAI: ''})
            }else{
                this.setState({messageNoValidoPAI: 'NOME INVALIDO'})
            }
        }
        /* Pagina 3 */
        if(name === 'cargo') {
            if(this.state.cargo === '' || this.state.cargo === 'selected' ){
                this.setState({messageNoValidoCARGO: 'ESCOLHA UMA OPÇÂO'})
                this.setState({estadoCargo: []})
            }else if(this.state.cargo === 'aposentado') {
                this.setState({messageNoValidoCARGO: ''})
                this.setState({estadoCargo: [<Aposentado change={this.handleOnChange} blur={this.handleOnblur} message={this.state.messageNoValidoINSTITUICAO}/>]})
            }else if(this.state.cargo === 'assalariado') {
                this.setState({estadoCargo: [<Assalariado change={this.handleOnChange} blur={this.handleOnblur} message1={this.state.messageNoValidoEMPRESA} message2={this.state.messageNoValidoADMISSAO}/>]})
                this.setState({messageNoValidoCARGO: ''})
            }else if(this.state.cargo === 'empresario') {
                this.setState({estadoCargo: [<Empresario change={this.handleOnChange} blur={this.handleOnblur} message1={this.state.messageNoValidoCNPJ} message2={this.state.messageNoValidoEMPRESA} message3={this.state.messageNoValidoADMISSAO}/>]})
                this.setState({messageNoValidoCARGO: ''})
            }else if(this.state.cargo === 'funcionariopublico') {
                this.setState({estadoCargo: [<Assalariado change={this.handleOnChange} blur={this.handleOnblur} message1={this.state.messageNoValidoEMPRESA} message2={this.state.messageNoValidoADMISSAO}/>]})
                this.setState({messageNoValidoCARGO: ''})
            }
        }
        if(name === 'profissao'){
            if(this.state.profissao === ''){
                this.setState({messageNoValidoPROFISSAO: 'PROFISSÃO INVALIDA'})
            }else {
                this.setState({messageNoValidoPROFISSAO: ''})
            }
        }
        if(name === 'instituicao'){
            if(this.state.instituicao === ''){
                this.setState({messageNoValidoINSTITUICAO: 'INSTITUIÇÃO INVALIDA'})  
            }else {
                console.log(this.state.instituicao)
                this.setState({messageNoValidoINSTITUICAO: ''})
            }
        }
        if(name === 'empresa'){
            if(this.state.empresa === ''){
                this.setState({messageNoValidoEMPRESA: 'EMPRESA INVALIDA'})  
            }else {
                this.setState({messageNoValidoEMPRESA: ''})
            }
        }
        if(name === 'admissao'){
            if(this.state.admissao === ''){
                this.setState({messageNoValidoADMISSAO: 'ADMISSAO INVALIDA'})  
            }else {
                this.setState({messageNoValidoADMISSAO: ''})
            }
        }
        if(name === 'cnpj') {
            if (cnpj(value)) {
                this.setState({messageNoValidoCNPJ: ''})
                console.log('ok')
            }else {
                this.setState({messageNoValidoCNPJ: 'CPF INVALIDO'}) 
                console.log('nao ok')
            } 
        }
        if(name === 'telcomercial') {
            
            if(tel(value)){
                this.setState({messageNoValidoTELCOMERCIAL: ''})
            }else{
                this.setState({messageNoValidoTELCOMERCIAL: 'TELEFONE INVALIDO'})
            }
        }
        if(name === 'renda'){
            if(entrada(value)){
                this.setState({messageNoValidoRENDA: ''})
            }else{
                this.setState({messageNoValidoRENDA: 'RENDA INVALIDA'})
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
        /* Pagina 2 */
        if(name === 'nome'){
            if(nome(value)){
                this.setState({messageNoValidoNOME: ''})
                this.setState({[name]: value})
                console.log(value)
            }else{
                this.setState({[name]: ''})
            }
        }
        if(name === 'genero') {
            this.setState({[name]: value})
            console.log(value)
        }
        if(name === 'rg'){
            if(rg(value)){
                this.setState({messageNoValidoRG: ''})
                this.setState({[name]: value})
                console.log(value)
            }else{
                this.setState({[name]: ''})
            }
        }
        if(name === 'emissao'){
            if(emissao(value)){
                this.setState({messageNoValidoEMISSAO: ''})
                this.setState({[name]: value})
                console.log(value)
            }else{
                this.setState({[name]: ''})
            }
        }
        if(name === 'ufdoc'){
            this.setState({[name]: value})
        }
        if(name === 'uf'){
            this.setState({[name]: value})
        }
        if(name === 'naturalidade'){
            if(naturalidade(value)){
                this.setState({messageNoValidoNATURALIDADE: ''})
                this.setState({[name]: value})
                console.log(value)
            }else{
                this.setState({[name]: ''})
            }
        }
        if(name === 'email'){
            if(email(value)){
                this.setState({messageNoValidoEMAIL: ''})
                this.setState({[name]: value})
                console.log(value)
            }else{
                this.setState({[name]: ''})
            }
        }
        if(name === 'mae'){
            if(nome(value)){
                this.setState({messageNoValidoMAE: ''})
                this.setState({[name]: value})
                console.log(value)
            }else{
                this.setState({[name]: ''})
            }
        }
        if(name === 'pai'){
            if(nome(value)){
                this.setState({messageNoValidoPAI: ''})
                this.setState({[name]: value})
                console.log(value)
            }else{
                this.setState({[name]: ''})
            }
        }
        /* PAGINA 3 */
        if(name === 'cargo') {
            this.setState({[name]: value})
            console.log(value)
        }
        if(name === 'profissao') {
            this.setState({[name]: value})
            console.log(value)
        }
        if(name === 'instituicao') {
            this.setState({[name]: value})
            console.log(value)
        }
        if(name === 'empresa') {
            this.setState({[name]: value})
            console.log(value)
        }
        if(name === 'admissao') {
            this.setState({[name]: value})
            console.log(value)
        }
        if(name === 'cnpj') {
            if (cnpj(value)) {
                this.setState({messageNoValidoCNPJ: ''})
                this.setState({[name]: value})
            }else {
                this.setState({[name]: ''}) 
            } 
        }
        if(name === 'telcomercial') {
            
            if(tel(value)){
                this.setState({[name]: value})
                this.setState({messageNoValidoTEL: ''})
            }else{
                this.setState({[name]: ''})
            }
        }
        if(name === 'renda'){
            if(entrada(value)){
                this.setState({messageNoValidoRENDA: ''})
                this.setState({[name]: value})
            }else{
                this.setState({[name]: ''})
                
            }
        }

    }

    handleSubmitProx(e) {
        console.log(this.state)
        
        /* pagina 1 */
       /*  if(this.state.cpf !== ''){
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
        } */
        e.preventDefault()
    }
    handleSubmitEnv(e) {
        
        alert(this.state)
        e.preventDefault()
    }

    

    render() {
        return (
            <div>
                {/* Pagina1 */}
                <form id="form1" onSubmit={this.handleSubmitProx} className="form form1">
                    <div className="title">Ola,</div>
                    <div className="subtitle">Preencha os dados abaixo :</div>
                    {/* CPF */}
                   <div className="input-container ic1 cpf">
                       <input name="cpf" onChange={this.handleOnChange} onBlur={this.handleOnblur} type="text" className="input" placeholder=" "/>
                       <div className="cut"></div>
                       <label className="placeholder" htmlFor="firsname">CPF</label>
                       <div className="error">{this.state.messageNoValidoCPF}</div>
                   </div>
                   {/* TELEFONE */}
                   <div className="input-container ic2">
                       <input name="telefone" onChange={this.handleOnChange} onBlur={this.handleOnblur} type="text" className="input" placeholder=" "/>
                       <div className="cut"></div>
                       <label className="placeholder" htmlFor="firsname">Telefone</label>
                       <div className="error">{this.state.messageNoValidoTEL}</div>
                   </div>
                   {/* DATA DE NASCIMENTO */}
                   <div className="input-container ic2">
                       <input name="nasc" onChange={this.handleOnChange} onBlur={this.handleOnblur} type="date" className="input" placeholder=" "/>
                       <div className="cut"></div>
                       <label className="placeholder" htmlFor="firsname">Data de nascimento</label>
                       <div className="error messageNaoValido">{this.state.messageNoValidoNASC}</div>
                   </div>
                   {/* MOTO */}
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
                   {/* ENTRADA */}
                   <div className="input-container ic2">
                       <input name="entrada" onChange={this.handleOnChange} onBlur={this.handleOnblur} type="text" className="input" placeholder=" "/>
                       <div className="cut"></div>
                       <label className="placeholder" htmlFor="firsname">Entrada</label>
                       <div className="error messageNaoValido">{this.state.messageNoValidoENTRADA}</div>
                   </div>
                   {/* PRAZO */}
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
                    <div className="subtitle">Vamos continuar ...</div>
                    {/* NOME */}
                   <div className="input-container ic1">
                       <input name="nome" onChange={this.handleOnChange} onBlur={this.handleOnblur} type="text" className="input" placeholder=" "/>
                       <div className="cut"></div>
                       <label className="placeholder" htmlFor="firsname">Nome Completo</label>
                       <div className="error">{this.state.messageNoValidoNOME}</div>
                   </div>
                   {/* GENERO */}
                   <div className="input-container ic2">
                       <select name="genero" id="" onChange={this.handleOnChange} onBlur={this.handleOnblur}  className="input" placeholder=" ">
                           <option value="selected"></option>
                           <option value="Masculino">Masculino</option>
                           <option value="Femenino">Feminino</option>
                       </select>
                       <div className="cut"></div>
                       <label className="placeholder" htmlFor="firsname">Genero</label>
                       <div className="error messageNaoValido">{this.state.messageNoValidoGENERO}</div>
                   </div>
                   {/* RG */}
                   <div className="input-container ic1">
                       <input name="rg" onChange={this.handleOnChange} onBlur={this.handleOnblur} type="text" className="input" placeholder=" "/>
                       <div className="cut"></div>
                       <label className="placeholder" htmlFor="firsname">RG</label>
                       <div className="error">{this.state.messageNoValidoRG}</div>
                   </div>
                   {/* DATA DE EMISSAO */}
                   <div className="input-container ic2">
                       <input name="emissao" onChange={this.handleOnChange} onBlur={this.handleOnblur} type="date" className="input" placeholder=" "/>
                       <div className="cut"></div>
                       <label className="placeholder" htmlFor="firsname">Data de emissão</label>
                       <div className="error messageNaoValido">{this.state.messageNoValidoEMISSAO}</div>
                   </div>
                   {/* UF Documento */}
                   <div className="input-container ic2">
                       <select name="ufdoc" onChange={this.handleOnChange} onBlur={this.handleOnblur}  className="input" placeholder=" ">
                           <option value="selected"></option>
                           <option value="AC">Acre - AC</option>
                           <option value="AL">Alagoas - AL</option>
                           <option value="AM">Amazonas- AM</option>
                           <option value="AP">Amapá - AP</option>
                           <option value="BA">Bahia - BA</option>
                           <option value="CE">Cearà - CE</option>
                           <option value="DF">Distrito Federal - DF</option>
                           <option value="ES">Espírito Santo - ES</option>
                           <option value="GO">Goias - GO</option>
                           <option value="MA">Maranhão- MA</option>
                           <option value="MG">Minas Gerais - MG</option>
                           <option value="MS">Mato Grosso do Sul - MS</option>
                           <option value="MT">Mato Grosso - MT</option>
                           <option value="PA">Pará - PA</option>
                           <option value="PR">Paraíba - PR</option>
                           <option value="PE">Pernambuco - PE</option>
                           <option value="PR">Paraná - PR</option>
                           <option value="RJ">Rio de Janeiro - RJ</option>
                           <option value="RN">Rio Grande do Norte - RN</option>
                           <option value="RO">Rondônia - RO</option>
                           <option value="RR">Roraima - RR</option>
                           <option value="RS">Rio Grande do Sul - RS</option>
                           <option value="SC">Santa Catarina - SC</option>
                           <option value="SE">Sergipe - SE</option>
                           <option value="SP">São Paulo - SP </option>
                           <option value="TO">Tocantins - TO</option>
                       </select>
                       <div className="cut"></div>
                       <label className="placeholder" htmlFor="firsname">UF Documento</label>
                       <div className="error messageNaoValido">{this.state.messageNoValidoUFDOC}</div>
                   </div>
                   {/* UF */}
                   <div className="input-container ic2">
                       <select name="uf" onChange={this.handleOnChange} onBlur={this.handleOnblur}  className="input" placeholder=" ">
                           <option value="selected"></option>
                           <option value="AC">AC</option>
                           <option value="AL">AL</option>
                           <option value="AM">AM</option>
                           <option value="AP">AP</option>
                           <option value="BA">BA</option>
                           <option value="CE">CE</option>
                           <option value="DF">DF</option>
                           <option value="ES">ES</option>
                           <option value="GO">GO</option>
                           <option value="MA">MA</option>
                           <option value="MG">MG</option>
                           <option value="MS">MS</option>
                           <option value="MT">MT</option>
                           <option value="PA">PA</option>
                           <option value="PR">PR</option>
                           <option value="PE">PE</option>
                           <option value="PR">PR</option>
                           <option value="RJ">RJ</option>
                           <option value="RN">RN</option>
                           <option value="RO">RO</option>
                           <option value="RR">RR</option>
                           <option value="R$">RS</option>
                           <option value="SC">SC</option>
                           <option value="SE">SE</option>
                           <option value="SP">SP </option>
                           <option value="TO">TO</option>
                       </select>
                       <div className="cut"></div>
                       <label className="placeholder" htmlFor="firsname">UF</label>
                       <div className="error messageNaoValido">{this.state.messageNoValidoUF}</div>
                   </div>
                   {/* NATURALIDADE */}
                   <div className="input-container ic1">
                       <input name="naturalidade" onChange={this.handleOnChange} onBlur={this.handleOnblur} type="text" className="input" placeholder=" "/>
                       <div className="cut"></div>
                       <label className="placeholder" htmlFor="firsname">Naturalidade</label>
                       <div className="error">{this.state.messageNoValidoNATURALIDADE}</div>
                   </div>
                   {/* email */}
                   <div className="input-container ic1">
                       <input name="email" onChange={this.handleOnChange} onBlur={this.handleOnblur} type="text" className="input" placeholder=" "/>
                       <div className="cut"></div>
                       <label className="placeholder" htmlFor="firsname">Email</label>
                       <div className="error">{this.state.messageNoValidoEMAIL}</div>
                   </div>
                   {/* mae */}
                   <div className="input-container ic1">
                       <input name="mae" onChange={this.handleOnChange} onBlur={this.handleOnblur} type="text" className="input" placeholder=" "/>
                       <div className="cut"></div>
                       <label className="placeholder" htmlFor="firsname">Nome da Mãe</label>
                       <div className="error">{this.state.messageNoValidoMAE}</div>
                   </div>
                   {/* pai */}
                   <div className="input-container ic1">
                       <input name="pai" onChange={this.handleOnChange} onBlur={this.handleOnblur} type="text" className="input" placeholder=" "/>
                       <div className="cut"></div>
                       <label className="placeholder" htmlFor="firsname">Nome da Pai</label>
                       <div className="error">{this.state.messageNoValidoPAI}</div>
                   </div>
                   <button type="submit" className="submit">Proximo</button>
                </form>
                {/* Pagina 3 */}
                <form id="form3" onSubmit={this.handleSubmitProx} className="form form3">
                    <div className="subtitle">Agora preencha seus dados profissionais...</div>
                    {/* cargo */}
                    <div className="input-container ic2">
                       <select name="cargo" id="cargo" onChange={this.handleOnChange} onBlur={this.handleOnblur}  className="input" placeholder=" ">
                           <option value="selected"></option>
                           <option value="aposentado">Aposentado</option>
                           <option value="assalariado">Assalariado</option>
                           <option value="autonomo">Autônomo</option>
                           <option value="funcionariopublico">Funcionário Público</option>
                           <option value="produtorrural">Produtor Rural</option>
                           <option value="profissionalliberal">Profissional Liberal</option>
                           <option value="empresario">Empresário</option>
                           <option value="outros">Outros</option>
                       </select>
                       <div className="cut"></div>
                       <label className="placeholder" htmlFor="firsname">Cargo</label>
                       <div className="error messageNaoValido">{this.state.messageNoValidoCARGO}</div>
                   </div>
                   {/* Profissão */}
                   <div className="input-container ic1">
                       <input name="profissao" onChange={this.handleOnChange} onBlur={this.handleOnblur} type="text" className="input" placeholder=" "/>
                       <div className="cut"></div>
                       <label className="placeholder" htmlFor="firsname">Profissão</label>
                       <div className="error">{this.state.messageNoValidoPROFISSAO}</div>
                   </div>
                   <div>{this.state.estadoCargo[0]}</div>
                   {/* TELEFONE COMERCIAL */}
                   <div className="input-container ic2">
                       <input name="telcomercial" onChange={this.handleOnChange} onBlur={this.handleOnblur} type="text" className="input" placeholder=" "/>
                       <div className="cut"></div>
                       <label className="placeholder" htmlFor="firsname">Telefone Comercial</label>
                       <div className="error">{this.state.messageNoValidoTELCOMERCIAL}</div>
                   </div>
                   {/* RENDA */}
                   <div className="input-container ic2">
                       <input name="renda" onChange={this.handleOnChange} onBlur={this.handleOnblur} type="text" className="input" placeholder=" "/>
                       <div className="cut"></div>
                       <label className="placeholder" htmlFor="firsname">Renda</label>
                       <div className="error messageNaoValido">{this.state.messageNoValidoRENDA}</div>
                   </div>                  
                   <button type="submit" className="submit">Proximo</button>
                </form>
            </div>
        )
    }
}

export default Form1