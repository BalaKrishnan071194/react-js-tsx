import React from "react";
import Header from "./Header";
import "./Header.css";
import Student from "./Student";




interface ChildProps {
    onSubmit: (data: Student) => void;
    tab: any

}

class Create extends React.Component<ChildProps>{

    showSuccess = true;
    createFormData: Student = { name: '', age: '', mobNo: '' };
    constructor(props: any) {
        super(props);
        this.state = {
            name: '',
            age: '',
            mobNo: ''
        }
        console.log(this.props.tab);


    }
    render() {
        return <div className="card">
            <div className="card-body">
                <div id="table-header">
                    <label> Student </label>
                </div>
                <form onSubmit={(e) => { this.submitForm(e); e.preventDefault(); }}>
                    <div className="table Name">

                        <table>

                            <tr>
                                <td> Student Name </td>
                                <td> <input type="text" name="name" required ></input></td>

                            </tr>
                            <tr>
                                <td> AGE </td>
                                <td>   <input type="text" name="age" required></input></td>

                            </tr>
                            <tr>
                                <td>Number </td>
                                <td>  <input type="text" name="mobNo" required></input></td>

                            </tr>
                            <tr>
                                <td> </td>
                                <td>  <button type="submit">Submit</button></td>

                            </tr>
                        </table>
                       {!this.showSuccess && <div id="table-header" >
                            <label> Student created successfully </label>
                        </div> }
                    </div>
                </form>

            </div>

        </div>


    }
    submitForm(e: any) {
        const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
        };
        this.createFormData.age = target.age.value;
        this.createFormData.mobNo = target.mobNo.value;
        this.createFormData.name = target.name.value;
        this.setState(this.createFormData);
        console.log(this.state);
        console.log(this.createFormData);
        this.props.onSubmit(this.createFormData)
        this.showSuccess= false;

    }
}


export default Create;

