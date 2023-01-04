import React from "react";
import santaClausLogo from "./img/santa-claus-logo.svg";
import mainImage from "./img/podarki_prazdnik_novyy_god_lka.jpg";
import services01Image from "./img/services/01.svg";
import services02Image from "./img/services/02.svg";
import services03Image from "./img/services/03.svg";
import services04Image from "./img/services/04.svg";
import services05Image from "./img/services/05.svg";
import services06Image from "./img/services/06.svg";
import services07Image from "./img/services/07.svg";
import kosmosImage from "./img/presents/kosmos_vnezemnoj_gory.jpg";
import gitaryImage from "./img/presents/elektrogitary_gitary_muzykalnye_instrumenty.jpg";
import macaronsImage from "./img/presents/macarons_desert_pechene_raznotsvetnyj.jpg";
import pandyImage from "./img/presents/pandy_dzhojstiki_kartridzhi.jpg";
import santaClaus01About_meImage from "./img/about_me/santa-claus-svgrepo-com.svg";
import santaClaus02About_meImage from "./img/about_me/santa-claus-stuck-in-the-chimney-svgrepo-com.svg";
import clients01Image from "./img/partners/free-sticker-rabbit-4193292.png";
import clients02Image from "./img/partners/free-sticker-fox-4193241.png";
import clients03Image from "./img/partners/free-sticker-cat-4193258.png";
import clients04Image from "./img/partners/free-sticker-reindeer-4193244.png";
import clients05Image from "./img/partners/free-sticker-rabbit-4193295.png";
import clients06Image from "./img/partners/free-sticker-bear-4193249.png";
import telegramGetInTouchImage from "./img/get_in_touch/icons8-телеграм-3d-fluency-96.png";
import whatsappGetInTouchImage from "./img/get_in_touch/icons8-whatsapp-96.png";
import youtubeGetInTouchImage from "./img/get_in_touch/icons8-youtube-play-96.png";
import telFooterImage from "./img/footer_icons/telephone-svgrepo-com.svg";
import locationFooterImage from "./img/footer_icons/location-svgrepo-com.svg";
import emailFooterImage from "./img/footer_icons/email-svgrepo-com.svg";
import facebookFooterSocialImage from "./img/footer_social/facebook-svgrepo-com.svg";
import instagramFooterSocialImage from "./img/footer_social/instagram-2-1-logo-svgrepo-com.svg";
import okFooterSocialImage from "./img/footer_social/ok-ru-logo-svgrepo-com.svg";
import twitterFooterSocialImage from "./img/footer_social/social-twitter-svgrepo-com.svg";
import viberFooterSocialImage from "./img/footer_social/viber-svgrepo-com.svg";
import whatsappFooterSocialImage from "./img/footer_social/whatsapp-svgrepo-com.svg";
import youtubeFooterSocialImage from "./img/footer_social/youtube-svgrepo-com.svg";

