import React, { useEffect, useState } from "react";
import styles from "./stairs.css";
import { ProtfolioCard } from "../../components/Portfolio/ProtfolioCard";
import { Helmet } from "react-helmet-async";

interface ItemTovar {
  id: number;
  img: string;
  price: number;
  articul: number;
}

export function Stairs() {
  
  const [ dataFromDB, setDataFromDB ] = useState<ItemTovar[]>([]);
  const [ sortedData, setSortedData ] = useState<ItemTovar[]>([]);
  const [ arrPath, setArrPath ] = useState<string[]>([]);
  
  useEffect(() => {
    fetch(`/api/db/stairs`).then((response: any) => response.json()).then((data: ItemTovar[]) => setDataFromDB(data)).catch((error: any) => console.error(error));
    
  }, []);
  
  useEffect(() => {
    setSortedData([ ...dataFromDB ].sort((a, b) => a.articul - b.articul));
  }, [ dataFromDB ]);
  
  useEffect(() => {
    const imgArray = sortedData.map((item) => item.img);
    setArrPath(imgArray);
  }, [ sortedData ]);
  
  return (
    <>
      {/*<Helmet title="Лестницы для дома купить в СПб" />*/ }
      <Helmet>
        <title>Лестницы для дома купить в СПб</title>
        {/*  <meta*/ }
        {/*    name="title"*/ }
        {/*    content="Лестницы для дома купить в СПб"*/ }
        {/*  />*/ }
        <meta name="title" content="Летсницы для дома купить в СПб" />
        <meta name="description" content="Лестницы для дома в Санкт-Петербурге, производство Ковка-Навес в Санкт-Петербурге " />
        {/*  <meta name="keywords" content="Ковка СПб, художественная ковка, кованые перила, лестницы, кованые заборы, кованые ограждения, кованые ворота, решётки на окна, сварные и кованые козырьки, ворота, навесы, беседки, скамейки, кованые фонари, мангалы, цветочницы." />*/ }
        {/*  <meta name="robots" content="index, follow" />*/ }
        {/*  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />*/ }
        {/*  <meta name="language" content="Russian" />*/ }
        {/*  <meta name="revisit-after" content="7 days" />*/ }
      </Helmet>
      <div className={ styles.stairs }>
        <h1 className={ styles.pageName }>Лестницы</h1>
        <div className={ styles.helloTextDiv }>
          <p className={ styles.helloText }>Исследуйте наш ассортимент лестниц, предназначенных для облегчения доступа
            ко второму этажу или другим
            высоким уровням. У нас есть лестницы разных типов и конструкций, включая винтовые, прямые и раздвижные
            лестницы, чтобы помочь вам выбрать наиболее подходящую для вашего пространства.</p>
        </div>
        <div className={ styles.cards }>
          { sortedData.length
            ? sortedData.map((item) => (
              <ProtfolioCard
                key={ item.id }
                item={ sortedData }
                path={ arrPath }
                img={ item.img }
                price={ item.price }
                articul={ item.articul }
                namePage={ "stairs" }
                nameIzdelie={ "Лестница " }
              />
            ))
            : "Loading..." }
        </div>
      </div>
    </>
  );
}