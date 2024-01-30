'use client'

import "../globals.scss"
import { Project } from "@/components/projectComponent";
import { Container, MainContainer} from '../../components/portfolioStyle'



export default function Project1() {

    const CarouselItems = [
        {
            id: 1,
            imgUrl: '/PF1.png',
            webimgUrl: '/PF1.webp',
        },
        {
            id: 2,
            imgUrl: '/PF2.png',
            webimgUrl: '/PF2.webp',
        },
        {
            id: 3,
            imgUrl: '/PF3.png',
            webimgUrl: '/PF3.webp',
        },
        {
            id: 4,
            imgUrl: '/PF4.png',
            webimgUrl: '/PF4.webp',
        },
        {
            id: 5,
            imgUrl: '/PF5.png',
            webimgUrl: '/PF5.webp',
        },
        {
            id: 6,
            imgUrl: '/Performance.png',
            webimgUrl: '/Performance.webp',
        },
    ];

    return (
            <Container style={{ backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundPosition: 'center' }}>
                <Project.Title title={"포트폴리오 웹사이트"} type={"Website"} date={"2024-01"} />
                <MainContainer>
                    <Project.ImageGallery carousel_items={CarouselItems} />
                    <Project.Description 
                    link={"https://alexjung-portfolio.vercel.app/"} 
                    tech_stack={"React, Next.JS, CSS, JavaScript, Styled-Component, Scss"}
                    deployment={"Vercel"}
                    about_project={`프론트엔드 개발자로의 포트폴리오를 목적으로 만든 웹사이트입니다. 이전에 React로 개발한 프로젝트가 SEO에서 메리트가 없다는 것을 체감하고 Next.js로 개발을 진행했습니다.

                    프로젝트에서 컴포넌트 기반의 Framer-Motion이라는 라이브러리를 사용하여 이미지 갤러리 및 버튼 상호작용 등 다양한 애니메이션 모션들을 제어하였습니다. 그리고 Styled-Component를 통해 CSS-in-js의 강한 직관성과 가독성 향상의 편리함을 알게되었습니다.
                    
                    여러 해상도에 대응하기 위해 반응형 디자인을 위하여 Scss와 Styled-Component에 각각 Media Query를 적용하였고 Vercel을 이용하여 정적 사이트로 배포 하였습니다.
             
                    최종적으로 배포 이후 Lighthouse를 사용하는 PageSpeed Insights를 통해 성능,접근성,검색엔진 최적화를 진단받았고 개선된 사용자 경험을 위해 여러가지 권장 사항들을 참고하여 전면 수정하였습니다.
                    
                    최적화 결과
                    LCP: 2.4s → 1.9s
                    CLS: 0.439 → 0
                    `}
                    learned_solved={`1. React에서 SEO를 직접 구현하는 과정은 꽤나 불편합니다. 페이지별 메타태그를 변경하려면 react-helmet-async을 설치해야하고 사전 렌더링을 구현하려면 react-snap이라는 업데이트가 5년 전에 멈춘 라이브러리를 사용해야합니다. 
                    하지만 Next.js는 기본적으로 SSR,SSG를 제공하기 때문에 초기 렌더링 속도가 빠르며 완성된 페이지를 클라이언트에게 건네주기 때문에 검색 엔진에서 매우 이점이 있습니다. Next.js가 계속해서 인기를 얻는 이유를 몸소 느끼게 되었습니다.
                   
                    2. 배포 이후 홈페이지의 성능을 체크해봤더니 CLS에서 큰 성능 하락이 있었습니다. 계속해서 테스트해본 결과 Styled-Component가 그 원인인걸 알아냈습니다.
                    꽤 많은 외국의 개발자들이 Styled-Component와 같은 CSS-in-js들을 사용하고 큰 성능 하락을 얘기하였고 이를 바탕으로 포트폴리오의 첫번째 화면에 들어간 움직이는 배경화면을 CSS로 옮겼습니다. 즉시 저는 CLS와 LCS 모두 눈에 띄는 수치 변화를 보았습니다.`}
                    />
                </MainContainer>
                <MainContainer />
            </Container>
    );
}

