import { useEffect, useState } from "react"

export default function Frinces(){
    const [friend, setFriend] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data =>  console.log(data))
    }, [])


    return(
        <div>
            <h1>Friends : {friend.length}</h1>
            {
                friend.map(friend => <friend friend={friend}></friend>)
            }
        </div>
    )
}