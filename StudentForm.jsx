import { useState } from "react";

function StudentForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    age: "",
    gender: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const validate = () => {
    let newErrors = {};

    if (!formData.fullName)
      newErrors.fullName = "Full Name is required";

    if (!formData.email)
      newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";

    if (!formData.age)
      newErrors.age = "Age is required";
    else if (formData.age <= 10)
      newErrors.age = "Age must be greater than 10";

    if (!formData.gender)
      newErrors.gender = "Select gender";

    if (!formData.terms)
      newErrors.terms = "You must agree to terms";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent reload

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmittedData(formData);
      // 🔥 Reset form fields
    setFormData({
      fullName: "",
      email: "",
      age: "",
      gender: "",
      terms: false,
    });

    // 🔥 Clear errors
    setErrors({});
  }
};

 return (
   <div style={styles.wrapper}>
     <div style={styles.formBox}></div>


      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit}>
      


        <input
          type="text"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
        />
        <p style={{ color: "red" }}>{errors.fullName}</p>

        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
        <p style={{ color: "red" }}>{errors.email}</p>

        <input
          type="number"
          placeholder="Age"
          value={formData.age}
          onChange={(e) =>
            setFormData({ ...formData, age: e.target.value })
          }
        />
        <p style={{ color: "red" }}>{errors.age}</p>

        <div>
          <label>
            <input
              type="radio"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
            />
            Female
          </label>
        </div>
        <p style={{ color: "red" }}>{errors.gender}</p>

        <label>
          <input
            type="checkbox"
            checked={formData.terms}
            onChange={(e) =>
              setFormData({ ...formData, terms: e.target.checked })
            }
          />
          Agree to Terms
        </label>
        <p style={{ color: "red" }}>{errors.terms}</p>

        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h3>Form Submitted Successfully ✅</h3>
          <p>Name: {submittedData.fullName}</p>
          <p>Email: {submittedData.email}</p>
          <p>Age: {submittedData.age}</p>
          <p>Gender: {submittedData.gender}</p>
        </div>

      )}
    </div>
    
   
  );
}
const styles = {
//   wrapper: {
//     minHeight: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
wrapper: {
  display: "flex",
  justifyContent: "center",

  },
  formBox: {
    width: "350px",
    padding: "25px",
    backgroundColor: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  },
};

export default StudentForm;