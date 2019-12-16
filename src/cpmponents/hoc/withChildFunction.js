import React from 'react';

const withChildFunction = (func) => (Wrapped) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {func};
            </Wrapped>
        );
    }
}

// const test = (func) => {
//     return (Wrapped) => {
//         return (props) => {
//             return (
//                 <Wrapped {...props}>
//                     func();
//                 </Wrapped>
//             )
//         }
//     }
// }

export default withChildFunction;
