
describe('Feature', () => {
	beforeEach(() => {
		// Inicio de Sesión como Precondición.
		cy.SignInCoder()
	})

	it('TSID | TC1: Validar hacer algo en la UI', () => {
		// Aquí se escribiría otros Steps con otro POM para validar el TC.
		// Agregar Resultado Esperado.
		expect(1).eq(1)
	})
})