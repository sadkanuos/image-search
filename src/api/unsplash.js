import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID VyQ5b96jZZ_DVy6pxRwfFok89CQy998KstApnSaYSw4'
    }
});