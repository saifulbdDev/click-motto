const DropdownItem = props => {
  return (
    <li className="text-gray-400 text-base py-1 pl-3 duration-500 cursor-pointer hover:bg-slate hover:text-white">
      {props.label}
    </li>
  );
};

export default DropdownItem;
