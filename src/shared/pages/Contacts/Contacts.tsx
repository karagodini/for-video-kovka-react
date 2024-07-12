import React from "react";
import styles from "./contacts.css";
import { Helmet } from "react-helmet-async";
import { PhoneImg } from "../../images/PhoneImg";

export function Contacts() {
  return (
    <div>
      <Helmet>
        <title>Контактная информация</title>
        <meta name="title" content="Контактная информация" />
        <meta name="description" content="Контактная информация " />
      </Helmet>
      <div className={ styles.contactsPage }>
        <h1 className={ styles.pageName }>Наши контакты</h1>
        <div className={ styles.helloTextDiv }>
          <p className={ styles.helloText }>
            Свяжитесь с нами, чтобы обсудить свои потребности и задать любые
            вопросы о наших услугах. Мы всегда готовы помочь вам в выборе
            идеального кованого навеса. Чтобы связаться с нами, позвоните по
            номеру или заполните контактную форму ниже. Мы всегда
            стараемся оперативно отвечать на вопросы и предоставлять
            профессиональные консультации. Мы с нетерпением ждем ваших сообщений и
            надеемся на сотрудничество с Вами!
          </p>
        </div>
        <div className={ styles.contacts }>
          <div className={ styles.phone }>
            <PhoneImg color={ "white" } />
          </div>
        </div>
      </div>
    </div>
  );
}

// <a
//   href="tel:+79818762944"
//   className={`${styles.link} ${styles.phoneNumber}`}
// >
//   +7 (981) 876-29-44
// </a>