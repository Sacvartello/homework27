import Context from "./context/Context";
import CurrentDay from "./component/CurrentDay";
import Calendar from "./component/Calendar";
import React from "react";
import './App.css'

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: new Date(),
    };
  }

  setSelectedDate = (date) => {
    this.setState({ selectedDate: date });
  };
  render(){
    return (
      <Context.Provider 
        value={{
          selectedDate: this.state.selectedDate,
          setSelectedDate: this.setSelectedDate,
        }}
      >
        <div className="app">
          <CurrentDay/>
          <Calendar/>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
