

const Students = () => {
    const students=[
    ]
  return (
    <div>
      <ol>
        {students.length>0 ? students.map(item => <li>{item.name}</li>) : ""}
      </ol>
    </div>
  )
}

export default Students
