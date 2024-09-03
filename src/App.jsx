

// import {Header} from './Components/Header.jsx'
// import {useState }from 'react'

// import './App.css'

// function App() {
 
// const [bg,setBg ] = useState("#2563eb")
// const [textColor,setTextColor ] = useState("#000")
// const [value,setValue ] = useState("")
// const [all,setAll ] = useState([])





// function add (){
//   setAll([...all,{
//        bg,
//        textColor,
//        value,
  

//   }])
// }



//   return (
//     <>
//       <Header/>

//       <div  className="  bg-red-100 flex w-full h-24 items-center justify-center gap-1 border-2 mt-20 fixed top-0 left-0 right-0 overflow-y-hidden">
 
//   <input
//   onChange={(v)=> setValue(v.target.value)}
//   placeholder='Enter your Text'
//     type="text"
//     id="large-input"
//     className="block w-1/3 p-2 text-gray-900 border border-gray-300  bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-blue-400"
//   />

// <label>Choose bg-color</label>
//   <input

//   onChange={((b)=> setBg(b.target.value))}



//     type="color"
    
//     className=" h-12 w-32 block cursor-pointer rounded-lg  disabled:pointer-events-none"
//     id="hs-color-input"
//     defaultValue="#3563eb"
//     title="Choose your color"
//   />
//   <label>Choose text-color</label>
//   <input onChange={(cl)=> setTextColor(cl.target.value) } type="color" name="" id=""  className=" h-12 w-32 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none"
//   defaultValue="white"  />
// <button  onClick={add}  className="bg-gray-100 hover:bg-gray-400  ml-1 text-gray-800 font-semibold border border-gray-400 rounded shadow">
//   Add
// </button>

//  </div>
//        <div className='flex justify-center mt-[200px] ml-4 flex-wrap gap-3 '>

// {    
//     all.map((allData,index)=>{
//       return(
//         <div  key={index}  style={{backgroundColor:allData.bg , color:allData.textColor}}  className="rounded-md bg-[${bg}] p-4 w-52 h-52">
//         <p>{allData.value}</p>
       
     
//         </div> 
//       )

//     })
                
// }
//        </div>

       
//     </>
//   )
// }

// export default App







import { Header } from './Components/Header.jsx';
import { useState} from 'react';
import './App.css';

function App() {
  const [bg, setBg] = useState("#2563eb");
  const [textColor, setTextColor] = useState("#000");
  const [value, setValue] = useState("");
  const [all, setAll] = useState([]);

  function add() {
    const newItem = {
      bg,
      textColor,
      value,
      countdown: 30, 
      id: Date.now(), 
    };

    setAll([...all, newItem]);

    const intervalId = setInterval(() => {
      setAll((prevAll) =>
        prevAll.map((item) =>
          item.id === newItem.id && item.countdown > 0
            ? { ...item, countdown: item.countdown - 1 }
            : item
        )
      );
    }, 1000);

 
    setTimeout(() => {
      clearInterval(intervalId);
      setAll((prevAll) => prevAll.filter((item) => item.id !== newItem.id));
    }, 30000);
  }

  return (
    <>
      <Header />

      <div className="bg-red-100 flex w-full h-24 items-center justify-center gap-1 border-2 mt-20 fixed top-0 left-0 right-0 overflow-y-hidden">
        <input
          onChange={(v) => setValue(v.target.value)}
          placeholder="Enter your Text"
          type="text"
          id="large-input"
          className="block w-1/3 p-2 text-gray-900 border border-gray-300 bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-blue-400"
        />

        <label>Choose bg-color</label>
        <input
          onChange={(b) => setBg(b.target.value)}
          type="color"
          className="h-12 w-32 block cursor-pointer rounded-lg disabled:pointer-events-none"
          id="hs-color-input"
          defaultValue="#3563eb"
          title="Choose your color"
        />

        <label>Choose text-color</label>
        <input
          onChange={(cl) => setTextColor(cl.target.value)}
          type="color"
          className="h-12 w-32 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none"
          defaultValue="white"
        />

        <button
          onClick={add}
          className="bg-gray-100 hover:bg-gray-400 ml-1 text-gray-800 font-semibold border border-gray-400 rounded shadow"
        >
          Add
        </button>
      </div>

      <div className="flex justify-center mt-[200px] ml-4 flex-wrap gap-3">
        {all.map((allData, index) => (
          <div
            key={index}
            style={{ backgroundColor: allData.bg, color: allData.textColor }}
            className="rounded-md p-4 w-52 h-52 flex flex-col items-center justify-center"
          >
            <p>{allData.value}</p>
            <p>{allData.countdown} seconds remaining</p> 
          </div>
        ))}
      </div>
    </>
  );
}

export default App;



















