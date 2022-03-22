import style from './Sobre.module.css'
import store from '../img/bolsa.png'
import duvida from '../img/duvida.png'
import cartao from '../img//cartao.png'

function Sobre() {
  return (
    <section>
      <main>
        <div className={style.card}>
          <h1>O PROJETO</h1>

          <div className={style.projetoCard}>
            <picture>
              <img className={style.avatar} src={store} />
            </picture>
            <h2>Rede de apoio?! Já pensou como seria bom?</h2>
            <p>Pessoas iguais a você, com interesses em comum buscando ...</p>
          </div>
          <div className={style.projetoCard}>
            <picture>
              <img className={style.avatar} src={duvida} />
            </picture>
            <h2>Tentou encontrar, mas não conseguiu?</h2>
            <p>
              Nem sempre é fácil encontar o que precisamos e no momento que
              precisamos.
            </p>
          </div>
          <div className={style.projetoCard}>
            <picture>
              <img className={style.avatar} src={cartao} />
            </picture>
            <h2>Faça seu cadastro! Junte-se a outras pessoas.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut
              voluptatum eius sapiente, totam reiciendis temporibus qui
              quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
              dolore laudantium consectetur!{' '}
            </p>
          </div>
        </div>
      </main>
    </section>
  )
}

export default Sobre
