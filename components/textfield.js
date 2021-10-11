import { useField, ErrorMessage } from 'formik'
import React from 'react'
import styles from '../pages/index.module.css'

export const TextField = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return(
        <div className = "mb-2">
            <label htmlFor = {field.name}>{label}</label>
            <input 
                className = {`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
                {...field} {...props}
                autoComplete = "off"
            />
            <ErrorMessage component = "div" name = {field.name} className = {styles.error}  />
        </div>    
    )
}
