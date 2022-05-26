(() => {

   
    interface MovieAndActors{
        movieId: string,
        id:string,
        ActorId:string
    }
     // función para obtener información de una película por Id
    function getMovieById( {movieId}:MovieAndActors ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieByActor( {id}:MovieAndActors) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getBioActor( {ActorId}:MovieAndActors ) {
        console.log({ ActorId });
    }
    
    // Crear una película
    interface MovieInterface{
        title:string,
        description:string,
        rating: number,
        cast: string[]
    }
    function Createmovie({title, description, rating, cast}: MovieInterface ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    interface ParamsActor{
        fullName:string,
        dayBirthdate: Date,
    }
    function createActor( {fullName, dayBirthdate}:ParamsActor ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    // Continuar
    type DataPayAmount = {
        isDead:true,
        isSeparated:true,
        isRetired:false,
    }
    const getPayAmount = ({ isDead, isSeparated, isRetired}:DataPayAmount):number => {

        if ( isDead ) return 1500 ;
          
        if ( isSeparated ) return 2500 ;
                 
       return ( isRetired) ? 3000 : 4000 ;  
            
    }
    



})();
