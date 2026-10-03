import { useState } from "react";

function JobCard({ job }) {
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(!saved);
  };

  return (
    <div className="job-card">
      <h3>{job.title}</h3>

      <p className="job-company">
        {job.company}
      </p>

      <p className="job-info">
        📍 {job.location}
      </p>

      <p className="job-info">
        💼 {job.type}
      </p>

      <button className="save-btn" onClick={handleSave}>
        {saved ? "❤️ Saved" : "🤍 Save Job"}
      </button>
    </div>
  );
}

export default JobCard;