import React, {FC} from 'react';
import {IUser} from "../../types/types";
import List from "../List";
import UserItem from "./UserItem";
import {useUsers} from "../../hooks/users";

const UsersPage: FC = () => {
    const {users, navigate, loading} = useUsers();
    return (
        <div>
            {loading && <p style={{textAlign: "center"}}>Loading ...</p>}
            <List
                loading={loading}
                items={users}
                renderItem={(user: IUser) =>
                    <UserItem
                        onClick={(user) => navigate('/users/' + user.id)}
                        user={user}
                        key={user.id}
                    />}

            />
        </div>

    );
};

export default UsersPage;