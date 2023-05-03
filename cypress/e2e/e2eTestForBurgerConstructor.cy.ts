import '@4tw/cypress-drag-drop';

export const constructor = '[test-id="constructor"]';
export const ingridientItemDnd = '[test-id="ingredient-item-dnd"]';
export const userName = '[test-id="username"]';
export const portal = '[id="portal"]';
export const constructorButton = '[test-id="constructorButton"]';
export const email = '[name="email"]';
export const password = '[name="password"]'
export const active = "div[class*='active']"
export const emailUser = 'PapaPlov@yandex.ru';
export const passwordUser = 'olegpudge1';

describe('Переходим на домашнюю страницу', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Конструктор контейнера', () => {
        cy.get(constructor).should('not.exist');
        cy.get('[test-id="constructor-search"]').should('exist');
    });

    it('Проверка работы модального окна ингридиента', () => {
        cy.get(portal).as('port');

        cy.get(ingridientItemDnd).first().click({ multiple: true });
        cy.get('@port').contains('Детали ингредиента');
        cy.get('@port').find(active).find('button').click({ multiple: true });
    });

    it('Проверка работы перетаскивания ингридиента', () => {
        cy.get(ingridientItemDnd).as('ingredient');
        cy.get(constructor).as('constructor');

        cy.get('@ingredient').eq(0).drag('@constructor');
        cy.get('@ingredient').eq(3).drag('@constructor');
    });

    it('Проверка авторизации', () => {
        cy.get(userName).as('username');
        cy.get(constructorButton).as('button');

        cy.get('@username').contains('Личный кабинет').click({ multiple: true });

        cy.get(email).type(emailUser);
        cy.get(password).type(passwordUser);
        cy.get('button').contains('Войти').click({ multiple: true });

        cy.get(userName).contains('Oleg');
    });

    it('Проверка выхода из системы пользователя', () => {
        cy.get(userName).as('username');

        cy.get('@username').contains('Личный кабинет').click();

        cy.get(email).type(emailUser);
        cy.get(password).type(passwordUser);
        cy.get('button').contains('Войти').click({ multiple: true });

        cy.get('@username').contains('Oleg');

        cy.get('@username').contains('Oleg').click({ multiple: true });

        cy.get('p').contains('Выход').click({ multiple: true });

        cy.get('@username').contains('Личный кабинет');
    });

    it('Проверка создания заказа', () => {
        cy.get(portal).as('port');

        cy.get(ingridientItemDnd).as('ingredient');
        cy.get(constructor).as('constructor');

        cy.get('@ingredient').eq(0).drag('@constructor');
        cy.get('@ingredient').eq(3).drag('@constructor');
        
        cy.get('@constructor').find('button').contains('Оформить заказ').click({ multiple: true });

        cy.get(email).type(emailUser);
        cy.get(password).type(passwordUser);
        cy.get('button').contains('Войти').click();

        cy.get(constructorButton).as('button');

        cy.get('@button').contains('Конструктор').click({ multiple: true });

        cy.get('@constructor').find('button').contains('Оформить заказ').click();

        cy.wait(16000).get('@port').contains('индефикатор заказа');
        
        cy.get('@port').find(active).find('button').click({ multiple: true });
    });

    
});