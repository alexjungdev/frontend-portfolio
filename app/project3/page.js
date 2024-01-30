'use client'

import "../globals.scss"
import { Project } from "@/components/projectComponent";
import { Container, MainContainer} from '../../components/portfolioStyle'


export default function Project3() {

    const CarouselItems = [
        {
            id: 1,
            imgUrl: '/WG1.png',
            webimgUrl: '/WG1.webp',
        },
        {
            id: 2,
            imgUrl: '/WG2.png',
            webimgUrl: '/WG2.webp',
        },
        {
            id: 3,
            imgUrl: '/WG3.png',
            webimgUrl: '/WG3.webp',
        },
        {
            id: 4,
            imgUrl: '/WG4.png',
            webimgUrl: '/WG4.webp',
        },
    ];


    return (
        <Container style={{ backgroundRepeat: 'no-repeat', backgroundSize: '100%', backgroundPosition: 'center' }}>
            <Project.Title title={"글 생성기"} type={"App"} date={"2022-06 ~ 2022-08"} />
            <MainContainer>
                <Project.ImageGallery carousel_items={CarouselItems} />
                <Project.Description
                    link={"https://apps.apple.com/us/app/writing-generator/id6456040207"}
                    tech_stack={"React-Native, Css, JavaScript"}
                    deployment={"Apple App Store"}
                    about_project={`React-Native를 통해 처음으로 만든 글 생성기 인공지능 AI 앱입니다.
                
                    Open AI의 GPT를 도입하여 이용자들이 원하는 종류의 글을 만들어주도록 설정하였습니다. 현재 동화, 이야기, 시만 만들 수 있지만 서비스 중인 앱으로 더 많은 장르들이 추가될 예정입니다.
             
                    주요 기능은 Rest API를 통하여 사용자가 선택한 파라미터들이 포함된 URL를 Azure Function쪽에 POST요청을 보내면 보안되어있는 Azure Key Vault에서 Secret키를 확인한 이후 생성된 결과를 클라이언트 측으로 Return하는 방식으로 구현했습니다.
              
                    처음 만든 앱이자 처음 광고를 추가한 앱이며 애플 스토어에 출시 이후 꾸준히 이용되고 있다는 점에서 큰 동기부여가 되었던 프로젝트입니다.
                    `}
                    learned_solved={`1. 인터넷에 검색해보니 Open Ai의 Api키가 가 외부로 유출되어서 백 달러부터 만 달러까지 사용료가 사용된 사람들이 존재했습니다. 이를 통해 Azure이라는 클라우드 서비스를 이용하기로 했고 Key Vault를 통하여
                    Api키를 안전하게 보관하였습니다. Api키를 절대 클라이언트 측에 노출시키지 않고 서버에서만 보관하고 계속해서 보안을 유지해야하는 것이 얼마나 중요한 것인지 뼈저리게 느끼게 되었습니다.`}
                />
            </MainContainer>
            <MainContainer />
        </Container>
    );
}

