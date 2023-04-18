class SelectOnList {
    get = {
        endPoint: ()=> cy.visit('/selectable'),
        listPagination: () => cy.get('#demo-tab-list'),
        listPaginationPanel: () => cy.get('#demo-tabpane-list'),

    }

    list = {
        listPagination1: ()=> cy.get('.vertical-list-container > *').eq(0),
        listPagination2: ()=> cy.get('.vertical-list-container > *').eq(1),
        listPagination3: ()=> cy.get('.vertical-list-container > *').eq(2),
        listPagination4: ()=> cy.get('.vertical-list-container > *').eq(3),
    }
    /* Assertions are not recommended to be in the page class.
    assertions = {
        bluecolor: ()=> cy.get('.list-group-item.active').should('have.css', 'background-color', 'rgb(0, 123, 255)'),
        : ()=> cy.get('.list-group-item.active').should('not.exist'),

    }*/
    SelectList() {
        this.get.listPagination().click()
    }

    ClickOnElementsList() {
        selectonlist.list.listPagination1().click()
        selectonlist.list.listPagination2().click()
        selectonlist.list.listPagination3().click()
        selectonlist.list.listPagination4().click()
    }
}


export const selectonlist = new SelectOnList();