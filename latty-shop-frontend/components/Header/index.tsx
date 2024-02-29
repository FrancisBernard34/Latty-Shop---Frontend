import Menu from "../Menu";
import Logo from "../Logo";
import SearchBar from "../SearchBar";
import NavBar from "../NavBar";
import CartMenu from "../CartMenu";
import UserMenu from "../UserMenu";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col z-[10] relative">
      <div className="navbar bg-[#1d232a] py-8 px-8 flex flex-row justify-between">
        <Logo />
        <SearchBar />
        <div className="flex gap-2">
          <CartMenu />
          <UserMenu />
        </div>
      </div>
      <NavBar />
    </header>
  );
};

export default Header;
