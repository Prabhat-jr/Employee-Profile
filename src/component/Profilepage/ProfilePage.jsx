import React,{useState} from 'react'
import "./ProfilePage.css";
import Camera from "../../asset/camrea.png"
const ProfilePage = () => {
  const [image, setImage] = useState(null)
  const[delet, setdelet] =useState()

const onImageChange = (event) => {
 if (event.target.files && event.target.files[0]) {
   setImage(URL.createObjectURL(event.target.files[0]));
 }
}

  return (
    <div className='Profile'>
      <p className='heading'>Management system</p>
      <div className='profilepage'>
      <div className='lefttProfile'>
      {/* { <div>
        <button type='button' className='btn-warning'>
          <i className='fa fa-upload'>upload File</i>
    <input type="file" onChange={onImageChange} className="filetype" />
    </button>
  </div> } */}
  <div className='upload'>
    <div>
    <img className='image' src={image}  alt="" />
    </div>
    <div className='round'>
    <input type="file" onChange={onImageChange} className="filetype" />
    {/* <i className='fa fa-camera'></i> */}
    {/* <Camera /> */}
    <img className='Cimg' src={Camera} alt=''/>
    </div>
      </div>
       <div className='inputfield'>
        <div>
        <label className='f-label'>First Name</label>
        <input type="text" name="name" placeholder='First Name' className='input'/>
        </div>
        <div>
        <label className='f-label'>Last Name</label>
        <input type="text" name="name" placeholder='Last Name' className='input'/>
        </div>
       </div>
       <div>
        <label className='f-label'>Designation</label>
        <input type="text" name="designation" placeholder='Designation' className='input1' />
        </div>
      </div>
      <div className="RightProfile">
       <div className='inputfield'>
        <div>
        <label className='f-label'>Date of Birth</label>
        <input className='input' type="date" name="date of birth" placeholder='Date of Birth'/>
        </div>
        <div className='f-Slabel'>
        <label className='Sinputfield' for="gender" > Select you gender</label>
        <select name="gender" className='select'>
      	<option value="none" selected>Gender</option>
	      <option value="male">Male</option>
	      <option value="female">Female</option>
	      <option value="other">other</option>
      </select>
      </div>
       </div>
       <div>
        <label className='f-label'>Phone Number</label>
        <input className='input'  type="phone number" id='phone' value="+91" placeholder='Phone Number' />
       </div>
       <div>
       <label className='f-label'>Address</label>
       <textarea className='input' cols={3} rows={1} type="Address" placeholder='Address'/>
       </div>
       <div className='inputfield'>
        <div>
       <label className='f-label'>City</label>
       <input className='input' type="City" placeholder='City'/>
       </div>
       <div>
       <label className="f-label">State</label>
       <input className='input' type="state" placeholder='state'/>
       </div>
       </div>
       <div className='inputfield'>
        <div>
       <label className='f-label'>Zip Code</label>
       <input className='input' type="zipcode" placeholder='Address'/>
       </div>
       <div>
       <label className='f-label'>Country</label>
       <input className='input' type="country" placeholder='City'/>
       </div>
       </div>
       <p className='para'>*All fields are compulsory</p>
       <div className='btn1'>
        <button className='Cbtn'>Cancel</button>
        <button className='Cbtn'>Save</button>
       </div>
      </div>
      </div>
    </div>
  )
}

export default ProfilePage