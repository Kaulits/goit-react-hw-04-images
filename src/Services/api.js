import axios from "axios";

axios.defaults.baseURL = 'https://pixabay.com/';

export const fetchPosts = async configParams => {
    const { data } = await axios.get('api/', {
        params: {
            key: '39076594-40f947c0249a2467761500a04',
            page: 1,
            per_page: 12,
            ...configParams,
        }
    });
    console.log(data)
    return data
    
}