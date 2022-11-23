import axios from "axios";
import {IUser} from "../types/types";

export default async function getUsers() {
    await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
}