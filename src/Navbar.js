import { Link } from "react-router-dom";
import "./Navbar.css";

const linkStyle = {
    color: "black",
    textDecoration: "none",
};

const Navbar = () => {
    return (
        <div class={"row"} className={"main-font"}>
            <div class={"col"} className={"signature-font"}>
                <h1>Julia Butler</h1>
            </div>
            <div class={"col"}>
                <div className={"subCol"}>
                    <Link to="/" style={linkStyle}><h4>Home</h4></Link>
                </div>
                <div className={"subCol"}>
                    <Link to="/projects" style={linkStyle}><h4>Projects</h4></Link>
                </div>
                <div className={"subCol"}>
                    <Link to="/experience" style={linkStyle}><h4>Experience</h4></Link>
                </div>
                <div className={"subCol"}>
                    <Link to="/about" style={linkStyle}><h4>About</h4></Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;