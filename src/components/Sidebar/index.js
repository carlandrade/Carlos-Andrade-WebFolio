import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/C_small.png'
import LogoSubtitle from '../../assets/images/name_white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className='sub-logo' src={LogoSubtitle} alt="carlos" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#05004D" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#05004D" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#05004D" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/carlandrade13'>
                    <FontAwesomeIcon icon={faLinkedin} color="#05004D" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/carlandrade'>
                    <FontAwesomeIcon icon={faGithub} color="#05004D" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://twitter.com/carl_andrade13'>
                    <FontAwesomeIcon icon={faTwitter} color="#05004D" />
                </a>
            </li>
        </ul>

    </div>
)

export default Sidebar