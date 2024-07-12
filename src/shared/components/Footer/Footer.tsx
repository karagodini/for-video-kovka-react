import React from "react";
import styles from "./footer.css";
import { PhoneImg } from "../../images/PhoneImg";
import { MailImg } from "../../images/MailImg";
import { Link } from "react-router-dom";
import { TelegramImg } from "../../images/TelegramImg";
import { WhatsappImg } from "../../images/WhatsappImg";
import { ClockImg } from "../../images/ClockImg";

export function Footer() {
  return (
    <footer className={ styles.wrapper }>
      <div className={ styles.center }>
        <div className={ styles.mainMenu }>
          <h2 className={ styles.mainMenuItem }>
            <Link to="/" className={ styles.link }>
              Главная
            </Link>
          </h2>
          
          <h2 className={ styles.mainMenuItem }>
            <Link to="/catalog" className={ styles.link }>
              Каталог
            </Link>
          </h2>
          
          <h2 className={ styles.mainMenuItem }>
            <Link to="/paymentanddelivery" className={ styles.link }>
              Оплата и доставка
            </Link>
          </h2>
          <h2 className={ styles.mainMenuItem }>
            <Link to="/contacts" className={ styles.link }>
              Контакты
            </Link>
          </h2>
        </div>
        <div className={ styles.flexMenu }>
          <div className={ styles.catalog }>
            <h2>Каталог</h2>
            <Link to="/canopies" className={ styles.link }>
              <h3
                className={ `${ styles.catalogItem } ${ styles.marginTop15 } ${ styles.colorMenuItems }` }
              >
                Навесы
              </h3>
            </Link>
            <Link to="/gates" className={ styles.link }>
              <h3
                className={ `${ styles.catalogItem } ${ styles.marginTop15 }  ${ styles.colorMenuItems }` }
              >
                Ворота
              </h3>
            </Link>
            <Link to="/gratings" className={ styles.link }>
              <h3
                className={ `${ styles.catalogItem } ${ styles.marginTop15 }  ${ styles.colorMenuItems }` }
              >
                Решетки
              </h3>
            </Link>
            <Link to="/stairs" className={ styles.link }>
              <h3
                className={ `${ styles.catalogItem } ${ styles.marginTop15 } ${ styles.colorMenuItems }` }
              >
                Лестницы
              </h3>
            </Link>
            <Link to="/railing" className={ styles.link }>
              <h3
                className={ `${ styles.catalogItem } ${ styles.marginTop15 } ${ styles.colorMenuItems }` }
              >
                Перила
              </h3>
            </Link>
            <Link to="/fence" className={ styles.link }>
              <h3
                className={ `${ styles.catalogItem } ${ styles.marginTop15 } ${ styles.colorMenuItems }` }
              >
                Заборы
              </h3>
            </Link>
            <Link to="/alcove" className={ styles.link }>
              <h3
                className={ `${ styles.catalogItem } ${ styles.marginTop15 } ${ styles.colorMenuItems }` }
              >
                Беседки
              </h3>
            </Link>
            <Link to="/benches" className={ styles.link }>
              <h3
                className={ `${ styles.catalogItem } ${ styles.marginTop15 } ${ styles.colorMenuItems }` }
              >
                Скамейки
              </h3>
            </Link>
          </div>
          <div>
            <h2>Время работы</h2>
            <div className={ styles.workingTime }>
              <ClockImg />
              <h3 className={ `${ styles.marginLeft10 } ${ styles.colorMenuItems }` }>
                09:00-22:00, без выходных
              </h3>
            </div>
          </div>
          
          <div className={ `${ styles.contacts } ` }>
            <h2>Контакты</h2>
            <div className={ `${ styles.email } ${ styles.marginTop15 }` }>
              <MailImg />
              <h3 className={ `${ styles.marginLeft10 } ${ styles.colorMenuItems }` }>
                kovka.naves@yandex.ru
              </h3>
            </div>
            <div className={ `${ styles.phone } ${ styles.marginTop15 }` }>
              <PhoneImg color={ "#f5deb3" } />
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
        </div>
      </div>
    </footer>
  );
}