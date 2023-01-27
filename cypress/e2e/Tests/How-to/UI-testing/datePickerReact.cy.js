describe('✅SpaceBeyond | Datepicker | Buscar destino por fecha y grupo de pasajeros', () => {
	beforeEach('PRC: El usuario esta situado en el home del site Space&Beyond', () => {
		cy.visit('https://demo.testim.io/')
	})

	it('Validar usuario busca destino por fecha de partida y retorno junto con tipo de pasajero.', () => {
        // Starts:
		cy.get("[data-react-toolbox='date-picker'] input").eq(0).click() // Open Departing:

		cy.get("[data-react-toolbox='dialog']").within((datePicker) => {
			cy.get('[data-react-toolbox="day"]:not([class*=disable]):not([class*=active])').then((days)=>{
                cy.log(days)
                if (!expect(days.length).be.greaterThan(0)){
                    cy.log('🚩IF days !>=1 => Workaround is Executed')
                    // Workaround:
                    cy.get('[data-react-toolbox="day"]').then(($days)=>{
                        const list = $days.length - 1
                        const dayRandom = Math.floor(Math.random() * list)
                        cy.get('#right').click()
                        cy.wrap($days).eq(dayRandom).then(($Day) => {
                            const day = $Day.text()
                            cy.log(day)
                            cy.wrap($Day).click()
                        })
                    })
                }else{
                    // Normal Step:
                    cy.log('🚩ELSE: days >=1 => Normal Test Path is Executed')
                    const list = days.length - 1
                    const dayRandom = Math.floor(Math.random() * list)
                    cy.wrap(days).eq(dayRandom).then(($Day) => {
                        const day = $Day.text()
                        cy.log(day)
                        cy.wrap($Day).click()
                    })
                }
            })
            cy.get("[data-react-toolbox='button']").contains('Ok').click()
		})

        // Second DatePicker:
        cy.waitUntil(()=> cy.get("[data-react-toolbox='dialog']").then(datePicker => datePicker.length == 0))

		cy.get("[data-react-toolbox='date-picker'] input").eq(1).click() // Open Returning:

		cy.get("[data-react-toolbox='dialog']").within((datePicker) => {
			cy.get('[data-react-toolbox="day"]:not([class*=disable]):not([class*=active])').then((days)=>{
                cy.log(days)
                if (!expect(days.length).be.greaterThan(0)){
                    cy.log('🚩IF days !>=1 => Workaround is Executed')
                    // Workaround:
                    cy.get('[data-react-toolbox="day"]').then(($days)=>{
                        const list = $days.length - 1
                        const dayRandom = Math.floor(Math.random() * list)
                        cy.get('#right').click()
                        cy.wrap($days).eq(dayRandom).then(($Day) => {
                            const day = $Day.text()
                            cy.log(day)
                            cy.wrap($Day).click()
                        })
                    })
                }else{
                    // Normal Step:
                    cy.log('🚩ELSE: days >=1 => Normal Test Path is Executed')
                    const list = days.length - 1
                    const dayRandom = Math.floor(Math.random() * list)
                    cy.wrap(days).eq(dayRandom).then(($Day) => {
                        const day = $Day.text()
                        cy.log(day)
                        cy.wrap($Day).click()
                    })
                }
            })
            cy.get("[data-react-toolbox='button']").contains('Ok').click()
		})
		it('Validar usuario busca destino solo por fecha de partida y retorno.', () => {})

		it('Validar usuario busca destino solo por cantidad y tipo de pasajeros.', () => {})

		it('Validar usuario busca destino solo por cantidad y tipo de pasajeros.', () => {})
	})
})
