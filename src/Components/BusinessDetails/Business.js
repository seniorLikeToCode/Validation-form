
import React from 'react';

const BusinessCard = () => {
    return (
        <div className='flex-centre load-container'>
            <form action='https://validation-form-senior.herokuapp.com/api/business-details' method='post'>
                <h1 className='Main-heading'>Business details</h1>

                {/* <h3> Title :</h3> */}
                <div className='flex-row'>
                    <input placeholder='Company Name' type='text' name='companyName'></input>
                </div>
                <div className='flex-col'>

                    <h2 className='secondary-heading'>Physical Address</h2>
                    <input placeholder='Street Address 1' type='text' name='physicaladdr1'></input>
                    <input placeholder='Street Address 2' type='text' name='physicaladdr2'></input>
                    <div className='flex-row'>
                        <input placeholder='City' type='text' name='physicalcity'></input>
                        <input placeholder='State / Province' type='text' name='physicalstate'></input>
                        <input placeholder='Postal Code' type='number' name='physicalpin'></input>
                    </div>

                    <h2 className='secondary-heading'>Billing Address</h2>
                    <input placeholder='Street Address 1' type='text' name='billingaddr1'></input>
                    <input placeholder='Street Address 2' type='text' name='billingaddr2'></input>
                    <div className='flex-row'>
                        <input placeholder='City' type='text' name='billingcity'></input>
                        <input placeholder='State / Province' type='text' name='billingstate'></input>
                        <input placeholder='Postal Code' type='number' name='billingpin'></input>
                    </div>
                    <h2 className='secondary-heading'>Company Details</h2>
                    <div className='flex-row'>
                        <input placeholder='First Name' type='text' name='firstname'></input>
                        <input placeholder='Last Name' type='text' name='lastname'></input>
                    </div>
                    <div className='flex-row'>
                        <input placeholder='Email' type='email' name='email'></input>
                        <input placeholder='Mobile' type='tel' name='mobile'></input>
                    </div>
                    <div className='flex-row'>
                        <input placeholder='Company Phone' type='number' name='phone'></input>
                        <input placeholder='Company Fax' type='text' name='fax'></input>
                    </div>

                    <div className='flex-row'>
                        <div><input type='checkbox' className='checkbox' value='true' name='agreement'></input></div>
                        <label>I hereby agree that the information given is true, accurate and complete as of the date of this application submission.</label>
                    </div>
                    <div className='flex-centre'>
                        <button className='btn'>Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default BusinessCard;