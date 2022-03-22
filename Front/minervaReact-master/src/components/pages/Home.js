import style from './Home.module.css'
import bannerHome from '../img/mulher.jpg'
import avatar from '../img/Avatar.png'

function Home() {
  return (
    <section>
      <main>
        <h1>SEJA BEM-VINDA</h1>
        <picture>
          <img className={style.bannerhome} src={bannerHome} />
        </picture>
        <aside className={style.dinamico}>
          <h2>COMO FUNCIONA</h2>
          <p>Conectamos Interesses</p>

          <div className={style.sessaonew}>
            <div className={style.card}>
              <picture>
                {' '}
                <img className={style.avatar} src={avatar} />{' '}
              </picture>
              <h2>EMPREENDEDORA</h2>
              <p className={style.loren}>
                Na Minerva, a mulher poderá fazer seu cadastro e passar a
                oferecer seu serviço. Cabeleireiras, maquiadoras, fotógrafas,
                tatuadoras, professoras particulares, web designers entre outros
                milhares de profissionais. Sinta-se à vontade nesse espaço.{' '}
              </p>
            </div>

            <div className={style.card}>
              <picture>
                <img className={style.avatar} src={avatar} />
              </picture>
              <h2>SITE</h2>
              <p className={style.loren}>
                A Minerva permitirá a reunião de mulheres interessadas em
                oferecer e adquirir serviços, como uma espécie de meio de troca.
                Com isso, possibilitará com que mulheres auxiliem outras
                mulheres, fortalecendo o crescimento pessoal e profissional,
                impulsionando o empreendedorismo feminino.{' '}
              </p>
            </div>

            <div className={style.card}>
              <picture>
                <img className={style.avatar} src={avatar} />
              </picture>
              <h2>CLIENTE</h2>
              <p className={style.loren}>
                Deseja contratar um serviço e encontra dificuldades em achar o
                que precisa? Na Minerva você contará com as melhores
                profissionais, serviço de qualidade e poderá apoiar o
                crescimento do empreendedorismo feminino.
              </p>
            </div>
          </div>
        </aside>
      </main>
    </section>
  )
}

export default Home
