import { useState } from "react";
import Navbar from "./Navbar";
import RegistrationForm from "./RegistrationForm";
import StudentList from "./StudentList";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);

  return (
    <>
      <Navbar />

      <div className="container">
        <RegistrationForm
          students={students}
          setStudents={setStudents}
        />

        <StudentList
          students={students}
          setStudents={setStudents}
        />
      </div>

      <Footer />
    </>
  );
}

export default App;