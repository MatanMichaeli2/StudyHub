import React, { useState } from "react";

function Registration({ onRegistration }) {
  const [role, setRole] = useState('');
  const [showFields, setShowFields] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [institution, setInstitution] = useState('');
  const [studyField, setStudyField] = useState('');
  const [subjectsinput, setSubjectsinput] = useState([]);

  const resetFields = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setId('');
    setUsername('');
    setPassword('');
    setInstitution('');
    setStudyField('');
    setSubjectsinput([]);
  };

  const handleRoleChange = (event) => {
    const selectedRole = event.target.value;
    setRole(selectedRole);
    setShowFields(selectedRole !== 'default');
    resetFields();
  };



  const getPasswordStrength = (password) => {
    let strength = 0;
    if (password.length > 5) strength += 1;
    if (password.match(/[a-z]+/)) strength += 1;
    if (password.match(/[A-Z]+/)) strength += 1;
    if (password.match(/[0-9]+/)) strength += 1;
    if (password.match(/[\W]+/)) strength += 1;
    return strength;
  };

  const handleSignup = (event) => {
    event.preventDefault();

    if (firstName.length < 2) {
      alert("שם קצר מידי");
      return;
    }
    if (lastName.length < 2) {
      alert("שם המשפחה קצר מידי");
      return;
    }
    if (id.length < 9) {
      alert("תעודת הזהות שגויה");
      return;
    }
    const strength = getPasswordStrength(password);
    if (strength < 5) {
      alert('הסיסמה צריכה להכיל אות קטנה (a-z), אות גדולה (A-Z), מספר ותו מיוחד');
      return;
    }

    alert("ההרשמה בוצעה בהצלחה");

    onRegistration({ firstName, lastName, email, id, username, password, role, institution, studyField, subjectsinput });
    resetFields();
  };

  const handleSubjectsChange = (index, event) => {
    const newSubjects = [...subjectsinput];
    newSubjects[index] = event.target.value;
    setSubjectsinput(newSubjects);
  };


  const addSubjectField = () => {
    setSubjectsinput([...subjectsinput, '']);
  };

  return (
    <div>
      <div className="registration-box">
        <h2>הרשמה</h2>
        <form onSubmit={handleSignup}>
          <div>
            <label>
              בחר תפקיד:
              <select value={role} onChange={handleRoleChange}>
                <option value="default">   </option>
                <option value="student">סטודנט</option>
                <option value="lecturer">מרצה</option>
              </select>
            </label>
          </div>
          {showFields && (
            <>
              <div>
                <label>
                  שם פרטי:
                  <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </label>
              </div>
              <div>
                <label>
                  שם משפחה:
                  <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </label>
              </div>
              <div>
                <label>
                  אימייל:
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
              </div>
              <div>
                <label>
                  תעודת זהות:
                  <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
                </label>
              </div>
              <div>
                <label>
                  שם משתמש:
                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
              </div>
              <div>
                <label>
                  סיסמה:
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
              </div>
              {role === 'student' && (
                <>
                  <div>
                    <label>
                      מוסד אקדמי:
                      <input type="text" value={institution} onChange={(e) => setInstitution(e.target.value)} />
                    </label>
                  </div>
                  <div>
                    <label>
                      תחום לימוד:
                      <input type="text" value={studyField} onChange={(e) => setStudyField(e.target.value)} />
                    </label>
                  </div>

                  {subjectsinput.map((subject, index) => (
                    <div key={index}>
                      <label>

                        <select value={subject} onChange={(e) => handleSubjectsChange(index, e)}>
                          <option value="default"> בחר מקצוע</option>
                          <option value="hedva">חדו"א 1</option>
                          <option value="hedva">חדו"א 2</option>
                          <option value="linear">לינארית</option>
                          <option value="english">אנגלית</option>
                          <option value="physics">פיזיקה</option>

                        </select>
                      </label>
                    </div>
                  ))}

                  <button type="button" class="sub-button" onClick={addSubjectField}>הוספת מקצוע אותו תרצה ללמוד</button>
                </>
              )}

              {role === 'lecturer' && (
                <>
                  <div>
                    <label>
                      מוסד אקדמי:
                      <input type="text" value={institution} onChange={(e) => setInstitution(e.target.value)} />
                    </label>
                  </div>
                  <div>
                    <label>
                      תחום לימוד:
                      <input type="text" value={studyField} onChange={(e) => setStudyField(e.target.value)} />
                    </label>
                  </div>

                  {subjectsinput.map((subject, index) => (
                    <div key={index}>
                      <label>

                        <select value={subject} onChange={(e) => handleSubjectsChange(index, e)}>
                          <option value="default">בחר מקצוע </option>
                          <option value="hedva">חדו"א 1</option>
                          <option value="hedva">חדו"א 2</option>
                          <option value="linear">לינארית</option>
                          <option value="english">אנגלית</option>
                          <option value="physics">פיזיקה</option>

                        </select>
                      </label>
                    </div>
                  ))}

                  <button type="button" class="sub-button" onClick={addSubjectField}>הוספת מקצוע אותו תרצה ללמוד</button>
                </>
              )}
            </>
          )}

          <button type="submit" class="reg-button">הרשם</button>
        </form>
      </div>
    </div>
  );
}

export default Registration;
