import LazyLoad from 'react-lazyload';

function BannerCard({ imgSrc, header, desc, linkText, linkURL }) {
    return (
        <LazyLoad height={200} once >
            <div className="mb-5 px-4 text-center">
                <div
                    className="rounded-lg h-64 overflow-hidden"
                >
                    <img
                        alt={header}
                        className="object-cover object-center h-full w-full"
                        src={imgSrc}
                    />
                </div>
                <h2 className="banner-header mt-6 mb-3">
                    {header}
                </h2>
                <h3 className="banner-text">
                    {desc}
                </h3>
                <div className="flex justify-center">
                    <button href={linkURL} className="banner-button">
                        {linkText}
                    </button>
                </div>
            </div>
        </LazyLoad>
    )
}

export default BannerCard
