import {useEffect, useState} from "react";
import {IUser} from "../types/types";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export function useUsers() {
    const [users, setUsers] = useState<IUser[]>([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        setLoading(true)
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
        setLoading(false)
    }

    return {users, navigate, loading}
}