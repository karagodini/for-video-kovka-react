import React, { useEffect, useState } from "react";
import styles from "./gratings.css";
import { ProtfolioCard } from "../../components/Portfolio/ProtfolioCard";
import { Helmet } from "react-helmet-async";

interface ItemTovar {
  id: number;
  img: string;
  price: number;
  articul: number;
}

export function Gratings() {
  
  const [ dataFromDB, setDataFromDB ] = useState<ItemTovar[]>([]);
  const [ sortedData, setSortedData ] = useState<ItemTovar[]>([]);
  const [ arrPath, setArrPath ] = useState<string[]>([]);
  
  useEffect(() => {
    fetch(`/api/db/gratings`).then((response: any) => response.json()).then((data: ItemTovar[]) => setDataFromDB(data)).catch((error: any) => console.error(error));
    
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
      {/*<Helmet title="Кованые решетки купить в СПб. Кованые решётки на окна купить в СПб" />*/ }
      <Helmet>
        <title>Кованые решетки купить в СПб. Кованые решётки на окна купить в СПб</title>
        {/*  <meta*/ }
        {/*    name="title"*/ }
        {/*    content="Кованые и металлические изделия в Санкт-Петербурге"*/ }
        {/*  />*/ }
        <meta name="title" content="Кованые решетки купить в СПб. Кованые решётки на окна купить в СПб" />
        <meta name="description" content="Решетки на окна в Санкт-Петербурге, производство Ковка-Навес в Санкт-Петербурге " />
        {/*  <meta name="keywords" content="Ковка СПб, художественная ковка, кованые перила, лестницы, кованые заборы, кованые ограждения, кованые ворота, решётки на окна, сварные и кованые козырьки, ворота, навесы, беседки, скамейки, кованые фонари, мангалы, цветочницы." />*/ }
        {/*  <meta name="robots" content="index, follow" />*/ }
        {/*  <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />*/ }
        {/*  <meta name="language" content="Russian" />*/ }
        {/*  <meta name="revisit-after" content="7 days" />*/ }
      </Helmet>
      <div className={ styles.gratings }>
        
        <h1 className={ styles.pageName }>Решетки</h1>
        <div className={ styles.helloTextDiv }>
          <p className={ styles.helloText }>Наш каталог решеток включает в себя различные стили и размеры, чтобы помочь
            вам обеспечить безопасность и
            эстетическую привлекательность вашего дома или офиса. Вы найдете решетки из различных материалов, таких как
            железо или алюминий, а также различные дизайны, чтобы соответствовать вашему вкусу и стилю.</p>
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
                namePage={ "gratings" }
                nameIzdelie={ "Решетка " }
              />
            ))
            : "Loading..." }
        </div>
      </div>
    </>
  );
}