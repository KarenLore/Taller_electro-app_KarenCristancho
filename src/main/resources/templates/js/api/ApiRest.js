import { URL_API, myHeaders } from "../enviroment.js";

const getAllData = async (endPoint) => {
    try {
        const url = `${URL_API}/${endPoint}`;
        console.log("Trying to fetch:", url);
        
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error("Fetch Error:", error);
        throw error; // Re-throw to handle in the caller
    }
};
const findById = async(endPoint,id) => {
    try {
        const respuesta = await fetch(`${URL_API}/${endPoint}/${id}`);
        // Si la respuesta es correcta
        if(respuesta.status === 200){
            const datos = await respuesta.json();
            return datos; // Devuelve los datos
        } else if(respuesta.status === 401){
            console.log('La url no es correcta');
        } else if(respuesta.status === 404){
            console.log('El elemento no existe');
        } else {
            console.log('Se presentó un error en la petición consulte al Administrador');
        } 
    } catch(error){
        console.log(error);
    }
    return null; // Devuelve null si hay algún error
}
const postData = async (datos,endPoint) => {
    try {
        return await fetch(`${URL_API}/${endPoint}`, {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(datos)
        });
    } catch (error) {
        console.error('Error en la solicitud POST:', error.message);
    }
}
const patchData = async (datos,id,endPoint) =>{

    try {
        return await fetch(`${URL_API}/${endPoint}/${id}`, {
            method: "PATCH",
            headers: myHeaders,
            body: JSON.stringify(datos)
        });
    } catch (error) {
        console.error('Error en la solicitud POST:', error.message);
    }

}
const deleteData = async (id,endPoint) =>{

    try {
        return await fetch(`${URL_API}/${endPoint}/${id}`, {
            method: "DELETE",
            headers: myHeaders,
        });
    } catch (error) {
        console.error('Error en la solicitud POST:', error.message);
    }

}


document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("btnMostrarPaises");
    const resultadoDiv = document.getElementById("resultado");

    boton.addEventListener("click", async () => {
        try {
            resultadoDiv.querySelector("pre").textContent = "Cargando...";
            const datos = await getAllData("api/country");
            resultadoDiv.querySelector("pre").textContent = JSON.stringify(datos, null, 2);
        } catch (error) {
            console.error("Error completo:", error);
            resultadoDiv.querySelector("pre").textContent = `Error al conectar con el backend:
            ${error.message}

            Asegúrate que:
            1. El servidor backend está corriendo
            2. La URL es correcta (actual: ${URL_API})
            3. No hay errores de CORS`;
        }
    });
});

export {
    getAllData as findAllData,
    findById as findById,
    postData as saveData,
    patchData as updateData,
    deleteData as deleteData
};