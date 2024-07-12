import React, { useEffect, useState } from "react";
import styles from "./benches.css";
import { ProtfolioCard } from "../../components/Portfolio/ProtfolioCard";
import { Helmet } from "react-helmet-async";

interface ItemTovar {
  id: number;
  img: string;
  price: number;
  articul: number;
}

export function Benches() {
  
  const [ dataFromDB, setDataFromDB ] = useState<ItemTovar[]>([]);
  const [ sortedData, setSortedData ] = useState<ItemTovar[]>([]);
  const [ arrPath, setArrPath ] = useState<string[]>([]);
  
  useEffect(() => {
    fetch(`/api/db/benches`).then((response: any) => response.json()).then((data: ItemTovar[]) => setDataFromDB(data)).catch((error: any) => console.error(error));
    
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
        <title>Скамейки уличные купить в СПб</title>
        <meta name="title" content="Скамейки уличные купить в СПБ" />
        <meta name="description" content="Скамейки в Санкт-Петербурге, производство Ковка-Навес в Санкт-Петербурге " />
      </Helmet>
      <div className={ styles.benches }>
        <h1 className={ styles.pageName }>Скамейки</h1>
        <div className={ styles.helloTextDiv }>
          <p className={ styles.helloText }>Добавьте функциональность и стиль в своем саду или на вашей территории с
            нашими скамейками. Наш каталог
            включает в себя различные размеры и дизайны скамеек, выполненных из различных материалов, таких как дерево,
            металл или пластик, чтобы помочь вам создать комфортное и привлекательное место для отдыха и релаксации.</p>
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
                namePage={ "benches" }
                nameIzdelie={ "Скамейка" }
              />
            ))
            : "Loading..." }
        </div>
      </div>
    </>
  );
}