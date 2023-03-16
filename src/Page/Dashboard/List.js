import React from 'react'

function List({ students, handleEdit, handleDelete}) {
  return (
    <div className="contain-table">
      <table className='striped-table'>
        <thead>
          <tr>
            <th>No.</th>
            <th>First Name</th>
            <th>Last NAme</th>
            <th>Email</th>
            <th>Date</th>
            <th colSpam={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((student, i) => (
              <tr key={student.id}>
                <td>{i + 1}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.email}</td>
                <td>{student.date}</td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit
                    (student.id)}
                    className="button muted-button"
                  >
                    Edit
                    </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete
                    (student.id)}
                    className="button muted-button"
                    >
                      Delete
                    </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Employees</td>
            </tr>           
          )}

        </tbody>
      </table>
    </div>
  )
}

export default List
