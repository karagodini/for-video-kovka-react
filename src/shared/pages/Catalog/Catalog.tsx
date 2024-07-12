import React, { Fragment, useEffect, useState } from "react";
import styles from "./catalog.css";
import { CatalogCard } from "../../components/Catalog/CatalogCard";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { LocationImg } from "../../images/LocationImg";

interface CatalogItem {
  id: number;
  img: string;
  price: number;
  articul: number;
}

export function Catalog() {
  const handleStartClick = () => {
    window.scroll(0, 0);
  };
  
  // const location = useLocation();
  // useEffect(() => {
  //   console.log("catalog = ", location);
  //
  // }, [ location ]);
  
  // let metaTagContent = "";
  
  // if (typeof document !== "undefined") {
  //   const metaTag = document.querySelector(
  //     'meta[name="title"]'
  //   ) as HTMLMetaElement;
  //   metaTagContent = metaTag ? metaTag.content : "";
  // } else {
  //   // Handle non-browser environment (e.g., set default meta tag content)
  //   metaTagContent = "Default Meta Tag Content";
  // }
  
  // useEffect(() => {
  //   fetch(`http://localhost:3000/?metaTag=${metaTagContent}`)
  //     .then((response) => response.text())
  //     .then((data) => {
  //       // Handle the server response here
  //     })
  //     .catch((error) => {
  //       // Handle any errors here
  //     });
  // }, []);
  
  return (
    <>
      <Helmet>
        <title>
          Каталог кованых и металлических изделий в Санкт-Петербурге
        </title>
        <meta name="title" content="Каталог кованых и металлических изделий в Санкт-Петербурге" />
        <meta
          name="description"
          content="Каталог кованых и металлических изделий в Санкт-Петербурге"
        />
      </Helmet>
      <div className={ styles.catalog }>
        <h1 className={ styles.pageName }>Каталог</h1>
        <div className={ styles.helloTextDiv }>
          <p className={ styles.helloText }>
            Компания "Ковка-Навес" предлагает купить кованые и сварные изделия
            собственного производства в Санкт-Петербурге. С 2009 года мы
            специализируемся на художественной ковке и выполняем проекты
            различной сложности. Профессионализм наших мастеров, современное
            оборудование и высококлассное сырье гарантируют вам непревзойденное
            качество продукции.
          </p>
        </div>
        
        <div className={ styles.wrapper }>
          <Link
            to="/canopies"
            className={ styles.link }
            onClick={ handleStartClick }
          >
            <CatalogCard name={ "НАВЕСЫ" } path={ "1.jpg" } />
          </Link>
          <Link to="/gates" className={ styles.link } onClick={ handleStartClick }>
            <CatalogCard name={ "ВОРОТА" } path={ "gates.jpg" } />
          </Link>
          <Link
            to="/gratings"
            className={ styles.link }
            state={ {
              vid: "/gratings",
              name: "Решетки",
              nameIzdelie: "Решетка",
            } }
            onClick={ handleStartClick }
          >
            <CatalogCard name={ "РЕШЕТКИ" } path={ "gratings/207.jpg" } />
          </Link>
          <Link to="/stairs" className={ styles.link } onClick={ handleStartClick }>
            <CatalogCard name={ "ЛЕСТНИЦЫ" } path={ "lestnica.jpg" } />
          </Link>
          <Link
            to="/railing"
            className={ styles.link }
            state={ { vid: "/railing", name: "Перила", nameIzdelie: "Перила" } }
            onClick={ handleStartClick }
          >
            <CatalogCard name={ "ПЕРИЛА" } path={ "railing/230.jpg" } />
          </Link>
          <Link
            to="/fence"
            className={ styles.link }
            state={ { vid: "/fence", name: "Заборы", nameIzdelie: "Забор" } }
            onClick={ handleStartClick }
          >
            <CatalogCard name={ "ЗАБОРЫ" } path={ "fence/10.jpeg" } />
          </Link>
          <Link
            to="/alcove"
            className={ styles.link }
            state={ { vid: "/alcove", name: "Беседки", nameIzdelie: "Беседка" } }
            onClick={ handleStartClick }
          >
            <CatalogCard name={ "БЕСЕДКИ" } path={ "alcove/16.jpeg" } />
          </Link>
          <Link
            to="/benches"
            className={ styles.link }
            state={ {
              vid: "/benches",
              name: "Скамейки",
              nameIzdelie: "Скамейка",
            } }
            onClick={ handleStartClick }
          >
            <CatalogCard name={ "СКАМЕЙКИ" } path={ "benches/37.jpeg" } />
          </Link>
        </div>
      </div>
    </>
  );
}