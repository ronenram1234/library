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

export async function checkUserExist(user: User):Promise<boolean> {

try{
const res =await getAllUsers()
const users:User[]=res.data

const result=users.find(existUser=> existUser.email===user.email )

return result!=undefined

}
catch(err){ return false}

return (false)

}
