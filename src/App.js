import "./App.css";
import { Component } from "react";
import CardList from "./Component/Card-list/card-list.component";
import SearchField from "./Component/Search-Field/search-field.component";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monster: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monster: users }));
  }
  handleOnchange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { searchField } = this.state;
    const monsterFillter = this.state.monster.filter((item) =>
      item.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <SearchField
          placeholder="Ô tìm kiếm"
          handleOnchange={this.handleOnchange}
        />
        <CardList monster={monsterFillter}></CardList>

        <button
          onClick={() => {
            this.setState({ string: "hello0000000" });
          }}
        >
          Change
        </button>
      </div>
    );
  }
}

export default App;
