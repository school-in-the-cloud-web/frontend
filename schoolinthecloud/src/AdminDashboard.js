import React from 'react'
import ClassForm from './ClassForm'

export const AdminDashboard = () => {
    return (
        <div>
            <h2>Admin Dashboard</h2>
            <div className="staticClass">
                <p>Class Name: Mathletes</p>
                <p>Instructor: Professor Moriarty</p>
                <p>Subject: Mathematics</p>
                <p>Class Date: 2020-10-05</p>
                <p>Additional Information: This class covers Trigonometry. Class time TBD. The instructor will contact you directly with more class information.</p>
            </div>
            
            <button>Edit Class</button>
            <button>Delete Class</button>
            <br />
            <br />
            <hr />
            <br />
            <button>Create New Class</button>
            <ClassForm />
        </div>
    )
}









export default AdminDashboard;