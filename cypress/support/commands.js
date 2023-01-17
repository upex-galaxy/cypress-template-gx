// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import 'cypress-file-upload'
import 'cypress-wait-until'
import '@4tw/cypress-drag-drop'
import 'cypress-downloadfile/lib/downloadFileCommand'
import {login} from '@pages/Login.Page'
const {authLogin, dashboardIndex} = Cypress.env('endpoint')
import {signin} from '@pages/SignIn.Page.js'


// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//Example Login Session in Orange:
Cypress.Commands.add('LoginOrange',(username,password)=>{
    cy.session('login',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php")
        cy.url().should("contain", authLogin)
        username && login.enterUsername(username)
        password && login.enterPassword(password)
        login.submitLogin()
        cy.url().should("contain", dashboardIndex)
    })
})
//Coedrbyte Example
Cypress.Commands.add('SignInCoder', ()=>{
    const { username, password } = Cypress.env('user')
    const { signUp } = Cypress.env('endpoint')
    cy.session('signIn',()=>{
        cy.visit(signUp)
        signin.goToLoginTab()
        signin.enterUsername(username)
        signin.enterPassword(password)
        signin.submitLogin()
    })
})
// Function Example with Cypress.env
Cypress.Commands.add('getActualOrder', ()=>{
    cy.get('.inventory_item').each((item)=>{
        cy.wrap(item).within((card)=>{
            cy.get('.inventory_item_name').then((name)=>{
                let productName = name.text()
                Cypress.env('itemNames').push(productName)
            })
            cy.get('.inventory_item_price').then((price)=>{
                let productPrice = parseFloat(price.text().replace('$',''))
                Cypress.env('itemPrices').push(productPrice)
            })
        })
    })
})