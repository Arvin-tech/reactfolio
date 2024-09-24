import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/navBar.css";

const NavBar = (props) => {
	const { active } = props;
	const [isVisible, setIsVisible] = useState(true);
	let lastScrollTop = 0;

	const handleScroll = () => {
		const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
		if (currentScroll > lastScrollTop && currentScroll > 50) {
			// Downscroll - hide navbar
			setIsVisible(false);
		} else {
			// Upscroll - show navbar
			setIsVisible(true);
		}
		lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<React.Fragment>
			<div className={`nav-container ${isVisible ? '' : 'hidden'}`}>
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li className={active === "home" ? "nav-item active" : "nav-item"}>
								<Link to="/">Home</Link>
							</li>
							<li className={active === "about" ? "nav-item active" : "nav-item"}>
								<Link to="/about">About</Link>
							</li>
							<li className={active === "projects" ? "nav-item active" : "nav-item"}>
								<Link to="/projects">Projects</Link>
							</li>
							<li className={active === "articles" ? "nav-item active" : "nav-item"}>
								<Link to="/articles">Articles</Link>
							</li>
							<li className={active === "contact" ? "nav-item active" : "nav-item"}>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
