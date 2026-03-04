import { Suspense } from "react";
import Footer from "./components/footer/Footer";
import Nav from "./components/navbar/Nav";
import Tickets from "./components/tickets/Tickets";
import TaskStatus from "./components/taskbar/TaskStatus";
import ResolvedTask from "./components/taskbar/ResolvedTask";
import ProgressBanner from "./components/banner/ProgressBanner";
import ResolvedBanner from "./components/banner/ResolvedBanner";

//fetching tickets data
const promiseData = fetch("tickets.json").then((res) => res.json());

function App() {
  return (
    <>
      <Nav></Nav>
      <div className="flex align-middle justify-center w-full gap-6 px-35 py-10">
        <ProgressBanner></ProgressBanner>
        <ResolvedBanner></ResolvedBanner>
      </div>
      <div className="flex justify-evenly gap-3">
        <div className="w-2/3">
          <Suspense fallback="loading">
            <Tickets promiseData={promiseData}></Tickets>
          </Suspense>
        </div>
        <div>
          <TaskStatus></TaskStatus>
          <ResolvedTask></ResolvedTask>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
