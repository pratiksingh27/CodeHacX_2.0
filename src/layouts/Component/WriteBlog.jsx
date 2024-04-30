import {  useEffect, useState } from "react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { auth, firestore } from "../../firebaseConfig";
import { Navigate } from "react-router-dom";

const WriteBlog = () => {
  const [user,setUser] = useState(auth.currentUser);
  const [createdby, setCreatedby] = useState("");
  const [title, setTitle] = useState("");
  const [discription, setDescription] = useState("");
  const [imgurl, setImgurl] = useState("");
  const [location, setLocation] = useState("");
  const [company, setCompany] = useState("");
  const [duration, setDuration] = useState("");
  const [start, setStart] = useState("");
  const [stipend, setStipend] = useState("");
  const [job, setJob] = useState("");
  const [applyBy, setApplyBy] = useState("");
  const [redirectUrl, setRedirectUrl] = useState("");

  const handleSubmite = async (e) => {
    e.preventDefault();
    
    try {     

      await addDoc(collection(firestore, "Blogs"), {
        title,
        company,
        location,
        duration,
        createdby,
        start,
        job,
        createdat: Timestamp.now(),
        discription,
        imgurl,
        stipend,
        applyBy,
        redirectUrl,
      });
      alert("Blog posted successfully!");
      setCreatedby("");
      setTitle("");
      setLocation("");
      setCompany("");
      setDuration("");
      setDescription("");
      setImgurl("");
      setStart("");
      setStipend("");
      setJob("");
      setApplyBy("");
      setRedirectUrl("");
    } catch (error) {
      console.error("Error posting blog: ", error);
      alert("Error posting blog: " + error.message);
    }
  };



  return (
      user ? (<>
        <div className='md:w-[40vw]'>
        <form className='lg:grid-cols-3 py-16 shadow-xl w-full px-8 md:mx-auto md:w-full rounded-lg' onSubmit={handleSubmite}>
          <h1 className='font-bold'>Add new Job/internship Update</h1>
          <div className='py-4'>
            <label className='block text-start'>Position</label><br></br>
            <input className='p-2 outline flex w- rounded-md text-black mr-2 md:w-full w-full outline-none border-b-2' type="text" onChange={(e) => setTitle(e.target.value)} value={title} placeholder='Enter Position' required/>
          </div>
          <div className='py-4'>
            <label className='block text-start'>Company</label><br></br>
            <input className='p-2 outline flex w- rounded-md text-black mr-2 md:w-full w-full outline-none border-b-2' type="text" onChange={(e) => setCompany(e.target.value)} value={company} placeholder='Enter company' required/>
          </div>
          <div className='py-4'>
            <label className='block text-start'>Location</label><br></br>
            <input className='p-2 outline flex w-50% rounded-md text-black mr-2 md:w-full w-full outline-none border-b-2' type="text" onChange={(e) => setLocation(e.target.value)} value={location} name="message" placeholder='Write your Article' required/>
          </div>
          <div className='py-4'>
            <label className='block text-start'>Stipend</label><br></br>
            <input className='p-2 outline flex w-50% rounded-md text-black mr-2 md:w-full w-full outline-none border-b-2' type="text" onChange={(e) => setStipend(e.target.value)} value={stipend} placeholder='Enter Your blogtitle' required/>
          </div>
          <div className='py-4'>
            <label className='block text-start'>Duration</label><br></br>
            <input className='p-2 outline flex w-50% rounded-md text-black mr-2 md:w-full w-full outline-none border-b-2' type="text" onChange={(e) => setDuration(e.target.value)} value={duration} name="message" placeholder='Write your Article' required/>
          </div>
          <div className='py-4'>
            <label className='block text-start'>Joining Date</label><br></br>
            <input className='p-2 outline flex w-50% rounded-md text-black mr-2 md:w-full w-full outline-none border-b-2' type="text" onChange={(e) => setStart(e.target.value)} value={start} name="message" placeholder='Write your Article' required/>
          </div>
          <div className='py-4'>
            <label className='block text-start'>Job Type</label><br></br>
            <input className='p-2 outline flex w-50% rounded-md text-black mr-2 md:w-full w-full outline-none border-b-2' type="text" onChange={(e) => setJob(e.target.value)} value={job} name="message" placeholder='Write your Article' required/>
          </div>
          <div className='py-4'>
            <label className='block text-start'>Last Date</label><br></br>
            <input className='p-2 outline flex w-50% rounded-md text-black mr-2 md:w-full w-full outline-none border-b-2' type="text" onChange={(e) => setApplyBy(e.target.value)} value={applyBy} placeholder='Enter Your blogtitle' required/>
          </div>
          <div className='py-4'>
            <label className='block text-start'>Redirect Link</label><br></br>
            <input className='p-2 outline flex w-50% rounded-md text-black mr-2 md:w-full w-full outline-none border-b-2' type="text" onChange={(e) => setRedirectUrl(e.target.value)} value={redirectUrl} placeholder='Enter Your blogtitle' required/>
          </div>
          <div className='py-4'>
            <label className='block text-start'>Post Image</label><br></br>
            <input className='p-2 outline flex w- rounded-md text-black mr-2 md:w-full w-full outline-none border-b-2' type="text" onChange={(e) => setImgurl(e.target.value) } name="image" placeholder='Past Image Link' />
          </div>
          <input className='bg-[#302b63] w-[200px] rounded-md font-medium my-4 mx-auto py-1 text-white' type="submit" value="Send" />
        </form>
      </div></>)
      :<Navigate to={"/login"}/>
    
   
  );
};

export default WriteBlog;

