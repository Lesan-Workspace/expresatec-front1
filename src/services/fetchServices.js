
import axios from "axios";
const getUser = async (state) => {

    const token = localStorage.getItem("token");
    const headers = {
        Authorization: `bearer ${token}`
    }

    const id = localStorage.getItem("userId");
    const response = await axios.get(`https://expresatec-server.onrender.com/api/v1/users/${id}`, { headers })
    const user = response.data
    state(user)
    console.log(user);

}
export {
    getUser
}