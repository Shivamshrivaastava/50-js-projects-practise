import { AiFillContacts } from "react-icons/ai";
const Navbar = () => {
	return (
		<div className="flex h-[60px] items-center justify-center gap-3 rounded-lg bg-red ">
			<AiFillContacts className="text-4xl text-black" />
			<h1 className="text-orange text-lg font-bold uppercase ">
				My Contact App
			</h1>
		</div>
	);
};

export default Navbar;
