import ThemeSwitch from "../ThemeSwitch";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between">
      <h3 className="text-6xl font-bold dark:text-white text-black">Kanban</h3>
      <ThemeSwitch />
    </div>
  );
};

export default Navbar;
