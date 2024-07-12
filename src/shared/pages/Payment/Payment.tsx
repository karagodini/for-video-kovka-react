import React from "react";
import styles from "./payment.css";
import { Helmet } from "react-helmet-async";

export function Payment() {
  return (
    <>
      {/*<Helmet title="Оплата и доставка" />*/ }
      <Helmet>
        <title>Оплата и доставка</title>
        {/*  <meta*/ }
        {/*    name="title"*/ }
        {/*    content="Оплата и доставка кованых изделий по Санкт-Петербургу и области"*/ }
        {/*  />*/ }
        <meta name="title" content="Оплата и доставка" />
        <meta name="description" content="Оплата и доставка " />
        {/*  <meta name="keywords" content="Ковка СПб, художественная ковка, кованые перила, лестницы, кованые заборы, кованые ограждения, кованые ворота, решётки на окна, сварные и кованые козырьки, ворота, навесы, беседки, скамейки, кованые фонари, мангалы, цветочницы." />*/ }
        {/*  <meta name="robots" content="index, follow" />*/ }
        {/*  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />*/ }
        {/*  <meta name="language" content="Russian" />*/ }
        {/*  <meta name="revisit-after" content="7 days" />*/ }
      </Helmet>
      <div className={ styles.wrapper }>
        <h1>Оплата и доставка</h1>
        <p>
          Оплата производится только наличными при составлении договора, доставка
          по Санкт-Петербургу в пределах КАД - 2000 рублей, по Ленинградской
          Области 5000 рублей
        </p>
      </div>
    </>
  );
}