import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";  
import "./EditProfile.css";
import image from "../../assets/images/ProfilePicture.jpg";
import { MdEdit } from "react-icons/md";
import DatePicker from "react-datepicker";
import { FiChevronDown } from "react-icons/fi";


function EditProfile () {
    const [activeTab, setActiveTab] = useState ("editProfile");
    const [emailError, setEmailError] = useState("");
    
    const [formData, setFormData] = useState({
        Name: "",
        UserName: "",
        Email: "",
        Password: "",
        DateOfBirth: null,
        PresentAddress: "",
        PermanentAddress: "",
        City: "",
        PostalCode: "",
        Country: "",
        
    });
      
    const SaveChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
      };
      
    const SubmitData = (e) => {
        e.preventDefault();
    
    const email = formData.Email;

    if (!email.includes("@") || !email.includes(".")) {
    setEmailError("Please enter a valid email address");
    return;                
    }

    setEmailError("");       
    console.log(formData);
    };
       return ( 
        <div className="setting-card">
            <div className="setting-tabs">
                <button type="button"
                 className={`profile-tab ${activeTab ==="editProfile" ? "active" : ""}`}
                 onClick={() => setActiveTab("editProfile")}> Edit Profile  
                 </button>
                 <button type="button"
                 className={`preferences-tab ${activeTab ==="preferences" ? "active" : ""}`}
                 onClick={() => setActiveTab("preferences")}> Preferences  
                 </button>
                 <button type="button"
                 className={`security-tab ${activeTab ==="security" ? "active" : ""}`}
                 onClick={() => setActiveTab("security")}> Security  
                 </button>
            </div>
            {activeTab === "editProfile" && (
               <div className="profile-tab__content"> 
               <div className="profile-picture">
                <img src={image} alt="Profile Picture" />
                <button type="button" className="profile-picture-edit" aria-label="Edit photo">
                    <MdEdit />
                </button>
               </div>
              
              <form className="profile-form" onSubmit={SubmitData}  noValidate>
                <div className="profile-form__grid">
                    <div className="profile-form__input">
                        <label htmlFor="Name">Your Name</label>
                        <input id="Name" name="Name" type="text" placeholder="Charlene Reed"
                         value={formData.Name} onChange={SaveChange} />          
                    </div>
                    <div className="profile-form__input">
                        <label htmlFor="UserName">User Name</label>
                        <input id="UserName" name="UserName" type="text" placeholder="Charlene Reed"
                         value={formData.UserName} onChange={SaveChange} />          
                    </div>
                
                    <div className="profile-form__input">
                        <label htmlFor="Email">Email</label>
                        <input id="Email" name="Email" type="email" placeholder="charlenereed@gmail.com"
                        className={emailError ? "input-error" : ""}
                        value={formData.Email} onChange={SaveChange} />
                        {emailError && <span className="profile-form__error">{emailError}</span>}   
                    </div>
                    <div className="profile-form__input">
                        <label htmlFor="Password">Password</label>
                        <input id="Password" name="Password" type="password" placeholder="**********"
                         value={formData.Password} onChange={SaveChange} />          
                    </div>
                    <div className="profile-form__input">
                        <label htmlFor="DateOfBirth">Date of Birth</label>
                            <DatePicker
                            id="DateOfBirth"
                            selected={formData.DateOfBirth}
                            onChange={(date) => setFormData({ ...formData, DateOfBirth: date })}
                            dateFormat="d MMMM yyyy"
                            placeholderText="25 January 1990"  
                            showYearDropdown
                            showMonthDropdown
                            dropdownMode="select"
                            />   
                             <FiChevronDown className="date-field__icon" />     
                    </div>
                    <div className="profile-form__input">
                        <label htmlFor="PresentAddress">Present Address</label>
                        <input id="PresentAddress" name="PresentAddress" type="text" placeholder="San Jose, California, USA"
                         value={formData.PresentAddress} onChange={SaveChange} />          
                    </div>
                    <div className="profile-form__input">
                        <label htmlFor="PermanentAddress">Permanent Address</label>
                        <input id="PermanentAddress" name="PermanentAddress" type="text" placeholder="San Jose, California, USA"
                         value={formData.PermanentAddress} onChange={SaveChange} />          
                    </div>
                    <div className="profile-form__input">
                        <label htmlFor="City">City</label>
                        <input id="City" name="City" type="text" placeholder="San Jose"
                         value={formData.City} onChange={SaveChange} />          
                    </div>
                    <div className="profile-form__input">
                        <label htmlFor="PostalCode">Postal Code</label>
                        <input id="PostalCode" name="PostalCode" type="text" inputMode="numeric" placeholder="45962"
                         value={formData.PostalCode} onChange={SaveChange} />          
                    </div>
                    <div className="profile-form__input">
                        <label htmlFor="Country">Country</label>
                        <input id="Country" name="Country" type="text" placeholder="USA"
                         value={formData.Country} onChange={SaveChange} />          
                    </div>
                </div>
                <button type="submit" className="profile-form__save">Save</button>
              </form>

               </div>
            )}
        </div>
       )
}
export default EditProfile;
