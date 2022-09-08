import React, { useEffect, useState } from "react";
import { AXIOS } from "utils/setup/axios";
import {  Nav } from "react-bootstrap";


const Sidebar = () => {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await AXIOS.get("https://api-dev.kwikpic.in/api/app/group/my-groups-v2")
        .then((res) => {
          setGroups(res.data.data.myGroups);
        })
        .catch((err) => console.log(err));
    }
    fetchData();
  }, []);
  return (
    <div className="m-5 " style={{ width: "15%" }}>
      
      <h2 style={{ color: "#3E6588" }}>Analytics</h2>
      <br></br>
      <h6 className="ps-2" style={{color:"#2887AF"}}>All Events Group</h6>
      <div>
      <Nav className="row align-items-start" >
        {groups.map((item) => (
          <Nav.Item key={item.count} >
            <Nav.Link href={"/analytics/" + item.group._id} className="col" >
              {item.group.name}
            </Nav.Link>
          </Nav.Item>
        ))}
        </Nav>
        </div>
    </div>
  );
};

export default Sidebar;
