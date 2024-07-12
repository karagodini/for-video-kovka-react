import React, { useEffect, useState } from "react";
import styles from "./gates.css";
import { ProtfolioCard } from "../../components/Portfolio/ProtfolioCard";
import { Helmet } from "react-helmet-async";

interface ItemTovar {
  id: number;
  img: string;
  price: number;
  articul: number;
}

export function Gates() {
  
  const [ dataFromDB, setDataFromDB ] = useState<ItemTovar[]>([]);
  const [ sortedData, setSortedData ] = useState<ItemTovar[]>([]);
  const [ arrPath, setArrPath ] = useState<string[]>([]);
  
  useEffect(() => {
    fetch(`/api/db/gates`).then((response: any) => response.json()).then((data: ItemTovar[]) => setDataFromDB(data)).catch((error: any) => console.error(error));
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
        <title>Кованые ворота купить в СПб</title>
        <meta name="title" content="Кованые ворота купить в спб" />
        <meta name="description" content="Кованые металлические ворота в СПб, производство Ковка-Навес в Санкт-Петербурге " />
      </Helmet>
      <div className={ styles.gates }>
        <h1 className={ styles.pageName }>Ворота</h1>
        <div className={ styles.helloTextDiv }>
          <p className={ styles.helloText }>Ознакомьтесь с нашим широким выбором ворот, которые обеспечат безопасность и
            удобство входа на вашу
            территорию. Мы предлагаем различные стили, от классических до современных, а также разные варианты
            открывания, чтобы выбрать то, что идеально подходит для ваших потребностей.</p>
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
                namePage={ "gates" }
                nameIzdelie={ "Ворота " }
              />
            ))
            : "Loading..." }
        </div>
      </div>
    </>
  );
}

// <Card
//   pathToImg={"/gates/160.jpg"}
//   vid={"/close"}
//   name={"Кованые ворота закрытого типа"}
//   installationPrice={"800"}
//   turnkeyPrice={"1200"}
//   element={"gates"}
//   nameIzdelie={"Ворота закрытого типа"}
// />
// <Card
//   pathToImg={"/gates/130.jpg"}
//   vid={"/open"}
//   name={"Кованые ворота открытого типа"}
//   installationPrice={"800"}
//   turnkeyPrice={"1900"}
//   element={"gates"}
//   nameIzdelie={"Ворота открытого типа"}
// />
// <Card
//   pathToImg={"/gates/131.jpg"}
//   vid={"/polycarbonate"}
//   name={"Кованые ворота с поликарбонатом"}
//   installationPrice={"800"}
//   turnkeyPrice={"1200"}
//   element={"gates"}
//   nameIzdelie={"Кованые ворота с поликарбонатом"}
// />