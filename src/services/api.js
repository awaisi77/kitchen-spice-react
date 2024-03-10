import axios from 'axios';

export const callApi = (data) =>{
    const url = data.url;
    const method = data.method;
    const payload = data.data;
    const headers = data.headers?data.headers:'{"Access-Control-Allow-Origin": "*"}';

    return new Promise((resolve, reject) => {
        axios.defaults.headers.common['Content-Type'] = `application/json`;
        axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        axios
            .request({
                url: url,
                method: method,
                data: payload,
                headers:headers
            })

            // taking action on response
            .then(response => {
                resolve(response);
            })

            //  handling error
            .catch((error) => {
                reject(error);
            });
    });
};
