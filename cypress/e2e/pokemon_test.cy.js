import * as data from "../helpers/data_pokemon.json"

describe('ТЕСТ НА ПОКЕМОНОВ', function () {

    it('Смоук покупка аватара', function () {
         cy.visit('https://pokemonbattle.ru');
         cy.get(':nth-child(1) > .auth__input').type(data.login)
         cy.get('#password').type(data.password);
         cy.get('.auth__button').click();
         cy.wait(2500);
         cy.get('.header__img').should('be.visible');
         cy.get('.header__container > .header__id').click({ force: true });
         cy.get('[href="/shop"]').click();
         cy.get('.available > button').first().click({ force: true });
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996')
         cy.get(':nth-child(1) > .pay_base-input-v2').type('0825');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2'). type('DUDKIN ANTON');
         cy.get('.pay-btn').click();
         cy.wait(2500);
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.get('.payment__font-for-success').should('be.visible').contains('Покупка прошла успешно');

     })
 }) 