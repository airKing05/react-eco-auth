import React from 'react'

export default function InputField({handleChange, label, ...otherProps}) {
    let firstChar = label.charAt(0).toUpperCase();
    let remainingStr = label.slice(1);
    let capitalizedLabel = firstChar + remainingStr;
  return (
    <div className='mb-2 container-fluid'>
        <span>
            <div class="mb-3">
          <label for={`exampleInput${encodeURI(label)}`} class="form-label">{capitalizedLabel}</label>
          <input class="form-control" id={`exampleInput${encodeURI(label) }`} aria-describedby="emailHelp" onChange={handleChange} {...otherProps} required/>
            </div>
        </span>

    </div>
  )
}
