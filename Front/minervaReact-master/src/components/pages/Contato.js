import style from './Contato.module.css'

function Contato() {
  return (
    <div className={style.card}>
      <h1>Fale Conosco</h1>
      <div className={style.textoSecundario}>
        <p>Envie um email para:</p>
        <p>contato@minervarecode.com</p>
      </div>
    </div>
  )
}

export default Contato
