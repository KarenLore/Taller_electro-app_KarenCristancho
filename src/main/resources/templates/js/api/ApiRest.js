import { URL_API, myHeaders } from "../enviroment.js";

const getAllData = async(endPoint) => {
    try {
        const respuesta = await fetch(`${URL_API}/${endPoint}`);
		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
		} else if(respuesta.status === 401){
            console.log('La url no es correcta');
		} else if(respuesta.status === 404){
            console.log('El el contacto  no existe');
		} else {
            console.log('Se presento un error en la peticion consulte al Administrador');
		} 
	} catch(error){
        console.log(error);
	}
    
}
const findById = async(endPoint,id) => {
    try {
        const respuesta = await fetch(`${URL_API}/${endPoint}/${id}`);
		// Si la respuesta es correcta
		if(respuesta.status === 200){
			const datos = await respuesta.json();
		} else if(respuesta.status === 401){
            console.log('La url no es correcta');
		} else if(respuesta.status === 404){
            console.log('El el contacto  no existe');
		} else {
            console.log('Se presento un error en la peticion consulte al Administrador');
		} 
	} catch(error){
        console.log(error);
	}
    
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
export {
    getAllData as findAllData,
    findById as findById,
    postData as saveData,
    patchData as updateData,
    deleteData as deleteData
};