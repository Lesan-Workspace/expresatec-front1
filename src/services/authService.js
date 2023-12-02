import axios from "axios";

const RegisterUser = async (data) => {
    try {
        const response = await axios.post('https://expresatec-server.onrender.com/api/v1/auth/register', data)
        return response

    } catch (error) {
        console.error('Registration failed', error)
        throw error;
    }
}


export {
    RegisterUser
}