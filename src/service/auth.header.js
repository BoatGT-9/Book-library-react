import { useAuthContext } from "../context/Auth.context";
export  function authHeader() {
    // console.log(user);
    const  user  = JSON.parse(localStorage.getItem("user"));
    if (user && user.accessToken) {
        return {"x-access-token" : user.accessToken};
    } else {
        return {};
    }
}

// import { useAuthContext } from "../context/Auth.context";

// export default function authHeader() {
//     // Assuming useAuthContext returns an object with a 'user' property
//     const { user } = useAuthContext();

//     if (user && user.accessToken) {
//         return {"x-access-token": user.accessToken};
//     } else {
//         return {};
//     }
// }