const BASE_URL = `https://us-central1-api-nt2-ejemplo.cloudfunctions.net/app/api/`

const getVehiculos = () => {
    console.log("Busco vehiculo");
    return new Promise((resolve, reject) => {
        fetch(`${BASE_URL}/read`)
        .then(res => res.json())
        .then(data => {
          return resolve(data)
        })
        .catch(error => reject(err))
      })
}

const getVehiculo = (id) => {
    return new Promise((resolve, reject) => {
        fetch(`${BASE_URL}/read/${id}`)
        .then(res => res.json())
        .then(data => {
          return resolve(data)
        })
        .catch(error => reject(err))
      })
}

export default {
    getVehiculos,
    getVehiculo
}