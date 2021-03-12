const SearchBar = () => {
    return (
        <div>
            <section
                role="search"
                className="md:mx-auto flex flex-wrap items-center text-base justify-center"
            >
                <div className="pt-2 relative mx-auto text-gray-600">
                    <input
                        className="search-input border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                        type="search"
                        name="search"
                        placeholder="Ara"
                    />
                    <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
                        <svg
                            className="text-gray-600 h-4 w-4 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 57 57"
                            width="512"
                            height="512">
                            <path
                                d="M55.1 51.9L41.6 37.8c3.5-4.1 5.4-9.4 5.4-14.8 0-12.7-10.3-23-23-23s-23 10.3-23 23 10.3 23 23 23c4.8 0 9.3-1.4 13.2-4.2l13.7 14.2c0.6 0.6 1.3 0.9 2.2 0.9 0.8 0 1.5-0.3 2.1-0.8C56.3 55 56.3 53.1 55.1 51.9zM24 6c9.4 0 17 7.6 17 17s-7.6 17-17 17 -17-7.6-17-17S14.6 6 24 6z"
                            />
                        </svg>
                    </button>
                </div>
            </section>
        </div>
    )
}

export default SearchBar
