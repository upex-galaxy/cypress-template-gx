
describe('Feature', () => {
	beforeEach(() => {
		cy.SignInCoder()
	})

	it('TSID | TC1: Validar crear cuenta exitosamente', () => {
		// EL MEJOR PAGE OBJECT MODEL => ES CUANDO LEES LITERALMENTE UN CASO DE PRUEBA MANUAL
		
		// Resultado Esperado:
		expect(1).eq(1)
	})
})