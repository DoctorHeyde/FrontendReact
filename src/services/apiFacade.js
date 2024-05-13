import { BASE_URL_DEV } from "../utils/globalVariables.js"

export const login = async (username, password) => {
    console.log(username, password)
    console.log(BASE_URL_DEV)
    try {
        const result =  await fetch(`${BASE_URL_DEV}auth/login`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        })
        const data = await result.json();
        console.log(data)
    } catch (e) {
        console.log(e)
    }
    
}

export const getPosts = async () => {
    try{
        const token = getFromLocalStorage("token");
        const response = await fetch(`${Base_URL}/posts`, {
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        return await response.json();
    } catch (e) {
        throw new Error(e);
    }
}

login("Alexander", "1234")