function StudentCard({ student, deleteStudent }) {
  return (
    <div className="card">

      <h3>{student.fullname}</h3>

      <p>Email: {student.email}</p>

      <p>Course: {student.course}</p>

      <button className="btn delete" onClick={deleteStudent}>
        Delete
      </button>

    </div>
  );
}

export default StudentCard;