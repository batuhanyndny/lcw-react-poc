import {Link} from 'react-router-dom';

const HeaderIcons = () => {
    return (
        <div className="flex">
            <div className="mx-3">
                <Link to="/login">
                    <i className="user-icon"></i>
                    <p className="icon-text">Giris yap</p>
                </Link>
            </div>
            <div className="mx-3">
                <Link to="/login">
                    <i className="bndl bndl-like">
                        <span className="ico-count">0</span>
                    </i>
                    <p className="icon-text">Favoriler</p>
                </Link>
            </div>
            <div className="mx-3">
                <Link to="/login">
                    <i className="bndl bndl-bag">
                        <span className="ico-count">0</span>
                    </i>
                    <p className="icon-text">Sepetim</p>
                </Link>
            </div>
        </div>
    )
}

export default HeaderIcons
