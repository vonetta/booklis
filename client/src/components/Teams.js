import React, { useState, useEffect } from "react";
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
    <div className="container mt-3">
      <h1 className="text-center">Teams</h1>
      {teams.map((team, index) => (
        <div key={index} className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{team.teamName}</h5>
            {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
            <ul>
              {team.members.map(player => (
                <li key={player.playerName + 1}>{player.playerName}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Teams;
