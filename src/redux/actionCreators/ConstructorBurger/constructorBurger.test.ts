import { TIngredientItemDragId } from '../../../utils/TypesAndIntareface';
import {
    GET_COST,
    ADD_BUN_CONSTRUCTOR,
    ADD_INGRIDIENT_CONSTRUCTOR,
    DELETE_INGRIDIENT_CONSTRUCTOR,
    MOVE_INGRIDIENT_CONSTRUCTOR,
    CLEAR_CONSTRUCTOR,
} from './../../actionType/constructorBurger';
import {
    addIngridientsConstructor,
    deleteIngridientsConstructor,
    moveIngridientsConstructor,
    addBunConstructor,
    getCost,
    clearConstructor,
} from './constructorBurger';

describe('Action creators GET_COST', () => {
    it('Подсчет суммы', () => {
        
      const sum: number = 1333  

      const expectedAction = {
        type: GET_COST,
        payload: sum,
      }

      expect(getCost(sum)).toEqual(expectedAction)
    })
  }) 

describe('Action creators ADD_BUN_CONSTRUCTOR', () => {
    it('Добавление булок', () => {
        
      const ingr: TIngredientItemDragId = {
            _id: '643d69a5c3f7b9001cfa093c',
            name: "Соус фирменный Space Sauce",
            type: "sauce",
            proteins: 50,
            fat: 100,
            carbohydrates: 93,
            calories: 11,
            price: 111,
            image: "https://code.s3.yandex.net/react/code/sauce-04.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
            __v: 0,
            dragId: "f7e360dd-4467-4fc6-b61a-49e5f3c94704",
      }  

      const expectedAction = {
        type: ADD_BUN_CONSTRUCTOR,
        payload: ingr,
      }

      expect(addBunConstructor(ingr)).toEqual(expectedAction)
    })
  })

describe('Action creators ADD_INGRIDIENT_CONSTRUCTOR', () => {
    it('Добавление ингридиента', () => {
        
      const ingr: TIngredientItemDragId = {
            _id: '643d69a5c3f7b9001cfa093c',
            name: "Соус фирменный Space Sauce",
            type: "sauce",
            proteins: 50,
            fat: 100,
            carbohydrates: 93,
            calories: 11,
            price: 111,
            image: "https://code.s3.yandex.net/react/code/sauce-04.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
            __v: 0,
            dragId: "f7e360dd-4467-4fc6-b61a-49e5f3c94704",
      }  

      const expectedAction = {
        type: ADD_INGRIDIENT_CONSTRUCTOR,
        payload: ingr,
      }

      expect(addIngridientsConstructor(ingr)).toEqual(expectedAction)
    })
  })

  describe('Action creators MOVE_INGRIDIENT_CONSTRUCTOR', () => {
    it('Перемещение ингридиента', () => {
        
      const ingr: TIngredientItemDragId[] = [{
            _id: '643d69a5c3f7b9001cfa093c',
            name: "Соус фирменный Space Sauce",
            type: "sauce",
            proteins: 50,
            fat: 100,
            carbohydrates: 93,
            calories: 11,
            price: 111,
            image: "https://code.s3.yandex.net/react/code/sauce-04.png",
            image_mobile: "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
            image_large: "https://code.s3.yandex.net/react/code/sauce-04-large.png",
            __v: 0,
            dragId: "f7e360dd-4467-4fc6-b61a-49e5f3c94704",
      }]  

      const expectedAction = {
        type: MOVE_INGRIDIENT_CONSTRUCTOR,
        payload: ingr,
      }

      expect(moveIngridientsConstructor(ingr)).toEqual(expectedAction)
    })
  })

  describe('Action creators DELETE_INGRIDIENT_CONSTRUCTOR', () => {
    it('удаление ингридиента', () => {
        
      const id: string = "643d69a5c3f7b9001cfa0943" 

      const expectedAction = {
        type: DELETE_INGRIDIENT_CONSTRUCTOR,
        payload: id,
      }

      expect(deleteIngridientsConstructor(id)).toEqual(expectedAction)
    })
  })

  describe('Action creators CLEAR_CONSTRUCTOR', () => {
    it('очистка конструктора', () => {
        
      const expectedAction = {
        type: CLEAR_CONSTRUCTOR,
      }

      expect(clearConstructor()).toEqual(expectedAction)
    })
  })


export{}