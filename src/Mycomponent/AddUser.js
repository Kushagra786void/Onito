import React from 'react'
import  {useState} from 'react';
export const AddUser = (props) => {
    const [Name,setName]= useState("");
    const [DOB,setDOB]= useState("");
    const [Sex,setSex]= useState("");


    // ONsubmit
    const submit = (e)=>{
        e.preventDefault();//it prevent page reloading.
        if(!Name||!DOB||!Sex)
         {alert("Name/DOB/SEX can't be empty")}
        else{ 
        props.addTodo(Name,DOB,Sex);
        setName("");
        setDOB("");
        setSex("");

        document.getElementById("create-course-form").reset();
    } 
    }

    let Perso ={
        border:"2px solid red",
        position:"relative",
        margin:"10px 20px 10px 0px",
        padding :"20px 10px",
        borderRadius:"20px",
        backgroundColor:"lightgrey"

    }
  return (
    <div className="container my-3 py-3 my-3"  style={{border:"2px solid red"}}>

        {/* form  */}
        <form className="row g-3" onSubmit={submit} id="create-course-form">
            
            {/* personal  */}
            <div className="row" style={Perso}>   
            <h3><u>Personal Details</u></h3>
            {/* name  */}
                <div class="row mb-3 col-md-5">
                    <div className="col-md-2">
                        <label htmlfor="Name" class="col-sm-2 col-form-label">Name</label>
                    </div>
                    <div class="col-md-10">
                        <input type="text" value={Name} onChange={(e)=>{setName(e.target.value)}} className="form-control" id="title" placeholder="Enter Name" aria-label="Enter Name"/>
                    </div>
                </div>


                {/* dob */}
                <div class="row mb-3 col-md-5">
                    <div className="col-md-4">
                        <label for="DOB" class="col-sm-12 col-form-label">Date Of Birth or Age</label>
                    </div>
                    <div class="col-md-8">
                        <input type="date" value={DOB} onChange={(e)=>{setDOB(e.target.value)}} class="form-control" id="inputEmail3"/>
                    </div>
                </div>


                {/* sex */}
                <div class="row mb-3 col-md-2">
                    <div className="col-md-2">
                        <label for="Sex" class="col-sm-2 col-form-label">Sex</label>
                    </div>
                    <div class="col-md-10">
                        <select class="form-select" id="specificSizeSelect" value={Sex} onChange={(e)=>{setSex(e.target.value)}} placeholder="Enter Sex">
                            <option selected>Enter Sex</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                        </select>     
                    </div>
                </div>

                {/* Mobile */}
                <div class="row mb-3 col-md-5">
                    <div className="col-md-2">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Mobile</label>
                    </div>
                    <div class="col-md-8">
                    <input type="text" class="form-control"  id="inputEmail3" placeholder="Enter Mobile" aria-label="Enter Mobile"/>
                    </div>
                </div>

                {/* govt Issued id     */}
                <div class="row mb-3 col-md-7">
                    <div className="col-md-3">
                        <label for="inputEmail3" class=" col-form-label">Govt Issued ID</label>
                    </div>
                    <div class="col-md-4">
                    <select class="form-select dropdown" id="employment" name="employment">
    <option value="#" selected="selected" >ID Type</option>
    <option value="Employed">Employed</option>
    <option value="Self-employed">Self-employed</option>
    <option value="Out of work">Out of work</option>
    <option value="Homemaker">Homemaker</option>
    <option value="Student">Student</option>
    <option value="Retired">Retired</option>
    <option value="Unable to work">Unable to work</option>
  </select>    
                    </div>
                    <div class="col-md-5">
                        <input type="text" class="form-control" id="inputEmail3" placeholder='Enter Govt ID'/>
                    </div>
                </div>
            
            
            </div>

            {/* //contact */}
            
            <div className="row" style={Perso}>   
            <h3><u>Contact Details</u></h3> 
            {/* Guardian  */}
                <div class="row mb-3 col-md-5">
                    <div className="col-md-3">
                        <label htmlfor="Name" class="col-sm-2 col-form-label">Guardian Details</label>
                    </div>
                    <div class="col-md-4">
                    <input type="text" class="form-control" placeholder="Enter Label" aria-label="Enter Name"/>
                    </div>
                    <div class="col-md-5">
                        <input type="text" class="form-control" placeholder="Enter Guardian Name" aria-label="Enter Name"/>
                    </div>
                </div>


                {/* email */}
                <div class="row mb-3 col-md-3">
                    <div className="col-md-4">
                        <label for="DOB" class="col-sm-2 col-form-label">Email</label>
                    </div>
                    <div class="col-md-8">
                        <input type="text" class="form-control" Placeholder="Enter Email"/>
                    </div>
                </div>


                {/* Emergency  */}
                <div class="row mb-3 col-md-4">
                    <div className="col-md-4">
                        <label for="Sex" class="col-sm-2 col-form-label">Emergency Contact Number</label>
                    </div>
                    <div class="col-md-8">
                        <input type="text" class="form-control" Placeholder="Enter Emergency No"/> 
                    </div>
                </div>
            
            </div>


            {/* //address */}
            <div className="row" style={Perso}>   
            <h3><u>Address Details</u></h3>
                {/* address  */}
                <div class="row mb-3 col-md-5">
                    <div className="col-md-2">
                        <label htmlfor="Name" class="col-sm-2 col-form-label">Address</label>
                    </div>
                    <div class="col-md-10">
                        <input type="text" class="form-control" placeholder="Enter Address" aria-label="Enter Name"/>
                    </div>
                </div>


                {/* state */}
                <div class="row mb-3 col-md-4">
                    <div className="col-md-2">
                        <label for="DOB" class="col-sm-2 col-form-label">State</label>
                    </div>
                    <div class="col-md-10">
                        <select class="form-select" id="specificSizeSelect" placeholder="Enter State">
                            <option selected="selected" >Enter State</option>
                        <option value="Andhra Pradesh">Andhra Pradesh</option>
<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
<option value="Arunachal Pradesh">Arunachal Pradesh</option>
<option value="Assam">Assam</option>
<option value="Bihar">Bihar</option>
<option value="Chandigarh">Chandigarh</option>
<option value="Chhattisgarh">Chhattisgarh</option>
<option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
<option value="Daman and Diu">Daman and Diu</option>
<option value="Delhi">Delhi</option>
<option value="Lakshadweep">Lakshadweep</option>
<option value="Puducherry">Puducherry</option>
<option value="Goa">Goa</option>
<option value="Gujarat">Gujarat</option>
<option value="Haryana">Haryana</option>
<option value="Himachal Pradesh">Himachal Pradesh</option>
<option value="Jammu and Kashmir">Jammu and Kashmir</option>
<option value="Jharkhand">Jharkhand</option>
<option value="Karnataka">Karnataka</option>
<option value="Kerala">Kerala</option>
<option value="Madhya Pradesh">Madhya Pradesh</option>
<option value="Maharashtra">Maharashtra</option>
<option value="Manipur">Manipur</option>
<option value="Meghalaya">Meghalaya</option>
<option value="Mizoram">Mizoram</option>
<option value="Nagaland">Nagaland</option>
<option value="Odisha">Odisha</option>
<option value="Punjab">Punjab</option>
<option value="Rajasthan">Rajasthan</option>
<option value="Sikkim">Sikkim</option>
<option value="Tamil Nadu">Tamil Nadu</option>
<option value="Telangana">Telangana</option>
<option value="Tripura">Tripura</option>
<option value="Uttar Pradesh">Uttar Pradesh</option>
<option value="Uttarakhand">Uttarakhand</option>
<option value="West Bengal">West Bengal</option>
                        </select>     
                    </div>
                    
                </div>


                {/* City */}
                <div class="row mb-3 col-md-3">
                    <div className="col-md-2">
                        <label for="Sex" class="col-sm-2 col-form-label">City</label>
                    </div>
                    <div class="col-md-10">
                       <input type="text" class="form-control" placeholder="Enter city/town/village" aria-label="Enter Mobile"/>    
                    </div>
                </div>

                {/* Country */}
                <div class="row mb-3 col-md-5">
                    <div className="col-md-2">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">Country</label>
                    </div>
                    <div class="col-md-8">
                    <input type="text" class="form-control" placeholder="Enter Country" aria-label="Enter Mobile"/>
                    </div>
                </div>
  
                 {/* pincode  */}
                <div class="row mb-3 col-md-6">
                    <div className="col-md-2">
                        <label for="inputEmail3" class=" col-form-label">PinCode</label>
                    </div>
                    <div class="col-md-5">
                        <input type="text" class="form-control" Placeholder="Enter pincode"/>
                    </div>
                </div>
            
            
            </div>



            {/* //other */}
            
            <div className="row" style={Perso}>   
            <h3><u>Other Details</u></h3>
                
                
                {/* Occupation */}
                <div class="row mb-3 col-md-4">
                    <div className="col-md-3">
                        <label htmlfor="Name" class="col-sm-2 col-form-label">Occupation</label>
                    </div>
                    <div class="col-md-9">
                        <input type="text" class="form-control" placeholder="Enter Occupation" aria-label="Enter Occupation"/>
                    </div>
                </div>


                {/* Religion */}
                <div class="row mb-3 col-md-3">
                    <div className="col-md-3">
                        <label for="Religion" class="col-sm-2 col-form-label">Religion</label>
                    </div>
                    <div class="col-md-9">
                    <select class="form-select dropdown" id="religion" Placeholder="Enter Religion">
              <option selected="selected" >Enter Religion</option>
    <option value="African Traditional Diasporic">African Traditional &amp; Diasporic</option>
    <option value="Agnostic">Agnostic</option>
    <option value="Atheist">Atheist</option>
    <option value="Baha'i">Baha'i</option>
    <option value="Buddhism">Buddhism</option>
    <option value="Cao Dai">Cao Dai</option>
    <option value="Chinese traditional religion">Chinese traditional religion</option>
    <option value="Christianity">Christianity</option>
    <option value="Hinduism">Hinduism</option>
    <option value="Islam">Islam</option>
    <option value="Jainism">Jainism</option>
    <option value="Juche">Juche</option>
    <option value="Judaism">Judaism</option>
    <option value="Neo-Paganism">Neo-Paganism</option>
    <option value="Nonreligious">Nonreligious</option>
    <option value="Rastafarianism">Rastafarianism</option>
    <option value="Secular">Secular</option>
    <option value="Shinto">Shinto</option>
    <option value="Sikhism">Sikhism</option>
    <option value="Spiritism">Spiritism</option>
    <option value="Tenrikyo">Tenrikyo</option>
    <option value="Unitarian-Universalism">Unitarian-Universalism</option>
    <option value="Zoroastrianism">Zoroastrianism</option>
    <option value="primal-indigenous">primal-indigenous</option>
    <option value="Other">Other</option>
                    </select>     
                    </div>
                </div>


                {/* Martial Status */}
                <div class="row mb-3 col-md-3">
                    <div className="col-md-3">
                        <label for="Status" class="col-sm-2 col-form-label">Martial Status</label>
                    </div>
                    <div class="col-md-9">
                    <select class="form-select dropdown" id="religion" Placeholder="Enter Religion">
    <option value="#"  selected="selected" >Enter Martial Status</option>
    <option value="Single">Single</option>
    <option value="Married">Married</option>
    <option value="Widowed">Widowed</option>
    <option value="Separated">Separated</option>
    <option value="Divorced">Divorced</option>
</select>    
                    </div>
                </div>

                {/* Blood Group */}
                <div class="row mb-3 col-md-2">
                    <div className="col-md-4">
                        <label for="BloodGroup" class="col-sm-2 col-form-label">Blood Group</label>
                    </div>
                    <div class="col-md-8">
                    <select class="form-select dropdown" id="religion" Placeholder="Enter Religion">
                    <option value="#"  selected="selected" >Group</option>
    <option>A Positive</option>
    <option>A Negative</option>
    <option>A Unknown</option>
    <option>B Positive</option>
    <option>B Negative</option>
    <option>B Unknown</option>
    <option>AB Positive</option>
    <option>AB Negative</option>
    <option>AB Unknown</option>
    <option>O Positive</option>
    <option>O Negative</option>
    <option>O Unknown</option>
    <option>Unknown</option>
</select>
                    </div>
                </div>

                {/* Nationality */}
                <div class="row mb-3 col-md-4">
                    <div className="col-md-3">
                        <label for="Nationality" class=" col-form-label">Nationality</label>
                    </div>
                    <div class="col-md-9">
                        <input type="text" class="form-control" placeholder='Enter Nationlity' />
                    </div>
                </div>
            </div>
             
             {/* button */}
            <div class="row mb-3 col-md-6" style={{margin:"25px 775px"}}>
                    <div className="col-md-4">
                        <button type="" className="btn btn-lg btn-outline-danger">Cancel</button>
                    </div>
                    <div class="col-md-4" >
                        <button type="submit" className="btn btn-lg btn-success">Submit</button>
                    </div>
                </div>
        </form>

    </div>
  )
}