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
                    플레이사이드 게임 월드
                </Text_H1>
                <Text_H2>
                    Website
                </Text_H2>
                <Text_H2>
                    2023-12 ~ 2024-01
                </Text_H2>
            </TitleContainer>
            <MainContainer>
                <CarouselContainer>
                    <Carousel data-bs-theme="dark" style={{ maxWidth: '100%' }}>
                        <Carousel.Item>
                            <img src="/PG1.png"
                                srcSet="/PG1.webp"
                                loading="lazy"
                                style={{ maxWidth: '100%' }}
                                alt="Slide 1"
                            />
                              <div style={{backgroundColor:'white',height:'50px',width:'100%',borderTop:'black solid 2px'}}/>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img src="/PG2.png"
                                srcSet="/PG2.webp"
                                loading="lazy"
                                style={{ maxWidth: '100%' }}
                                alt="Slide 2"
                            />
                              <div style={{backgroundColor:'white',height:'50px',width:'100%',borderTop:'black solid 2px'}}/>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img src="/PG3.png"
                                srcSet="/PG3.webp"
                                loading="lazy"
                                style={{ maxWidth: '100%' }}
                                alt="Slide 3"
                            />
                            <div style={{backgroundColor:'white',height:'50px',width:'100%',borderTop:'black solid 2px'}}/>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img src="/PG4.png"
                                srcSet="/PG4.webp"
                                loading="lazy"
                                style={{ maxWidth: '100%' }}
                                alt="Slide 4"
                            />
                                <div style={{backgroundColor:'white',height:'50px',width:'100%',borderTop:'black solid 2px'}}/>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img src="/PG5.png"
                                srcSet="/PG5.webp"
                                loading="lazy"
                                style={{ maxWidth: '100%' }}
                                alt="Slide 5"
                            />
                              <div style={{backgroundColor:'white',height:'50px',width:'100%',borderTop:'black solid 2px'}}/>
                        </Carousel.Item>
                        <Carousel.Item >
                            <img src="/PG6.png"
                                srcSet="/PG6.webp"
                                loading="lazy"
                                style={{ maxWidth: '100%' }}
                                alt="Slide 6"
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
                        <Link style={{ color: 'gray' }} target="_blank" href={`https://playcidegameworld.com/`} passHref> https://playcidegameworld.com/</Link>
                    </Text_H3>
                    <Text_H2 style={{ fontWeight: 'bold' }}>
                        Tech Stack
                    </Text_H2>
                    <Text_H3>
                        React, Next.JS, CSS, JavaScript
                    </Text_H3>
                    <Text_H2 style={{ fontWeight: 'bold' }}>
                        Deployment
                    </Text_H2>
                    <Text_H3>
                        Cloudflare Page
                    </Text_H3>
                    <p />
                    <p />
                    <Text_H2 style={{ fontWeight: 'bold' }}>
                        About Project
                    </Text_H2>
                    <Text_H4>
                        Unity WebGL로 만들어진 게임들을 무료로 플레이 할 수 있는 사이트입니다. 장기적으로 서비스할 수 있는 저만의 플랫폼을 만들어보고자 제작하게 되었습니다.
                        <p />
                        여러 해상도에 대응하기 위해 반응형 디자인을 위하여 Media Query를 이용하였고 useContext를 이용하여 모든 페이지에 다크모드 및 현지화를 적용하였습니다.
                        <p />
                        Unity WebGL 파일들은 오브젝트 스토리지인 R2에서 유저가 선택한 컨텐츠의 경로,이름의 파라미터로 GET요청을 보낸 다음 클라이언트 측에서 플레이가 가능해지도록 했습니다.
                        <p />
                        Contact창에서 메세지를 보낼때에는 Rest Api를 사용하였으며 request.body에 제목,메세지를 담아 POST요청을 하여 Cloudflare Worker로 보내게 하였습니다. 그리고 Worker에서 SMTP 메일을 전송하기 위한 Third-Party 서비스로 POST 요청을 하게하였습니다.
                        <p />
                        장기적인 서비스를 하려는 목적인만큼 서버리스의 장점인 비교적 후한 무료 이용량과 무제한 대역폭을 제공하는 Cloudflare Pages로 배포하였습니다.
                    </Text_H4>
                    <p />
                    <p />
                    <Text_H2 style={{ fontWeight: 'bold' }}>
                        What I Learned
                    </Text_H2>
                    <Text_H4>
                        1. 메일 서비스인 Brevo는 Rest Api를 사용합니다. 그렇기에 Request는 헤더에서 content-type으로 application/json과 brevo의 api-key,그리고 내용은 json으로 보내줘야 했습니다.
                        그래서 메세지의 이름,내용이 담긴 객체를 json.stringify를 통하여 json으로 변환하여 전송하였습니다. 이렇게 직접 Rest Api를 통해 서버측에 데이터를 POST하면서 Rest Api의 직관성을 느끼게 되었고 이는 협업을 조금 더 편리하게 해줄 수 있다고 생각했습니다.
                    </Text_H4>
                    <p />
                    <Text_H4>
                        2. Contact에서 메세지를 보내는 것은 단순하게 이름,메세지를 작성하여 전송하는 작업이였지만 SMTP를 전송하기 위해 Worker에서 brevo api로 연결하는 과정에서 CORS 에러를 맞이하여 문제가 복잡해졌습니다.
                        검색을 해본 결과 CORS는 서버측에서 해결하여야 근본적인 해결이 된다고 하여서 서버측인 Worker에 프록시 헤더를 추가하여 브라우저는 모든 요청과 응답을 프록시 서버를 통해서만 주고 받도록 하여 무사히 메세지를 보낼 수 있었습니다.
                        이것을 계기로 CORS의 원인 및 해결 방법을 알게 되었고 추후에 같은 문제가 발생하였을때 조금 더 유연하게 대처할 수 있을 것 같습니다.
                    </Text_H4>
                    <p />
                    <Text_H4>
                        3. Brevo는 매일 300건의 전송을 무료로 제공합니다. 하지만 Api가 남발되면 정작 필요한 사용자가 메일을 보내지 못할 수 있다 생각했습니다.
                        이것을 방지하기 위해 간단한 Rate-Limit으로 Request를 보낸 이용자의 IP를 받아온 뒤 Map의 key,value를 이용하여 Worker에 임시 저장된 IP를 마지막으로 전송한 시간과 비교하여 1분이 지나면 초기화, 지나지 않았다면 Error을 보내게 했습니다.
                        트래픽을 제어하고 Api의 악용을 막기 위해선 Rate-Limit가 필수라는 것을 항상 잊지 않아야겠습니다.
                    </Text_H4>
                </MainTextContainer>
            </MainContainer>
            <MainContainer />
        </Container >
    );
}

