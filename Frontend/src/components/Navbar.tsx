import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { Button } from "./ui/button";
import { Home, BookOpenCheck, Mail, Menu, User } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  let mouseX = useMotionValue(Infinity);

  const navItems = [
    { title: 'Home', href: 'home', icon: Home },
    { title: 'Features', href: 'about', icon: BookOpenCheck },
    { title: 'Roadmap', href: 'contact', icon: Mail },
    { title: 'Profile', href: 'profile', icon: User },
  ];

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 text-white z-50 rounded-full bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg">
      <nav
        className="container mx-auto flex justify-center items-end h-16 px-4"
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        <div className="hidden md:flex space-x-8 items-end pb-3">
          {navItems.map((item) => (
            <NavItem key={item.title} mouseX={mouseX} {...item} />
          ))}
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-2 px-4 pb-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.title}
                to={item.href}
                smooth={true}
                duration={500}
                className="block py-2 px-4 text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-all duration-300 cursor-pointer"
              >
                <span className="flex items-center">
                  <item.icon className="h-6 w-6" />
                  <span className="ml-2">{item.title}</span>
                </span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const NavItem = ({ mouseX, title, href, icon: Icon }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  const width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  const height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <Link
      to={href}
      smooth={true}
      duration={500}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="cursor-pointer"
    >
      <motion.div
        ref={ref}
        style={{ width, height }}
        className="relative flex items-center justify-center rounded-full bg-black dark:bg-neutral-800"
        whileHover={{ y: -10 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 1 }}
          animate={{ scale: isHovered ? 1.2 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Icon className="h-6 w-6" />
        </motion.div>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 2 }}
              className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded whitespace-nowrap"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
};

export default Navbar;
