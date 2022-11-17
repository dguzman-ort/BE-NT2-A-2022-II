
const login = (accessToken) => {
    return new Promise((accept, reject) => {
        //TODO: Esto se supone que lo hace el backend de la API (de ustedes)
        fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`)
        .then(res => res.json())
        .then(data => accept(data))
        .catch(err => reject(err))
    })
} 

export default {
    login
}