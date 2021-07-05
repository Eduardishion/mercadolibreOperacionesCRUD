# mercadolibreOperaciones CRUD
Este es una practica de operaciones CRUD que simula pagina mercado libre del curso de DIGITAL HOUSE  programación full stack 

las rutas de acceso para crear productos eliminarlos y edutarlos son las sigguientes

/*** GET ALL PRODUCTS ***/ 
router.get('/', productsController.index); 

/*** CREATE ONE PRODUCT ***/ 
router.get('/create/', productsController.create); 
router.post('/store/', productsController.store); 


/*** GET ONE PRODUCT ***/ 
router.get('/detail/:id/', productsController.detail); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id/', productsController.edit); 
router.put('/update/:id', productsController.update); 


/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:id', productsController.destroy); 


solo falta agregar que resiva imagenss, pero las operaciones esenciales de crear, actuliar, mostrar y eliminar ya son funcionales


Aqui una vista previa 
<img src="https://github.com/Eduardishion/mercadolibreOperacionesCRUD/blob/main/review.png"  />




