import React, { useState } from "react";
import Header from "./Header";
import GigForm from "./GigForm";
import ActionButtons from "./ActionButtons";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import {useParams}  from "react-router-dom"; // Fixed import for jwtDecode

function ShareOpportunities() {
  const { id: userId } = useParams();
  const [formData, setFormData] = useState({
    position: "",
    duration: "",
    pay: "",
    date: "",
    vacancy: "",
    shift: "",
    description: "",
  });

  const [formErrors, setFormErrors] = useState({}); // State for form errors

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the error for this field when the user types
    setFormErrors({
      ...formErrors,
      [name]: '',
    });
  };

  const handlePost = () => {
    try {
      if (userId) {
        // console.log("Token found");
         
        // console.log("Decoded token:", decodedToken);
        console.log("Form Data:", userId);

        // Axios post request with correct data structure
        axios.post("/api/post", { ...formData, userId }, {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        })
        .then(response => {
          console.log("Data posted successfully:", response.data);
        })
        .catch(error => {
          console.error("Error posting data:", error.response?.data || error);
        });
      }else{
        console.log('token not found')
      }
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  };

  const formFields = [
    { label: "Position", type: "text", placeholder: "Enter job position" },
    { label: "Duration", type: "text", placeholder: "Enter job duration" },
    { label: "Pay", type: "text", placeholder: "Enter pay amount" },
    { label: "Date", type: "date", placeholder: "Select date" },
    { label: "No of Vacancy", type: "number", placeholder: "Enter number of vacancies" },
    { label: "Shift", type: "text", placeholder: "Enter shift details" },
    { label: "Description", type: "textarea", placeholder: "Enter job description" },
  ];

  return (
    <div className="flex overflow-hidden flex-col pb-20 bg-white">
      <Header />
      <main className="self-center mt-12 ml-16 max-w-full w-[876px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col">
          <GigForm 
            formFields={formFields} 
            formData={formData} 
            handleInputChange={handleInputChange} 
            formErrors={formErrors} 
          />
          <ActionButtons 
            formData={formData} 
            handlePost={handlePost} // Pass handlePost function to ActionButtons
          />
        </div>
      </main>
    </div>
  );
}

export default ShareOpportunities;
