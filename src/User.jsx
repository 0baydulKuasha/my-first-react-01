import { useEffect, useState } from "react";

export default function Users(){
    const [users, setUsers ] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])
    return(
        <div>
            <h2>Users: {users.length}</h2>
        </div>
    )
}


// function Album(){
//     const [album, setUsers] = useState([])
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/albums')
//         .then(resp => resp.json())
//         .then(data=> setUsers(data))
//     })


//     return(
//         <div>
//             <h2>Albam: {albm}</h2>
//         </div>
//     )
// }