import axios from "axios";
import React, { useEffect } from "react";
import {useNavigate, useParams } from "react-router-dom";
import style from "./home.module.css" 
import { useState } from "react";

const Edittusers =()=>{
    let[name, setName] =useState("")
    let[salary, setSalary] =useState("")
    let[company, setCompany] =useState("")

    let nameData=(e)=>{
        e.preventDefault()
        setName(e.target.value)
    }
    let salaryData=(e)=>{
        e.preventDefault()
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        e.preventDefault()
        setCompany(e.target.value)
    }
    let formHandle=(e)=>{
        e.preventDefault()
        let payload ={name,salary, company}
        axios.put(`http://localhost:3000/users/${index}`,payload)
        .then(()=>{
            console.log("DATA HAS BEEN SUCCESSFULLY UPDATED")
        })
        navigator("/user")
    }

    let {index} = useParams()
    let navigator=useNavigate()
    // console.log(index);

    useEffect(()=>{
        axios.get(`http://localhost:3000/users/${index}`)
        .then((resp)=>{
            console.log(resp.data)
            setName(resp.data.name)
            setSalary(resp.data.salary)
            setCompany(resp.data.company)
        })
    },[])
    return(
            <div id={style.myform}> 
                <form action="">
                    <tr>
                        <th colSpan="2"><h4>User Update Details</h4></th>
                    </tr>
                    <tr>
                        <td> <label htmlFor="">Name</label></td>
                        <td>: <input type="text"  value={name} onChange={nameData}/></td>
                    </tr>
                    <tr>
                        <td> <label htmlFor="">Salary</label></td>
                        <td>: <input type="text" value={salary} onChange={salaryData}/></td>
                    </tr>
                    <tr>
                        <td> <label htmlFor="">Company</label></td>
                        <td>: <input type="text" value={company} onChange={companyData}/></td>
                    </tr>
                    <th colSpan={2}><button onClick={formHandle}>Update</button></th>
                </form>
                </div>
    )
}
export default Edittusers