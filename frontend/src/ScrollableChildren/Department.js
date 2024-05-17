import React, { useState } from "react";
import axios from "axios";
import { baseUrl } from '../config.json'


function Department({ organizationId, departments, setDepartments, setSelectedDepartment, handleUpdateClick }) {
  const [newDepartmentName, setNewDepartmentName] = useState("");

  const handleCreateDepartment = async () => {
    try {
      if (!newDepartmentName) {
        throw new Error("Department name cannot be empty");
      }
      if (departments.find((dept) => dept.name === newDepartmentName)) {
        throw new Error("Department name already exists");
      }
      if (!organizationId) {
        throw new Error("Organization ID is required");
      }
      const response = await axios.post(
        `${baseUrl}/organization/${organizationId}/add-department`,
        {
          name: newDepartmentName
        }
      );
      const newDepartment = response.data;
      setNewDepartmentName(""); // Clear the input field after successful creation
      setDepartments([...departments, newDepartment]); // Update the departments array
    } catch (error) {
      console.error("Error creating department:", error);
    }
  };

  return (
    <div className="tile-y">
      <div>
        <input
          type="text"
          value={newDepartmentName}
          placeholder="Enter department name"
          onChange={(e) => setNewDepartmentName(e.target.value)}
          required
        />
        <button onClick={handleCreateDepartment}>Create New Department</button>
      </div>
      {departments.map((dept, index) => (
        <div key={index} style={{ margin: "5px" }}>
          <div
            style={{ cursor: "pointer", display: "inline-block" }}
            onClick={() => setSelectedDepartment(dept)}
          >
            <strong>{dept.name}</strong>
          </div>
          <button
            style={{ marginLeft: "10px" }}
            onClick={() => handleUpdateClick({ type: 'department', data: dept })}
          >
            Update
          </button>
        </div>
      ))}
    </div>
  );
}

export default Department;
