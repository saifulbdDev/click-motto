const NavItem = props => {
  return (
    <li
      className={`text-base ${
        props.active ? "text-black" : "text-gray-400"
      }  hover:text-black duration-300 cursor-pointer lg:ml-6 px-2.5 py-1 lg:p-0 font-medium`}>
      {props.label}
    </li>
  );
};

export default NavItem;
