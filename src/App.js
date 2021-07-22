import React, { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState({
    0: 1,
    1: 3,
    2: 4,
    3: 2,
    4: 0,
    5: 1,
    6: 4,
  });

  const handleRandom = () => {
    let number = Math.floor(Math.random() * 7);
    setSelected(number);
  };

  const handleVote = (id) => {
    const pointsCopy = { ...points };
    pointsCopy[id] += 1;
    setPoints(pointsCopy);
  };

  const highestVote = () => {
    //Compares values and returns key with the highest value
    const highest = Object.keys(points).reduce((a, b) =>
      points[a] > points[b] ? a : b
    );
    return highest;
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <h3>It has {points[selected]} votes</h3>
      <Button text="Vote" handleClick={() => handleVote(selected)} />
      <Button text="Next Anecdote" handleClick={handleRandom} />
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[highestVote()]}</p>
    </div>
  );
};

export default App;
