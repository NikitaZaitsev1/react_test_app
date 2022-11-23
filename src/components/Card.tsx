import React, {FC, useState} from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    width?: string;
    height?: string;
    children?: React.ReactNode;
    variant: CardVariant;

}

const Card: FC<CardProps> = ({
                                 width,
                                 height,
                                 variant,
                                 children
                             }) => {
    return (
        <div style={{
            width, height,
            border: variant === CardVariant.outlined ? '10px solid red' : 'none',
            background: variant === CardVariant.primary ? 'lightblue' : '',
        }}
        >
            {children}
        </div>
    );
};

export default Card;