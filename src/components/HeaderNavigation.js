import {
    Switch,
    Route,
    NavLink,
    useParams,
    useRouteMatch
} from "react-router-dom";


export default function HeaderNavigation() {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="../pages/characters">Characters</NavLink>
            <NavLink to="../pages/episodes">Episodes</NavLink>
        </nav>
    )
}