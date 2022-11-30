import axios from "axios";
import { useEffect, useState } from "react";

const useUser = (user) =>{
    const [tokenss, setTokenss] = useState('')
    console.log('for generate token', user)
    useEffect(() => {
        const email = user?.email;
        console.log('email', email)
        const uid = user?.uid;
        console.log('uid', uid);
        // const currentUser = {
        //     email: email,
        //     uid: uid
        // }
        // if (email && uid) {
        //     axios.put(`http://localhost:5000/users/${email}`, currentUser)
        //         .then(res => {
        //             // console.log(res?.data?.data);
        //             const accessToken = res?.data?.data;
        //             setTokenss(accessToken);
        //             localStorage.setItem("accessToken", accessToken);
        //         })
        // }
    }, [user])

    return [tokenss]
}
export default useUser;