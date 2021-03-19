import Logo from './Logo';
import SearchBar from './SearchBar';
import HeaderIcons from './HeaderIcons';
import Categories from './Categories';
import HamburgerButton from './HamburgerButton';
function Header() {

    return (
        <nav>
            <header className="hidden ml:block header-shadow text-gray-600 body-font">
                <div
                    className="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between"
                >
                    <Logo />
                    <SearchBar />
                    <HeaderIcons />
                </div>
                <div
                    className="md:mx-auto flex flex-wrap px-5 items-center text-base justify-between"
                >
                    <Categories />
                    <a className="order-track">
                        <div className="bndl bndl-kamyon"></div>
                        <span>Siparis Takibi</span>
                    </a>
                </div>
            </header>
            <div className="ml:hidden mx-auto px-2 md:px-6 lg:px-8">
                <div className="relative flex items-center h-14">
                    <HamburgerButton/>
                    <div className="flex w-screen flex-row justify-between">
                        <Logo />
                        <HeaderIcons />
                    </div>
                </div>
                <SearchBar />
            </div>
        </nav>
    )
}

export default Header
