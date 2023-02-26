import React from 'react';
import style from './Container.module.css'
import Card from '../Card/Card';
import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/utils';

const Container = (props) => {
    return (
        <section className="bul">
                            <div className="pt-6 pl-4">
                                <div className={style.flex}>
                                        {props.list.lenght !== 0 && props.list.map((ingredient, index) => 
                                                    
                                                        <Card key={ingredient._id} ingredient={ingredient}   />
                                                          
                                                )}
                                </div>
                            </div>
                        </section>
    );
}

Container.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape(ingredientType)).isRequired,

  }; 


export default Container;
