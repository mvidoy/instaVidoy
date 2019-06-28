import axios from 'axios';

const api = axios.create({
    //baseURL: "http://localhost:3333", //Ambiente IOS.
    baseURL: "http://192.168.0.35:3333", //USB.
    //baseURL: "http://10.0.3.2:3333", //Emulador Genymousion.
    //baseURL: "http://10.0.2.2:3333", //Emulador Android Studio.
});

export default api;