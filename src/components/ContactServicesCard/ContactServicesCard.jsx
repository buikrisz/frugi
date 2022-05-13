import React from 'react';

function ServicesCard({ type, formData, setFormData }) {
    function handleClick(e) {
        setFormData({ ...formData, ["contactService"]: e.target.innerHTML });
    }

    return (
        <>
            {type === "ozone" ?
                <div className='servicesCard'>
                    <h3>Ózongenerátoros fertőtlenítés</h3>
                    <h5 onClick={handleClick}>Lakás fertőtlenítés</h5>
                    <h5 onClick={handleClick}>Iskolák / Oktatótermek fertőtlenítése</h5>
                    <h5 onClick={handleClick}>Iroda fertőtlenítés</h5>
                    <h5 onClick={handleClick}>Egészségügyi intézmény fertőtlenítése</h5>
                    <h5 onClick={handleClick}>Jármű klíma és utastér fertőtlenítés</h5>
                </div> :
                <div className='servicesCard'>
                    <h3>Rovarirtó szolgáltatásaink</h3>
                    <h5 onClick={handleClick}>Csótányirtás</h5>
                    <h5 onClick={handleClick}>Ágyi poloska irtás</h5>
                    <h5 onClick={handleClick}>Darázs irtás</h5>
                    <h5 onClick={handleClick}>Rágcsáló irtás</h5>
                    <h5 onClick={handleClick}>Bolha irtás</h5>
                </div>
            }
        </>
    )
}

export default ServicesCard;