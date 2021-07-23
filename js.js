function checa_formulario(form) {
  var mensagem = document.getElementById('mensagem')
  var invalid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/ //espressão regular
  var email = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

  caixa_nome = document.querySelector('.msg-nome')
  caixa_nome.style.display = 'none' //desabilita a propriedade no HTML

  caixa_email = document.querySelector('.msg-email')
  caixa_email.style.display = 'none'

  caixa_tel = document.querySelector('.msg-tel')
  caixa_tel.style.display = 'none'

  if (form.name.value.length < 5) {
    //estamos validando pela propriedade 'name' do formulário
    caixa_nome.innerHTML = 'Favor preencher o nome'
    caixa_nome.style.display = 'block' //habilita o campo

    //alert('Digite o nome completo')
    form.name.focus()
    return false
  }

  if (form.email.value == '') {
    caixa_email.innerHTML = 'Favor preencher o email'
    caixa_email.style.display = 'block'

    //alert('E-mail não informado')
    form.email.focus()
    return false
  }

  if (invalid.test(form.email.value) == false) {
    caixa_email.innerHTML = 'Favor preencher o email válido'
    caixa_email.style.display = 'block'

    //alert('Endereço de e-mail inválido')
    form.email.focus()
    return false
  }

  if (form.tel.value == '') {
    caixa_tel.innerHTML = 'Favor preencher o telefone'
    caixa_tel.style.display = 'block'
    //alert('Telefone não informado')
    form.tel.focus()
    return false
  }
}
