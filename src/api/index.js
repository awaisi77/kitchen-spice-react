import axios from 'axios';

const API_URL = process.env.PUBLIC_URL;

// API to get products from mock server
export const getProducts = function() {
    return axios.get(API_URL + '/mock-server/products.json')
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
}

// API to get posts from mock server
export const getPosts = function() {
    return axios.get(API_URL + '/mock-server/posts.json')
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {
            console.log(error);
        })
}