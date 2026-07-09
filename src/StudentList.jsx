import StudentCard from "./StudentCard";

function StudentList({ students, setStudents }) {

  const deleteStudent = (index) => {
    const updated = students.filter((_, i) => i !== index);
    setStudents(updated);
  };

  return (
    <div className="student-list">

      <h2>Students</h2>

      <h3>Total Students: {students.length}</h3>

      {students.length === 0 ? (
        <p>No students yet.</p>
      ) : (
        students.map((student, index) => (
          <StudentCard
            key={index}
            student={student}
            deleteStudent={() => deleteStudent(index)}
          />
        ))
      )}

    </div>
  );
}

export default StudentList;