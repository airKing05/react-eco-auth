import React, { useState } from 'react'
import InputField from '../components/InputField';
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from 'uuid';

const userData = {
    "name": "",
    "lastName": "",
    "email": "",
    "address": "",
    "city": "",
    "pinCode": "",
    "country": "",
    "state": "",
    "mobileNumber": "",
    "fax": "",
    "phoneNumber": "",
    "password": "",
    "cPassword": "",
   " profession": ""
}

export default function Signup() {
    const [user, setUser] = useState(userData);
    const [err, setErr] = useState('')
    const navigate = useNavigate();

    function setError(err){
        setErr(err)
    }
    function handleChange(e) {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
       
    }
    // console.log(user)
    function handleClick(e) {
        e.preventDefault();
        const {name, lastName, email, mobileNumber, city, state, address, country, password, cPassword} = user;

        if (name === '' || lastName === '' || email === '' || mobileNumber === '', city === '' || state === '' || address === '' || country === '' || password === '' || cPassword === ''){
            //console.log("Field is required")
            setError("Field is required")
        } else if (password !== cPassword){
            //console.log("password and confirm password should be same")
            setError("Password and confirm password should be same")
        }else{
            const url = 'http://localhost:3001/userData'
            const unique_id = uuid()
            //console.log()
            const userDataToSend = fetch(url, {
                method: 'POST',
                headers: {
                    "content-Type": "application/json"
                },
                body: JSON.stringify({ ...user, id: unique_id })

            })
            userDataToSend.then((res) => res.json())
                .then(res => {
                    const { email, password } = user;
                    const newData = { email, password, unique_id }
                    const oldData = (localStorage.getItem('userData')) != null ? JSON.parse(localStorage.getItem('userData')) : [{}]
                    const loginData = [newData, ...oldData]
                    localStorage.setItem('userData', JSON.stringify(loginData))
                })
            navigate('/sign-in')

        }
       
    }
    return (
        <div className='container py-5' style={{ maxWidth: "800px" }}>
            <h4 className='text-white bg-danger p-2'>{err}</h4>
            <form>
            <div className=''>
                <label className='fs-6 fw-normal mx-2'>
                    <p>  Individual/Enterprise/Government &#9733; </p>
                </label>

                <div className='row mx-2'>
                    <span class="form-check col">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                <label class="form-check-label" for="flexRadioDefault1">
                            Individual
                        </label>
                    </span>
                    <span class="form-check col">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label class="form-check-label" for="flexRadioDefault2">
                            Enterprise
                        </label>
                    </span>
                    <span class="form-check col">
                            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                        <label class="form-check-label" for="flexRadioDefault3">
                            Government
                        </label>
       
                    </span>
                </div>
            </div>

            <div className='row pt-3'>
                <div className='col-md-6'>
                    <InputField
                        type="text"
                        name="name"
                        label="name"
                        placeholder="Name"
                        // defaultValue={this.state.email}
                        handleChange={handleChange}
                        required
                    />
                </div>
                <div className='col-md-6'>
                    <InputField
                        type="text"
                        name="lastName"
                        label="last name"
                        placeholder="Last name"
                        // defaultValue={this.state.email}
                        handleChange={handleChange}
                    />
                </div>
            </div>

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
                    type="text"
                    name="address"
                    label="address"
                    placeholder="Address"
                    // defaultValue={this.state.email}
                    handleChange={handleChange}
                    required
                />
            </div>

            <div className='row'>
                <div className='col-md-6'>
                    <InputField
                        type="text"
                        name="city"
                        label="city"
                        placeholder="City"
                        // defaultValue={this.state.email}
                        handleChange={handleChange}
                        required
                    />
                </div>
                <div className='col-md-6'>
                    <InputField
                        type="text"
                        name="pinCode"
                        label="pin code"
                        placeholder="Pin code"
                        // defaultValue={this.state.email}
                        handleChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <InputField
                        type="text"
                        name="country"
                        label="country"
                        placeholder="Country"
                        // defaultValue={this.state.email}
                        handleChange={handleChange}
                        required
                    />
                </div>
                <div className='col-md-6'>
                    <InputField
                        type="text"
                        name="state"
                        label="state"
                        placeholder="State"
                        // defaultValue={this.state.email}
                        handleChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className='row'>
                {/* <div className='col-md-3'>
                    <InputField
                        type="text"
                        name="mobile"
                        label="mobile number"
                        placeholder="Mobile number"
                        // defaultValue={this.state.email}
                        handleChange={handleChange}
                        required
                    />
                </div> */}
                <div className='col'>
                    <InputField
                        type="text"
                        name="text"
                        label="mobile number"
                        placeholder="Mobile number"
                        // defaultValue={this.state.email}
                        handleChange={handleChange}

                    />
                </div>
            </div>

            <div className='row'>
                <div className='col-md-6'>
                    <InputField
                        type="text"
                        name="fax"
                        label="fax"
                        placeholder="Fax"
                        // defaultValue={this.state.email}
                        handleChange={handleChange}
                        required
                    />
                </div>
                <div className='col-md-6'>
                    <InputField
                        type="text"
                        name="phone"
                        label="phone number"
                        placeholder="Phone number"
                        // defaultValue={this.state.email}
                        handleChange={handleChange}
                    />
                </div>
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
            <div className=''>
                <InputField
                    type="password"
                    name="cPassword"
                    label="confirm password"
                    placeholder="Confirm password"
                    // defaultValue={this.state.email}
                    handleChange={handleChange}
                    required
                />
            </div>

            <div class="d-grid gap-2 mx-3 pt-3">
                <button class="btn btn-success" type="submit" onClick={handleClick}>SignUp</button>
            </div>
            </form>
        </div>
    )
}
