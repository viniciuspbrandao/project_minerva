import style from './Cadastro.module.css'

function Form() {
  function cadastrarUsuario(e) {
    e.preventDefault()
    console.log('Cadastro concluido com sucesso!')
  }

  return (
    <div className={style.card}>
      <h1 className={style.titulo}>Cadastre se:</h1>

      <form onSubmit={cadastrarUsuario}>
        <fieldset className={style.grupo}>
          <div className={style.campo}>
            <label>Nome Completo:</label>
            <input type="text" placeholder="" />
          </div>
          <div className={style.campo}>
            <label>E-mail:</label>
            <input type="email" placeholder="" />
          </div>
          <br />
        </fieldset>

        {/* ==================== Seletor TIPO DE CADASTRO Abre ================*/}
        <div className={style.campo}>
          <label>Cadastrar como: </label>
          <select id="CadastrarComo">
            <option value="" key="">
              Selecione
            </option>
            <option value="" key="">
              Vendedora
            </option>
            <option value="" key="">
              Compradora
            </option>
          </select>
        </div>
        {/* ==================== Seletor TIPO DE CADASTRO Fecha ================*/}

        {/* ==================== Seletor PRODUTO Abre ================*/}
        <div className={style.campo}>
          <label>Tipo de produto ou serviço: </label>
          <select id="produtoOuServico">
            <option value="" key="">
              Selecione
            </option>
            <option value="" key="">
              Digital
            </option>
            <option value="" key="">
              Fisico
            </option>
          </select>
        </div>
        {/* ==================== Seletor PRODUTO Fecha ================*/}

        <div className={style.campo}>
          <input type="text" placeholder="Cadastre sua senha" />
        </div>
        <div className={style.botao}>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  )
}

export default Form
