import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";

function RegistrationForm({ students, setStudents }) {
  const [student, setStudent] = useState({
    fullname: "",
    email: "",
    course: "",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !student.fullname ||
      !student.email ||
      !student.course
    ) {
      alert("Please complete all fields.");
      return;
    }

    setStudents([...students, student]);

    setStudent({
      fullname: "",
      email: "",
      course: "",
    });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Student Registration</h2>

      <InputField
        label="Full Name"
        name="fullname"
        type="text"
        value={student.fullname}
        onChange={handleChange}
      />

      <InputField
        label="Email"
        name="email"
        type="email"
        value={student.email}
        onChange={handleChange}
      />

      <InputField
        label="Course"
        name="course"
        type="text"
        value={student.course}
        onChange={handleChange}
      />

      <Button text="Add Student" />
    </form>
  );
}

export default RegistrationForm;