import React, { useState } from "react";
import "./Registration.css";
import { BASE_URL } from "../constants";
import { useNavigate } from "react-router-dom";

export const getPasswordStrength = (password) => {
  let strength = 0;
  if (password.length > 5) strength += 1;
  if (password.match(/[a-z]+/)) strength += 1;
  if (password.match(/[A-Z]+/)) strength += 1;
  if (password.match(/[0-9]+/)) strength += 1;
  if (password.match(/[\W]+/)) strength += 1;
  return strength;
};

function Registration({ studyGroups }) {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [showFields, setShowFields] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [institution, setInstitution] = useState("");
  const [studyField, setStudyField] = useState("");

  const resetFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setId("");
    setUsername("");
    setPassword("");
    setInstitution("");
    setStudyField("");
  };

  const handleRoleChange = (event) => {
    const selectedRole = event.target.value;
    setRole(selectedRole);
    setShowFields(selectedRole !== "default");
    resetFields();
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    if (firstName.length < 2) {
      alert("First name too short");
      return;
    }
    if (lastName.length < 2) {
      alert("Last name too short");
      return;
    }
    if (username.length < 2) {
      alert("Username too short");
      return;
    }
    if (!/[a-z]/i.test(username)) {
      alert("Username must contain letters (a-z)");
      return;
    }
    if (id.length < 9 || /[a-z]/i.test(id)) {
      alert("The ID is wrong");
      return;
    }

    const strength = getPasswordStrength(password);
    if (strength < 5) {
      alert(
        "The password must contain a lowercase letter (a-z), an uppercase letter (A-Z), a number and a special character"
      );
      return;
    }
    if (institution.length < 2) {
      alert("The name of an academic institution is too short");
      return;
    }
    if (studyField.length < 2) {
      alert("The name of the field of study is too short");
      return;
    }

    const registrationData = {
      firstName,
      lastName,
      email,
      id,
      username,
      password,
      role,
      institution,
      studyField,
    };

    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registrationData),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("data", data);
      navigate("/login");
      resetFields();
    }
  };

  return (
    <div className="registration-page-container">
      <div className="registration-box">
        <h2>Register</h2>
        <form onSubmit={handleSignup}>
          <div>
            <label>
              Choose type:
              <select value={role} onChange={handleRoleChange}>
                <option value="default"> </option>
                <option value="student">Student</option>
                <option value="lecturer">Lecturer</option>
              </select>
            </label>
          </div>
          {showFields && (
            <>
              <div>
                <label>
                  First name:
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </label>
              </div>
              <div>
                <label>
                  Last name:
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </label>
              </div>
              <div>
                <label>
                  Email:
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
              <div>
                <label>
                  ID:
                  <br />
                  <input
                    type="text"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                </label>
              </div>
              <div>
                <label>
                  Username:
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </label>
                {username && (
                  <div className="invalid">
                    {!/[a-z]/i.test(username)
                      ? "Username must contain letters (a-z)"
                      : ""}
                  </div>
                )}
              </div>
              <div>
                <label>
                  Password:
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
                {password && (
                  <div className="invalid">
                    {getPasswordStrength(password) < 5
                      ? "The password must contain a lowercase letter (a-z), an uppercase letter (A-Z), a number and a special character"
                      : ""}
                  </div>
                )}
              </div>
              {(role === "lecturer" || role === "student") && (
                <>
                  <div>
                    <label>
                      Academic institution:
                      <input
                        type="text"
                        value={institution}
                        onChange={(e) => setInstitution(e.target.value)}
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      Field of study:
                      <input
                        type="text"
                        list="studyGroupsList"
                        value={studyField}
                        onChange={(e) => setStudyField(e.target.value)}
                      />
                      <datalist id="studyGroupsList">
                        {studyGroups.map((group) => (
                          <option value={group.subjectTopic} />
                        ))}
                      </datalist>
                    </label>
                  </div>
                </>
              )}
            </>
          )}

          <button type="submit" class="reg-button">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
