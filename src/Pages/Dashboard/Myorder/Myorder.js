// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import useAuth from '../../Hooks/useAuth';

// const Myorder = () => {
//     const { user } = useAuth();
//     const [usero, setUsero] = useState([]);
//     console.log(user.email);
//     console.log(usero);
//     const handleCancle = id => {
//         axios.delete(`http://localhost:5000/orders/${id}`)
//             .then(result => {
//                 console.log(result.data);
//                 const newUser = usero.filter(user => user._id !== id);
//                 setUsero(newUser)
//             })
//     }

//     useEffect(() => {
//         axios.get(`http://localhost:5000/orders/${user.email}`)
//             .then(result => {
//                 setUsero(result.data)
//             })
//     }, [user]);
//     return (
//         <div className='container'>

//             <h1 className="bg-dark text-light">My Package Order</h1><br />
//             <hr />
//             <table className='table'>
//                 <thead class="thead-dark">
//                     <tr>
//                         <th scope="col">ID</th>
//                         <th scope="col">Name</th>
//                         <th scope="col">Email</th>
//                         <th scope="col">Date</th>
//                         <th scope="col">Delete</th>
//                     </tr>
//                 </thead>
//                 {
//                     usero.map(user => {

//                         return (


//                             <tbody>
//                                 <tr>
//                                     <th scope="row">{user._id}</th>
//                                     <td>{user.displayName}</td>
//                                     <td>{user.email}</td>
//                                     <td>{user.firstName}</td>
//                                     <td><button onClick={() => handleCancle(user._id)}>Cancel</button></td>
//                                 </tr>
//                             </tbody>


//                         )
//                     })
//                 }
//             </table>
//         </div >
//     );
// };

// export default Myorder;