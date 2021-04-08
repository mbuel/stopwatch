class Clock extends React.Component {
    constructor (props) {
      super(props);
      this.state = { date: new Date() }; // this is the component state property object
    }
  
    render () {
      return (
        <div>
          <h2>The time now is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      )
    }
  }
  
    ReactDOM.render(
      <Clock />,
      document.getElementById('root')
    );