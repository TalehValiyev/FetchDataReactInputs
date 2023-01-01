import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    getPosts();
  }, []);

  const [posts, setPosts] = useState([]);
  const [inputData, setInputData] = useState([]);
  const [sbmtd, setSbmtd] = useState("");
  const [department, setDepartment] = useState("");
  const getPosts = () => {
    fetch("https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood ")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
      });
  };
  const searchName = (e) => {
    setInputData(e.target.value);
  };
  const searchDepartment = (e) => {
    setInputData(e.target.value);
  };
  const clickName = (e) => {
    e.target.value = sbmtd;
    setSbmtd(inputData);
  };
  const clickDepartment = (e) => {
    e.target.value = department;
    setDepartment(inputData);
  };

  return (
    <div className="container">
      {posts.map((item) => {
        return (
          <div className="list-div" key={item.id}>
            <ul key={item.name}>
              {item.name === sbmtd ? (
                <div>
                  <li>{`ad:    ${item.name}`}</li>
                  <li>{`Vəzifə:  ${item.role}`}</li>
                  <li>{`Şöbə:   ${item.department}`}</li>
                </div>
              ) : null}
            </ul>

            <ul key={item.department}>
              {item.department === department ? (
                <div>
                  <li>{`Ad:     ${item.name}`}</li>
                  <li>{`Şöbə:     ${item.department}`}</li>
                  <li>{`Vəzifə:  ${item.role}`}</li>
                </div>
              ) : null}
            </ul>
          </div>
        );
      })}
      <input type="search" onChange={searchName} />
      <button onClick={clickName}>ad axtar</button>
      <input type="search" onChange={searchDepartment} />
      <button onClick={clickDepartment}> Şöbə</button>
    </div>
  );
}

export default App;
