(()=>{

    //* Aplicar el principio de responsabilidad única
    //* Priorizar la composición frente a la herencia

    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {
            this.id = id;
            this.type = type;
        }
    }

    class InputAttributes {
        constructor(
            public value: string,
            public placeholder: string,
        ) {
            this.value = value;
            this.placeholder = placeholder
        }
    }

    class InputEvents {
        constructor() {
        }

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }


    interface Elements{
        id:string;
        type: HtmlType;
        value:string;
        placeholder: string;
    }
    class InputElement{
        public HtmlElement : HtmlElement;
        public InputAttributes : InputAttributes;
        public InputEvents : InputEvents;
        constructor({id,type,value,placeholder}:Elements){
            this.HtmlElement = new HtmlElement(id,type);
            this.InputAttributes = new InputAttributes(value,placeholder);
            this.InputEvents = new InputEvents();
        }
    }
    //? Idea para la nueva clase InputElement

    const nameField = new InputElement({id:'uno',type:'input',value:'Valor',placeholder:'txtnombre'});

    console.log({ nameField });

})()