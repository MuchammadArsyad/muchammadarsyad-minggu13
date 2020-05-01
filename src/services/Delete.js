import {domainPath} from "./Config";

const DeleteAPI = (path, data) => {
    const promise = new Promise((resolve, reject) => {
        fetch(`${domainPath}/${path}/${data}`,{method: 'DELETE'})  // Alamat URL API yang ingin kita HAPUS datanya
            .then((result) => {
                resolve(result);                    // Jika success menerima response dari server maka resolve response ke user
            }, (err) => {
                reject(err);                        // Jika terjadi error dari server (server down, dll),
            })
    })
    return promise;
}
export default DeleteAPI;