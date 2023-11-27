import { jwtDecode } from "jwt-decode";


export default () =>{
    const token = localStorage.getItem('token')
    if(!token) return { name: ''}
    return jwtDecode(token)
}