import '@4tw/cypress-drag-drop';

describe('Переходим на домашнюю страницу', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    });

    it('Конструктор контейнера', () => {
        cy.get('[test-id="constructor"]').should('not.exist');
        cy.get('[test-id="constructor-search"]').should('exist');
    });

    it('Проверка работы модального окна ингридиента', () => {
        cy.get('[id="portal"]').as('port');

        cy.get('[test-id="ingredient-item-dnd"]').first().click();
        cy.get('@port').contains('Детали ингредиента');
        cy.get('@port').find("div[class*='active']").find('button').click({ multiple: true });
    });

    it('Проверка работы перетаскивания ингридиента', () => {
        cy.get('[test-id="ingredient-item-dnd"]').as('ingredient');
        cy.get('[test-id="constructor"]').as('constructor');

        cy.get('@ingredient').eq(0).drag('@constructor');
        cy.get('@ingredient').eq(3).drag('@constructor');
    });

    it('Проверка авторизации', () => {
        cy.get('[test-id="username"]').as('username');
        cy.get('[test-id="constructorButton"]').as('button');

        cy.get('@username').contains('Личный кабинет').click();

        cy.get('[name="email"]').type('PapaPlov@yandex.ru');
        cy.get('[name="password"]').type('olegpudge1');
        cy.get('button').contains('Войти').click();

        cy.get('[test-id="username"]').contains('Oleg');
    });

    it('Проверка выхода из системы пользователя', () => {
        cy.get('[test-id="username"]').as('username');

        cy.get('@username').contains('Личный кабинет').click();

        cy.get('[name="email"]').type('PapaPlov@yandex.ru');
        cy.get('[name="password"]').type('olegpudge1');
        cy.get('button').contains('Войти').click();

        cy.get('@username').contains('Oleg');

        cy.get('@username').contains('Oleg').click();

        cy.get('p').contains('Выход').click();

        cy.get('@username').contains('Личный кабинет');
    });

    it('Проверка создания заказа', () => {
        cy.get('[id="portal"]').as('port');

        cy.get('[test-id="ingredient-item-dnd"]').as('ingredient');
        cy.get('[test-id="constructor"]').as('constructor');

        cy.get('@ingredient').eq(0).drag('@constructor');
        cy.get('@ingredient').eq(3).drag('@constructor');
        
        cy.get('@constructor').find('button').contains('Оформить заказ').click();

        cy.get('[name="email"]').type('PapaPlov@yandex.ru');
        cy.get('[name="password"]').type('olegpudge1');
        cy.get('button').contains('Войти').click();

        cy.get('[test-id="constructorButton"]').as('button');

        cy.get('@button').contains('Конструктор').click();

        cy.get('@constructor').find('button').contains('Оформить заказ').click();

        cy.wait(16000).get('@port').contains('индефикатор заказа');
        
        cy.get('@port').find("div[class*='active']").find('button').click({ multiple: true });
    });

    
});