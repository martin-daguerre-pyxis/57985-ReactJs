# Comision 57985 React JS

MVP de E-Commerce para el curso de CoderHouse

Autor: **Martín Daguerre**

Hosting URL Público: **https://curso-57985.web.app**

## Funcionalidades Principales

1. **Listado de productos en la página home**: 
- Header y Navegación dinámica por categorías
- Funcionalidad de Carrito
- Elemento Banner con contenido obtenido por props y/o children.
- Lista de productos sin clasificación.

2. **Listado de productos en la página de categorías**: 
- Header y Navegación dinámica por categorías
- Funcionalidad de Carrito
- Lista de productos Clasificada utilizando la url con `path="/category/:slug"`.

3. **Detalle de producto**: 
- Header y Navegación dinámica por categorías
- Funcionalidad de Carrito
- Detalle del producto seleccionado utilizando la url con `path="/item/:itemId/:slug"`.

4. **Carrito flotante + página Checkout**: 
- La funcionalidad del carrito puede verse desde cualquier página accediendo desde el header como un sidebar con overlay conteniendo la info o utilizando la url  `path="/cart"`.
- los componentes son reutilizados en estos casos.

**Utilicé para la gestion de los datos del carrito context y localstorage para el almacenamiento**

------------





## Cómo Empezar
Instrucciones sobre cómo instalar y ejecutar el proyecto localmente.
###### Instalar dependencias
`npm i` o `yarn install`

###### Ejecutar localmente
`npm start`

###### Build y deploy
`npm ci && npm run build`

`firebase deploy --only hosting:curso-57985`


----------

Algunas vistas del proyecto
------------

![GIFMaker_me](https://github.com/martin-daguerre-pyxis/57985-ReactJs/assets/59453458/b05c307d-f954-4ef1-9b24-ac0afd85c82e)

![GIFMaker_me (1)](https://github.com/martin-daguerre-pyxis/57985-ReactJs/assets/59453458/52047566-7aee-4635-84e3-05f0508bd00b)
