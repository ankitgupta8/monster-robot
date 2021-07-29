import React, { Component } from 'react';
import styled from 'styled-components';
import roboImg from '../sfsdf.png';
import Card from './card';

const CardHolder = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        margin-top: 2rem;
        row-gap: 20px;
        column-gap: 20px;

        @media (max-width: 1322px) {
            grid-template-columns: 1fr 1fr 1fr;
        }
        @media (max-width: 986px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 986px) {
            grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 660px) {
            grid-template-columns: 1fr;
        }

`;

const CardList = props => {
    return <CardHolder>
                {props.items.map((robo) => {
                    return <Card key={robo.id} robo={robo} />
                }
            )
        }
    </CardHolder>
}

export default CardList;