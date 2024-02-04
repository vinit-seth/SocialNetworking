import { NavLink } from "react-router-dom";

let Navbar = () => {
    return (


        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto ms-5 p-1">
                        <li className="nav-item my-1 mx-2">
                            <NavLink to="/" className="nav-link">Homes</NavLink>
                        </li>
                        <li className="nav-item my-1 mx-2">
                            <NavLink to="/" className="nav-link">Members</NavLink>
                        </li>
                        <li className="nav-item my-1 mx-2">
                            <NavLink to="/" className="nav-link">Groups</NavLink>
                        </li>
                        <li className="nav-item my-1 mx-2">
                            <NavLink to="/" className="nav-link">Photos</NavLink>
                        </li>
                        <li className="nav-item my-1 mx-2">
                            <NavLink className="nav-link" to="/">Profile</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>



    );
};

export default Navbar