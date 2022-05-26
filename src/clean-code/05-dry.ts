

type Size = ''|'S'|'M'|'L'|'XL'

class Product {
    constructor(
        public name: string  = '',
        public price: number = 0,
        public size: Size = '',
    ){}
    
    isProductReady():boolean{
        for(const key in this){
            switch(typeof this[key]){
                case 'string':
                    if((<string><unknown>this[key]).length <= 0) throw Error(`${key} is Empty`)
                break;
                case 'number':
                    if((<number><unknown>this[key]) <= 0) throw Error(`${key} is Empty`)
                break;
                default:
                    throw Error(`${typeof this[key]} is not valid`)
                }
                
            }  
            return true;
    }
    
    toString(){
        // NO DRY
        // if(this.name.length <= 0) throw Error('Name is Empty');
        // if(this.price <= 0) throw Error('Price is zero');
        // if(this.size.length <= 0) throw Error('Size is empty');

        // El this hace referencia a la instancia de la clase en este caso sería a los datos que estan dentro del constructor que serian name,price y size.
        if(!this.isProductReady) return;
        return `${this.name}, ${this.price}, ${this.size}`    
    }
    
}

(() => {

    const bluePants = new Product('Blue Large Pants',10,'L');
    console.log(bluePants.toString())
})();