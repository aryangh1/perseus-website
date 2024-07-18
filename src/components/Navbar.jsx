import { useClickAway } from 'react-use';
import { useRef } from 'react';
import { useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import { AnimatePresence, motion } from 'framer-motion';

import { navLists, hamburgerLists } from '../constants';

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  useClickAway((ref) => setOpen(false));

  return (
    <header className="w-full py-12 sm:px-10 px-5 flex justify-around items-center">
      <nav className="flex w-full scrim-max-width">
        <div className="flex flex-1 justify-around">
          {navLists.map((nav) => (
            <div
              key={nav.id}
              className="px-5 text-md cursor-pointer text-gray hover:text-white transition-all max-lg:hidden duration-700"
            >
              <a href={nav.href} className="max-sm">
                {nav.label}
              </a>
            </div>
          ))}
        </div>

        {/* mobile navigation */}
        <div ref={ref} className="lg:hidden fixed right-0 px-5 z-50">
          <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed left-0 shadow-4xl right-0 top-[6.5rem] p-5 pt-0 z-40"
              >
                <ul className="grid gap-2">
                  {hamburgerLists.map((hamburgerList, idx) => {
                    const { Icon } = hamburgerList;
                    return (
                      <motion.li
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          type: 'spring',
                          stiffness: 260,
                          damping: 20,
                          delay: 0.1 + idx / 10,
                        }}
                        key={hamburgerList.id}
                        className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-700"
                      >
                        <a
                          onClick={() => setOpen((prev) => !prev)}
                          className={
                            'flex items-center justify-between w-full p-5 rounded-xl bg-neutral-950'
                          }
                          href={hamburgerList.href}
                        >
                          <span className="flex gap-1 text-lg">
                            {hamburgerList.label}
                          </span>
                          <Icon width={24} height={24} />
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
