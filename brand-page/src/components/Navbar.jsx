const Navbar = () =>{
	return (
		<nav className="container">
		<div className="logo">
		<img src="../images/brand-logo.png" alt="" />
		</div>
		<ul className="menu">
		<li>Home</li>
		<li>About Us</li>
		<li>Collection</li>
		<li>Blog</li>
		<li>Contact</li>
		</ul>
		<div className="buttons">
		<button className="loginBtn">Login</button>
		<button className="signupBtn">Sign up</button>
		</div>
		</nav>
	);
};

export default Navbar;
