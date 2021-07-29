import React, { Component } from 'react';
import styled from 'styled-components';
import roboImg from '../sfsdf.png';

const StyledImg = styled.img`
    width: 250px;
`;
const StyledH3 = styled.h3`
    font-size: 1.5rem;
    color:  rgba(5,8,114,1);
    margin-top: 10px;
`;
const StyledH4 = styled.h4`
    font-size: 1.2rem;
    color:  #F8485E;
    margin-top: 10px;

`;

const StyledCard = styled.div`
    background-color: #28FFBF;
    height: 400px;
    width: 300px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    font-size: 20px;
    align-items: center;
    transition: all 0.5s ease;

    :hover {
        transform: scale(1.08);
    }
`;

const Card = props => {
    return (
        <StyledCard> 
            <StyledImg src={`https://robohash.org/${props.robo.name}?set=set2`} alt="Robot" />
            <StyledH3>{props.robo.name} </StyledH3> 
            <StyledH4>{props.robo.email} </StyledH4> 
        </StyledCard>
    );
}

export default Card;