import React, { useState } from "react";
import MedalForm from "./MedalForm";
import MedalList from "./MedalList";
import "./App.css";

const App = () => {
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);
  const [medalList, setMedalList] = useState([]);
  const [sortBy, setSortBy] = useState("gold");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { country, gold: Number(gold), silver: Number(silver), bronze: Number(bronze) };
    if (medalList.some((entry) => entry.country === country)) {
      alert("해당 국가가 이미 존재합니다. 업데이트 기능을 사용하세요.");
    } else {
      setMedalList([...medalList, newEntry]);
      setCountry("");
      setGold(0);
      setSilver(0);
      setBronze(0);
    }
  };

  const handleDelete = (index) => {
    setMedalList(medalList.filter((_, i) => i !== index));
  };

  const handleUpdate = () => {
    if (medalList.some((entry) => entry.country === country)) {
      setMedalList((prevList) =>
        prevList.map((entry) =>
          entry.country === country
            ? { ...entry, gold: Number(gold), silver: Number(silver), bronze: Number(bronze) }
            : entry
        )
      );
    } else {
      alert("해당 국가가 없습니다. 국가 추가 기능을 사용하세요");
    }
    setCountry("");
    setGold(0);
    setSilver(0);
    setBronze(0);
  };

  return (
    <div className="container">
      <h1>OMT</h1>
      <MedalForm
        country={country}
        gold={gold}
        silver={silver}
        bronze={bronze}
        setCountry={setCountry}
        setGold={setGold}
        setSilver={setSilver}
        setBronze={setBronze}
        handleSubmit={handleSubmit}
        handleUpdate={handleUpdate}
      />
      <MedalList
        medalList={medalList}
        sortBy={sortBy}
        setSortBy={setSortBy}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
