function checa_formulario(form) {
  var mensagem = document.getElementById('mensagem')
  //var email = document.getElementById('email')
  var invalid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/ //espressão regular

  caixa_nome = document.querySelector('.msg-nome')
  caixa_nome.style.display = 'none' //desabilita a propriedade no HTML

  if (form.name.value.length < 5) {
    //estamos validando pela propriedade 'name' do formulário
    caixa_nome.innerHTML = 'Favor preencher seu nome'
    caixa_nome.style.display = 'block' //habilita o campo

    //alert('Digite o nome completo')
    form.name.focus()
    return false
  }

  if (form.email.value == '') {
    //
    alert('E-mail não informado')
    email.focus()
    return false
  }

  if (invalid.test(form.email.value) == false) {
    alert('Endereço de e-mail inválido')
    form.email.focus()
    return false
  }

  if (form.tel.value == '') {
    //estamos validando pela propriedade 'Id' do html
    alert('Telefone não informado')
    tel.focus()
    return false
  }
}
