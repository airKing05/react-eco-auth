import React from 'react'
import InputField from '../components/InputField'

export default function Signup() {
 
    function handleChange(e) {
        
    }
    function handleClick(){

    }
    return (
        <div className='container py-5' style={{ maxWidth: "800px" }}>
            <div className=''>
                <label className='fs-6 fw-normal mx-2'>
                    <p>  Individual/Enterprise/Government &#9733; </p>
                </label>

                <div className='row mx-2'>
                    <span class="form-check col">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Individual
                        </label>
                    </span>
                    <span class="form-check col">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                        <label class="form-check-label" for="flexRadioDefault2">
                            Enterprise
                        </label>
                    </span>
                    <span class="form-check col">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                        <label class="form-check-label" for="flexRadioDefault2">
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
                        name="last-name"
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
                <div className='col-md-3'>
                    <InputField
                        type="text"
                        name="mobile"
                        label="mobile number"
                        placeholder="Mobile number"
                        // defaultValue={this.state.email}
                        handleChange={handleChange}
                        required
                    />
                </div>
                <div className='col-md-9'>
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
                <button class="btn btn-success" type="button" onClick={handleClick}>Submit</button>
            </div>

        </div>
    )
}
