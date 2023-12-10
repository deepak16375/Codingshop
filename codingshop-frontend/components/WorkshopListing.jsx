import React from 'react'

const WorkshopListing = () => {
  return (
    <div className="w-full h-screen flex">
    <div className="w-1/2 h-screen flex justify-center items-center">
      <div className="border border-black border-dashed h-96 w-[60%] flex flex-col justify-center items-center rounded-xl">
        <h1>Drag and drop media </h1> <h2 className="text-[#9381FF]">Browse files</h2>{" "}
        <p> Max size: 50MB JPG, PNG, GIF, SVG</p>
      </div>
    </div>

    <div className="w-1/2 h-screen  flex justify-center items-center">
      <div className=" p-5 w-96">
        <form>
          <h2>Workshop Title*</h2>
          <input type="text" className="border rounded-lg p-2 w-full" placeholder="Enter the title" />
          <h2>Description</h2>
          <textarea cols="30" rows="7" className="border rounded-lg p-2 w-full" placeholder="Enter the description"></textarea>
          <h2>Preferred Date and Time*</h2>
          <input type="datetime-local" name="" id=""  className="border rounded-lg p-2 w-full"/>
          <h2>Tags or Categories*</h2>
          <input type="text" className="border rounded-lg p-2 w-full" placeholder="Enter tags" />
          <h2>Pricing*</h2>
          <select className="w-full p-2 border rounded-lg">
            <option value="Free">Free</option>
            <option value="Paid">Paid</option>
          </select>
          <br />
          <br />
          <button className="p-3 bg-[#9381FF] rounded-xl px-6 font-semibold text-white">
            Create
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default WorkshopListing