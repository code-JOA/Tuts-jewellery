import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-[88px] flex items-center z-10 hover:bg-brown transition-all duration-[3s] ease-in-out group">
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
        <div className="absolute max-w-[154px] w-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1>TURTS JEWELRY</h1>
          {/* <Link href="/">
            <svg
              width="151"
              height="16"
              viewBox="0 0 151 16"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className={classNames(
                "h-[23px] w-full group-hover:fill-black transition-all duration-[.3s] ease-in-out"
              )}
            >
              <path
                d="M67.637.293l3.816 9.205L75.269.293h2.725L71.746 15.39l-.293.294-.294-.294L64.911.293h2.726zm-13.712 0c1.468 0 2.86.767 3.627 1.887l-1.467 1.468h-.462c-.304-.65-.973-1.048-1.698-1.048-.863 0-1.672.71-1.72 1.614-.035.68.277 1.105.84 1.468.606.391.854.554 1.677 1.006.897.493 3.166 1.46 3.166 4.005 0 2.509-2.097 4.843-4.802 4.843-.347 0-.976-.039-1.446-.147-1.325-.321-2.129-.822-2.998-1.845l1.887-1.929.65.545c.293.23.937.693 1.55.776 1.246.169 2.082-.655 2.244-1.468.129-.642-.034-1.6-1.069-2.096 0 0-1.866-1.037-2.684-1.51-.833-.482-1.719-1.798-1.719-3.375 0-1.174.538-2.311 1.405-3.103.67-.614 1.589-1.09 3.019-1.09zM138.67 0l9.77 9.77V.587l.294-.294h1.929l.294.294v14.802h-.462l-9.602-9.602v9.309l-.294.293h-1.929l-.293-.293V.293L138.67 0zm-28.807.293v2.223l-.294.293h-2.222v12.58h-2.516V2.809h-2.516V.587l.294-.294h7.254zm9.225 0v2.223l-.294.293h-2.222v12.58h-2.516V2.809h-2.516V.587l.294-.294h7.254zM2.516.293v12.58h5.032v2.516H0V.587L.293.293h2.223zm14.257 0a7.548 7.548 0 110 15.096 7.548 7.548 0 010-15.096zm111.54 0a7.548 7.548 0 110 15.096 7.548 7.548 0 010-15.096zm-98.415 0l.293.294v9.77a2.516 2.516 0 005.032 0V.587l.294-.294h1.929l.293.294v9.77a5.032 5.032 0 01-10.064 0V.587l.294-.294h1.929zm15.389 0v14.803l-.294.293h-2.222V.587l.293-.294h2.223zm37.446 0l.293.294v9.77a2.516 2.516 0 005.032 0V.587l.294-.294h1.928l.294.294v9.77a5.032 5.032 0 01-10.064 0V.587l.294-.294h1.929zm15.389 0v14.803l-.294.293h-2.222V.587l.293-.294h2.223zM16.772 2.81a5.032 5.032 0 10.001 10.065 5.032 5.032 0 000-10.065zm111.541 0a5.032 5.032 0 100 10.065 5.032 5.032 0 000-10.065z"
                fillRule="evenodd"
              ></path>
            </svg>
          </Link> */}
        </div>

        {/* Right Header */}
        <div className="flex items-center gap-[30px]">
          <div className="flex items-center gap-[30px]">
            <button></button>
            <button></button>
          </div>

          {/* cart */}
          <button className="flex items-sort">
            <ShoppingBagIcon className="h-5 w-5" />
            <span>Cart</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
