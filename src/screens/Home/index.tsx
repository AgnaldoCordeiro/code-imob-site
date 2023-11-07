import AccordionItem from "../../shared/components/AccordionItem";
import Carrousel from "../../shared/components/Carrousel";
import { useEffect } from "react";
import {
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import NavbarComponent from "../../shared/components/NavbarComponent";

export default function HomePage () {  

  useEffect(() => {
    // Inicialize o scrollSpy e registre eventos
    scrollSpy.update();
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("scroll começando", to, element);
    });
    Events.scrollEvent.register("end", (to, element) => {
      console.log("scroll terminando", to, element);
    });

    return () => {
      // Remova os eventos quando o componente for desmontado
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };


  return (
    <>
    <NavbarComponent />
    <main className="main">
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__data">
            <h1 className="home__title">
            Descubra <br /> as Melhores <br />Chácaras e  <br /> Áreas de Lazer
            </h1>

            <p className="home__description">
            Encontre os melhores espaços para festa de toa a região, são Chácaras e Áreas de Lazer que combinam com sua ocasião.
Esqueça todas as dificuldade em encontrar o local ideal para seus momentos de lazer, na CODE você encontra!.
            </p>
            {/* 
                <div className="div home__value">
                    <div>
                        <h1 className="home__value-number">
                            330mil<span>+</span>
                        </h1>
                        <span className="home__value-description">
                            Produto <br/> Premium
                        </span>
                    </div>
                    
                    <div>
                        <h1 className="home__value-number">
                            150mil<span>+</span>
                        </h1>
                        <span className="home__value-description">
                            Para<br/> Solteiros
                        </span>
                    </div>
                    
                    <div>
                        <h1 className="home__value-number">
                            300mil<span>+</span>
                        </h1>
                        <span className="home__value-description">
                            Ideal para<br/> Casais
                        </span>
                    </div>
                </div>  */}
          </div>

          <div className="home__images">
            <div className="home__orbe"></div>

            <div className="home__img">
              <img src="/home.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* <!--==================== LOGOS ====================--> */}

      <section className="logos section" id="logos">
        <h2 className="flex justify-center">Parceiras</h2>
        <div className="logos__container container grid">
         {/*  <div className="logos__img">
            <img src="/logo1.png" alt="Construtora Parceira" />
          </div>
          <div className="logos__img">
            <img src="/logo2.png" alt="Construtora Parceira" />
          </div>
          <div className="logos__img">
            <img src="/logo3.png" alt="Construtora Parceira" />
          </div> */}
          <div className="logos__img">
            <img src="/logo4.jpeg" alt="Construtora Parceira"/>
          </div>
        </div>
      </section>

      {/* <!--==================== CASAS ====================--> */}

      <section className="popular section" id="popular">
        <div className="container">
          <span className="section__subtitle">Melhor Escolha de</span>
          <h2 className="section__title">
          Áreas de Lazer populares<span>.</span>
          </h2>

          <Carrousel  />
        </div>
      </section>

      {/* <!--==================== VALUE ====================--> */}

      <section className="value section" id="value">
        <div className="value__container container grid">
          <div className="value__images">
            <div className="value__orbe"></div>

            <div className="value__img">
              <img src="/value.jpg" alt="" />
            </div>
          </div>

          <div className="value__content">
            <div className="value_data">
              <span className="section__subtitle">Nossos Valores</span>
              <h2 className="section__title">
                Damos valor a você<span>.</span>
              </h2>
              <p className="value__description">
              Estamos sempre prontos para ajudar a encontrar o melhor lugar para suas atividades de lazer.
              </p>

              <div className="value__accordion">
                <AccordionItem
                  title="As Melhores Opções para Você"
                  content="Oferecemos opções de qualidade em locais privilegiados."
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                />
                <AccordionItem
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                  title="Os melhores preços do mercado."
                  content="Encontre as melhores ofertas do mercado para que você possa desfrutar de momentos incríveis em sua área de lazer com as melhores condições."
                />
                <AccordionItem
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9.661 2.237a.531.531 0 01.678 0 11.947 11.947 0 007.078 2.749.5.5 0 01.479.425c.069.52.104 1.05.104 1.59 0 5.162-3.26 9.563-7.834 11.256a.48.48 0 01-.332 0C5.26 16.564 2 12.163 2 7c0-.538.035-1.069.104-1.589a.5.5 0 01.48-.425 11.947 11.947 0 007.077-2.75zm4.196 5.954a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                  title="Seus dados seguros"
                  content="Garantimos sua privacidade mantendo seus dados seguros sem qualquer compartilhamento."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/** <!--==================== CONTACT ====================--> */}

      <section className="contact section" id="contact">
        <div className="contact__container container grid">
          <div className="contact__images">
            <div className="contact__orbe"></div>

            <div className="contact__img">
              <img src="/contact.png" alt="Contato" />
            </div>
          </div>

          <div className="contact__content">
            <div className="contact__data">
              <span className="section__subtitle">Contato</span>
              <h2 className="section__title">
              Precisa de Ajuda para Escolher sua Área de Lazer?<span>.</span>
              </h2>
              <p className="contact__description">
              Tem alguma dificuldade em encontrar o espaço de lazer dos seus sonhos? Precisa de orientação para tornar sua área de lazer ainda mais especial? Entre em contato conosco.
              </p>
            </div>

            <div className="contact__card">
              {/*  <!--Contato telefone--> */}
              <div className="contact_card-box">
                <div className="contact__card-info">
                  <i className="bx bxs-phone-call">
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z"
                      />
                    </svg>
                  </i>
                  <div>
                    <h3 className="contact__card-title">Telefone</h3>
                    <p className="contact__card-description">(16)997304018</p>
                  </div>
                </div>

                <a href="tel:+5561999999999">
                  <button className="contact__card-button">Ligue Agora</button>
                </a>
              </div>

              {/*   <!--Contato WhatsApp--> */}
              <div className="contact_card-box">
                <div className="contact__card-info">
                  <i className="bx bxl-whatsapp">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      className="w-6 h-6"
                      aria-hidden="true"
                      fill="none"
                      viewBox="0 0 48 48"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M 24 3.9980469 C 12.972292 3.9980469 4 12.970339 4 23.998047 C 4 27.273363 4.8627078 30.334853 6.2617188 33.064453 L 4.09375 40.826172 C 3.5887973 42.629575 5.3719261 44.41261 7.1757812 43.908203 L 14.943359 41.740234 C 17.670736 43.136312 20.727751 43.998047 24 43.998047 C 35.027708 43.998047 44 35.025755 44 23.998047 C 44 12.970339 35.027708 3.9980469 24 3.9980469 z M 24 6.9980469 C 33.406292 6.9980469 41 14.591755 41 23.998047 C 41 33.404339 33.406292 40.998047 24 40.998047 C 20.998416 40.998047 18.190601 40.217527 15.742188 38.853516 A 1.50015 1.50015 0 0 0 14.609375 38.71875 L 7.2226562 40.779297 L 9.2851562 33.396484 A 1.50015 1.50015 0 0 0 9.1503906 32.261719 C 7.7836522 29.811523 7 27.002565 7 23.998047 C 7 14.591755 14.593708 6.9980469 24 6.9980469 z M 17.240234 15 C 16.921234 15 16.405797 15.119656 15.966797 15.597656 C 15.528797 16.073656 14.294922 17.228125 14.294922 19.578125 C 14.294922 21.928125 16.005141 24.197578 16.244141 24.517578 C 16.482141 24.834578 19.547344 29.812562 24.402344 31.726562 C 28.436344 33.316563 29.256812 32.999922 30.132812 32.919922 C 31.008813 32.841922 32.959422 31.766391 33.357422 30.650391 C 33.755422 29.534391 33.755672 28.579813 33.638672 28.382812 C 33.519672 28.183812 33.200656 28.063219 32.722656 27.824219 C 32.245656 27.585219 29.898937 26.430484 29.460938 26.271484 C 29.022938 26.112484 28.702766 26.031766 28.384766 26.509766 C 28.066766 26.987766 27.152047 28.062859 26.873047 28.380859 C 26.594047 28.700859 26.315891 28.740953 25.837891 28.501953 C 25.358891 28.260953 23.822094 27.757859 21.996094 26.130859 C 20.576094 24.865859 19.620797 23.302219 19.341797 22.824219 C 19.063797 22.348219 19.311781 22.086609 19.550781 21.849609 C 19.765781 21.635609 20.028578 21.292672 20.267578 21.013672 C 20.504578 20.734672 20.583188 20.53675 20.742188 20.21875 C 20.901188 19.90175 20.822125 19.621813 20.703125 19.382812 C 20.584125 19.143813 19.655469 16.780938 19.230469 15.835938 C 18.873469 15.041938 18.49725 15.024719 18.15625 15.011719 C 17.87825 15.000719 17.558234 15 17.240234 15 z"
                      ></path>
                    </svg>
                  </i>
                  <div>
                    <h3 className="contact__card-title">Chat</h3>
                    <p className="contact__card-description">(16)997304018</p>
                  </div>
                </div>

                <a href="https://wa.me/5516997304018" target="_blank">
                  <button className="contact__card-button">WhatsApp</button>
                </a>
              </div>

              {/*  <!--Contato Email--> */}
              <div className="contact_card-box">
                <div className="contact__card-info">
                  <i className="bx bxs-envelope">
                    <svg
                      className="w-6 h-6"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2"
                      />
                    </svg>
                  </i>
                  <div>
                    <h3 className="contact__card-title">E-mail</h3>
                    <p className="contact__card-description">
                    contato@agencycode.com.br
                    </p>
                  </div>
                </div>

                <a href="mailto:jonathancosta746@gmail.com">
                  <button className="contact__card-button">Mensagem</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--==================== APPOINTMENT ====================--> */}
      {/* 
      <section className="appointment section">
        <div className="appointment-container container">
          <div className="info">
            <h2>
              Envie uma mensagem<span>.</span>
            </h2>
            <p>
              Mande uma mensagem que entraremos em contato o mais breve
              possivel.
            </p>
          </div>

          <form
            action="https://formspree.io/f/xvolerzj"
            method="POST"
            className="form__appointment"
          >
            <div className="form__group">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                placeholder="Digite seu nome"
                name="Nome do Cliente"
                id="name"
                required
              />
          // <!--name é o nome do item que irá contar no email--> 
            </div>

            <div className="form__group">
              <label htmlFor="phone">Telefone</label>
              <input
                type="number"
                placeholder="Digite seu telefone"
                name="Numero de Telefone"
                id="number"
                required
              />
            </div>

            <div className="form__group">
              <label htmlFor="return">Selecione a forma de retorno</label>
              <select name="return" required>
                <option value="ligação-durante-manha">
                  Ligação durante o período da manhã
                </option>
                <option value="ligação-durante-tarde">
                  Ligação durante o período da tarde
                </option>
                <option value="ligação-durante-noite">
                  Ligação durante o período da noite
                </option>
                <option value="whatsApp">WhatsApp</option>
                <option value="email">E-mail</option>
              </select>
            </div>

            <div className="form__group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                name="Mensagem"
                id="message"
                rows={6}
                placeholder="Adicione uma mensagem"
              ></textarea>
            </div>
            <input
              type="submit"
              value="Enviar Mensagem"
              className="btn-primary"
            />
          </form>
        </div>
      </section>


*/}
      {/* <!--==================== FOOTER ====================--> */}

      <footer className="footer section">
        <div className="footer__container container grid">
          <div>
            <a href="#" className="footer__logo">
           <img src='/logo.png' width={"80px"} height={"100px"}/>
            </a>
            <p className="footer__description">
            Nossa Missão é Ajudar Você <br /> a Encontrar o Espaço Perfeito para se Divertir.
         
            </p>
          </div>
{/* 
          <div className="footer__content">
            <h3 className="footer__title">Novidades</h3>
            <ul className="footer__social">
              <a
                href="https://www.youtube.com/user/JonathanCosta746"
                target="_blank"
                className="footer__social-link"
              >
                <i className="bx bxl-youtube"></i>
              </a>
              <a
                href="https://www.instagram.com/jonathansantos.costa/"
                target="_blank"
                className="footer__social-link"
              >
                <i className="bx bxl-instagram-alt"></i>
              </a>
              <a
                href="https://www.tiktok.com/"
                target="_blank"
                className="footer__social-link"
              >
                <i className="bx bxl-tiktok"></i>
              </a>
            </ul>
          </div> */}
        </div>

        <div className="footer__info ">
          <span className="footer__copy">
            &#169; AgnaldoCordeiro. Todos os direitos reservados.
          </span>
        </div>
      </footer>
      <button id="scroll-up" onClick={scrollToTop} className="scrollup">
        <i className="bx bxs-chevron-up">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
            />
          </svg>
        </i>
      </button>

    </main>
    </>
  )
}