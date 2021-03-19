import { Link } from 'react-router-dom';
const Logo = () => {
    return (
        <div>
            <Link to="/">
                <img
                    className="lcw-logo"
                    src="https://www.lcwaikiki.com/Resource/Images/lcwaikiki-logo@2x.png"
                    alt="LCW Logo"
                />
            </Link>
        </div>
    )
}

export default Logo
