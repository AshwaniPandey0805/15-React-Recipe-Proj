import {useState} from "react";

export const Auth = ()=>{
    return(
        <div className="auth">
            <Login />
            <Register />
        </div>
    );
};

const Login = ()=>{
    const [username , setUsername] = useState("");
    const [password, setPassword] = useState("");

    return(
        <Form 
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            label="Login"

        />
    );
};

const Register = ()=>{
    const [username , setUsername] = useState("");
    const [password, setPassword] = useState("");

    return(
        <Form 
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            label="Register"

        />
    );
    
};

const Form = ({username , setUsername, password, setPassword, label}) =>{
    return(
        <div className="auth-container">
            <form action="">
                <h2 >{label}</h2>
                <div className="form-group">
                    <label htmlFor="userame" >Username</label>
                    <input type="text" id="username" onChange={(event)=>{}} />
                </div>
                <div className="form-group">
                    <label htmlFor="password" >Password</label>
                    <input type="text" id="Password" onChange={(event)=>{}} />
                </div>
                <button className="btn btn-primary">{label}</button>
            </form>
        </div>
    );
}