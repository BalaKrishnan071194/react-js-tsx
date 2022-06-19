import React from "react";
import "./Header.css";

class Header extends React.Component {
    appName = "REACT CRUD APP";


    render() {
        return <header className="header-bg">
            <div> <label>{this.appName}</label></div>
        </header>;
    }

}
export default Header;
