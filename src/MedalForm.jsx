import React from "react";

const MedalForm = ({ country, gold, silver, bronze, setCountry, setGold, setSilver, setBronze, handleSubmit, handleUpdate }) => {
  return (
    <form className="nav-style" onSubmit={handleSubmit}>
      <div className="form-container">
        <div className="form-style">
          <div>국가명</div>
          <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder="국가명을 입력해주세요" required />
        </div>
        <div className="form-style">
          <div>금메달</div>
          <input type="number" value={gold} onChange={(e) => setGold(e.target.value)} placeholder="0" min="0" required />
        </div>
        <div className="form-style">
          <div>은메달</div>
          <input type="number" value={silver} onChange={(e) => setSilver(e.target.value)} placeholder="0" min="0" required />
        </div>
        <div className="form-style">
          <div>동메달</div>
          <input type="number" value={bronze} onChange={(e) => setBronze(e.target.value)} placeholder="0" min="0" required />
        </div>
      </div>
      <div className="button-container">
        <button type="submit" className="button-style">국가 추가</button>
        <button type="button" className="button-style" onClick={handleUpdate}>업데이트</button>
      </div>
    </form>
  );
};

export default MedalForm;
