import React, { useEffect, useState } from "react";
import styles from "./protfoliocard.css";
import { Cancel } from "../../../images/Cancel";
import { LeftArrow } from "../../../images/LeftArrow";
import { RightArrow } from "../../../images/RightArrow";

interface ItemTovar {
  id: number;
  img: string;
  price: number;
  articul: number;
}

interface IPortfolioCard {
  path: string[];
  price: number;
  namePage: string;
  nameIzdelie?: string;
  img: string;
  articul: number;
  item: ItemTovar[];
}

export function ProtfolioCard({
  path,
  price,
  namePage,
  nameIzdelie,
  img,
  articul,
  item,
}: IPortfolioCard) {
  const [ currentImageIndex, setCurrentImageIndex ] = useState(0);
  const [ showImage, setShowImage ] = useState(false);
  
  const handleClick = (articul: number) => {
    setCurrentImageIndex(Number(articul) - 1);
    setShowImage(true);
  };
  
  const handleClose = () => {
    setShowImage(false);
  };
  
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? path.length - 1 : prevIndex - 1
    );
  };
  
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === path.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 27:
        setShowImage(false);
        break;
      case 37:
        handlePrevImage();
        break;
      case 39:
        handleNextImage();
        break;
    }
  };
  
  return (
    <>
      <div className={ styles.mainCard } onClick={ () => handleClick(articul) }>
        <div
          className={ styles.card }
          style={ { backgroundImage: `url(/images/${ namePage }/${ img })` } }
        />
        <div className={ styles.info }>
          <h3>
            { nameIzdelie } { articul }
          </h3>
          { price ? <p>Цена: { price } Р</p> : <p>Цена: От 7000 Р</p> }
        </div>
      </div>
      { showImage && (
        <>
          <div className={ styles.popup }>
            <div className={ styles.imageContainer }>
              <div onClick={ handlePrevImage } className={ styles.arrowLeft }>
                <LeftArrow />
              </div>
              <img
                className={ styles.img }
                src={ `/images/${ namePage }/${ item[currentImageIndex].img }` }
                alt="popup"
              />
              <div onClick={ handleNextImage } className={ styles.arrowRight }>
                <RightArrow />
              </div>
            </div>
            <div className={ styles.cancelImg } onClick={ handleClose }>
              <Cancel />
            </div>
            <h3>
              { nameIzdelie } { item[currentImageIndex].articul }
            </h3>
            <p>Цена: { item[currentImageIndex].price } Р</p>
          </div>
          <div className={ styles.overlay }></div>
        </>
      ) }
    </>
  );
}