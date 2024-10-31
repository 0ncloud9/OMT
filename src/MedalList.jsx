import React from "react";

const MedalList = ({ medalList, sortBy, setSortBy, handleDelete }) => {
  const MedalRow = ({ entry, index }) => (
    <tr key={index}>
      <td>{entry.country}</td>
      <td>{entry.gold}</td>
      <td>{entry.silver}</td>
      <td>{entry.bronze}</td>
      <td>
        <button className="button-style-delete" onClick={() => handleDelete(index)}>삭제</button>
      </td>
    </tr>
  );

  const sortedMedalList = [...medalList].sort((a, b) => {
    return sortBy === "gold"
      ? b.gold - a.gold
      : sortBy === "total"
      ? b.gold + b.silver + b.bronze - (a.gold + a.silver + a.bronze)
      : 0;
  });

  const sortOptions = [
    { value: "gold", label: "금메달 수" },
    { value: "total", label: "메달 총합" }
  ];

  return (
    <div>
      <div className="sort-container">
        <p>정렬</p>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          {sortOptions.map((option, index) => (
            <option key={index} value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
      <div className="table-style">
        <table>
          <thead>
            <tr>
              <th>국가명</th>
              <th><div>🥇</div></th>
              <th><div>🥈</div></th>
              <th><div>🥉</div></th>
              <th>액션</th>
            </tr>
          </thead>
          <tbody className="list-style">
            {sortedMedalList.map((entry, index) => (
              <MedalRow key={index} entry={entry} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MedalList;
