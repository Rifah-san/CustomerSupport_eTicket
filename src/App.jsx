import { Suspense } from "react";
import Footer from "./components/footer/Footer";
import Nav from "./components/navbar/Nav";
import Tickets from "./components/tickets/Tickets";
import TaskStatus from "./components/taskbar/TaskStatus";
import ResolvedTask from "./components/taskbar/ResolvedTask";
import ProgressBanner from "./components/banner/ProgressBanner";
import ResolvedBanner from "./components/banner/ResolvedBanner";
import { useState } from "react";

//fetching tickets data
const promiseData = fetch("tickets.json").then((res) => res.json());

function App() {
  //state to update progress count
  const [progress, setProgress] = useState(0);
  const updateProgress = () => {
    const newProgress = progress + 1;
    setProgress(newProgress);
  };
  //state to add card list in status section
  const [card,setCard] = useState([]);
  const handleStatus =(cardID)=>{
    const newCard = [...card,cardID];
    setCard(newCard);
  }
  return (
    <>
      <Nav></Nav>
      <div className="flex align-middle justify-center w-full gap-6 px-35 py-10">
        <ProgressBanner progress={progress}></ProgressBanner>
        <ResolvedBanner></ResolvedBanner>
      </div>
      <div className="flex justify-evenly gap-3">
        <div className="w-2/3">
          <Suspense fallback="loading">
            <Tickets
              updateProgress={updateProgress}
              promiseData={promiseData}
              handleStatus ={handleStatus}
            ></Tickets>
          </Suspense>
        </div>
        <div>
          <TaskStatus promiseData={promiseData} card={card}></TaskStatus>
          <ResolvedTask></ResolvedTask>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
