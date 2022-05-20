import React from 'react';

function LandingFormAutocomplete({ formValue, formInput, setFormValue, autoCompleteValues, clicked, setClicked, minLength, focus }) {
  return (
    <div className='landingFormAutocomplete'>
        {
            (formValue[formInput].length >= minLength && !clicked && focus) &&
            autoCompleteValues.map((autoCompleteValue, index) => {
                if (autoCompleteValue.toLowerCase().includes(formValue[formInput].toLowerCase())) {
                    return <h6 key={index} className='autocompleteListItem' onClick={() => {
                        setFormValue({...formValue, [formInput]: autoCompleteValue});
                        setClicked(true);
                    }}>{autoCompleteValue}</h6>
                }
            })
        }
    </div>
  )
}

export default LandingFormAutocomplete;