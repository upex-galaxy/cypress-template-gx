# Scenario Outline: Add at least one product on the SC
# Given User is on the PLP of an item “<item>”
# When you click on the “add to cart” button of “<quantity>” products
# Then it should appear the modal “Added to cart”
# And the card products should be added to the SCP
# And the “<quantity>” have to be visible on the SC icon
# And the addition of all the products must be visible on the SCP on "Sub Totals"
# | item | quantity|
# |  AC   |       3     | 

# # Agregar producto al Cart
# Given Usuario está en el PLP
# When hace click sobre el botón "Agregar Al Carro"
# Then Debería visualizarse un pop-up indicando el mismo producto agregado al Cart
# And Debería visualizarse el indicador de producto añadido al Cart con la cantidad de "1" 
# And El producto agregado debería visualizarse en el SCP con el mismo nombre y precio 


# # Actualizar producto agregado
# Given: El usuario se situa en el PLP de la categoria "Aires"
# When: Hace clic sobre el botón "Agregar al carro" sobre un eletrodomestrico
# And: Hace clic sobre el boton "Ver Pedido"
# And : seleccionar  " Unidades" igual a 2
# Then : debería visualiza el Shopingcart con la cantidad de item agregados del producto
# And: el Subtotal debería ser igual al precio unitario multiplicado por la cantidad de item


# # Agregar desde el PDP
# Given usuario se encuentra en el PDP de un producto deseado 
# When el usuario hace click en "Agregar al carro"
# Then aparece una ventana emergente con el mensaje "Agregado al carro"
# And debería mostrar la cantidad en el icono del carrito



# # ELIMINAR
# Scenario: usuario ingresa un producto de forma errónea y quiere eleiminarlo 
# Given: usuario inicia sesión
# When: el usuario agrega un producto por error
# And: hace click en el botón "eliminar" 
# Then: El producto es quitado del carrito de compras