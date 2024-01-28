import { Link} from 'react-router-dom';

const NavBar = () => {
    return(<nav>
        <ul>
            <li>
            <Link to="/toggle">Toggler</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/calculator">Calculator</Link></li>
            <li><Link to="/data-fetch">Fetch external API</Link></li>
        </ul>
    </nav>)        
    };

export default NavBar;