import React, { useEffect, useState } from "react";
import styles from "./railing.css";
import { ProtfolioCard } from "../../components/Portfolio/ProtfolioCard";
import { Helmet } from "react-helmet-async";

interface ItemTovar {
  id: number;
  img: string;
  price: number;
  articul: number;
}

export function Railing() {
  
  const [ dataFromDB, setDataFromDB ] = useState<ItemTovar[]>([]);
  const [ sortedData, setSortedData ] = useState<ItemTovar[]>([]);
  const [ arrPath, setArrPath ] = useState<string[]>([]);
  
  useEffect(() => {
    fetch(`/api/db/railing`).then((response: any) => response.json()).then((data: ItemTovar[]) => setDataFromDB(data)).catch((error: any) => console.error(error));
    
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
      {/*<Helmet title="Перила и оградки для дома купить в СПб" />*/ }
      
      <Helmet>
        <title>Перила и оградки для дома купить в СПб</title>
        <meta name="title" content="Перила и оградки для дома купить в СПб" />
        {/*  <meta*/ }
        {/*    name="title"*/ }
        {/*    content="Перила и оградки для дома купить в СПб"*/ }
        {/*  />*/ }
        <meta name="description" content="Перила и оградки в Санкт-Петербурге, производство Ковка-Навес в Санкт-Петербурге " />
        {/*  <meta name="keywords" content="Ковка СПб, художественная ковка, кованые перила, лестницы, кованые заборы, кованые ограждения, кованые ворота, решётки на окна, сварные и кованые козырьки, ворота, навесы, беседки, скамейки, кованые фонари, мангалы, цветочницы." />*/ }
        {/*  <meta name="robots" content="index, follow" />*/ }
        {/*  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />*/ }
        {/*  <meta name="language" content="Russian" />*/ }
        {/*  <meta name="revisit-after" content="7 days" />*/ }
      </Helmet>
      <div className={ styles.railing }>
        <h1 className={ styles.pageName }>Перила</h1>
        <div className={ styles.helloTextDiv }>
          <p className={ styles.helloText }>Обеспечьте безопасность и стиль вашим лестницам или балконам с нашими
            перилами. Наш каталог включает в себя
            различные материалы, такие как нержавеющая сталь, дерево или алюминий, а также различные дизайны и отделки,
            чтобы добавить элегантности вашему интерьеру или экстерьеру.</p>
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
                namePage={ "railing" }
                nameIzdelie={ "Перила " }
              />
            ))
            : "Loading..." }
        </div>
      </div>
    </>
  );
}