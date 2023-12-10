'use client'
import React, { useState } from 'react';

const Result = ({ data }) => {
  const isSuccess = data && data.status === 'success';

  return (
    <p style={{ color: isSuccess ? 'green' : 'red' }}>
      {data && data.message}
    </p>
  );
};

const BASEURL = "https://codingshop.onrender.com";
const WORKSHOP_POST = "workshop/register";

const Page = () => {
  const [result, showResult] = useState(false);
  const [title, setTitle] = useState('WorkShop Title');
  const [description, setDescription] = useState('WorkShop Description');
  const [date, setDate] = useState('');
  const [tags, setTags] = useState('#reactjs');
  const [image, setImage] = useState('');
  const [pricing] = useState(0.0);
  const [data, setData] = useState();

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 h-screen flex justify-center items-center flex-col gap-2">
        <div>
          <h1 className='text-xl'>Create Workshop Listing</h1>
          <p className='text-xs text-slate-400'>Once your workshop is created, you will be able to change any of its information.</p>
        </div>
        <form action="/upload" method="post" enctype="multipart/form-data" className='border border-black border-dashed h-96 w-[60%] flex flex-col justify-center items-center rounded-xl'>
          <label htmlFor="imageUpload">Choose an image:</label>
          <input type="file" id="imageUpload" name="image" accept="image/*" onChange={(e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.addEventListener("load", () => {
              setImage(reader.result);
            })
            reader.readAsDataURL(file);
          }} />
          <p> Max size: 50MB JPG, PNG, GIF, SVG</p>
          <button type="submit">Upload</button>
        </form>
      </div>

      <div className="w-1/2 h-screen  flex justify-center items-center">
        <div className=" p-5 w-96">
          <form onClick={handleClick}>
            <h2>Workshop Title*</h2>
            <input type="text" className="border rounded-lg p-2 w-full" placeholder="Enter the title" value={title} onChange={(e) => {
              setTitle(e.target.value);
            }} />
            <h2>Description</h2>
            <textarea cols="30" rows="7" className="border rounded-lg p-2 w-full" placeholder="Enter the description" value={description} onChange={(e) => {
              setDescription(e.target.value);
            }}></textarea>
            <h2>Preferred Date and Time*</h2>
            <input type="date" name="" id="" className="border rounded-lg p-2 w-full" onChange={(e) => {
              setDate(e.target.value);
            }} />
            <h2>Tags or Categories*</h2>
            <input type="text" className="border rounded-lg p-2 w-full" placeholder="Enter tags" value={tags} onChange={(e) => {
              setTags(e.target.value);
            }} />
            <h2>Pricing*</h2>
            <select className="w-full p-2 border rounded-lg">
              <option value="Free">Free</option>
              <option value="Paid">Paid</option>
            </select>
            <br />
            <br />
            <button className="p-3 bg-[#9381FF] rounded-xl px-6 font-semibold text-white" onClick={() => {
              fetch(`${BASEURL}/${WORKSHOP_POST}`, {
                method: "POST",
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  title: title,
                  description: description,
                  image: image,
                  pricing: pricing,
                  tags: tags,
                  date: date,
                  host_id: "123@gmail.com"
                }),
              })
                .then((resp) => resp.json())
                .then((response) => {
                  showResult(true);
                  setData(response);
                })
                .catch((error) => {
                  console.error('Error:', error);
                });
            }}>
              Create
            </button>
          </form>
          <div className="w-full text-green-500">
            {result ? <Result data={data} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
