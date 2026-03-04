import { Suspense } from "react";
import Footer from "./components/footer/Footer";
import Nav from "./components/navbar/Nav";
import Tickets from "./components/tickets/Tickets";
import Banner from "./components/banner/Banner";
import TaskStatus from "./components/taskbar/TaskStatus";
import ResolvedTask from "./components/taskbar/ResolvedTask";

//fetching tickets data
const promiseData = fetch("tickets.json").then((res) => res.json());

function App() {
  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <div className="flex align-middle justify-evenly">
        <div>
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
