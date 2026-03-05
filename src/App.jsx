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
  const [card, setCard] = useState([]);
  const handleStatus = (cardID) => {
    const newCard = [...card, cardID];
    setCard(newCard);
  };
  const [resolved, setResolved] = useState(0);
  const handleResolved = () => {
    setResolved(resolved);
  };
  return (
    <>
      <Nav></Nav>
      <div className="flex lg:flex-row align-middle justify-center w-full gap-3 lg:px-35 py-10 flex-col p-5">
        <ProgressBanner progress={progress}></ProgressBanner>
        <ResolvedBanner resolved={resolved}></ResolvedBanner>
      </div>
      <div className="flex lg:flex-row justify-evenly align-middle gap-3 flex-col-reverse">
        <div className="lg:w-2/3 w-full">
          <Suspense fallback="loading">
            <Tickets
              updateProgress={updateProgress}
              promiseData={promiseData}
              handleStatus={handleStatus}
            ></Tickets>
          </Suspense>
        </div>
        <div className="flex lg:flex-col flex-row lg:justify-normal lg:gap-10 gap-10 justify-between lg:py-10 lg:px-5 px-5 lg:w-1/3 w-full">
          <TaskStatus
            promiseData={promiseData}
            card={card}
            handleResolved={handleResolved}
          ></TaskStatus>
          <ResolvedTask></ResolvedTask>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
