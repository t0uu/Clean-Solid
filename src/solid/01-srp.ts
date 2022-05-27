(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService{
        getProduct(id: number){
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
        saveProduct(product:Product){
            console.log('Guardando en base de datos', product );
        }
    }

    class Mailer {

        private masterEmail: string = 'srtouzet@hotmail.com'
        sendEmail(emailList: string[], template: 'to-clients' | 'to-admins'){
            console.log('Enviando correo a los clientes', template );
        }
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService: ProductService;
        private mailer: Mailer;
        // Haciendo esto se utiliza toda la responsabilidad unica que tiene el Mailer y el productService
        constructor(productService:ProductService, mailer:Mailer){
            this.productService = productService;
            this.mailer = mailer;
        }
        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
          this.productService.getProduct(id)
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            this.productService.saveProduct(product);
        }
    
        notifyClients() {
          this.mailer.sendEmail(['Santiago@gmail.com'],'to-clients')
        }
    }
    
    class CartBloc {

        private itemsInCart: Object[] = [];
        AddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }



    // Acá creamos las instancias de productService y mailer y luego la enviamos al ProductBloc
    const productService = new ProductService();
    const mailer = new Mailer()


    // Las ventajas de trabajar con esto es que si nosotros necesitamos hacer una prueba por ejemplo del productBloc solo la hacemos en el ProductBloc y evitar errores y es más fácils de probarlo, ya que tenemos toda la lógica centralizada y no todo solo se abarca en una sola clase. 
    const productBloc = new ProductBloc(productService,mailer);
    const cartBloc = new CartBloc();
    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.AddToCart(10);








})();