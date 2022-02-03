import React, { useState, useRef } from 'react'
import '../../cssStyle/Style4.css';
import axios from 'axios';
import DatePicker from 'react-date-picker';


let URL = "https://my-json-server.typicode.com/abhay-2512/myserver/AllStudentData";


function AddStudent() {


    const [startDate, setStartDate] = useState(null)
    let Username, Schoolname, Class, Division, Active, Inactive;


    const addStudentData = (e) => {
        e.preventDefault()

        let studentData = {
            Username: Username.current.value,
            Dob: startDate,
            Schoolname: Schoolname.current.value,
            Class: Class.current.value,
            Division: Division.current.value,
            Active: Active.current.checked,
            Inactive: Inactive.current.checked
        }

        axios.post(URL, studentData).then((res) => {
            console.log(res.statusText)
        }).catch((err) => {
            console.log(err)
        })

    }

    return (
        <div className="main">
            <h2 className="headline">Add Student</h2>
            <hr></hr>
            <form onSubmit={addStudentData}>
                <table className="addtable">
                    <tbody className="addtbody">
                        <tr>
                            <td>Full Name</td>
                            <td><input type="text" ref={Username = useRef()}></input></td>
                        </tr>
                        <tr>
                            <td>Date of birth</td>
                            <td><DatePicker className="select" value={startDate} onChange={setStartDate} />
                            </td>
                        </tr>
                        <tr>
                            <td>School</td>
                            <td><select className="select" ref={Schoolname = useRef()}>
                                <option value="">Select</option>
                                <option value="navbhar">School01</option>
                                <option value="swami">School02</option>
                                <option value="karmavir">School03</option>
                            </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Class</td>
                            <td><select className="select" ref={Class = useRef()}>
                                <option value="">Select</option>
                                <option value="1">Class01</option>
                                <option value="2">Class02</option>
                                <option value="3">Class03</option>
                            </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Division</td>
                            <td><select className="select" ref={Division = useRef()}>
                                <option value="">Select</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                            </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td><label className="radiolable">
                                <input type="radio" name="status" value="Active" ref={Active = useRef()} ></input> Active
                        </label>
                                <label className="radiolable">
                                    <input type="radio" name="status" value="InActive" ref={Inactive = useRef()}></input> Inactive
                        </label>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><input type="submit" value="Submit"></input></td>
                        </tr>
                    </tbody>
                </table>
            </form>

        </div>
    )
}

export default AddStudent;
