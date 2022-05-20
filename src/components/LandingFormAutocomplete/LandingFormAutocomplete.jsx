import React from 'react';

function LandingFormAutocomplete({ formValue, setFormValue, cityNames, locationClicked, setLocationClicked }) {
  return (
    <div className='landingFormAutocomplete'>
        {
            (formValue.location.length > 2 && !locationClicked) &&
            cityNames.map((cityName, index) => {
                if (cityName.toLowerCase().includes(formValue.location.toLowerCase())) {
                    return <h6 key={index} className='autocompleteListItem' onClick={() => {
                        setFormValue({...formValue, location: cityName});
                        setLocationClicked(true);
                    }}>{cityName}</h6>
                }
            })
        }
    </div>
  )
}

export default LandingFormAutocomplete;