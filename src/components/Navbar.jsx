import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header className="w-full py-10 sm:px-10 px-5 flex justify-around items-center">
      <nav className="flex w-full scrim-max-width">
        <div className="flex flex-1 justify-around">
          {navLists.map((nav) => (
            <div
              key={nav.id}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all max-sm:first:hidden"
            >
              <a href={nav.href} className="max-sm">
                {nav.label}
              </a>
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
