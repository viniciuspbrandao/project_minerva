import style from './Contato.module.css'

function Contato() {
  return (
    <div className={style.card}>
      <h2>Fale Conosco</h2>
      <div>
        <p>Envie um email para:</p>
        <p>contato@minervarecode.com</p>
      </div>
    </div>
  )
}

export default Contato
