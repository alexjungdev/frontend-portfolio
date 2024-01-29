'use client'

import "../globals.css"

import Link from "next/link";
import { Container, MainContainer, TitleContainer, CarouselContainer, Text_H1, Text_H2, Text_H3, Text_H4, Button, MainTextContainer } from '../../components/portfolioStyle'
import Carousel from 'react-bootstrap/Carousel';

import { IoReturnDownBackSharp } from "react-icons/io5";

export default function Project1() {

    return (
        <Container style={{ backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundPosition: 'center' }}>
            <TitleContainer>
                <Button>
                    <Link href="/">
                        <IoReturnDownBackSharp color="white" size={50} />
                    </Link>
                </Button>
                <Text_H1>
                    글 생성기
                </Text_H1>
                <Text_H2>
                    Website
                </Text_H2>
                <Text_H2>
                    2022-06 ~ 2022-08
                </Text_H2>
            </TitleContainer>
            <MainContainer>
                <CarouselContainer>
                    <Carousel data-bs-theme="dark" style={{ maxWidth: '100%' }}>
                        <Carousel.Item>
                            <img src="/WG1.png"
                                srcSet="/WG1.webp"
                                loading="lazy"
                                style={{ maxWidth: '100%' }}
                                alt="Slide1"
                            />
                              <div style={{backgroundColor:'white',height:'50px',width:'100%',borderTop:'black solid 2px'}}/>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img src="/WG2.png"
                                srcSet="/WG2.webp"
                                loading="lazy"
                                style={{ maxWidth: '100%' }}
                                alt="Slide2"
                            />
                             <div style={{backgroundColor:'white',height:'50px',width:'100%',borderTop:'black solid 2px'}}/>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img src="/WG3.png"
                                srcSet="/WG3.webp"
                                loading="lazy"
                                style={{ maxWidth: '100%' }}
                                alt="Slide3"
                            />
                             <div style={{backgroundColor:'white',height:'50px',width:'100%',borderTop:'black solid 2px'}}/>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img src="/WG4.png"
                                srcSet="/WG4.webp"
                                loading="lazy"
                                style={{ maxWidth: '100%' }}
                                alt="Slide4"
                            />
                            <div style={{backgroundColor:'white',height:'50px',width:'100%',borderTop:'black solid 2px'}}/>
                        </Carousel.Item>
                    </Carousel>
                </CarouselContainer>
                <MainTextContainer>
                    <Text_H2 style={{ fontWeight: 'bold' }}>
                        Link
                    </Text_H2>
                    <Text_H3>
                        <Link style={{ color: 'gray' }} target="_blank" href={`https://apps.apple.com/us/app/writing-generator/id6456040207`} passHref> https://apps.apple.com/us/app/writing-generator/id6456040207</Link>
                    </Text_H3>
                    <Text_H2 style={{ fontWeight: 'bold' }}>
                        Tech Stack
                    </Text_H2>
                    <Text_H3>
                        React-Native, JavaScript
                    </Text_H3>
                    <Text_H2 style={{ fontWeight: 'bold' }}>
                        Deployment
                    </Text_H2>
                    <Text_H3>
                        Apple App Store
                    </Text_H3>
                    <p />
                    <p />
                    <Text_H2 style={{ fontWeight: 'bold' }}>
                        About Project
                    </Text_H2>
                    <Text_H4>
                        React-Native를 통해 처음으로 만든 글 생성기 인공지능 AI 앱입니다.
                        <p />
                        Open AI의 GPT를 도입하여 이용자들이 원하는 종류의 글을 만들어주도록 설정하였습니다. 현재 동화, 이야기, 시만 만들 수 있지만 서비스 중인 앱으로 더 많은 장르들이 추가될 예정입니다.
                        <p />
                        주요 기능은 Rest API를 통하여 사용자가 선택한 파라미터들이 포함된 URL를 Azure Function쪽에 POST요청을 보내면 보안되어있는 Azure Key Vault에서 Secret키를 확인한 이후 생성된 결과를 클라이언트 측으로 Return하는 방식으로 구현했습니다.
                        <p />
                        처음 만든 앱이자 처음 광고를 추가한 앱이며 애플 스토어에 출시 이후 꾸준히 이용되고 있다는 점에서 큰 동기부여가 되었던 프로젝트입니다.
                    </Text_H4>
                    <p />
                    <p />
                    <Text_H2 style={{ fontWeight: 'bold' }}>
                        What I Learned
                    </Text_H2>
                    <Text_H4>
                        1. 인터넷에 검색해보니 Open Ai의 Api키가 가 외부로 유출되어서 백 달러부터 만 달러까지 사용료가 사용된 사람들이 존재했습니다. 이를 통해 Azure이라는 클라우드 서비스를 이용하기로 했고 Key Vault를 통하여
                        Api키를 안전하게 보관하였습니다. Api키를 절대 클라이언트 측에 노출시키지 않고 서버에서만 보관하고 계속해서 보안을 유지해야하는 것이 얼마나 중요한 것인지 뼈저리게 느끼게 되었습니다.
                    </Text_H4>
                </MainTextContainer>
            </MainContainer>
            <MainContainer />
        </Container >
    );
}

