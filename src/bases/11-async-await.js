
const getImagen = async() => {

    try{
        const apiKey = 'i0e0rOT1AfbX2Uoq4pLvN949FIK9hEVx';
        const httpRequest = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data}  = await httpRequest.json();

        console.log(data);

        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append ( img );
        console.log(url);

    } catch (error){
        console.log('Error encontrado:');
        console.error(error);
    }
    
    
}

getImagen();