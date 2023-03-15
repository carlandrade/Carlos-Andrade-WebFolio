import './index.scss'
import LogoS from '../../../assets/images/logoscarlos.png'
const Logo = () => {

    /*const bgRef = useRef();
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()*/

    return (
        <div className='logo-container'>
            <img className='solid-logo' src={LogoS} alt="C" />
        </div>
    )
}

export default Logo