import React from "react";
import Header from "./Header";
import "./Header.css";
import Main from "./Main";
import SideNav from "./SideNav";
import Student from "./Student";

class Home extends React.Component {
    appName = "REACT CRUD APP";
    students = Array<Student>();
    render() {
        return <>
            <Header> </Header>
            <div className="main">
                <div className="sideNav"> <SideNav /> </div>
                <div className="main-content">
                    <Main onSubmit={e => this.saveStudent(e)} />
                </div>
            </div>
        </>
    }
    saveStudent(e: Student): void {
        this.students.push(e);
    }

}
export default Home;
