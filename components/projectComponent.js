import Link from "next/link";
import { Container, MainContainer, TitleContainer, CarouselContainer, Text_H1, Text_H2, Text_H3, Text_H4, Button, MainTextContainer } from './portfolioStyle'
import Carousel from 'react-bootstrap/Carousel';

import { IoReturnDownBackSharp } from "react-icons/io5";




export const Title = ({ title, type, date }) => {
    return (
        <TitleContainer>
            <Button>
                <Link href="/">
                    <IoReturnDownBackSharp color="white" size={50} />
                </Link>
            </Button>
            <Text_H1>
                {title}
            </Text_H1>
            <Text_H2>
                {type}
            </Text_H2>
            <Text_H2>
                {date}
            </Text_H2>
        </TitleContainer>
    );
}

export const ImageGallery = ({ carousel_items }) => {
   
    const CarouselItem = ({ id_num, imgURL, imgWebURL }) => (
        <div>
            <img src={imgURL}
                srcSet={imgWebURL}
                style={{ maxWidth: '100%' }}
                alt={`Slide ${id_num}`}
            />
            <div style={{ backgroundColor: '#202127', height: '50px', width: '100%', borderTop: 'white solid 1.5px' }} />
        </div>
    );

    return (
        <CarouselContainer>
            <Carousel style={{ maxWidth: '100%' }}>
                {carousel_items.map(item => (
                    <Carousel.Item key={item.id}>
                        <CarouselItem id_num={item.id} imgURL={item.imgUrl} imgWebURL={item.webimgUrl} />
                    </Carousel.Item>
                ))}
            </Carousel>
        </CarouselContainer>
    );
}

export const Description = ({
    link,
    tech_stack,
    deployment,

    about_project,
    learned_solved,
}) => {
    return (
        <MainTextContainer>
            <Text_H2 style={{ fontWeight: 'bold' }}>
                Link
            </Text_H2>
            <Text_H3>
                <Link style={{ color: 'gray' }} target="_blank" href={link} passHref> {link}</Link>
            </Text_H3>
            <Text_H2 style={{ fontWeight: 'bold' }}>
                Tech Stack
            </Text_H2>
            <Text_H3>
                {tech_stack}
            </Text_H3>
            <Text_H2 style={{ fontWeight: 'bold' }}>
                Deployment
            </Text_H2>
            <Text_H3>
                {deployment}
            </Text_H3>
            <p />
            <p />
            <Text_H2 style={{ fontWeight: 'bold' }}>
                About Project
            </Text_H2>
            <Text_H4>
                {about_project}
            </Text_H4>
            <p />
            <p />
            <Text_H2 style={{ fontWeight: 'bold' }}>
                Learned & Solved
            </Text_H2>
            <Text_H4>
                {learned_solved}
            </Text_H4>
            <p />
            <p />
        </MainTextContainer>
    );
}


export const Project = {
   Title,
   ImageGallery,
   Description,

};