let AdaptiveDesign = () => {
  return (
    <div className="wrapper_adaptive">
      <header className="header">
        <div className="header__container _container">
          <a className="header__container_image" href="">
            <img src={santaClausLogo} alt="santa-claus-logo" />
          </a>
          <nav className="header__menu menu">
            <ul className="menu__list">
              <li className="menu__item">
                <a href="" className="menu__link">
                  Home
                </a>
              </li>
              <li className="menu__item">
                <a href="" className="menu__link">
                  {" "}
                  About
                </a>
              </li>
              <li className="menu__item">
                <a href="" className="menu__link">
                  Presents
                </a>
              </li>
              <li className="menu__item">
                <a href="" className="menu__link">
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="page">
        <div className="page__main-block main-block">
          <div className="main-block__container _container">
            <div className="main-block__body">
              <h1 className="main-block__title">Santa Claus website!</h1>
              <div className="main-block__text">
                Happy New Year! Happiness and peace in every home!
              </div>
              <div className="main-block__buttons">
                <a
                  href=""
                  className="main-block__button main-block__button_orange"
                >
                  Leave a message
                </a>
                <a
                  href=""
                  className="main-block__button main-block__button_border"
                >
                  Get a gift
                </a>
              </div>
            </div>
            <div className="main-block__image _ibg">
              <img src={mainImage} alt="Main image" />
            </div>
          </div>
        </div>
        <section className="page__services services">
          <div className="services__container _container">
            <div className="services__body">
              <div className="services__column">
                <div className="services__item item-service">
                  <div className="item-service__icon">
                    <img src={services01Image} alt="Santa's house" />
                  </div>
                  <h3 className="item-service__title">Santa's house</h3>
                  <div className="item-service__text">
                    Look at the amazing beauty of the house!
                  </div>
                </div>
              </div>
              <div className="services__column">
                <div className="services__item item-service">
                  <div className="item-service__icon">
                    <img src={services02Image} alt="Santa Claus" />
                  </div>
                  <h3 className="item-service__title">Santa Claus</h3>
                  <div className="item-service__text">
                    For all cooperation inquiries, click here...
                  </div>
                </div>
              </div>
              <div className="services__column">
                <div className="services__item item-service item-service_green">
                  <div className="item-service__icon">
                    <img src={services03Image} alt="Santa's sleigh" />
                  </div>
                  <h3 className="item-service__title">Santa's sleigh</h3>
                  <div className="item-service__text">
                    My transport. For logistics and supply, click here...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="page__advantages advantages">
          <div className="advantages__container _container">
            <div className="advantages__header header-block">
              <h2 className="header-block__title">Dwarf Team Achievements</h2>
              <div className="header-block__sub-title">
                Our achievements would not have been <br />
                possible without our first-className team!
              </div>
            </div>
            <div className="advantages__body">
              <div className="advantages__column">
                <div className="advantages__item">
                  <div className="advantages__icon">
                    <img src={services04Image} alt="Cakes" />
                  </div>
                  <div className="advantages__value">1565 +</div>
                  <div className="advantages__text">Cakes</div>
                </div>
              </div>
              <div className="advantages__column">
                <div className="advantages__item">
                  <div className="advantages__icon">
                    <img src={services05Image} alt="Cakes" />
                  </div>
                  <div className="advantages__value">865 +</div>
                  <div className="advantages__text">Mittens</div>
                </div>
              </div>
              <div className="advantages__column">
                <div className="advantages__item">
                  <div className="advantages__icon">
                    <img src={services06Image} alt="Cakes" />
                  </div>
                  <div className="advantages__value">3565 +</div>
                  <div className="advantages__text">Toys</div>
                </div>
              </div>
              <div className="advantages__column">
                <div className="advantages__item">
                  <div className="advantages__icon">
                    <img src={services07Image} alt="Cakes" />
                  </div>
                  <div className="advantages__value">735 +</div>
                  <div className="advantages__text">Beverages</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="page__presents presents">
          <div className="presents__container _container">
            <div className="presents__header header-block">
              <h2 className="header-block__title">Our gifts</h2>
              <div className="header-block__sub-title">
                This year we will give a lot of smiles <br />
                and create a good mood!
              </div>
            </div>
            <div className="presents__body">
              <div className="presents__column">
                <article className="presents__item item-presents">
                  <div className="item-presents__content">
                    <a href="" className="item-presents__link">
                      <h4 className="item-presents__title">Fairy worlds</h4>
                    </a>
                    <div className="item-presents__text">
                      Journey into the unknown, adventure and the vast expanses
                      of the universe...
                    </div>
                  </div>
                  <a href="" className="item-presents__image _ibg">
                    <img src={kosmosImage} alt="Cosmos" />
                  </a>
                </article>
              </div>
              <div className="presents__column">
                <article className="presents__item item-presents">
                  <div className="item-presents__content">
                    <a href="" className="item-presents__link">
                      <h4 className="item-presents__title">
                        Inspirational music
                      </h4>
                    </a>
                    <div className="item-presents__text">
                      This is what will help you find your Zen state in the new
                      year!
                    </div>
                  </div>
                  <a href="" className="item-presents__image _ibg">
                    <img src={gitaryImage} alt="Music" />
                  </a>
                </article>
              </div>
              <div className="presents__column">
                <article className="presents__item item-presents">
                  <div className="item-presents__content">
                    <a href="" className="item-presents__link">
                      <h4 className="item-presents__title">Amazing desserts</h4>
                    </a>
                    <div className="item-presents__text">
                      You will have to fight the temptation!
                    </div>
                  </div>
                  <a href="" className="item-presents__image _ibg">
                    <img src={macaronsImage} alt="Eat" />
                  </a>
                </article>
              </div>
              <div className="presents__column">
                <article className="presents__item item-presents">
                  <div className="item-presents__content">
                    <a href="" className="item-presents__link">
                      <h4 className="item-presents__title">
                        Mind blowing games
                      </h4>
                    </a>
                    <div className="item-presents__text">
                      Play, play and play again...
                    </div>
                  </div>
                  <a href="" className="item-presents__image _ibg">
                    <img src={pandyImage} alt="Game" />
                  </a>
                </article>
              </div>
            </div>
          </div>
        </section>
        <section className="page__about-me about-me">
          <div className="about-me__container _container">
            <div className="about-me__header header-block">
              <h2 className="header-block__title">About me</h2>
              <div className="header-block__sub-title">
                I am the one who makes the fairy <br />
                tale come true!
              </div>
            </div>
            <div className="about-me__body">
              <div className="about-me__video">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/oNqRAvkXBYQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="about-me__content">
                <div className="about-me__top">
                  <h2 className="about-me__title">A little where I'm from</h2>
                  <div className="about-me__text">
                    A long time ago in the thirtieth kingdom... there once
                    lived... and so on...
                  </div>
                </div>

                <div className="about-me__items">
                  <div className="about-me__item item-about-me">
                    <div className="item-about-me__icon">
                      <img src={santaClaus01About_meImage} alt="1840" />
                    </div>
                    <div className="item-about-me__body">
                      <div className="item-about-me__title">
                        Known (as Moroz Ivanovich) since 1840
                      </div>
                      <div className="item-about-me__text">
                        For the first time I appear ...
                      </div>
                    </div>
                  </div>
                  <div className="about-me__item item-about-me">
                    <div className="item-about-me__icon">
                      <img src={santaClaus02About_meImage} alt="1840" />
                    </div>
                    <div className="item-about-me__body">
                      <div className="item-about-me__title">
                        Like Santa Claus since the late 1930s
                      </div>
                      <div className="item-about-me__text">
                        In 1937, Father Frost and ...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="page__clients clients">
          <div className="clients__container _container">
            <div className="clients__items">
              <div className="clients__item">
                <img src={clients01Image} alt="clients" />
              </div>
              <div className="clients__item">
                <img src={clients02Image} alt="clients" />
              </div>
              <div className="clients__item">
                <img src={clients03Image} alt="clients" />
              </div>
              <div className="clients__item">
                <img src={clients04Image} alt="clients" />
              </div>
              <div className="clients__item">
                <img src={clients05Image} alt="clients" />
              </div>
              <div className="clients__item">
                <img src={clients06Image} alt="clients" />
              </div>
            </div>
          </div>
        </div>
        <section className="page__subscribe subscribe">
          <div className="subscribe__container _container">
            <div className="subscribe__body">
              <h4 className="subscribe__title">
                Subscribe For Latest Newsletter
              </h4>
              <form action="#" className="subscribe__form">
                <input
                  autoComplete="off"
                  placeholder="Your Email"
                  type="email"
                  required
                  name="form[]"
                  className="subscribe__input"
                />
                <button type="submit" className="subscribe__button">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
        <section className="page__get-in-touch get-in-touch">
          <div className="get-in-touch__container _container">
            <div className="get-in-touch__header header-block">
              <h2 className="header-block__title">Get in touch</h2>
              <div className="header-block__sub-title">
                To contact us, you can use <br />
                the following options
              </div>
            </div>
            <div className="get-in-touch__items">
              <div className="get-in-touch__item item-get-in-touch">
                <div className="item-get-in-touch__icon">
                  <img src={telegramGetInTouchImage} alt="get-in-touch" />
                </div>
                <div className="item-get-in-touch__emails">
                  <a
                    href="mailto:e.ageevets@yandex.ru"
                    className="item-get-in-touch__email"
                  >
                    e.ageevets@yandex.ru
                  </a>
                  <a
                    href="mailto:santa__clouse@yandex.ru"
                    className="item-get-in-touch__email"
                  >
                    santa__clouse@yandex.ru
                  </a>
                </div>
                <div className="item-get-in-touch__label">Get Support</div>
                <a href="" className="item-get-in-touch__button">
                  Submit Request
                </a>
              </div>
              <div className="get-in-touch__item item-get-in-touch item-get-in-touch_active">
                <div className="item-get-in-touch__icon">
                  <img src={whatsappGetInTouchImage} alt="get-in-touch" />
                </div>
                <div className="item-get-in-touch__emails">
                  <a
                    href="mailto:e.ageevets@yandex.ru"
                    className="item-get-in-touch__email"
                  >
                    e.ageevets@yandex.ru
                  </a>
                  <a
                    href="mailto:santa__clouse@yandex.ru"
                    className="item-get-in-touch__email"
                  >
                    santa__clouse@yandex.ru
                  </a>
                </div>
                <div className="item-get-in-touch__label">Get Support</div>
                <a href="" className="item-get-in-touch__button">
                  Submit Request
                </a>
              </div>
              <div className="get-in-touch__item item-get-in-touch">
                <div className="item-get-in-touch__icon">
                  <img src={youtubeGetInTouchImage} alt="get-in-touch" />
                </div>
                <div className="item-get-in-touch__emails">
                  <a
                    href="mailto:e.ageevets@yandex.ru"
                    className="item-get-in-touch__email"
                  >
                    e.ageevets@yandex.ru
                  </a>
                  <a
                    href="mailto:santa__clouse@yandex.ru"
                    className="item-get-in-touch__email"
                  >
                    santa__clouse@yandex.ru
                  </a>
                </div>
                <div className="item-get-in-touch__label">Get Support</div>
                <a href="" className="item-get-in-touch__button">
                  Submit Request
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="page__contact contact">
          <div className="contact__container _container">
            <div className="contact__body">
              <div className="contact__content">
                <h4 className="contact__title">
                  Consulting Agency For Your Business
                </h4>
                <div className="contact__text">
                  We offer gift delivery services for your children
                </div>
              </div>
              <a href="" className="contact__button">
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer__top">
          <div className="footer__main _container">
            <div className="footer__row">
              <div className="footer__column">
                <div className="footer__label">Company Info</div>
                <nav className="footer__menu menu-footer">
                  <ul className="menu-footer__list">
                    <li className="menu-footer__item">
                      <a href="" className="menu-footer__link">
                        About Us
                      </a>
                    </li>
                    <li className="menu-footer__item">
                      <a href="" className="menu-footer__link">
                        Carrier
                      </a>
                    </li>
                    <li className="menu-footer__item">
                      <a href="" className="menu-footer__link">
                        We are hiring
                      </a>
                    </li>
                    <li className="menu-footer__item">
                      <a href="" className="menu-footer__link">
                        Blog
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="footer__column">
                <div className="footer__label">Legal</div>
                <nav className="footer__menu menu-footer">
                  <ul className="menu-footer__list">
                    <li className="menu-footer__item">
                      <a href="" className="menu-footer__link">
                        About Us
                      </a>
                    </li>
                    <li className="menu-footer__item">
                      <a href="" className="menu-footer__link">
                        Carrier
                      </a>
                    </li>
                    <li className="menu-footer__item">
                      <a href="" className="menu-footer__link">
                        We are hiring
                      </a>
                    </li>
                    <li className="menu-footer__item">
                      <a href="" className="menu-footer__link">
                        Blog
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="footer__column">
                <div className="footer__label">Features</div>
                <nav className="footer__menu menu-footer">
                  <ul className="menu-footer__list">
                    <li className="menu-footer__item">
                      <a href="" className="menu-footer__link">
                        About Us
                      </a>
                    </li>
                    <li className="menu-footer__item">
                      <a href="" className="menu-footer__link">
                        Carrier
                      </a>
                    </li>
                    <li className="menu-footer__item">
                      <a href="" className="menu-footer__link">
                        We are hiring
                      </a>
                    </li>
                    <li className="menu-footer__item">
                      <a href="" className="menu-footer__link">
                        Blog
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="footer__column">
                <div className="footer__label">Resources</div>
                <nav className="footer__menu menu-footer">
                  <ul className="menu-footer__list">
                    <li className="menu-footer__item">
                      <a href="" className="menu-footer__link">
                        About Us
                      </a>
                    </li>
                    <li className="menu-footer__item">
                      <a href="" className="menu-footer__link">
                        Carrier
                      </a>
                    </li>
                    <li className="menu-footer__item">
                      <a href="" className="menu-footer__link">
                        We are hiring
                      </a>
                    </li>
                    <li className="menu-footer__item">
                      <a href="" className="menu-footer__link">
                        Blog
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="footer__column">
                <div className="footer__label">Get In Touch</div>
                <nav className="footer__menu menu-footer">
                  <ul className="menu-footer__list">
                    <li className="menu-footer__item item-contact">
                      <div className="item-contact__img">
                        <img src={telFooterImage} alt="icons" />
                      </div>
                      <a href="tel:4805550103" className="item-contact__link">
                        (480) 555-0103
                      </a>
                    </li>
                    <li className="menu-footer__item item-contact">
                      <div className="item-contact__img">
                        <img src={locationFooterImage} alt="icons" />
                      </div>
                      <a href="" className="item-contact__link">
                        4517 Washington Avenu
                      </a>
                    </li>
                    <li className="menu-footer__item item-contact">
                      <div className="item-contact__img">
                        <img src={emailFooterImage} alt="icons" />
                      </div>
                      <a
                        href="mailto:e.ageevets@yandex.ru"
                        className="item-contact__link"
                      >
                        e.ageevets@yandex.ru
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__container _container">
            <div className="footer__copy">
              Made With Love By Figmaland All Right Reserved
            </div>
            <div className="footer__social social">
              <a
                href="https://facebook.com"
                target="_blank"
                className="social__item"
              >
                <img src={facebookFooterSocialImage} alt="social" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                className="social__item"
              >
                <img src={instagramFooterSocialImage} alt="social" />
              </a>
              <a href="https://ok.ru" target="_blank" className="social__item">
                <img src={okFooterSocialImage} alt="social" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                className="social__item"
              >
                <img src={twitterFooterSocialImage} alt="social" />
              </a>
              <a
                href="https://viber.com"
                target="_blank"
                className="social__item"
              >
                <img src={viberFooterSocialImage} alt="social" />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                className="social__item"
              >
                <img src={whatsappFooterSocialImage} alt="social" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                className="social__item"
              >
                <img src={youtubeFooterSocialImage} alt="social" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

AdaptiveDesign = React.memo(AdaptiveDesign);

export default AdaptiveDesign;
