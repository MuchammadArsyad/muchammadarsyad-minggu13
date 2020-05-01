import {domainPath} from './Config';

const GetAPI = (path) => {                   // Path digunakan untuk menunjuk alamat API mana yang akan di-request
    const promise = new Promise((resolve, reject) => {
        fetch(`${domainPath}/${path}`)       // Alamat url domain + path untuk mengakses full alamat API yg di-request
            .then(response => response.json())      // Response dari server harus dijadikan json
            .then((result) => {
                resolve(result);                    // Jika success menerima response dari server maka resolve response ke user
            }, (err) => {
                reject(err);                        // Jika terjadi error dari server (server down, dll),
            })                                      // Maka kirim pesan error ke user melalui reject.
    })
    return promise;
}
export default GetAPI;