import axios from "axios";
import { User } from "../interfaces/User";
import { useState } from "react";

const api: string = `${process.env.REACT_APP_API}/users`;



export function getAllUsers() {
  return axios.get(api);
}

export function addUser(user: User) {
  return axios.post(api, user);
}

export async function checkUserExist(user: User) {

try{
const res =await getAllUsers()
const users:User[]=res.data

const result=users.find(existUser=> existUser.email===user.email && existUser.pass===user.pass)

return result!=undefined

}
catch(err){}



//     let users<User[]>=[]
// getAllUsers()
// .then((existUsers )=> users=existUsers)
// .catch((err)=> console.log(err))


// const res=users.find(existUser=> existUser.email===user.email && existUser.pass===user.pass)
// if (res!=undefined) return true


// return false
}
