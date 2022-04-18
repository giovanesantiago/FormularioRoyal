// Validação Pagina 1
 function cpf(value) {
    const cpf = value.replace(/[^0-9]/g, '')
    
   function TestaCPF(strCPF) { //teste de validação da receita
        var Soma;
        var Resto;
        Soma = 0;
      if (strCPF == "00000000000") return false;
    
      for (let i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;
    
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
    
      Soma = 0;
        for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;
    
        if ((Resto == 10) || (Resto == 11))  Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
        return true;
    }
    const cpfvalidoreceita = TestaCPF(cpf) 
    // condiçoes
    
    if(!cpfvalidoreceita){
        return false
    }else {
        return true
    }
}

function tel(value) {
    const telefone = value.replace(/[^0-9]/g, '')
    var regex = new RegExp('^[0-9]{2}((3[0-9]{7})|(9[0-9]{8}))$');
    return regex.test(telefone)

}

function nasc(value) {
   const data = value
   const ano = parseInt(data.slice(0, 4)) 
   const dataAtual = new Date()
   const anoAtual = dataAtual.getFullYear()

   if(anoAtual - ano > 18) {
       return true
   }else{
       return false
   }
   /* console.log(`ano : ${ano}`) */
}

function entrada(value) {
    const lowCase = value.search(RegExp('[a-z]')) > -1
    const upperCase = value.search(RegExp('[A-Z]')) > -1
    const temCaract = value.search(RegExp('[!@#$%^&*()-+]')) > -1
    
    if(!lowCase) {
        if(!upperCase){
            if(!temCaract){
                if(value > 1500) {
                    return true
                }
            }
        }
    }else{
        return false
    }
}


export {cpf, tel, nasc, entrada }

