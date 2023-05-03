import { ingridient } from '../../../utils/testData'
import *as type from '../../actionType/openIngridient'
import {initialState, openIngridientReducer} from './openIngridientReducer'

describe('openIngridientReducer', () => { 
  
    it('открыть ингридиент', () => {

        const action = {
            type: type.OPEN_INGRIDIENT,
            payload: ingridient,
        }
  
        expect(openIngridientReducer(initialState, action)).toEqual({
            ...initialState,
            ingridient: action.payload,
            openIngridient: true,
        })
    })

    it('Удалить ингридиент', () => { 

        const newInitialState = {
          ingridient: ingridient,
          openIngridient: true,
        }

        const action = {
          type: type.DELETE_INGRIDIENT,
        }
    
        expect(openIngridientReducer(newInitialState, action)).toEqual({
            ingridient: null,
            openIngridient: false,
        })
      })

    it('Открыть модальное окно', () => {

        const newInitialState = { 
            ingridient: ingridient,
            openIngridient: false,
          }
          
        const action = {
          type: type.OPEN_MODAL,
        }
    
        expect(openIngridientReducer(newInitialState, action)).toEqual({
            ingridient: null,
            openIngridient: true,
        })
      })

      
  
  })

export {}