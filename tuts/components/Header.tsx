import { Bars3Icon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-[88px] flex items-center z-10 hover:bg-white transition-all duration-[3s] ease-in-out group">
      <div className="flex flex-1 items-center justify-between px-[36px] group-hover:text-black">
        {/* Left Header */}
        <div className="flex items-center gap-[30px]">
          {/* Menu */}
          <button type="button" className="flex items-center gap-4">
            <Bars3Icon className="h-6 w-6" />
            <span>Menu</span>
          </button>

          {/* Search */}
          <button type="button" className="flex items-center gap-4">
            <MagnifyingGlassIcon className="h-5 w-5" />
            <span>Search</span>
          </button>
        </div>

        {/* Center Header */}
        <div>
          <Link href=""></Link>
        </div>

        {/* Right Header */}
        <div>Menu Right</div>
      </div>
    </header>
  );
};

export default Header;
