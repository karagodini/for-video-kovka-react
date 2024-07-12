import React, { useState } from "react";
import styles from "./main.css";
import { Link } from "react-router-dom";
import { Handshake } from "../../images/Handshake";
import { Hammer } from "../../images/Hammer";
import { PaperSheet } from "../../images/PaperSheet";
import axios from "axios";
import { Helmet } from "react-helmet-async";

export function Main() {
  const [ phoneNumber, setPhoneNumber ] = useState<string>("");
  const [ name, setName ] = useState<string>("");
  
  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const inputPhoneNumber = event.target.value.replace(/\D/g, "");
    let formattedPhoneNumber = "+7";
    
    if (inputPhoneNumber.length > 1) {
      formattedPhoneNumber += ` (${ inputPhoneNumber.slice(1, 4) })`;
      if (inputPhoneNumber.length > 4) {
        formattedPhoneNumber += ` ${ inputPhoneNumber.slice(4) }`;
      }
    } else {
      if (inputPhoneNumber.length > 0) {
        formattedPhoneNumber += ``;
      }
      if (inputPhoneNumber.length > 3) {
        formattedPhoneNumber += ` ${ inputPhoneNumber.slice(3) }`;
      }
    }
    setPhoneNumber(formattedPhoneNumber);
  };
  
  const handleSubmit = async(event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault();
    
    try {
      const response = await axios.post("/api/sendDataToEmail", {
        name,
        phoneNumber,
      });
      console.log(response.data); // Handle the response from the backend
    } catch (error) {
      console.error(error);
    }
    
    setName("");
    setPhoneNumber("");
  };
  
  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  
  return (
    <>
      {/*<Helmet title="Ковка-Навес - кованые и металлические изделия в СПб. Ковка купить в СПб. Художественная ковка в СПб" />*/ }
      <Helmet>
        <title>
          Ковка-Навес - кованые и металлические изделия в СПб. Ковка купить в СПб.
          Художественная ковка в СПб
        </title>
        {/*  <meta*/ }
        {/*    name="title"*/ }
        {/*    content="Ковка-Навес - кованые и металлические изделия в СПб. Ковка купить в СПб.*/ }
        {/*    Художественная ковка в СПб"*/ }
        {/*  />*/ }
        <meta
          name="title" content="Ковка-Навес - кованые и металлические изделия в СПб. Ковка купить в СПб.
          Художественная ковка в СПб" />
        <meta name="description" content="Ковка-Навес - мастерская художественной ковки производит кованые и металлические изделия на заказ в СПб." />
        {/*  <meta name="keywords" content="Ковка СПб, художественная ковка, кованые перила, лестницы, кованые заборы, кованые ограждения, кованые ворота, решётки на окна, сварные и кованые козырьки, ворота, навесы, беседки, скамейки, кованые фонари, мангалы, цветочницы." />*/ }
        {/*  <meta name="robots" content="index, follow" />*/ }
        {/*  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />*/ }
        {/*  <meta name="language" content="Russian" />*/ }
        {/*  <meta name="revisit-after" content="7 days" />*/ }
      </Helmet>
      <div className={ styles.wrapper }>
        <div className={ styles.firstBlock }>
          <h1 className={ styles.name }>
            ИЗГОТОВЛЕНИЕ И МОНТАЖ КОВАНЫХ И МЕТАЛЛИЧЕСКИХ ИЗДЕЛИЙ ПОД КЛЮЧ В
            САНКТ-ПЕТЕРБУРГЕ И ЛЕНИНГРАДСКОЙ ОБЛАСТИ
          </h1>
          <div className={ styles.goCatalog }>
            <Link className={ styles.link } to="/catalog" onClick={ handleClick }>
              <p>Перейти в каталог</p>
            </Link>
          </div>
        </div>
        <div className={ styles.secondBlock }>
          <div className={ styles.howWork }>
            <p className={ styles.namehowwork }>Как мы работаем</p>
            <p className={ styles.points }>
              - Изготавливаем кованые и металлические изделия любого размера,
              дизайна и сложности в Санкт-Петербурге и Лен. Области
            </p>
            <p className={ styles.points }>
              - Выполняем все в максимально сжатые сроки с гарантией
            </p>
            <div className={ styles.stages }>
              <div className={ styles.square }>
                <div>
                  <Handshake />
                </div>
                <div>
                  <p>Консультация, замер, договор</p>
                </div>
              </div>
              <div className={ styles.square }>
                <div>
                  <Hammer />
                </div>
                <div>
                  <p>Установка изделия на объекте</p>
                </div>
              </div>
              <div className={ styles.square }>
                <div
                  style={ {
                    height: "79px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  } }
                >
                  <PaperSheet />
                </div>
                <div>
                  <p>Сдача работ и оплата проекта</p>
                </div>
              </div>
            </div>
          </div>
          <div className={ styles.blockForm }>
            <p className={ styles.namehowwork }>Остались вопросы?</p>
            <p className={ styles.fillForm }>Заполните форму!</p>
            <p className={ styles.getConsultation }>
              И получите консультацию специалиста
            </p>
            <div>
              <form className={ styles.styleForm }>
                <input
                  className={ styles.styleForInput }
                  type="text"
                  placeholder="ИМЯ"
                  onChange={ changeName }
                  value={ name }
                />
                <input
                  className={ styles.styleForInput }
                  type="tel"
                  placeholder="ТЕЛЕФОН"
                  maxLength={ 16 }
                  value={ phoneNumber }
                  onChange={ handlePhoneNumberChange }
                />
                <input
                  className={ styles.buttonSubmit }
                  type="submit"
                  value="Отправить"
                  onClick={ handleSubmit }
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}