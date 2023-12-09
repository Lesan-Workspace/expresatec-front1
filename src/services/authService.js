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






const LoginUser = async (data) => {
    try {
        const response = await axios.post('https://expresatec-server.onrender.com/api/v1/auth/login', data)
        return response

    } catch (error) {
        console.log('login Failed', error);
        throw error;

    }
}

const Logout = () => {
    localStorage.removeItem("token");
}

export {
    RegisterUser,
    LoginUser
}