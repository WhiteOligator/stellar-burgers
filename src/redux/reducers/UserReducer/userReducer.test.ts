import { ingridientDragMass, ingridientList } from './../../../utils/testData';
import { initialState, userReducer } from "./userReduser"
import *as type from '../../actionType/userType'


describe('userReducer', () => { 
  
    it('Ошибка регистрации', () => {

      const action = {
        type: type.REGISTER_USER_ERROR,
        payload: 'error',
      }
  
      expect(userReducer(initialState, action)).toEqual({
        ...initialState,
        error: action.payload
      })
    })

    it('Обнуление ошибки', () => {

        const initialState = {
            user: {
                email: '',
                name: '',
            },
            error: "Ошибка",
            login: false,
            register: false,
            forgotPassword: false,
            resetPassword: false,
            updateSuccess: false,
            updateStart: false,
        }

        const action = {
          type: type.REGISTER_USER_ERROR_NULL,
        }
    
        expect(userReducer(initialState, action)).toEqual({
          ...initialState,
          error: "",
        })
      })

      it('Успешная регистрация', () => {

        const initialState = {
            user: {
                email: '',
                name: '',
            },
            error: "Ошибка",
            login: false,
            register: false,
            forgotPassword: false,
            resetPassword: false,
            updateSuccess: false,
            updateStart: false,
        }

        const action = {
          type: type.REGISTER_USER_SUCCESS,
        }
    
        expect(userReducer(initialState, action)).toEqual({
          ...initialState,
          register: !initialState.register,
        })
      })

      it('Сохранить данные о пользователе', () => {

        const initialState = {
            user: {
                email: '',
                name: '',
            },
            error: "Ошибка",
            login: false,
            register: false,
            forgotPassword: false,
            resetPassword: false,
            updateSuccess: false,
            updateStart: false,
        }

        const action = {
          type: type.SET_USER,
          user: {
              email: 'PAPA@yandex.ru',
              name: 'PAPA'
          }
        }
    
        expect(userReducer(initialState, action)).toEqual({
          ...initialState,
          user: action.user,
          error: "",
          login: true,
        })
      })

      it('Ошибка авторизации', () => {

    
        const action = {
          type: type.LOGIN_USER_ERROR,
          payload: 'error',
        }
    
        expect(userReducer(initialState, action)).toEqual({
          ...initialState,
          error: action.payload
        })
      })


      it('Обнуление ошибки авторизации', () => {

        const initialState = {
            user: {
                email: '',
                name: '',
            },
            error: "Ошибка",
            login: false,
            register: false,
            forgotPassword: false,
            resetPassword: false,
            updateSuccess: false,
            updateStart: false,
        }

        const action = {
          type: type.LOGIN_USER_ERROR_NULL,
        }
    
        expect(userReducer(initialState, action)).toEqual({
          ...initialState,
          error: "",
        })
      })

      it('Выход пользователя', () => {

        const initialState = {
            user: {
                email: 'papa',
                name: 'papa',
            },
            error: "",
            login: false,
            register: false,
            forgotPassword: false,
            resetPassword: false,
            updateSuccess: false,
            updateStart: false,
        }

        const action = {
          type: type.LOGOUT,
        }
    
        expect(userReducer(initialState, action)).toEqual({
            ...initialState,
            user: {
                email: '',
                name: '',
            }
        })
      })


      it('Изменение пароля', () => {

    
        const action = {
          type: type.FORGOT_PASSWORD_ERROR,
          payload: 'error',
        }
    
        expect(userReducer(initialState, action)).toEqual({
          ...initialState,
          error: action.payload
        })
      })


      it('Обнуление ошибки изменения пароля', () => {

        const initialState = {
            user: {
                email: '',
                name: '',
            },
            error: "Ошибка",
            login: false,
            register: false,
            forgotPassword: false,
            resetPassword: false,
            updateSuccess: false,
            updateStart: false,
        }

        const action = {
          type: type.FORGOT_PASSWORD_ERROR_NULL,
        }
    
        expect(userReducer(initialState, action)).toEqual({
          ...initialState,
          error: "",
        })
      })

      it('Успешная Смена пароля', () => {

        const initialState = {
            user: {
                email: '',
                name: '',
            },
            error: "",
            login: false,
            register: false,
            forgotPassword: false,
            resetPassword: false,
            updateSuccess: false,
            updateStart: false,
        }

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
          payload: 'error',
        }
    
        expect(userReducer(initialState, action)).toEqual({
          ...initialState,
          error: action.payload
        })
      })

      it('Обнуление ошибки изменения пароля 2 этап', () => {

        const initialState = {
            user: {
                email: '',
                name: '',
            },
            error: "Ошибка",
            login: false,
            register: false,
            forgotPassword: false,
            resetPassword: false,
            updateSuccess: false,
            updateStart: false,
        }

        const action = {
          type: type.RESET_PASSWORD_ERROR_NULL,
        }
    
        expect(userReducer(initialState, action)).toEqual({
          ...initialState,
          error: "",
        })
      })

      it('Успешная Смена пароля 2 этап', () => {

        const initialState = {
            user: {
                email: '',
                name: '',
            },
            error: "",
            login: false,
            register: false,
            forgotPassword: false,
            resetPassword: false,
            updateSuccess: false,
            updateStart: false,
        }

        const action = {
          type: type.RESET_PASSWORD_SUCCESS,
        }
    
        expect(userReducer(initialState, action)).toEqual({
          ...initialState,
          resetPassword: !initialState.resetPassword,
        })
      })

      it('Получение пользователя', () => {

        const initialState = {
            user: {
                email: '',
                name: '',
            },
            error: "",
            login: false,
            register: false,
            forgotPassword: false,
            resetPassword: false,
            updateSuccess: false,
            updateStart: false,
        }

        const action = {
          type: type.GET_USER,
          payload: {
              email: 'papa',
              name: 'papa'
          }
        }
    
        expect(userReducer(initialState, action)).toEqual({
          ...initialState,
          user: action.payload,
        })
      })

      it('Обновление данных пользователя', () => {

        const initialState = {
            user: {
                email: 'papa',
                name: 'papa',
            },
            error: "",
            login: false,
            register: false,
            forgotPassword: false,
            resetPassword: false,
            updateSuccess: false,
            updateStart: false,
        }

        const action = {
          type: type.UPDATE_USER,
          payload: {
              email: 'papa2',
              name: 'papa2'
          }
        }
    
        expect(userReducer(initialState, action)).toEqual({
          ...initialState,
          user: action.payload,
        })
      })

      it('Ошибка обновления данных пользователя', () => {

        const initialState = {
            user: {
                email: 'papa',
                name: 'papa',
            },
            error: "",
            login: false,
            register: false,
            forgotPassword: false,
            resetPassword: false,
            updateSuccess: false,
            updateStart: true,
        }

        const action = {
          type: type.UPDATE_ERROR,
          payload: 'error',
        }
    
        expect(userReducer(initialState, action)).toEqual({
          ...initialState,
          error: action.payload,
          updateStart: false,
        })
      })

      it('Успешное обновление пользователя', () => {

        const initialState = {
            user: {
                email: 'papa',
                name: 'papa',
            },
            error: "error",
            login: false,
            register: false,
            forgotPassword: false,
            resetPassword: false,
            updateSuccess: false,
            updateStart: true,
        }

        const action = {
          type: type.UPDATE_SUCCESS,
        }
    
        expect(userReducer(initialState, action)).toEqual({
          ...initialState,
          updateSuccess: !initialState.updateSuccess,
          updateStart: false,
          error: "",
        })
      })

      it('начала обновления пользователя', () => {

        const initialState = {
            user: {
                email: 'papa',
                name: 'papa',
            },
            error: "",
            login: false,
            register: false,
            forgotPassword: false,
            resetPassword: false,
            updateSuccess: false,
            updateStart: false,
        }

        const action = {
          type: type.UPDATE_START,
        }
    
        expect(userReducer(initialState, action)).toEqual({
          ...initialState,
          updateStart: true,
        })
      })
      
  
  })

export {}