import { Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import LoginRequest from '../../../support/requests/login/login.request'

Given("that I am logged in to the login Api", () => {
    LoginRequest.autenticacao().should((response) => {
  

When("you send the request with the correct payload", () => {
    expect(response.body).to.be.not.null
  })

Then("I will have code 200 status successfully", () => {
    expect(response.status).to.eq(200)
        })
    })
})