import Nav from 'react-bootstrap/Nav';
import Personal from '../Personal/person';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    return (
        <div className='flex-centre fn-size32'>
            <Nav variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/personal-details">Personal Details</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/business-details">Business Details</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/loan-details">Loan details</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default NavBar;