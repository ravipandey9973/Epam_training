/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import students from '../studentgrade';
import Popup from './popup'
import Statistics from './statistics'
import OverallGradeBarChart from './barchart'
import ToggleButton from './toggle';
import './body.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Body() {
  const [sortedStudents, setSortedStudents] = useState(students);
  const [sortType, setSortType] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudent, setSelectedStudent] = useState([]);
  const [popupData, setPopupData] = useState(null);
  const [showStatistics, setShowStatistics] = useState(false);
  const [showAllRows, setShowAllRows] = useState(false);
  const [noResultsFound, setNoResultsFound] = useState(false);
  
 const sortStudents = (type) => {
    let sortedData = [...sortedStudents];
    if (type === "marks") {
      sortedData.sort((a, b) => a.overallGrade - b.overallGrade);
    } else if (type === "name") {
      sortedData.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return sortOrder === "asc" ? -1 : 1;
        }
        if (nameA > nameB) {
          return sortOrder === "asc" ? 1 : -1;
        }
        return 0;
      });
    } else if (type === "status") {
      if (sortType === "status" && sortOrder === "asc") {
        sortedData.sort((a, b) => b.status.localeCompare(a.status));
        setSortOrder("desc");
      } else {
        sortedData.sort((a, b) => a.status.localeCompare(b.status));
        setSortOrder("asc");
      }
    }
    if (type === "marks" && sortOrder === "asc") {
      sortedData.reverse();
      setSortOrder("desc");
    } else {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    }
    setSortedStudents(sortedData);
    setSortType(type);
  };
  

  const searchStudents = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    
    if (value !== "") {
      const results = students.filter((student) =>
        student.name.toLowerCase().includes(value)
      );
      setSortedStudents(results);
      setNoResultsFound(results.length===0);
    } else {
      setSortedStudents(students);
      setNoResultsFound(false);
    }
  };

  const selectStudent = (name) => {
    if (selectedStudent.includes(name)) {
      setSelectedStudent(selectedStudent.filter((rowid)=>rowid!==name));
    } else {
      setSelectedStudent([...selectedStudent,name]);
    }
  }
  const handleMoreClick = (student) => {
    setPopupData(student);
  };

  const handlePopupClose = () => {
    setPopupData(null);
  };
  
  
return (
    <div id='styl'>
      <div id='lst'>
        <button onClick={() => sortStudents("marks")}><FontAwesomeIcon icon="fa-solid fa-filter" size="lg" /> Sort by Grade {sortType === "marks" && (sortOrder === "asc" ? "▲" : "▼")}</button>
        <button onClick={() => sortStudents("name")}><FontAwesomeIcon icon="fa-solid fa-filter" size="lg" /> Sort A-Z {sortType === "name" && (sortOrder === "asc" ? "▲" : "▼")}</button>
        <button onClick={() => sortStudents("status")}><FontAwesomeIcon icon="fa-solid fa-filter" size="lg" /> Sort Pass/Fail</button>

        
        <label><FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />Search By Name </label>
        <input type="text" placeholder="Enter the Name" value={searchTerm} onChange={searchStudents}/>
        {noResultsFound&&<h2>Sorry! No Results Found.....</h2>}
      </div>
      <table>
        <thead>
          <tr>
            <th><FontAwesomeIcon icon="fa-solid fa-hashtag" size="sm" />No</th>
            <th>Name</th>
            <th>Ticket</th>
            <th>Rating Grade</th>
            <th>Exam Grade</th>
            <th>Overall Grade</th>
            <th>Status</th>
            <th><FontAwesomeIcon icon="fa-solid fa-circle-info" size="sm" /> Details</th>
          </tr>
        </thead>
        <tbody>
        {sortedStudents.slice(0, showAllRows ? sortedStudents.length : 10).map((student, index) => (
          <tr
  key={index}
  onClick={(event) => {
    if (event.target.tagName !== "A") {
      selectStudent(student.name);
    }
  }}
  className={selectedStudent.includes(student.name) ? "selected-row" : ""}
>
  <td>{student.number}</td>
  <td>{student.name}</td>
  <td>{student.ticket}</td>
  <td>{student.rating}</td>
  <td>{student.exam}</td>
  <td>{student.overallGrade}</td>
  <td>{student.status}</td>
  <td>
    <a href="#" onClick={() => handleMoreClick(student)}>
      {student.more}
    </a>
  </td>
</tr>
 ))}
        </tbody>
        {sortedStudents.length>10&&(
          <tfoot>
            <tr>
              <td colSpan='8'>
              <button onClick={() => setShowAllRows(!showAllRows)}>
          {showAllRows ? "Show Less" : "Show More"}
          </button>
              </td>
            </tr>
          </tfoot>
        )}
      </table>
      {popupData && <Popup data={popupData} onClose={handlePopupClose} />}
      <ToggleButton showStatistics={showStatistics} setShowStatistics={setShowStatistics} />
      {showStatistics &&(
        <div id='stat'>

  <div id='bar' style={{ display: "inline-block" }}>
    <OverallGradeBarChart />
    <p>Bar Graph According to Marks of Students and Number of Students</p>
  </div>
  <div id='pie' style={{ display: "inline-block" }}>
    <Statistics />
    <p>Pass/Fail Students Pie Chart</p>
  </div>
</div>
      )}
      
    </div>
  );
}

export default Body;
