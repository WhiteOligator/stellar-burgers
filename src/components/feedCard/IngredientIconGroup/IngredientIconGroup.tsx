import clsx from 'clsx'
import { FC } from "react";
import styles from "./IngredientIconGroup.module.css";

interface IngredientIconProps {
  srcSet: string;
  src: string;
  alt?: string;
  overflow: number;
  extraClass?: string;
  len: number
}

export const IngredientIcon: FC<IngredientIconProps> = ({
  srcSet,
  src,
  alt = "ingredient",
  len,
  overflow,
  extraClass
}) => {


  return (
    <div>
     { overflow <= 4
        ?
        <div className={clsx(styles.container, extraClass)}>
            <picture className={styles.picture}>
              <source srcSet={srcSet} />
              <img src={src} alt={alt} width="112" height="56" />
            </picture>
        </div>
        :
        <>
          {overflow === 5 && (
            <div className={clsx(styles.container, extraClass)}>
              <picture className={styles.picture}>
                <source srcSet={srcSet} />
                <img src={src} alt={alt} width="112" height="56" />
              </picture>
              <div
                className={clsx(styles.container, styles.picture, styles.overflow)}
              >
                <div className={clsx(styles.picture, "text text_type_main-small")}>
                  +{len - 5}
                </div>
              </div>
            </div>  
              
            )}
        </>
      }
    </div>
  );
};