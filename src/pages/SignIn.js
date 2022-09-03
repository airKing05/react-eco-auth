import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import InputField from '../components/InputField';

const userData = {
    email: "",
    password: ""
};

export default function SignIn() {
    const [user, setUser] = useState(userData);
    const [err, setErr] = useState(false)
    const navigateTo = useNavigate();

    function handleChange(e) {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        setErr(false)
    }
    function handleClick() {
        let localData = localStorage.getItem('userData')
        localData = JSON.parse(localData)
        let userAuth = localData.filter((item) => {
          return  item.email === user.email && item.password === user.password
        })
       console.log(userAuth)
        if (userAuth.length === 0){
            setErr(true)
        }else{
            localStorage.setItem('userAuth', JSON.stringify(userAuth))
            setErr(false)
            alert("login success");
            navigateTo('/');
        }

    }
    return (
        <div className='container my-5' style={{ maxWidth: '800px' }}>
            <div className=''>
                <InputField
                    type="email"
                    name="email"
                    label="email"
                    placeholder="Email"
                    // defaultValue={this.state.email}
                    handleChange={handleChange}
                    required
                />
            </div>
            <div className=''>
                <InputField
                    type="password"
                    name="password"
                    label="password"
                    placeholder="Password"
                    // defaultValue={this.state.email}
                    handleChange={handleChange}
                    required
                />
            </div>
            <div class="d-grid gap-2 mx-3 pt-3">
                <button class="btn btn-success" type="button" onClick={handleClick}>Submit</button>
                {
                    err ? <h5 className=' mt-2 text-danger'>User does not exist</h5> : null
                }
            </div>

        </div>
    )
}
