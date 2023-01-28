Feature: Agregar producto al Shopping Cart 

    como usuario web
    quiero agregar productos al Shopping Cart
    para luego hacer un checkout y comprarlos.


    Background: Precondiciones para agregar productos al SCP 
        Given Usuario debe estar situado en una sección de Categoría
        And existen productos disponibles para dicha Categoría 

    Scenario: 
        When hace click sobre el botón "Agregar Al Carro"
        Then Debería visualizarse un pop-up indicando el mismo producto agregado al Cart
        And Debería visualizarse el indicador de producto añadido al Cart con la cantidad de uno 
        And El producto agregado debería visualizarse en el SCP con el mismo nombre y precio 