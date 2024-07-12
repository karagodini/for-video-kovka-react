import React, { useEffect, useState } from "react";
import styles from "./canopies.css";
import { ProtfolioCard } from "../../components/Portfolio/ProtfolioCard";
import { Helmet } from "react-helmet-async";

interface ItemTovar {
  id: number;
  img: string;
  price: number;
  articul: number;
}

export function Canopies() {
  
  const [ dataFromDB, setDataFromDB ] = useState<ItemTovar[]>([]);
  const [ sortedData, setSortedData ] = useState<ItemTovar[]>([]);
  const [ arrPath, setArrPath ] = useState<string[]>([]);
  
  useEffect(() => {
    fetch(`/api/db/canopies`).then((response: any) => response.json()).then((data: ItemTovar[]) => setDataFromDB(data)).catch((error: any) => console.error(error));
  }, []);
  
  useEffect(() => {
    setSortedData([ ...dataFromDB ].sort((a, b) => a.articul - b.articul))
  }, [ dataFromDB ]);
  
  useEffect(() => {
    const imgArray = sortedData.map((item) => item.img);
    setArrPath(imgArray);
  }, [ sortedData ]);
  
  return (
    <>
      <Helmet>
        <title>Навесы для автомобилей и козырьки в дом купить в СПб</title>
        <meta name="title" content="Навесы для автомобилей и козырьки в дом купить в СПб" />
        <meta name="description" content="Навесы для автомобилей в Санкт-Петербурге, производство Ковка-Навес в Санкт-Петербурге " />
      </Helmet>
      <div className={ styles.canopies }>
        <h1 className={ styles.pageName }>Навесы</h1>
        <div className={ styles.helloTextDiv }>
          <p className={ styles.helloText }>Исследуйте наш разнообразный каталог навесов, предназначенных для защиты
            вашего автомобиля от погодных
            условий. Также здесь представлены козырьки, для входной группы. В нашем каталоге представлены различные
            навесы: кованые, односкатные навесы, двускатные навесы, арочные навесы. У нас есть навесы различных
            размеров, стилей и материалов, цветов, чтобы удовлетворить все ваши потребности
            и предпочтения. Также мы можем сделать навес по вашим эскизам и вашим пожеланиям.</p>
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
                namePage={ "canopies" }
                nameIzdelie={ "Навес" }
              />
            ))
            : "Loading..." }
        </div>
      </div>
    </>
  );
}

{
  /* {dataFromDB.length
  ? dataFromDB.map((item) => (
      <div key={item.id} className={styles.tovar}>
        <img
          key={item.id}
          src={require(`../../../images/${item.img}`)}
          className={styles.image}
        />
        <h2>Навес №{item.id}</h2>
      </div>
    ))
  : "Loading..."} */
}