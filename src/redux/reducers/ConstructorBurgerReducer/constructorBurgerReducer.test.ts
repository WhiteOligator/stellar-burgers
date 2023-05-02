import { ingridientDrag, ingridientDragMass, numTest, oneIngridient } from './../../../utils/testData';
import  { initialState, constructorBurgerReducer } from './constructorBurgerReducer'
import * as type from '../../actionType/constructorBurger'


describe('constructorBurgerReducer', () => { 
  
    it('Обновить стоимость', () => { 
      const action = {
        type: type.GET_COST,
        payload: numTest,
      }
  
      expect(constructorBurgerReducer(initialState, action)).toEqual({
        ...initialState,
        costOfTheOrder: action.payload,
      })
    })

    it('Очистить конструктор', () => { 
        const action = {
          type: type.CLEAR_CONSTRUCTOR,
        }
    
        expect(constructorBurgerReducer(initialState, action)).toEqual({
            ...initialState,
            ingridients: [],
            costOfTheOrder: 0,
            whatKindOfBun: [],
        })
      })

      it('Добавить булки', () => {
          
        const action = {
          type: type.ADD_BUN_CONSTRUCTOR,
          payload: ingridientDrag,
        }
    
        expect(constructorBurgerReducer(initialState, action)).toEqual({
          ...initialState,
          whatKindOfBun: [action.payload, action.payload]
        })
      })

      it('Переместить булку', () => {
          
        const action = {
          type: type.MOVE_INGRIDIENT_CONSTRUCTOR,
          payload: ingridientDragMass,
        }
    
        expect(constructorBurgerReducer(initialState, action)).toEqual({
          ...initialState,
          ingridients: action.payload,
        })
      })

      it('Удалить ингридиент', () => {
          
        const action = {
          type: type.DELETE_INGRIDIENT_CONSTRUCTOR,
          payload: oneIngridient,
        }
    
        expect(constructorBurgerReducer(initialState, action)).toEqual({
          ...initialState,
          ingridients: initialState.ingridients.filter((el) => el.dragId !== action.payload),
        })
      })

      it('Добавить ингридиент', () => {
          
        const action = {
          type: type.ADD_INGRIDIENT_CONSTRUCTOR,
          payload: ingridientDrag,
        }
    
        expect(constructorBurgerReducer(initialState, action)).toEqual({
          ...initialState,
          ingridients: [...initialState.ingridients, action.payload],
        })
      })
  
  })

export {}