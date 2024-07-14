import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (<div>
        <h1>OOPS!</h1>
        <h2>Something went wrong</h2>
        <img id="err-img" src= "https://up.yimg.com/ib/th?id=OIP.uifVnbtiY86BFPPPCSN8oQHaHx&pid=Api&rs=1&c=1&qlt=95&w=99&h=104" alt="img"/>
        <h2>{err.status}:{err.statusText}</h2>
    </div>)
}
export default Error;