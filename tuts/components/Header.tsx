const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-[88px] flex items-center z-10 hover:bg-white transition-all duration-[3s] ease-in-out group">
      <div className="flex flex-1 items-center justify-between px-[36px] group-hover:text-black">
        {/* Left Header */}
        <div>
          <button>
            <Bars3Icon className="w-[24px] h-[24px] text-white" />
            <span>Menu</span>
          </button>
        </div>

        {/* Center Header */}
        <div>Menu Center</div>

        {/* Right Header */}
        <div>Menu Right</div>
      </div>
    </header>
  );
};

export default Header;
