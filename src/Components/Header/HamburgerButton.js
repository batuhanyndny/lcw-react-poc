
function HamburgerButton() {
  return (
    <button
      type="button"
      className="mobile-hamburger flex items-center justify-center px-2 focus:outline-none"
      aria-controls="mobile-menu"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="block h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 22 22"
        stroke="#193db0"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <small>Menu</small>
    </button>
  )
}

export default HamburgerButton
