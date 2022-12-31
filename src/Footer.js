import "./Footer.css";

let year = new Date().getFullYear();

const Footer = () => {
    return(
        <div class={"copyright"}>
            <p>Copyright &copy; {year} Julia Butler • <a href="https://www.linkedin.com/in/juliafulibutler/">LinkedIn</a></p>
        </div>
    )
}

export default Footer;