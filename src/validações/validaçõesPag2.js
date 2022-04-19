
function nome(value){
    const temNumero = value.search(RegExp('[0-9]')) > -1
    const temCaract = value.search(RegExp('[.!@#$%^&*()-+]')) > -1
    const temEspaço = value.search(RegExp('[ ]')) > -1
    if(temNumero || temCaract){
        return false
    }
    if(!temEspaço) {
        return false
    }

    return true
}

function rg(value) {
    return true
}
export { nome, rg }