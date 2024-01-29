"use client"

import styled, { keyframes } from 'styled-components';
import { Button } from 'react-bootstrap';
import { motion } from 'framer-motion';


const shimmerAnimation = keyframes`
0% {
  background-position: -200% 0;
}
100% {
  background-position: 200% 0;
}`;

export const ShinyButton = styled(motion(Button)).attrs({
  whileHover: { scale: 1.2 },
  whileTap: { scale: 0.9 },
})`

background: linear-gradient(45deg, #333 75%, #666 50%, #333 90%) 0% 0% / 200% 200%;
  background-size: 200% 200%;
  color: #000000;
  cursor: pointer;
  transition: background-position;
  animation: ${shimmerAnimation} 10s linear infinite;
  box-shadow: 0 0 20px rgba(25, 25, 25, 0.5);
  `;

export const Badge = styled.div`

  color: #000000;
  background: linear-gradient(90deg, #333 75%, #666 125%, #333 75%);
  box-shadow: 0 0 50px rgba(5, 5, 5, 0.75);
  border-radius: 25px;
  border-color: white;
  border: 0.01px solid white;

  `;

