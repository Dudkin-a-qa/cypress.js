import * as data from "../helpers/default_data.json"
import * as main_page from "../locators/main_page.json"
import * as result_page from "../locators/result_page.json"
import * as recovery_page from "../locators/recovery_password_page.json"

describe('Тест авторизации', function () {

    beforeEach('Начало теста', function () {
        cy.visit('/');
          });

          afterEach('Конец теста', function () {
            cy.get(result_page.close).should('be.visible');
           });

    it('Верный логин и верный пароль', function () {
         cy.get(main_page.email).type(data.login);  // Ввести правильный логин
         cy.get(main_page.password).type(data.password); // Ввести правильный пароль
         cy.get(main_page.login_button).click(); // Нажать войти
         cy.get(result_page.title).contains('Авторизация прошла успешно'); // Проверить нужный текст 
     })

     it('Восстановление пароля', function () {
        cy.get(main_page.fogot_pass_btn).click(); // Нажать «Забыли пароль»
        cy.get(recovery_page.email).type('dudkin@ctf-m.ru');// Ввести любой имейл
        cy.get(recovery_page.send_button).click(); // нажать на кнопку "отправить"
        cy.get(result_page.title).contains('Успешно отправили пароль на e-mail') // Проверить нужный текст 
    })

    it('Верный логин и НЕверный пароль', function () {
        cy.get(main_page.email).type(data.login);  // Ввести правильный логин
        cy.get(main_page.password).type('Testtest'); // Ввести НЕправильный пароль
        cy.get(main_page.login_button).click(); // Нажать войти
        cy.get(result_page.title).contains('Такого логина или пароля нет'); // Проверить нужный текст 
    })

    it('НЕверный логин и верный пароль', function () {
        cy.get(main_page.email).type('test@dolnikov.ru');  // Ввести НЕправильный логин
        cy.get(main_page.password).type(data.password); // Ввести правильный пароль
        cy.get(main_page.login_button).click(); // Нажать войти
        cy.get(result_page.title).contains('Такого логина или пароля нет'); // Проверить нужный текст 
    })

    it('Логин без @', function () {
        cy.get(main_page.email).type('germandolnikov.ru');  // Ввести логин без @
        cy.get(main_page.password).type(data.password); // Ввести правильный пароль
        cy.get(main_page.login_button).click(); // Нажать войти
        cy.get(result_page.title).contains('Нужно исправить проблему валидации'); // Проверить нужный текст 
    })

    it('Логин строчными буквами', function () {
        cy.get(main_page.email).type('GerMan@Dolnikov.ru');  // Ввести логин строчными буквами
        cy.get(main_page.password).type(data.password); // Ввести правильный пароль
        cy.get(main_page.login_button).click(); // Нажать войти
        cy.get(result_page.title).contains('Авторизация прошла успешно'); // Проверить нужный текст 
    })
 }) 

 
