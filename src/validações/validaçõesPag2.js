
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
    const lowCase = value.search(RegExp('[a-z]')) > -1
    const upperCase = value.search(RegExp('[A-Z]')) > -1

    if(!lowCase && !upperCase && value !== '') {
        return true
    }else {
        return false
    }

}

function emissao(value){
    if(value === '') {
        return false
    }else {
        return true
    }
}

function naturalidade(value) {
    const temNumero = value.search(RegExp('[0-9]')) > -1
    const temCaract = value.search(RegExp('[.!@#$%^&*()-+]')) > -1

    if(!temCaract && !temNumero) {
        return true
    }else {
        return false
    }
}

function email(value){
    const temCaract = value.search('@') > -1
    const pontoCom = value.search('.com') > -1
    if(value !== '' && temCaract && pontoCom) {
        return true
    } else {
        return false
    }
}

export { nome, rg, emissao, naturalidade, email }