function Banner({ bURL, bAlt }) {
    return (
        <div class="banner" >
            <img class="w-full" src={bURL} alt={bAlt} />
        </div>
    )
}

export default Banner
