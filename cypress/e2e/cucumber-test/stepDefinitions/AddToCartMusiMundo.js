import {Given, When, Then, And} from '@badeball/cypress-cucumber-preprocessor'

// Test Set / Test Execution
context('Agregar producto al Shopping Cart',()=>{

    // Preconditions:
    Given('Usuario debe estar situado en una sección de Categoría',()=>{
        cy.visit('https://www.musimundo.com/')
        cy.get('[data-test-breadcrumb="SplitMainBarComponent"]').click()
        cy.url().should('contain', 'aire-acondicionado')
    })
    
    And('existen productos disponibles para dicha Categoría',()=>{
        cy.get('[data-test-item-div="item"]').should('have.length.greaterThan', 0)
        
    })
    
    // Test Case:
    describe('1234 | TC1 (HP): Validar agregar 1 item al Shopping Cart',()=>{
        
        // Pasos:
        When('hace click sobre el botón {string}',(AddButton)=>{
            cy.get('[data-test-item-div="item"]').then((items)=>{

                const randomItem = Math.floor(Math.random() * (items.length -1) )
                cy.get('[data-test-item-div="item"]').then((items)=>{
                    cy.wrap(items).eq(randomItem).within((product)=>{
                        cy.get('[data-test-item-price="item_price"] span').then((price)=>{
                            Cypress.env('itemPrice', price.text().replace('$','').replace('.',''))
                        })
                        cy.get('[data-test-plp="item_name"]').then((title)=>{
                            Cypress.env('itemTitle', title.text().replace(/\n\t\t\t\t\t\t\t/, "").replace(/[^a-zA-Z0-9 ]/g, ''))
                        })
                        cy.contains('Agregar al Carro').click()
                    })
                })
            })            
        })
        Then('Debería visualizarse un pop-up indicando el mismo producto agregado al Cart',()=>{
            cy.get('#gtmAddedProduct').invoke('show').then(($obj)=>{
                cy.log($obj.text())
                const body = JSON.parse($obj.text())
                cy.log(body)

                const $actualPrice = parseFloat(body.price)
                const $expectedPrice = parseFloat(Cypress.env('itemPrice'))
                
                cy.log($actualPrice)
                cy.log($expectedPrice)
                expect(body.name).to.be.an('string').and.to.equal(Cypress.env('itemTitle'))
                expect($actualPrice).to.be.an('number').and.to.equal($expectedPrice)
            })

            
        })
        And('Debería visualizarse el indicador de producto añadido al Cart con la cantidad de uno',()=>{
            cy.get('.minicart-count').first().should('have.text', "1")           
        }) 
        And('El producto agregado debería visualizarse en el SCP con el mismo nombre y precio',()=>{
            cy.visit('https://www.musimundo.com/cart')
            
            cy.get('.mus-cart-item-data .mus-pro-name a').then((title)=>{
                expect(title.text().replace(/[^a-zA-Z0-9 ]/g, '')).to.equal(Cypress.env('itemTitle'))
            })
            cy.get('.mus-cart-item-data .mus-pro-price span').then((price)=>{
                const priceText = price.text().replace('$','').replace('.','')
                const $actualPrice = parseFloat(priceText)
                const $expectedPrice = parseFloat(Cypress.env('itemPrice'))
                expect($actualPrice).to.equal($expectedPrice)
            })
        })  
    })
})



import {cleanFetch} from '@helper/RemoveLogs.js'

cleanFetch.sendConfig()