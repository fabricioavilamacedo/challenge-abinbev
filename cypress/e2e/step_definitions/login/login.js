import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import Login from '../../../support/pages/login'
import Home from '../../../support/pages/home'

Given("that I am on the login page", () => {
    Login.acessar()
  })

When("providing valid access data", () => {
    Login.preencherLogin('fulano@qa.com', 'teste')
    Login.clickBtnEntrar()
  })

Then("I have successfully logged in", () => {
    Home.validarAcessoHome();
    cy.screenshot()
  })