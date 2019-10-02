export class Http {

    static get(url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.responseType = 'json';
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    // Sucess
                    resolve(xhr.response);
                }
                else if (xhr.readyState === 4) {
                    // Error
                    reject(xhr.response);
                }
            }
            xhr.send();
        });
    }

}