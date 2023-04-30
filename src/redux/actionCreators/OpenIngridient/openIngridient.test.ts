import { TIngredientItem } from "../../../utils/TypesAndIntareface"
import {
    OPEN_INGRIDIENT,
    DELETE_INGRIDIENT,
    OPEN_MODAL
} from "../../actionType/openIngridient"
import {
    openIngridient,
    deleteIngridient,
    openModal,
} from './openIngridient'


describe('Action creators OPEN_INGRIDIENT', () => {
    it('Открыть ингридиент', () => {
        
      const ingridient: TIngredientItem = {
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
      }

      const expectedAction = {
        type: OPEN_INGRIDIENT,
        payload: ingridient,
      }

      expect(openIngridient(ingridient)).toEqual(expectedAction)
    })
  }) 



export {}