const links = [
  { Link: 'About Me', Section: 'about' },
  { Link: 'Skills', Section: 'skills' },
  { Link: 'Experience', Section: 'experience' },
  { Link: 'Projects', Section: 'project' },
  { Link: 'Contact', Section: 'contact' },
];
const NavbarLinks = () => {
  return (
    <ul className="flex gap-6 text-white font-bold text-center lg:flex-row sm:flex-col lg:relative sm:absolute sm:top-[120%] left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan-300/30 backdrop-blur-lg lg:bg-black sm:w-full py-4">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <a href="#" className="cursor-pointer text-white hover:text-cyan-300 transition-all duration-500">
              {link.Link}
            </a>
            <div className="mx-auto bg-cyan-300 w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};
export default NavbarLinks;
