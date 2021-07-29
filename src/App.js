import React, { Component } from 'react';
import styled from 'styled-components';
import roboImg from './sfsdf.png';
import CardList from './components/card-list.jsx';
import Search from './components/search';
const StyledSec = styled.section`
    background-image: radial-gradient( circle 610px at 5.2% 51.6%,  rgba(5,8,114,1) 0%, rgba(7,3,53,1) 97.5% );
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
`;

const StyledH1 = styled.h1`
    font-size: 5rem;
    color: #28FFBF;
    margin-top: 3rem;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 3rem;
    }
`;



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      searchfield: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => this.setState({items: data}))
  }
  changeSearchField = (val) => {
    this.setState({searchfield: val});
  }
  render() {
    const {items, searchfield} = this.state;
    const filteredItems = items.filter(item => {
      return item.name.toLowerCase().includes(searchfield.toLowerCase());
    }
    )
    return(
      <StyledSec>
          <StyledH1>MONSTER MASH</StyledH1>
          <Search searchfield={this.changeSearchField} />
          <CardList items={filteredItems}/>
      </StyledSec>
    );
  }

}

export default App;