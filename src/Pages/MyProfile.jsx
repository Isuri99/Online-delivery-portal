import React, { useState } from "react";
import "../styles/myprofile.css";
import Sidebar from "../components/Sidebar/Sidebar";


 


const MyProfile = () => {
  
  const[fname, setFname]=useState('')
  const[lname, setLname]=useState('')
  const[nic, setNic]=useState('')
  const[email, setEmail]=useState('')
  const[mnumber, setMnumber]=useState('')
  const[address, setAddress]=useState('')
  const[city, setCity]=useState('')
  const[error,setError]=useState(false)
  const[message, setMessage]=useState(null)

  function isValidEmail(email){
    return /\S+@\S+\.\S+/.test(email);
  }
  
  const handleChange = e => {
    if (!isValidEmail(e.target.value)) {
      setMessage('Email is invalid');
    } else {
      setMessage(null);
    }
    setEmail(e.target.value);

   
  };


  const handleClick=(e)=>{

    e.preventDefault()
    const user={fname,lname,nic,email,mnumber,address,city}

    if(fname.length==0 || lname.length==0 || nic.length==0 || email.length==0 || mnumber.length==0 || address.length==0 || city.length==0)
        setError(true)
    
        if(fname && lname && nic && email && mnumber && address && city)
        {
          console.log(user)
          fetch("http://localhost:8080/user/add" , {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(user)
          }).then(()=>{
            console.log("New User Added")
            alert('Your information was saved' )
          })
        }   
        
        
    
  }
  
    
  
  
 
    return(
      
        <div className="myprofile">

         
            <h2 className="myprofile__title">My Profile</h2>

            <div className="myprofile__wrapper">
                
               
        <div className="details__form">        {/*form to collect data*/}
          <h2 className="profile__title">Your Details</h2>
          <p className="profile__desc">
           
          </p>
          <form onSubmit={handleClick}>
            <div className="form__group">

            <div>
                <label>First Name</label>
                <input type="text" placeholder=""
                value={fname}
                onChange={(e)=>setFname(e.target.value)}/>  
                
                {error&&fname.length<=0?
              <label class="errorNote">First Name can't be empty</label>:""}

            </div>

              
              <div>
                <label>Last Name</label>
                <input type="text" placeholder="" 
                value={lname}
                onChange={(e)=>setLname(e.target.value)}/>
                
                {error&&lname.length<=0?
              <label class="errorNote">Last Name can't be empty</label>:""}
              </div>
              </div>
            

              <div className="form__group">
              <div>
                <label>NIC</label>
                <input type="text" placeholder=""
                value={nic}
                onChange={(e)=>setNic(e.target.value)} />
                {error&&nic.length<=0?
              <label class="errorNote">NIC can't be empty</label>:""}
              </div>

              


              <div>
                <label>Email</label>
                <input type="email" placeholder="" 
                value={email}
                onChange={handleChange} /> 
                {message && <h4 style={{color: 'red'}}>{message}</h4>}
    
                {error&&email.length<=0?
              <label class="errorNote">Email can't be empty</label>:""}
              </div>

              
            </div>


            <div className="form__group">
            <div>
                <label>Mobile Number</label>
                <input type="text" placeholder="" 
                value={mnumber}
                onChange={(e)=>setMnumber(e.target.value)}/>
                {error&&mnumber.length<=0?
             <label class="errorNote">Mobile Number can't be empty</label>:""}
             </div>

             


              <div>
                <label>Address</label>
                <input type="text" placeholder="" 
                value={address}
                onChange={(e)=>setAddress(e.target.value)}/>
                {error&&address.length<=0?
              <label class="errorNote">Address can't be empty</label>:""}

              </div> 

              
            </div>

            <div className="form__group">
              <div>
                <label>City</label>
                <input type="" placeholder="" 
                value={city}
                onChange={(e)=>setCity(e.target.value)}/>
                {error&&city.length<=0?
              <label class="errorNote">City can't be empty</label>:""}
              </div>

              

            </div>

            <div className="form__group">

            
              
              <div>
                
                <label>Your Photo</label>
                <p className="profile-img__desc">
                  This will be displayed in your profile
                </p>
                <input type="file" placeholder="choose file"/>   {/*uploading the profile image*/}
              </div>

              
                <button onClick={handleClick} className="update__btn">Save </button>
                
             
            </div>
          </form>
        </div>
       </div>
      </div>
    );
};

export default MyProfile;