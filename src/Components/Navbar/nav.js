import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar({ setForm }) {
    return (
        <div className='flex-centre fn-size32'>
            <Nav variant="tabs" defaultActiveKey="/">
                <Nav.Item>
                    <Nav.Link href="/" eventKey="key1" >Personal Details</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/business" eventKey="key2" >Business Details</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/loan" eventKey="key3" >Loan details</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default NavBar;