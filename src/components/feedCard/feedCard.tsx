import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import  './feedCard.css'
import { IngredientIcon } from "./IngredientIconGroup/IngredientIconGroup";

const FeedCard = () => {

    const pic = "https://code.s3.yandex.net/react/code/bun-02.png";
    const icons = [pic, pic, pic, pic, pic, pic].map((el, index) => (
        <IngredientIcon
          src={el}
          srcSet={el}
          overflow={!index ? 6 : 0}
          extraClass="items_picture"
        />
      ));


    return (
        <div className="card mb-4 mr-2">
            <div className="block1">
                <p className="text text_type_main-default">
                    #034535 
                </p>
                <p className="text text_type_main-default text_color_inactive">
                    Сегодня, 16:20 
                </p>
            </div>
            <div className="block2">
                <p className="text text_type_main-medium">
                    Death Star Starship Main бургер
                </p>
            </div>
            <div className="block3">
                <div className="items_list">{icons}</div>
                <div className="cost">
                    <p className="text text_type_digits-default mr-2">480</p>
                    <CurrencyIcon  type="primary" />
                </div>
            </div>
        </div>
    );
}

export default FeedCard