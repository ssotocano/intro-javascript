
const apiKey = 'i0e0rOT1AfbX2Uoq4pLvN949FIK9hEVx';

const httpRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

httpRequest
            .then( resp => resp.json())
            .then( ({ data }) => {
                const { url } = data.images.original;

                const img = document.createElement('img');
                img.src = url;

                document.body.append ( img );
                console.log(url);
            })
            .catch( console.warn );