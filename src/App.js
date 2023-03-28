import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [work , setWork] = useState('');
  const [todos , setTodos] = useState([]);
  const add_data = () => {
    if(todos?.some(item => item.id === work?.replace(/\s/g, ''))){
      toast.warning('job was exists');
    }
    else
    {
      setTodos(prev => [...prev, {id: work?.replace(/\s/g, ''), job: work}]);
      setWork('');
      toast.success('Done !');
    }
  }
  const handleDeleteJob = (id) => {
    setTodos(prev => prev.filter(item => item.id !== id ))
  }

  const handleKeyPress = () => {
    if (handleDeleteJob.which === 13 || handleDeleteJob.keyCode === 13) {
      // Xử lý khi nhấn phím Enter
    }
  }
  return (
    <>
    <div className="flex flex-col gap-8 h-screen justify-center items-center font-bold border border-solid border-black">
        <div className="flex gap-8">
          <input type="text" className="outline-none border border-blue-600 px-4 py-2 w-[400px]" value={work} onKeyUp={handleKeyPress} onChange={e => setWork(e.target.value)}>
          </input>
          <button type="submit" className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white" onClick={add_data}>Slap</button>
        </div>
        <div>
          <h3 className="font-bold text-xl">Content: </h3>
          <div>
            <ul>
              {todos?.map((item) => {
                return(
                  <li key={item.id} className="flex gap-10 item-center">
                    <span className="my-2">{item.job}</span>
                    <span onClick={() => handleDeleteJob(item.id)} className="my-2 cursor-pointer">X</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
    </div>
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    </>
  );
}

export default App;