//Receta para consumir 

// 1. pa onde vas(uri del api)

const URI='https://api.spotify.com/v1/artists/6uD2LjPHUjxrpax0se17Nc/top-tracks?market=US'

//2. HACER QUE OME 
// mrtodo

const PETICION={
    method:'GET',
    headers:{
        Authorization:'Bearer BQDAvzfNTPqQnfwOoaDoL1WDVu8h05E8tKrkmwpHIfaAZ7CPQQ1FHL8GKw2mqDj6yDhhy1iY9ar7Uf4tODgv1BR5IcWXHwJ9dkd7q--ds3XEyADja5AtvpnoRqFZSIVwXtU73eA_TEPBTUW0wvJGq9OgBRtQiox7-c-E9za0Pvc0CfG9Q-40xIM4a8RMol4'
    }
}

// 3. consuma el api(utilizando promesas)

fetch(URI,PETICION )
.then(function(respuesta){
    return respuesta.json()
})
.then(function(respuesta){

    console.log(respuesta)
})

.catch(function(respuestaError){
    console.log(respuestaError)
})