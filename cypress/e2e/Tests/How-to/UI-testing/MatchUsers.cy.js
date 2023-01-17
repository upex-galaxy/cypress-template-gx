context('Orange Test for watching', () => {

    beforeEach(() => {
        
        cy.Login('Admin', 'admin123')
	})
	// -- Start: Cypress Tests --
	it('Test User in PIM is equal to user in Profile', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
        cy.url().should('contain', 'viewEmployeeList')

        cy.get('[role="table"]').within((grid)=>{

            cy.get('.oxd-table-card').its('length').then((rows)=>{
                cy.log(rows) // Usually there are 50 rows (49 of index)
                const pickUser = Math.floor(Math.random() * (rows-1))

                cy.get('.oxd-table-card').eq(pickUser).within((row)=>{

                    cy.get('[role="cell"]').eq(2).children().then((inside)=>{ // First Name
                        const firstName = inside.text()
                        cy.log(`First Name agarrado: ${firstName}`)
                        Cypress.env('firstName', firstName)

                    })
                    cy.get('[role="cell"]').eq(3).children().then((inside)=>{ // Last Name
                        const lastName = inside.text()
                        cy.log(`Last Name agarrado: ${lastName}`)
                        Cypress.env('lastName', lastName)
                    }) 

                    cy.get('button').eq(1).click()
                    // Page should redirect to Personal Details Page.
                })
            })
            
        })
        // in Personal Detail Page:
        cy.wait(2000)
        cy.get('[class*=employee-name] h6').then((actualName)=>{
            const firstName = Cypress.env('firstName').split(" ")[0]
            const lastName = Cypress.env('lastName')
            const expectedName = `${firstName} ${lastName}`

            expect(actualName.text()).equal(expectedName)
        })
	})
})


import { cleanFetch } from '@helper/RemoveLogs.js'
cleanFetch.sendConfig()