import Logo from './Logo';
import SearchBar from './SearchBar';
import HeaderIcons from './HeaderIcons';
import Categories from './Categories';
function Header() {

    return (
        <nav>
            <header class="hidden ml:block header-shadow text-gray-600 body-font">
                <div
                    class="mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between"
                >
                    <Logo />
                    <SearchBar />
                    <HeaderIcons />
                </div>
                <div
                    class="md:mx-auto flex flex-wrap px-5 items-center text-base justify-between"
                >
                    <Categories />
                    <a class="order-track">
                        <div class="bndl bndl-kamyon"></div>
                        <span>Siparis Takibi</span>
                    </a>
                </div>
            </header>
            {/* <div class="ml:hidden mx-auto px-2 md:px-6 lg:px-8">
                <div class="relative flex items-center h-14">
                    <HamburgerButton
                        v-on:toggleMobileMenu="showMobileMenu = !showMobileMenu"
                    />
                    <div class="flex w-screen flex-row justify-between">
                        <Logo />
                        <RightIcons />
                    </div>
                </div>
                <SearchBar />
            </div> */}
            <div class="ml:hidden" id="mobile-menu" v-show="showMobileMenu">
                <div class="px-2 pt-2 pb-3 space-y-1">
                    <Categories />
                </div>
            </div>
        </nav>
    )

    // return (
    //     <div>
    //         <div className='flex justify-between'>
    //             <Logo />
    //             <SearchBar />
    //             <HeaderIcons />
    //         </div>
    //         <div className="md:mx-auto flex flex-wrap px-5 items-center text-base justify-between">
    //             <Categories />
    //             <a className="order-track">
    //                 <div className="bndl bndl-kamyon"></div>
    //                 <span>Siparis Takibi</span>
    //             </a>
    //         </div>
    //     </div>
    // )
}

export default Header
