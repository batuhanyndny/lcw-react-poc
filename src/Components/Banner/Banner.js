import LazyLoad from 'react-lazyload';

function Banner({ bURL, bAlt }) {
    return (
        <LazyLoad height={200} once  className="banner" >
            <img className="w-full" src={bURL} alt={bAlt} />
        </LazyLoad>
    )
}

export default Banner
