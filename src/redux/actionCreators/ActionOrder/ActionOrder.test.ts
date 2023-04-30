import {
    deleteOrder,
    openOrder,
    openOrderModal,
} from './ActionOrder'
import {
    OPEN_ORDER,
    OPEN_ORDER_NE_MODAL,
    DELETE_ORDER,
} from "../../actionType/openOrder"
import { ElementOrders } from '../../../utils/TypesAndIntareface'


describe('Action creators DELETE_ORDER', () => {
    it('удаление заказа', () => {
    
      const expectedAction = {
        type: DELETE_ORDER,
      }

      expect(deleteOrder()).toEqual(expectedAction)
    })
  }) 

describe('Action creators OPEN_ORDER', () => {
    it('открытие заказа', () => {

      const fakeOrder: ElementOrders = {
        createdAt: '23-09-2001',
        ingredients: [
            '643d69a5c3f7b9001cfa093c',
            '643d69a5c3f7b9001cfa0941',
            '643d69a5c3f7b9001cfa093e'
        ],
        name: 'Space флюоресцентный spicy бургер',
        number: 3,
        status: 'done',
        updatedAt: '2023-04-18T09:29:04.356Z',
        _id: '643e62e045c6f2001be6afef',
      }
    
      const expectedAction = {
        type: OPEN_ORDER,
        payload: fakeOrder,
      }

      expect(openOrder(fakeOrder)).toEqual(expectedAction)
    })
  }) 

describe('Action creators OPEN_ORDER_NE_MODAL', () => {
    it('проверка на модальное окно', () => {
    
      const expectedAction = {
        type: OPEN_ORDER_NE_MODAL,
        payload: false
      }

      expect(openOrderModal(false)).toEqual(expectedAction)
    })
  }) 





export{}