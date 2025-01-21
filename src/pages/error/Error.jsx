import NavBar from '../../components/navbar/NavBar';
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom';
import './error.scss'

const Error = () => {
    return (
        <div className="error">
            <NavBar />
            <div className='error-content'>
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>Sorry, the page you're looking for doesn't exist.</p>
                <Link to="/" className="link-error">
                    Go back to the homepage
                </Link>
            </div>
            <Footer />
        </div>
    )
};

export default Error;