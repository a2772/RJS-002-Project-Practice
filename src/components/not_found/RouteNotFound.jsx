import { NavLink } from "react-router-dom"

const RouteNotFound = () => {
	return (
		<>
			<div id="err-404" className="not-found-page center">
				<div className="not-found-page-caption">
					<h1>This place does not exist ¿Go back home?</h1>
				</div>
				<NavLink to="#err-404" className="neon-button-red" >No, stay here</NavLink>
				<NavLink to="/" className="neon-button-cyan" >Yes, take me home!</NavLink>
			</div>
		</>
	)
}

export default RouteNotFound
