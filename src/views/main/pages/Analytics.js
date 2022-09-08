import React, { useEffect, useState } from "react";
import { AXIOS } from "utils/setup/axios";
import { useParams } from "react-router-dom";
import { Table } from "react-bootstrap";

import Sidebar from "./components/Sidebar";

const Analytics = () => {
  const [participants, setParticipants] = useState([]);
  const [group, setGroup] = useState([]);
  const { groupId } = useParams();
  useEffect(() => {
    async function fetchData() {
      await AXIOS.get(
        `https://api-dev.kwikpic.in/api/app/analytics/groupAnalytics/${groupId}`
      )
        .then((res) => {
          setParticipants(res.data.data.participants);
          setGroup(res.data.data.group);
        })
        .catch((err) => console.log(err));
    }
    fetchData();
  }, []);
  return (
    <div className="d-flex" style={{ backgroundColor: "#F3F7F9" }}>
      <Sidebar />

      <div
        style={{ backgroundColor: "#ffff", borderRadius: "20px", width: "77%" }}
      >
        <h3 className="m-5 " style={{ color: "#3E6588" }}>
          John & Joe Wedding{" "}
        </h3>
        <div>
          <div
            className="d-flex justify-content-around align-items-center m-5"
            style={{ backgroundColor: "#F3F7F9", borderRadius: "10px" }}
          >
            <div className="pt-3">
              <p style={{ color: "#2887AF" }}>Total Impression</p>
              <h1 style={{ color: "#3E6588" }}>{group.impressions}</h1>
            </div>
            <div className="pt-3">
              <p style={{ color: "#2887AF" }}>Photo Dicovered</p>
              <h1 style={{ color: "#3E6588" }}>{group.discoveries}</h1>
            </div>
            <div className="pt-3">
              <p style={{ color: "#2887AF" }}>Photos Downloaded</p>
              <h1 style={{ color: "#3E6588" }}>{group.downloads}</h1>
            </div>
            <div className="pt-3">
              <p style={{ color: "#2887AF" }}>Registered Users</p>
              <h1 style={{ color: "#3E6588" }}>{group.participants}</h1>
            </div>
          </div>
        </div>
        <Table className="m-3">
          <thead>
            <tr>
              <th style={{ color: "#2887AF" }}>User Name</th>
              <th style={{ color: "#2887AF" }}>Email</th>
              <th style={{ color: "#2887AF" }}>Phone</th>
              <th style={{ color: "#2887AF" }}>Impression</th>
              <th style={{ color: "#2887AF" }}>Results</th>
              <th style={{ color: "#2887AF" }}>Photos Discovered</th>
              <th style={{ color: "#2887AF" }}>Photos Downloaded</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((item) => (
              <tr key={item.phone}>
                <td>{item.userName}</td>
                <td>{item.email}</td>
                <td>+91 {item.phone}</td>
                <td>{item.impressions}</td>
                <td>{item.results}</td>
                <td>{item.discovered}</td>
                <td>{item.downloaded}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Analytics;
