import { Link } from 'react-router-dom';

export const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to='/'>Catálogo</Link>
				</li>
				<li>
					<Link to='/cart'>Carrito</Link>
				</li>
			</ul>
		</nav>
	);
};
