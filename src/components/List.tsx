import React, {FC, useState} from 'react';


interface ListProps<T> {
    items: T[];
    loading: boolean;
    renderItem: (item: T) => React.ReactNode;

}

export default function List<T>(props: ListProps<T>) {
    return (
        <div className="container mx-auto max-w-2xl pt-5">
            {props.loading}
            {props.items.map(props.renderItem)}
        </div>
    )
}