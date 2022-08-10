import React from 'react';

const LoanCard = () => {
    return (
        <div className='flex-centre load-container'>
            <form action='https://validation-form-senior.herokuapp.com/api/apply-loan' method='post'>
                <h1 className='Main-heading'>Loan Application</h1>
                <h2 className='secondary-heading'>Contact Information</h2>

                {/* <h3> Title :</h3> */}
                <div className='flex-row'>
                    <input placeholder='First Name' type='text' name='firstname'></input>
                    <input placeholder='Last Name' type='text' name='lastname'></input>
                </div>
                <div className='flex-col'>
                    <input placeholder='Email' type='email' name='email'></input>
                    <input placeholder='Mobile' type='tel' name='mobile'></input>
                    <h2 className='secondary-heading'>Address</h2>
                    <input placeholder='Street Address 1' type='text' name='addr1'></input>
                    <input placeholder='Street Address 2' type='text' name='addr2'></input>
                    <div className='flex-row'>
                        <input placeholder='City' type='text' name='city'></input>
                        <input placeholder='State / Province' type='text' name='state'></input>
                        <input placeholder='Postal Code' type='number' name='pin'></input>
                    </div>

                    <h2 className='secondary-heading'>Employment Information</h2>
                    <input placeholder='Present Employer' type='text' name='employer'></input>
                    <input placeholder='Occupation' type='text' name='occupation'></input>
                    <div className='flex-row'>
                        <input placeholder='Gross monthly income ' type='number' name='income'></input>
                        <input placeholder='Monthly rent/mortgage' type='number' name='rent'></input>
                        <input placeholder='Down Payment Amount' type='number' name='downPayment'></input>
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

export default LoanCard;

