import  {FormInputLabel, Group, Input, shrinkLabelStyles} from './form-input.styles.jsx'
const FormInput = ({label, ...otherProps})=>{
    // console.log(otherProps)
    
    return(
        
        <Group>
            <Input {...otherProps}  />
            {
            label && //meaning if label exists, render label
            <FormInputLabel shrink = {otherProps.value.length}> {label} </FormInputLabel>  // className explains that if a particular otherProps has length (a letter is typed to input) it shrinks the  placeholder
            //className can accept variables using ($) as above
            }
            

 </Group>
    )
}

export default FormInput