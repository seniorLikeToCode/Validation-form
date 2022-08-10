import React from 'react';

const LoanCard = () => {
    return (
        <div className='flex-centre load-container'>
            <form>
                <h1 className='Main-heading'>Loan Application</h1>
                <h2 className='secondary-heading'>Contact Information</h2>

                {/* <h3> Title :</h3> */}
                <div className='flex-row'>
                    <input placeholder='First Name' type='text'></input>
                    <input placeholder='Last Name' type='text'></input>
                </div>
                <div className='flex-col'>
                    <input placeholder='Email' type='email'></input>
                    <input placeholder='Mobile' type='tel'></input>
                    <h2 className='secondary-heading'>Address</h2>
                    <input placeholder='Street Address 1' type='text'></input>
                    <input placeholder='Street Address 2' type='text'></input>
                    <div className='flex-row'>
                        <input placeholder='City' type='text'></input>
                        <input placeholder='State / Province' type='text'></input>
                        <input placeholder='Postal Code' type='number'></input>
                    </div>

                    <h2 className='secondary-heading'>Employment Information</h2>
                    <input placeholder='Present Employer' type='text'></input>
                    <input placeholder='Occupation' type='text'></input>
                    <div className='flex-row'>
                        <input placeholder='Gross monthly income ' type='number'></input>
                        <input placeholder='Monthly rent/mortgage' type='number'></input>
                        <input placeholder='Down Payment Amount' type='number'></input>
                    </div>
                    <div className='flex-row'>
                        <div><input type='checkbox' className='checkbox'></input></div>
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

export default LoanCard;

