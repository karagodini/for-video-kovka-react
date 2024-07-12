import React, { useEffect, useState } from "react";
import styles from "./fence.css";
import { ProtfolioCard } from "../../components/Portfolio/ProtfolioCard";
import { Helmet } from "react-helmet-async";

interface ItemTovar {
  id: number;
  img: string;
  price: number;
  articul: number;
}

export function Fence() {
  
  const [ dataFromDB, setDataFromDB ] = useState<ItemTovar[]>([]);
  const [ sortedData, setSortedData ] = useState<ItemTovar[]>([]);
  const [ arrPath, setArrPath ] = useState<string[]>([]);
  
  useEffect(() => {
    fetch(`/api/db/fence`).then((response: any) => response.json()).then((data: ItemTovar[]) => setDataFromDB(data)).catch((error: any) => console.error(error));
    
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
      <Helmet>
        <title>Кованые заборы купить в СПб</title>
        <meta name="title" content="Кованые заборы купить в спб" />
        <meta name="description" content="Кованые заборы в Санкт-Петербурге, производство Ковка-Навес в Санкт-Петербурге " />
      </Helmet>
      <div className={ styles.fence }>
        
        <h1 className={ styles.pageName }>Заборы</h1>
        <div className={ styles.helloTextDiv }>
          <p className={ styles.helloText }>Исследуйте нашу коллекцию заборов, которые помогут вам обозначить границы
            вашей собственности и обеспечить
            конфиденциальность. У нас есть заборы из различных материалов, таких как дерево, металл или композитные
            материалы, а также различные стили, чтобы соответствовать вашему вкусу и потребностям.</p>
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
                namePage={ "fence" }
                nameIzdelie={ "Забор " }
              />
            ))
            : "Loading..." }
        </div>
      </div>
    </>
  );
}