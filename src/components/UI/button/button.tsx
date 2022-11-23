import React, {EventHandler} from "react";

interface Props {
    children?: React.ReactNode;
    onClick?: EventHandler<any>;
}

const Button: React.FC<Props> = ({
                                     children,
                                     onClick,
                                 }) => {
    return (
        <button onClick={onClick?onClick:()=>{}} className={'btn btn-outline-info'} style={{margin: '20px'}}>
            {children}
        </button>
    );
};

export default Button;

// interface Props {
//     border: string;
//     color: string;
//     children?: React.ReactNode;
//     height: string;
//     onClick: () => void;
//     radius: string
//     width: string;
// }

// const Button: React.FC<Props> = ({
//                                      border,
//                                      color,
//                                      children,
//                                      height,
//                                      onClick,
//                                      radius,
//                                      width
//                                  }) => {
//     return (
//         <button
//             onClick={onClick}
//             style={{
//                 backgroundColor: color,
//                 border,
//                 borderRadius: radius,
//                 height,
//                 width
//             }}
//         >
//             {children}
//         </button>
//     );
// }
//
// export default Button;