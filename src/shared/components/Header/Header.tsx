import React, { useState } from "react";
import { BurgerImg } from "../../images/BurgerImg";
import styles from "./header.css";
import { Link } from "react-router-dom";
import { LocationImg } from "../../images/LocationImg";
import { PhoneImg } from "../../images/PhoneImg";
import { WhatsappImg } from "../../images/WhatsappImg";
import { TelegramImg } from "../../images/TelegramImg";
import { MailImg } from "../../images/MailImg";

export function Header() {
  const [ mainMenu, setMainMenu ] = useState(false);
  const handleClick = () => {
    console.log("Main page");
    setMainMenu(!mainMenu);
    document.body.classList.toggle("menu-open");
    window.scrollTo(0, 0);
  };
  
  const handleLinkClick = () => {
    setMainMenu(false);
    document.body.classList.remove("menu-open");
    window.scrollTo(0, 0);
  };
  
  const handleClickToStart = () => {
    window.scrollTo(0, 0);
  };
  
  return (
    <div className={ styles.mainContainer }>
      { mainMenu && (
        <>
          <div className={ styles.leftMenuPhone }>
            <Link to="/" className={ styles.link } onClick={ handleLinkClick }>
              <p>Главная</p>
            </Link>
            <Link
              to="/catalog"
              className={ styles.link }
              onClick={ handleLinkClick }
            >
              <p>Каталог</p>
            </Link>
            <Link
              to="/paymentanddelivery"
              className={ styles.link }
              onClick={ handleLinkClick }
            >
              <p>Оплата и доставка</p>
            </Link>
            <Link
              to="/contacts"
              className={ styles.link }
              onClick={ handleLinkClick }
            >
              <p>Контакты</p>
            </Link>
            <div className={ `${ styles.email } ${ styles.marginTop15 }` }>
              <div>
                <MailImg />
              </div>
              <h3 className={ `${ styles.marginLeft10 } ${ styles.colorMenuItems }` }>
                kovka.naves@yandex.ru
              </h3>
            </div>
            <div className={ `${ styles.phone } ${ styles.marginTop15 }` }>
              <PhoneImg />
              <h3 className={ `${ styles.marginLeft10 } ${ styles.colorMenuItems }` }>
                <a
                  href="tel:+79818762944"
                  className={ `${ styles.link } ${ styles.phoneNumber }` }
                >
                  +7 (981) 876-29-44
                </a>
                <br />
                (<WhatsappImg /> whatsapp, <TelegramImg />
                telegram)
              </h3>
            </div>
          </div>
        </>
      ) }
      <div className={ styles.headerCenter }>
        <div className={ styles.logo }>
          <div className={ styles.burgerLogoTelephone }>
            <div className={ styles.imgAndLogo }>
              <div className={ styles.burgerimg } onClick={ handleClick }>
                <BurgerImg />
              </div>
              <img src={ "/images/favicon.png" } style={ { width: "40px" } } />
              <Link to="/" className={ styles.link } onClick={ handleClickToStart }>
                <h1 className={ styles.siteName }>КОВКА-НАВЕС</h1>
              </Link>
              <h2 className={ styles.menu }>МЕНЮ</h2>
            </div>
            <div className={ styles.location }>
              <LocationImg />
              <p className={ styles.town }>г. Санкт-Петербург</p>
            </div>
            <a href="tel:+79818762944" className={ styles.telephone }>
              +7 (981) 876-29-44
            </a>
          </div>
          <div className={ styles.listMenu }>
            <Link to="/" className={ styles.link } onClick={ handleClickToStart }>
              <div className={ styles.item }>
                <h2>Главная</h2>
              </div>
            </Link>
            <Link
              to="/catalog"
              className={ styles.link }
              onClick={ handleClickToStart }
            >
              <div className={ styles.item }>
                <h2>Каталог</h2>
              </div>
            </Link>
            <Link
              to="/paymentanddelivery"
              className={ styles.link }
              onClick={ handleClickToStart }
            >
              <div className={ styles.item }>
                <h2>Оплата и доставка</h2>
              </div>
            </Link>
            <Link
              to="/contacts"
              className={ styles.link }
              onClick={ handleClickToStart }
            >
              <div className={ styles.item }>
                <h2>Контакты</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}