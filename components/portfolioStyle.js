"use client"

import styled from 'styled-components';
import media from './media';


export const Container = styled.div`
display: flex;

width: 100vh
height: fit-content;


overflow: hidden;
flex-direction: column;

justify-content: center;
align-items: start;
`;

export const TitleContainer = styled.div`
display: flex;

width: 80%;

height: 50vh;
min-height: 50vh;

position: relative;
flex-direction: column;

text-align: left;

justify-content: flex-end;
align-self: center;
align-items: start;

`;


export const MainContainer = styled.div`
display: flex;

margin-top: 5%;

width: 80%;

text-align: left;

justify-content: flex-start;
align-items: flex-start;
align-self: center;

${media.xs`
flex-direction: column;
`}
${media.s`
flex-direction: column;
`}
${media.m`
flex-direction: column;
`}
${media.l`
flex-direction: row;
`}
${media.xl`
flex-direction: row;
`}
`;

export const MainTextContainer = styled.div`
display: flex;

width: fit-content;
height: 90%;

text-align: left;

justify-content: center;
align-self: flex-start;

flex-direction: column;
${media.xs`

`}
${media.s`

`}
${media.m`

`}
${media.l`
margin-left:20px;
`}
${media.xl`
margin-left:25px;
`}
`;


export const CarouselContainer = styled.div`
display: flex;

position: relative;

justify-content: center;
align-items: center;
align-self: flex-start;

border-radius: 5px;
border: solid 1px white;

box-shadow: 0 0 50px rgba(5, 5, 5, 0.75);

${media.xs`
width: 75%;
`}
${media.s`
width: 75%;
`}
${media.m`
width: 75%;
`}
${media.l`
width: 75%;
`}
${media.xl`
width: 50%;
`}
`;


export const Button = styled.div`
display: flex;

cursor: pointer;

`;


export const Text_H1 = styled.div`
font-size: 3rem;
font-weight: bold;

color: white;

text-decoration: none;
user-select: none;

${media.xs`
font-size: 1rem;
`}
${media.s`
font-size: 2rem;
`}
${media.m`
font-size: 3rem;
`}
${media.l`
font-size: 3rem;
`}
${media.xl`
font-size: 3rem;
`}
`;

export const Text_H2 = styled.div`
font-size: 2rem;

color: white;

text-decoration: none;
user-select: none;

${media.xs`
font-size: 1rem;
`}
${media.s`
font-size: 1.5rem;
`}
${media.m`
font-size: 2rem;
`}
${media.l`
font-size: 2rem;
`}
${media.xl`
font-size: 2rem;
`}
`;

export const Text_H3 = styled.div`
font-size: 1.5rem;
font-weight: normal;

color: white;

text-decoration: none;
user-select: none;

${media.xs`
font-size: 0.5rem;
`}
${media.s`
font-size: 1rem;
`}
${media.m`
font-size: 1.5rem;
`}
${media.l`
font-size: 1.5rem;
`}
${media.xl`
font-size: 1.5rem;
`}
`;

export const Text_H4 = styled.div`
font-size: 1.25rem;
font-weight: lighter;

color: white;

text-decoration: none;
user-select: none;

${media.xs`
font-size: 0.35rem;
`}
${media.s`
font-size: 0.75rem;
`}
${media.m`
font-size: 1.1rem;
`}
${media.l`
font-size: 1.1rem;
`}
${media.xl`
font-size: 1.1rem;
`}
`;
