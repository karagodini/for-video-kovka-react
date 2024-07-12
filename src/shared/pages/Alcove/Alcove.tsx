import React, { useEffect, useState } from "react";
import styles from "./alcove.css";
import { ProtfolioCard } from "../../components/Portfolio/ProtfolioCard";
import { Helmet } from "react-helmet-async";

interface ItemTovar {
  id: number;
  img: string;
  price: number;
  articul: number;
}

export function Alcove() {
  
  const [ dataFromDB, setDataFromDB ] = useState<ItemTovar[]>([]);
  const [ sortedData, setSortedData ] = useState<ItemTovar[]>([]);
  const [ arrPath, setArrPath ] = useState<string[]>([]);
  
  useEffect(() => {
    fetch(`/api/db/alcove`).then((response: any) => response.json()).then((data: ItemTovar[]) => setDataFromDB(data)).catch((error: any) => console.error(error));
    
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
        <title>Кованые беседки в дом купить в СПб</title>
        <meta name="title" content="Кованые беседки в дом купить в СПб" />
        <meta name="description" content="Кованые беседки в дом в Санкт-Петербурге, производство Ковка-Навес в Санкт-Петербурге " />
      </Helmet>
      <div className={ styles.alcove }>
        <h1 className={ styles.pageName }>Беседки</h1>
        <div className={ styles.helloTextDiv }>
          <p className={ styles.helloText }>Создайте уютную и отдыхающую атмосферу на своем дворе с нашими беседками. В
            нашем каталоге представлены
            разные размеры и стили беседок, от классических до современных, а также различные материалы, такие как
            дерево или металл, чтобы помочь вам создать идеальное пространство для отдыха и общения.</p>
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
                namePage={ "alcove" }
                nameIzdelie={ "Беседка" }
              />
            ))
            : "Loading..." }
        </div>
      </div>
    </>
  );
}