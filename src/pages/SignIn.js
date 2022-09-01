import React from 'react';
import InputField from '../components/InputField';


export default function SignIn() {
    function handleChange(e) {

    }
    function handleClick() {

    }
  return (
    <div className='container my-5' style={{maxWidth: '800px'}}>
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
          </div>
    </div>
  )
}
