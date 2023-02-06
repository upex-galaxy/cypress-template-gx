const {username, password} = Cypress.env('AdminUser')

describe('user logs in', () => {
    
    beforeEach(() => {
        cy.LoginOrange(username, password)
    });

    it('Validate something in the page', () => {
        expect(1).equal(1)

        cy.log("Este Caso de Prueba puede ser cualquier otra cosa")
    });
    
    
});

