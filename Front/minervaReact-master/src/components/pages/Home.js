import style from "./Home.module.css";
import bannerHome from "../img/mulher.jpg";
import avatar from "../img/Avatar.png";
import store from "../img/bolsa.png";
import duvida from "../img/duvida.png";
import cartao from "../img//cartao.png";

function Home() {
  return (
    <section>
      <main>
        <h1>SEJA BEM-VINDA</h1>
        <picture>
          <img className={style.bannerhome} src={bannerHome} />
        </picture>
        <aside className={style.dinamico}>
          <div className={style.card}>
            <h2>COMO FUNCIONA</h2>
            <p>Conectamos Interesses</p>
            <picture>
              <img className={style.avatar} src={avatar} />
            </picture>
            <p className={style.loren}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.{" "}
            </p>
          </div>
          <div className={style.card}>
            <h2>EMPREENDEDORA</h2>
            <p>Loren Ipsum</p>
            <picture>
              <img className={style.avatar} src={avatar} />
            </picture>
            <p className={style.loren}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.{" "}
            </p>
          </div>
          <div className={style.card}>
            <h2>CLIENTE</h2>
            <p>Loren Ipsum</p>
            <picture>
              <img className={style.avatar} src={avatar} />
            </picture>
            <p className={style.loren}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
          <h1>O PROJETO</h1>
          <article>
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                ut voluptatum eius sapiente, totam reiciendis temporibus qui
                quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                dolore laudantium consectetur!{" "}
              </p>
            </div>
          </article>
        </aside>
      </main>
    </section>
  );
}

export default Home;
