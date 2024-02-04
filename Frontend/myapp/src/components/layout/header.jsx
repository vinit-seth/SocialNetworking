import CgLogo from "../img/cglogo.png";
import Navbar from "./navbar";

const header = () => {
    return (
        <>
            <header>
                <img
                    src={CgLogo}
                    alt="Loading..."
                    className="logo"
                    style={{ height: '50px', width: '200px', }}
                />
                <span> Social Netwroking for Everyone</span>
            </header>
            <Navbar />

        </>
    );
}

export default header;