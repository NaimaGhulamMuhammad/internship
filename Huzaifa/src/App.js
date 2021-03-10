import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EmployeersProfile from "./components/EmployeersProfile";
import ManageEmployee from "./components/ManageEmployee";
import Freelancerdetails from "./components/Freelancerdetails";
import Freelancers from "./components/Freelancers";
import Freelancers2 from "./components/Freelancers2";
import Blog from "./components/Blog";
import JobDetails from "./components/FreelancingJob";
import PremiumCandidate from "./components/PremiumCandidate";
import PremiumCandidatedetails from "./components/PremiumCandidatedetails.js";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/EmployeersProfile" exact>
            <EmployeersProfile />
          </Route>
          <Route path="/ManageEmployee" exact>
            <ManageEmployee />
          </Route>
          <Route path="/Freelancers" exact>
            <Freelancers />
          </Route>
          <Route path="/FreelancingJob" exact>
            <JobDetails />
          </Route>
          <Route path="/Freelancerdetails" exact>
            <Freelancerdetails />
          </Route>
          <Route path="/Freelancers2" exact>
            <Freelancers2 />
          </Route>
          <Route path="/PremiumCandidate" exact>
            <PremiumCandidate />
          </Route>
          <Route path="/PremiumCandidatedetails" exact>
            <PremiumCandidatedetails />
          </Route>
          <Route path="/Blog" exact>
            <Blog />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
