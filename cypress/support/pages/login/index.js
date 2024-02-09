const elements = require('./elements').ELEMENTS
const baseUrl = Cypress.config('baseUrl');

class Login {
    acessar() {
        cy.visit('https://front.serverest.dev/login')
    }

    preencherLogin(email, senha) {
        cy.get(elements.email).type(email);
        cy.get(elements.senha).type(senha);
    }

    clickBtnEntrar() {
        cy.get(elements.btnEntrar).click();
    }
}

export default new Login();