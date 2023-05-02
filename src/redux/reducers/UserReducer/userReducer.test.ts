import { ingridientDragMass, ingridientList, stringError, testUser, testUserNull } from './../../../utils/testData';
import { initialState, userReducer } from "./userReduser"
import *as type from '../../actionType/userType'


const errorTrueInitialState = {
  ...initialState,
  error: stringError,
}

const testUserTrueInitialState = {
  ...initialState,
  user: testUser
}

describe('userReducer', () => { 
  
    it('Ошибка регистрации', () => {

      const action = {
        type: type.REGISTER_USER_ERROR,
        payload: stringError,
      }
  
      expect(userReducer(initialState, action)).toEqual({
        ...initialState,
        error: action.payload
      })
    })

    it('Обнуление ошибки', () => {

        const action = {
          type: type.REGISTER_USER_ERROR_NULL,
        }
    
        expect(userReducer(errorTrueInitialState, action)).toEqual({
          ...errorTrueInitialState,
          error: "",
        })
      })

      it('Успешная регистрация', () => {

        const action = {
          type: type.REGISTER_USER_SUCCESS,
        }
    
        expect(userReducer(errorTrueInitialState, action)).toEqual({
          ...errorTrueInitialState,
          register: !initialState.register,
        })
      })

      it('Сохранить данные о пользователе', () => {

        const action = {
          type: type.SET_USER,
          user: testUser
        }
    
        expect(userReducer(errorTrueInitialState, action)).toEqual({
          ...errorTrueInitialState,
          user: action.user,
          error: "",
          login: true,
        })
      })

      it('Ошибка авторизации', () => {

        const action = {
          type: type.LOGIN_USER_ERROR,
          payload: stringError,
        }
    
        expect(userReducer(initialState, action)).toEqual({
          ...initialState,
          error: action.payload
        })
      })


      it('Обнуление ошибки авторизации', () => {

        const action = {
          type: type.LOGIN_USER_ERROR_NULL,
        }
    
        expect(userReducer(errorTrueInitialState, action)).toEqual({
          ...errorTrueInitialState,
          error: "",
        })
      })

      it('Выход пользователя', () => {


        const action = {
          type: type.LOGOUT,
        }
    
        expect(userReducer(testUserTrueInitialState, action)).toEqual({
            ...testUserTrueInitialState,
            user: testUserNull,
        })
      })


      it('Изменение пароля', () => {
    
        const action = {
          type: type.FORGOT_PASSWORD_ERROR,
          payload: stringError,
        }
    
        expect(userReducer(initialState, action)).toEqual({
          ...initialState,
          error: action.payload
        })
      })


      it('Обнуление ошибки изменения пароля', () => {


        const action = {
          type: type.FORGOT_PASSWORD_ERROR_NULL,
        }
    
        expect(userReducer(errorTrueInitialState, action)).toEqual({
          ...errorTrueInitialState,
          error: "",
        })
      })

      it('Успешная Смена пароля', () => {

        const action = {
          type: type.FORGOT_PASSWORD_SUCCESS,
        }
    
        expect(userReducer(initialState, action)).toEqual({
          ...initialState,
          forgotPassword: !initialState.forgotPassword,
        })
      })

      it('Ошибка смены пароля', () => {

    
        const action = {
          type: type.RESET_PASSWORD_ERROR,
          payload: stringError,
        }
    
        expect(userReducer(initialState, action)).toEqual({
          ...initialState,
          error: action.payload
        })
      })

      it('Обнуление ошибки изменения пароля 2 этап', () => {

        const action = {
          type: type.RESET_PASSWORD_ERROR_NULL,
        }
    
        expect(userReducer(errorTrueInitialState, action)).toEqual({
          ...errorTrueInitialState,
          error: "",
        })
      })

      it('Успешная Смена пароля 2 этап', () => {

        const action = {
          type: type.RESET_PASSWORD_SUCCESS,
        }
    
        expect(userReducer(initialState, action)).toEqual({
          ...initialState,
          resetPassword: !initialState.resetPassword,
        })
      })

      it('Получение пользователя', () => {

        const action = {
          type: type.GET_USER,
          payload: testUser,
        }
    
        expect(userReducer(initialState, action)).toEqual({
          ...initialState,
          user: action.payload,
        })
      })

      it('Обновление данных пользователя', () => {

        const action = {
          type: type.UPDATE_USER,
          payload: testUser,
        }
    
        expect(userReducer(testUserTrueInitialState, action)).toEqual({
          ...testUserTrueInitialState,
          user: action.payload,
        })
      })

      it('Ошибка обновления данных пользователя', () => {

        const newInitialState = {
            ...initialState,
            updateStart: true,
        }

        const action = {
          type: type.UPDATE_ERROR,
          payload: stringError,
        }
    
        expect(userReducer(newInitialState, action)).toEqual({
          ...initialState,
          error: action.payload,
          updateStart: false,
        })
      })

      it('Успешное обновление пользователя', () => {

        const newinitialState = {
            ...initialState,
            user: testUser,
            error: stringError,
        }

        const action = {
          type: type.UPDATE_SUCCESS,
        }
    
        expect(userReducer(newinitialState, action)).toEqual({
          ...newinitialState,
          updateSuccess: !initialState.updateSuccess,
          updateStart: false,
          error: "",
        })
      })

      it('начала обновления пользователя', () => {

        const action = {
          type: type.UPDATE_START,
        }
    
        expect(userReducer(testUserTrueInitialState, action)).toEqual({
          ...testUserTrueInitialState,
          updateStart: true,
        })
      })
      
  
  })

export {}