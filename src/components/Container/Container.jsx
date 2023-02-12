import React from 'react';
import style from './Container.module.css'
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const Container = (props) => {
    return (
        <div className="bul">
                            <div className="pt-6 pl-4">
                                <div className={style.flex}>
                                        {props.list.lenght !== 0 && props.list.map((mas, index) => 
                                                    <div key={index}>{index === 0 ?
                                                        <Card mas={mas}  handleClick={props.handleClickIngridients} />
                                                        : index === 1 ?
                                                        <div className="ml-6">
                                                            <Card mas={mas} handleClick={props.handleClickIngridients} />
                                                        </div>
                                                        
                                                        : index % 2 !== 0 ? 
                                                            <>
                                                            <div className="ml-6 mt-8">
                                                                <Card mas={mas} handleClick={props.handleClickIngridients} />
                                                            </div>
                                                            
                                                            </> : <>
                                                                <div className="mt-8">
                                                                    <Card mas={mas}  handleClick={props.handleClickIngridients} />
                                                                </div>   
                                                            </>

                                                    }</div>       
                                                )}
                                </div>
                            </div>
                        </div>
    );
}

Container.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
        calories: PropTypes.number,
        carbohydrates: PropTypes.number,
        fat: PropTypes.number,
        image: PropTypes.string,
        image_large: PropTypes.string,
        image_mobile: PropTypes.string,
        name: PropTypes.string,
        price: PropTypes.number,
        proteins: PropTypes.number,
        type: PropTypes.string,
        __v: PropTypes.number,
        _id: PropTypes.string,
  })).isRequired,
    handleClickIngridients: PropTypes.func.isRequired,

  }; 


export default Container;
