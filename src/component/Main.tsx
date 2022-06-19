import React from "react";
import Create from "./Create";
import Header from "./Header";
import "./Header.css";
import Student from "./Student";

interface StudentProps {
    onSubmit: (data: Student) => void;
}

class Main extends React.Component<StudentProps> {
    sideNavList = [
        { tabName: "List" },
        { tabName: "Create" },
        { tabName: "Delete" }
    ]


    render() {
        return <Create tab= {this.sideNavList} onSubmit={(e) => this.onSubmit(e)}></Create>
    }
    onSubmit(e: any) {
        this.props.onSubmit(e)
    }

}
export default Main;
