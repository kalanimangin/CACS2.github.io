import React from 'react';
import ReactDOM from 'react-dom';

/*const createCsvWriter = require('csv-writer').createObjectCsvWriter;



class EnterCar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plate: '',
      make: '',
      model: '',
      color: '',
      county: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    alert("A ticket was submitted for: " + this.state.plate);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Plate:
          <input name="plate" type="text" value={this.state.plate} onChange={this.handleInputChange} />
        </label><br />
        <label>
          Make:
          <input name="make" type="text" value={this.state.make} onChange={this.handleInputChange} />
        </label><br />
        <label>
          Model:
          <input name="model" type="text" value={this.state.model} onChange={this.handleInputChange} />
        </label><br />
        <label>
          Color:
          <input name="color" type="text" value={this.state.color} onChange={this.handleInputChange} />
        </label><br />
        <label>
          County:
          <input name="county" type="text" value={this.state.county} onChange={this.handleInputChange} />
        </label><br />
        <input type="submit" name="" value="Submit" />
      </form>
    );
  }
}

/*function writeToCSV(ticket) {
  console.log(ticket.state)

  const csvWriter = createCsvWriter({
    path: 'db.csv',
    header: [
      {id: 'plate', title: 'PLATE'},
      {id: 'make', title: 'MAKE'},
      {id: 'model', title: 'MODEL'},
      {id: 'color', title: 'COLOR'},
      {id: 'county', title: 'COUNTY'}
    ]
  });

  const data = [
    {plate: ticket.state.plate,
     make: ticket.state.make,
     model: ticket.state.model,
     color: ticket.state.color,
     county: ticket.state.county}
  ];

  csvWriter.writeRecords(data)
    .then(() => {
      console.log("done");
    });
}*/

ReactDOM.render(
  <EnterCar />,
  document.getElementById('root')
);
