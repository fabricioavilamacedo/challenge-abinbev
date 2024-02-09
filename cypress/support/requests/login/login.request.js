const payloadLogin = require('./login.payload.json')

class LoginRequest {

    autenticacao() {
        return cy.request({
            method: "POST",
            url: "https://serverest.dev/login",
            headers: {
                accept: "application/json"
            },
            failOnStatusCode: false,
            body: payloadLogin
        })
    }
}

export default new LoginRequest();