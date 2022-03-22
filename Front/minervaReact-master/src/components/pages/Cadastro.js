function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault()
    console.log('Cadastrou o usuário!')
  }
  return (
    <div>
      <h1>Cadastre se:</h1>
      <form onSubmit={cadastrarUsuario}>
        <div>
          <input type="text" placeholder="Nome completo" />
        </div>
        <div>
          <input type="text" placeholder="Email" />
        </div>
        <div>
          <input type="text" placeholder="Digite o que Procura" />
        </div>
        <div>
          <input type="text" placeholder="Digite o que Vende" />
        </div>
        <div>
          <input type="text" placeholder="Cadastre sua senha" />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  )
}

export default Form
