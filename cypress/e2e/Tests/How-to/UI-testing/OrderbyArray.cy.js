context('Feature KT: Filtrar productos por nombre o precio', () => {
    
    const OrderNameASC = 0
    const OrderNameDESC = 1
    const OrderPriceASC = 2
    const OrderPriceDESC = 3
    beforeEach(() => {
		// runs before every it() test block
        cy.visit('https://www.saucedemo.com')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        Cypress.env('itemNames', [])
        Cypress.env('itemPrices', [])
	})
	// -- Start: Cypress Tests --
	it('1234 | TC1: Validar filtrar productos por NOMBRE DESC', () => {

		// Write your test case one here
        cy.getActualOrder().then(()=>{

            const initOrder = Cypress.env('itemNames')

            const expectedOrder = initOrder.sort().reverse()
                        
            cy.get('[data-test="product_sort_container"]').select(OrderNameDESC).then(()=>{

                cy.log(`✅ Order Anterior: ${initOrder}`)
                cy.getActualOrder().then(()=>{
                    
                    const finalOrder = Cypress.env('itemNames')
        
                    expect(finalOrder).to.equal(expectedOrder)
                })
            })
            
        })

	})
	it.only('1234 | TC2: Validar filtrar productos por NOMBRE ASC', () => {
        // Write your test case two here

        // Given:
        cy.get('[data-test="product_sort_container"]').select(OrderNameDESC)

        cy.getActualOrder().then(()=>{

            const initOrder = Cypress.env('itemNames')

            //Expected Output:
            const expectedOrder = initOrder.sort()
            
            cy.get('[data-test="product_sort_container"]').select(OrderNameASC).then(()=>{
                
                cy.log(`✅ Order Anterior: ${initOrder}`)
                const array = Cypress.env('itemNames', [])
                cy.log(`✅ Order Vacío: ${array}`)
                cy.getActualOrder().then(()=>{
                    const finalOrder = Cypress.env('itemNames')
        
                    expect(finalOrder).to.equal(expectedOrder)
                })
            })
            
        })
	})
	it('1234 | TC3: Validar filtrar productos por PRECIO ASC', () => {
        // Write your test case two here
        cy.getActualOrder().then(()=>{

            const initOrder = Cypress.env('itemPrices')

            //Expected Output:
            const expectedOrder = initOrder.sort(function(a,b) { return a - b;})
            
            cy.get('[data-test="product_sort_container"]').select(OrderPriceASC).then(()=>{
                
                cy.log(`✅ Order Anterior: ${initOrder}`)
                cy.getActualOrder().then(()=>{
                    const finalOrder = Cypress.env('itemPrices')
        
                    expect(finalOrder).to.equal(expectedOrder)
                })
            })
            
        })
	})
	it('1234 | TC4: Validar filtrar productos por PRECIO DESC', () => {
        // Write your test case two here
        cy.getActualOrder().then(()=>{
    
            const initOrder = Cypress.env('itemPrices')
    
            //Expected Output:
            const expectedOrder = initOrder.sort(function(a,b) { return a - b;}).reverse()
            
            cy.get('[data-test="product_sort_container"]').select(OrderPriceDESC).then(()=>{
                
                cy.log(`✅ Order Anterior: ${initOrder}`)
                cy.getActualOrder().then(()=>{
                    const finalOrder = Cypress.env('itemPrices')
        
                    expect(finalOrder).to.equal(expectedOrder)
                })
            })
            
        })
	})
})
