import { Link } from "react-router-dom";
import JobPortalInfo from "../components/JobPortalInfo";

function Home() {
  return (
    <main className="home">
      <div className="home-content">
        <h1>
          Find Your <span>Dream Job</span>
        </h1>

        <p>
          Discover exciting career opportunities and connect with companies
          looking for talented people like you.
        </p>

        <Link to="/jobs" className="primary-btn">
          Explore Jobs
        </Link>
      </div>

      <JobPortalInfo />
    </main>
  );
}

export default Home;