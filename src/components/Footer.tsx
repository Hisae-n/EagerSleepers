import { Link } from "wasp/client/router"


export function Footer() {
	return (
		<footer className="h-[13vh] flex bg-emerald-800 gap-8">
						
			<Link to="/privacy-policy">Privacy Policy</Link>
			<Link to="/terms-of-service">Terms of Service</Link>
			
		</footer>
	)
}