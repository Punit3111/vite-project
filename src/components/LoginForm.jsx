// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState} from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import './loginpage.css'
import { loginSuccess } from "../reduxStore/Useraction"
//import { useDispatch, useSelector } from "react-redux"

const LoginForm=()=>{
    // eslint-disable-next-line no-unused-vars
    const navigate = useNavigate();
    const data= {name:"",  password:""};
    const [inputData, setInputData]= useState(data);
    const [flag, setFlag] = useState(false);
    const dispatch = useDispatch();

    useEffect(()=>{
        console.log("Registered")
    },[])

     const handleData=(e)=>{
        setInputData({...inputData, [e.target.name]:e.target.value})
        console.log(inputData)
     };

     const handlesubmit=(e)=>{
        e.preventDefault();
        if(!inputData.name || !inputData.password){
            alert("All Fields Are Mandatory");
        }
        else{
            const user = { username: inputData.name };
            dispatch(loginSuccess(user));

            setFlag(true)

            setTimeout(()=>{
              navigate("/dashboard");
            }, 5000);
        
        }
        
        
     };
     
  return (
    <div className="width_100">
    { flag && (<div> Redirecting in 5 Seconds...</div>) }
   <form className='container col-6'>
    <div className='header'>
       <h1>Login</h1>
    </div>

    <div>
        <input type='text' placeholder="Username"
        name="name" value={inputData.name} onChange=
        {handleData}></input>
    </div>
    
    <div>
        <input type='password' placeholder="Password"
        name="password"value={inputData.password} onChange=
        {handleData}/>
    </div>
    
    <div>
        <button type='Submit' onClick={handlesubmit}>Submit</button>
    </div>
    
   </form>
    </div>
  );
};

export default LoginForm;
