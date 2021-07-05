# mercadolibreOperaciones CRUD
Este es una practica de operaciones CRUD que simula pagina mercado libre del curso de DIGITAL HOUSE  programación full stack 

las rutas de acceso para crear productos,eliminarlos y editarlos son las sigguientes:

/*** ver los produtos  ***/ 
router.get('/', productsController.index); 

/*** crer un producto ***/ 
router.get('/create/', productsController.create); 
router.post('/store/', productsController.store); 


/*** ver el detalle de un producto ***/ 
router.get('/detail/:id/', productsController.detail); 

/*** editar un producto ***/ 
router.get('/edit/:id/', productsController.edit); 
router.put('/update/:id', productsController.update); 


/*** eliminar un producto ***/ 
router.delete('/delete/:id', productsController.destroy); 


solo falta agregar que resiva imagenss, pero las operaciones esenciales de crear, actuliar, mostrar y eliminar ya son funcionales


Aqui una vista previa 
<img src="https://github.com/Eduardishion/mercadolibreOperacionesCRUD/blob/main/review.png"  />




