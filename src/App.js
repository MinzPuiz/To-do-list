import { useState } from "react";

function App() {
  const [work , setWork] = useState('');
  console.log(work);
  return (
    <div className="flex gap-8 h-screen justify-center items-center font-bold border border-solid border-black">
        <input type="text" className="outline-none border border-blue-600 px-4 py-2 w-[400px]" value={work} 
        onChange={e => setWork(e.target.value)}>
        </input>
        <button type="submit" className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white">Slap</button>
    </div>
  );
}

export default App;