import React from 'react'

export default function InputField({handleChange, label, ...otherProps}) {
    let firstChar = label.charAt(0).toUpperCase();
    let remainingStr = label.slice(1);
    let capitalizedLabel = firstChar + remainingStr;
  return (
    <div className='mb-2 container-fluid'>
        <span>
              <div class="mb-3">
                  <label for={`exampleInput${label}`} class="form-label">{capitalizedLabel}</label>
                  <input class="form-control" id={`exampleInput${label}`} aria-describedby="emailHelp" onChange={handleChange} {...otherProps}/>
              </div>
        </span>

    </div>
  )
}
