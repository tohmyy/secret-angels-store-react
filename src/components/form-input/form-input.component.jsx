import './form-input.styles.scss'
const FormInput = ({label, ...otherProps})=>{
    console.log(otherProps)
    return(
        
        <div className='group'>
            <input className='form-input' {...otherProps}  />
            {
            label && //meaning if label exists, render label
            <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}> {label} </label>  // className explains that if a particular otherProps has length (a letter is typed to input) it shrinks the  placeholder
            //className can accept variables using ($) as above
            }
            

 </div>
    )
}

export default FormInput