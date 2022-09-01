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
                        label="mobile text"
                        // defaultValue={this.state.email}
                        handleChange={handleChange}
                        required
                    />
                </div>
                <div className='col-md-9'>
                    <InputField
                        type="text"
                        name="text"
                        label="mobile text"
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
                        // defaultValue={this.state.email}
                        handleChange={handleChange}
                        required
                    />
                </div>
                <div className='col-md-6'>
                    <InputField
                        type="text"
                        name="phone"
                        label="phone text"
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
