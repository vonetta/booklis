import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTeams } from "../api/teams";

const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    async function getAllTeams() {
      const allTeams = await getTeams();
      await setTeams(allTeams.data);
    }
    getAllTeams();
  }, []);

  return (
    <div className="container  mt-3">
      <h1 className="text-center">Teams</h1>
      <div className=" text-right">
        <Link to="/new-team">New Team</Link>
      </div>
      <section className="teams-list">
        {teams.map((team, index) => (
          <div key={index} className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title team-title text-center">
                {team.teamName}
              </h5>
              <ul>
                {team.members.map(player => (
                  <li key={player.playerName + 1}>{player.playerName}</li>
                ))}
              </ul>
              <p>Total Number of Players: {teams.length + 1}</p>
              <button>Add Member</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Teams;
