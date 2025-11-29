import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { createProfile } from '../../actions/profiles';
import './form.css';

const Form = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    image: '',
  });

  const dispatch = useDispatch();
  const fileInputRef = useRef(null); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', profileData.name);
    formData.append('image', profileData.image);

    dispatch(createProfile(formData));
    clear(); 
  };

  const handleFileChange = (e) => {
    setProfileData({ ...profileData, image: e.target.files[0] });
  };

  const clear = () => {
    setProfileData({ name: '', image: '' });

  
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>Add a profile</h3>

        <input
          type="text"
          placeholder="Name"
          value={profileData.name}
          onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          ref={fileInputRef} 
        />

        <button type="submit">Submit</button>
        <button type="button" onClick={clear}>Clear</button>
      </form>
    </div>
  );
};

export default Form;
