import { Link } from "wasp/client/router"

export function Header() {
	return (
		<header>
			<img src='/favicon.svg' alt="EagerSleepers logo" />
			<p>EagerSleepers</p>
			<Link to="/mypage">My Page</Link>
		</header>
	)
}