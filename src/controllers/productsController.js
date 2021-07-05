const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		// Do the magic
		res.status(200);
		//redireccionamiento hacia index con las lista de productos cargada desde json
		res.render('index', {products});
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		// Do the magic

		let productE = products.find( (product) => {
            return product.id == parseInt(req.params.id);
        });

		//verificacion de no estar vacio 
		if(productE != null){
			//redireccionamiento hacia detalle producto con producto encontrado
			res.status(200);
			res.render("detail", { product : productE });
		}else{
			//redireccionamiento hacia pagina de no encontrado
			res.status(404);
			res.render("error");
		}
		
	},

	// Create - Form to create
	create: (req, res) => {
		// Do the magic
		//redireccionamiento haciacrear producto
		res.status(200);
		res.render("product-create-form");
	},
	
	// Create -  Method to store
	store: (req, res) => {
		// Do the magic

	
		//creacion de objeto temporal 
		let productoTmp = {
            id: Math.trunc(Math.random() * (10000 - 1) + 1),
            name: req.body.name,
            category: req.body.category,
            price: parseInt(req.body.price),
            discount: parseInt(((req.body.price-(req.body.discount/100)*req.body.price))), //precio a pagar menos el descuento
            description: req.body.description,
            // image: req.files[0].filename,//obtencion de nombre con que se guardo la imagen desde multer, se puede usar tambien req.file.filename;
        }; 
  
		//objeto a insertar en archivo o base de datos 
		products.push(productoTmp);
		
		//escritura de archivo
		let cadenaJsonE = JSON.stringify(products,null, 2);
        fs.writeFileSync(productsFilePath,cadenaJsonE); 
        
		//retorno hacia index para ver la lista de productos
		res.status(200);
		res.render('index', {products});
	},

	// Update - Form to edit
	edit: (req, res) => {
		// Do the magic
	
		//busqueda de producto
		let productE = products.find( (product) => {
            return product.id == parseInt(req.params.id);
        });
  
		//verificacion de no estar vacio 
		if(productE != null){
		  //direccinamiento hacia el formulario de edicion de producto
		  res.status(200);
		  res.render('product-edit-form', { productToEdit: productE });
		}else{
		  // redireccionamiento a vista de no encontrado
		  res.status(404);
		  res.render("not-found");
		}


	},
	// Update - Method to update
	update: (req, res) => {
		// Do the magic
		

		 //busqueda de producto
		 let productE = products.find( (product) => {
            return product.id == parseInt(req.params.id);
        });
		
		//verificaicon de no vinir vacio 
		 if(productE != null){
   
		   //creacion de objeto temporal 
			let productTmp = {
				id: Math.trunc(Math.random() * (10000 - 1) + 1),
				name: req.body.name,
				category: req.body.category,
				price: parseInt(req.body.price),
				discount: parseInt(((req.body.price-(req.body.discount/100)*req.body.price))), //precio a pagar menos el descuento
				description: req.body.description,
				// image: req.files[0].filename,//obtencion de nombre con que se guardo la imagen desde multer, se puede usar tambien req.file.filename;
			}; 
			
		
			//modificacion de objeto origianl a modificado
		   let productoM={};
		   productoM = Object.assign(productoM, productE, productTmp);
   
		   //buscar indice en el arreglo 
		   let indice = products.findIndex( (product) => {
				return product.id == parseInt(req.params.id);
		   });
		   
		   //guardado de datos modificados en el arreglo 
		   products[indice] = productoM;
   
		   //escritura de archivo con los datos modficados 
		   let cadenaJsonE = JSON.stringify(products,null, 2);
		   fs.writeFileSync(productsFilePath,cadenaJsonE); 
   
		   //retorno hacia index para ver la lista de productos
			res.status(200);
			res.render('index', {products});
   
		 }else{
		   // redireccionamiento a vista de no encontrado
			res.status(404);
			res.render("not-found");
		 }
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic

		//buscar indice en el arreglo 
		let indice = products.findIndex( (product) => {
			return product.id == parseInt(req.params.id);
	   });

        if(indice != -1){

          

          //eliminacion del producto de la lista 
          products.splice(indice, 1);
        
          //escritura de archivo con los datos modficados 
		  let cadenaJsonE = JSON.stringify(products,null, 2);
		  fs.writeFileSync(productsFilePath,cadenaJsonE); 
          
		  //retorno hacia index para ver la lista de productos
		  res.status(200);
		  res.render('index', {products});      
          
        }else{
         	// redireccionamiento a vista de no encontrado
			res.status(404);
			res.render("not-found");
        } 
	}
};

module.exports = controller;