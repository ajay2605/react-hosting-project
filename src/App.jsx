import React from "react";
import habitsData from "./habitsData";
import "./App.css"; // Importing App.css

const App = () => {
  return (
    <div className="container">
      {habitsData.habits.map((habit, index) => (
       
        <div key={index} className={`habit-card ${habit.type}`}>
            <h2>{habit.title} -- {habit.identity}</h2>
            <div>
              <h3>Cue</h3>
              <p><strong>Implementation Strategy</strong> -- {habit.makeItObvious.implementationStrategy}</p>
              <p><strong>Habit Stacking</strong> -- {habit.makeItObvious.habitStacking}</p>
            </div>
            <div>
              <h3>Craving</h3>
              <p><strong>Reframe your Mind </strong> -- {habit.makeItAttractive.reframingYourMind}</p>
            </div>
            <div>
              <h3>Response</h3>
              <p><strong> Small Version</strong> -- {habit.makeItEasy.twoMinuteRule}</p>
            </div>
            <div>
              <h3>Reward</h3>
              <p><strong> Tracking </strong> -- {habit.makeItSatisfying.trackingProgress}</p>
            </div>
          </div>
       
      ))}
    </div>
  );
};

export default App;
