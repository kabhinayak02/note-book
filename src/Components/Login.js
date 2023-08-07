import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Login = (props) => {

    const [credentials, setCredentials] = useState({email:"", password:""});

    let navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch('http://localhost:8000/api/auth/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        });
        const json = await response.json();
        console.log(json)
        if(json.success){
            // Save the Auth-token and redirect
            localStorage.setItem('token', json.AuthToken);
            props.showAlert("Logged in Successfully", "success")
            navigate("/");
        }
        else{
            props.showAlert("Invalid Credentials", "danger")
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    return (
        <div className='container mt-2'>
            <h2>Login to Continue NoteBook</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label my-3">Email address</label>
                    <input type="email" className="form-control" value={credentials.email} id="email" onChange={onChange} name="email" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password"/>
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Login


// import React, {useState} from 'react'
// import { useNavigate } from 'react-router-dom'


// const Login = (props) => {
//     const [credentials, setCredentials] = useState({email: "", password: ""}) 
//     let history = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await fetch("http://localhost:8000/api/auth/login", {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({email: credentials.email, password: credentials.password})
//         });
//         const json = await response.json()
//         console.log(json);
//         if (json.success){
//             // Save the auth token and redirect
//             localStorage.setItem('token', json.AuthToken); 
//             // history.push("/");
//             navigate("/");

//         }
//         else{
//             alert("Invalid credentials");
//         }
//     }

//     const onChange = (e)=>{
//         setCredentials({...credentials, [e.target.name]: e.target.value})
//     }

//     return (
//         <div>
//             <form  onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Email address</label>
//                     <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" aria-describedby="emailHelp" />
//                     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="password" className="form-label">Password</label>
//                     <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" />
//                 </div>

//                 <button type="submit" className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     )
// }

// export default Login