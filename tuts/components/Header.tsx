const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-[88px] flex items-center z-10 hover:bg-white transition-all group">
      <div className="flex flex-1 items-center justify-between px-[36px]">
        {/* Left Header */}
        <div>Menu left</div>
        {/* Center Header */}
        <div>Menu Center</div>
        {/* Right Header */}
        <div>Menu Right</div>
      </div>
    </header>
  );
};

export default Header;
