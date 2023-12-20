
import axios from "axios";

const token = localStorage.getItem("token");
const headers = {
    Authorization: `bearer ${token}`
}


const getUser = async () => {



    const id = localStorage.getItem("userId");
    const response = await axios.get(`https://expresatec-server.onrender.com/api/v1/users/${id}`, { headers })
    const user = response.data
    return response

}


const getCategories = async () => {
    const response = await axios.get('https://expresatec-server.onrender.com/api/v1/categories', { headers })
    console.log(response.data);
    return response.data
}

const getGames = async () => {
    const response = await axios.get('https://expresatec-server.onrender.com/api/v1/games', { headers })
    return response.data
}

const getGamecategory = async (categoryId) => {
    const response = await axios.get('https://expresatec-server.onrender.com/api/v1/games', { headers })
    const data = response.data

    return data.filter(juego => juego.categoryId === categoryId);
}


export {
    getUser,
    getCategories,
    getGames,
    getGamecategory
}