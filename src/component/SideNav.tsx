import React from "react";
import Header from "./Header";
import "./Header.css";

class Home extends React.Component {
    sideNavList = [
        { tabName: "List" },
        { tabName: "Create" },
        { tabName: "Delete" }
    ]

    render() {
        return <nav>
            <div>
                <div className="thin-line"></div>
                <ul>
                    {this.sideNavList.map(item => <li className='lishover'> {item.tabName} </li>)}
                </ul>

            </div>

        </nav>;
    }

}
export default Home;
