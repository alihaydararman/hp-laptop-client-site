import React from 'react';

const Mysingleorder = ({ user }) => {
    return (

        <tr>
            <th scope="row">{user._id}</th>
            <td>{user.displayName}</td>
            <td>{user.email}</td>
            <td>{user.date}</td>
        </tr>

    );
};

export default Mysingleorder;