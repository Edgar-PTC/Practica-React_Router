import React from 'react'

const InputText=({label, value, onChange, type, placeholder, min, max})=>{
    return(
        <div className='Inputs'>
            <label>{label}</label>
            <input min={min} max={max} placeholder={placeholder} type={type} value={value} onChange={onChange}/>
        </div>
    )
}

export default InputText;