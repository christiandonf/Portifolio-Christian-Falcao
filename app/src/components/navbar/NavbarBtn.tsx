import { LuArrowDownRight } from 'react-icons/lu';

const NavbarBtn = () => {
  return (
    <button className="px-4 py-2 rounded-full text-xl font-bold text-white border-cyan flex items-center gap-1 bg-gradient-to-r from-cyan-400 to-orange-400 hover:border-orange-300 hover:scale-110 transition-all durantion-500 hover:shadow-cyan">
      Hire Me
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </button>
  );
};
export default NavbarBtn;
