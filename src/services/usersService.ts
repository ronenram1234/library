import { User } from "../interfaces/User";
import axios from "axios";

const api: string = `${process.env.REACT_APP_API}/users`;

export function getAllUsers() {
  return axios.get(api);
}

export function addUser(user: User) {
  user.id = String(Math.floor(Math.random() * 10000));

  return axios.post(api, user);
}

export function checkUserExist(user: User) {
  return axios.get(`${api}?email=${user.email}&pass=${user.pass}`);
}



// ----------------------- Local Storage--------------------

const storeKey = "library";

export function userSetItem(user: User) {
  try {
    localStorage.setItem(storeKey, JSON.stringify(user));
    console.log("Data Save");
  } catch (error) {
    console.log("Faild to save data", error);
  }
}

export function userGetItem(): User {
  const userObj = localStorage.getItem(storeKey);
  if (userObj === null) return {
    email: "",
    pass: "",
  };
  const user: User = JSON.parse(userObj);
  return user;
}

export function userRemoveItem() {
  try {
    localStorage.removeItem(storeKey);
    console.log("Data Removed");
  } catch (error) {
    console.log("Faild to remove data", error);
  }
}
