import React, { Component } from 'react';
import styled from 'styled-components';
const StyledInput = styled.input`
    background-color: #28FFBF;
    padding: 0.5rem 1rem;
    margin-top: 2rem;
    border-radius: 5px;
    border: none;
    font-size: 30px;
    color: rgba(7,3,53,1);
    @media (max-width: 768px) {
        font-size: 20px;
        margin-top: 1rem;
        padding: 0.2rem 0.5rem;
    }
`;


const Search = props => {
    return <StyledInput type="text" onChange={(e) => props.searchfield(e.target.value)} placeholder="Search Monster"/>
}

export default Search;