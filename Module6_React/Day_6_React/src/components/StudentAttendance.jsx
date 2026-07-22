import { useState } from "react";

const initialStudents = [
  { id: 1, name: "Alice", present: false },
  { id: 2, name: "Bob", present: false },
  { id: 3, name: "Charlie", present: false },
];

const StudentAttendance = () => {
  const [students, setStudents] = useState(initialStudents); //toggle present for that student

  const togglePresent = (id) => {
    setStudents((prev) => prev.map(item => item.id == id ? ({...item , present : !item.present}) : item))
  }; 
  
  //mark all as present

  const markAllPresent = () => {

        setStudents((prev) => prev.map(item => ({...item , present : true })))
    
  };

  return (
    <div>
      <h2>Student Attendance</h2>
      <button onClick={markAllPresent}>Mark all present</button>
      
      <ul>
        
        {students.map((student) => (
          <li key={student.id}>
            
            <label>
              
              <input
                type="checkbox"
                checked={student.present}
                onChange={() => togglePresent(student.id)}
              />
              {student.name} (
              {student.present ? "Present" : "Absent"}) 
            </label>
            
          </li>
        ))}
        
      </ul>
      
    </div>
  );
};

export default StudentAttendance;
