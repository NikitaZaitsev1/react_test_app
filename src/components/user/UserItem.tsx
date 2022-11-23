import React, {FC} from 'react';
import {IUser} from "../../types/types";
import Modal from "../Modal";

interface UserItemProps {
    user: IUser;
    onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({user, onClick}) => {
    return (
        <div onClick={() => onClick(user)} style={{padding: 15, border: '2px solid orange', margin: '10px'}}>
            {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
            <Modal/>
        </div>
    );
};

export default UserItem;