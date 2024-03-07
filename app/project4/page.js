'use client'

import "../globals.scss"
import { Project } from "@/components/projectComponent";
import { Container, MainContainer} from '../../components/portfolioStyle'



export default function Project4() {

    const CarouselItems = [
        {
            id: 1,
            imgUrl: '/todaystodo1.png',
            webimgUrl: '/todaystodo1.webp',
        },
        {
            id: 2,
            imgUrl: '/todaystodo2.png',
            webimgUrl: '/todaystodo2.webp',
        },
        {
            id: 3,
            imgUrl: '/todaystodo3.png',
            webimgUrl: '/todaystodo3.webp',
        },
        {
            id: 4,
            imgUrl: '/todaystodo4.png',
            webimgUrl: '/todaystodo4.webp',
        },
    ];

    return (
            <Container style={{ backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundPosition: 'center' }}>
                <Project.Title title={"오늘의 할일"} type={"Website"} date={"2024-02 ~ 2024-03"} />
                <MainContainer>
                    <Project.ImageGallery carousel_items={CarouselItems} />
                    <Project.Description
                    link={"https://todays-to-do.com/"}
                    tech_stack={"React, Next.JS, TailwindCSS, TypeScript, Firebase, Firestore"}
                    deployment={"AWS S3 / AWS Cloudfront"}
                    about_project={`오늘의 할일을 기록할 수 있는 웹사이트입니다. 여러가지 기술들을 익히고 AWS를 실제로 사용해보기 위해 만든 프로젝트입니다.

                    소셜 로그인으로 많은 사람들이 사용하는 kakao, Google을 구현했습니다. Google은 제공되는 팝업 로그인 기능을 사용하였고 Kakao는 토큰을 받아서 백엔드 측에서 유저 정보를 받아온 다음 커스텀 토큰으로 로그인하는 방식을 사용했습니다.

                    로그인이 성공하면 기존의 기기에선 LocalStorage, 새 기기에선 NoSQL Database인 Firestore에서 유저ID에 따라 데이터를 불러오도록 했습니다.

                    달력은 React-Calender 라이브러리를 사용하였고 달력의 날짜에 따라 To-do list를 불러오도록 구현했습니다.

                    Github Actions로 CI/CD를 구축하여 AWS S3에 정적 배포를 하였고 CDN으로 AWS Cloudfront를 사용했습니다.`}
                    learned_solved={`1. AWS는 비용적인 측면에서 매우 불리하다고 느꼈습니다. Github의 main branch에 push 할때 마다 AWS S3에 배포되도록 설정하였는데 순식간에 무료 플랜을 넘겼습니다.
                    하지만 아무런 최적화 없이 초기 서버 응답 시간이 0ms 소요될만큼 엄청난 속도를 보여주는 것을 보고 AWS의 큰 강점을 느꼈습니다. 다만 장기적인 서비스시에는 요금 폭탄을 조심해야 할 것 같습니다.

                    2. To-do list를 날짜별로 구현하는 것이 매우 복잡하고 어렵다는 것을 배웠습니다. 단순한 To-do list가 아니라 날짜별로 구분하는 To-do list라서 계속해서 매우 어려웠습니다.
                    다만 최근에 코딩테스트를 공부하면서 To-do를 삭제하거나 추가할때의 알고리즘을 짜는데 도움이 되었습니다. 꾸준한 공부는 필수라는 것을 다시 느꼈습니다.`}
                    />
                </MainContainer>
                <MainContainer />
            </Container>
    );
}

