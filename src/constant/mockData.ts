import { IQuiz } from '@/types'

export const featureData = [
  {
    id: 'feature-1',
    icon: 'Lightning',
    title: '빨리 맞추는 문제',
    description:
      '매우 쉽지만 순발력이 필요한 게임이 들어갈 예정, 노래 맞추기나 인물 퀴즈를 넣으려고 하며 우리만 아는 지인이 나올 수도 있음',
  },
  {
    id: 'feature-2',
    icon: 'Security',
    title: '프라이빗한 문제',
    description:
      '대중적으로 알 수 없지만 우리만 아는 문제를 넣을 예정. 즉, 굉장히 마이너한 문제가 출제될 수 있으며 수치스러울 수 있음',
  },
  {
    id: 'feature-3',
    icon: 'Stack',
    title: '헬지암 역사와 데이터 누적',
    description:
      '우리들의 사진이 대거 나타날 수 있음, 혹시나 문제로 낼 수 있는 이미지를 추천한다면 제품에 포함될 수 있음',
  },
]

export const roadmapData = [
  {
    id: 'roadmap-1',
    icon: 'Calendar',
    title: '1차 목표',
    description:
      '이번 여행 일정에 맞춰서 퀴즈까지 포함하여 대강 넣어 놓을 예정, 웹페이지를 배포할 생각이며, 우리의 개인 정보를 지키기 위해 admin 로그인 하나만 해둘듯',
  },
  {
    id: 'roadmap-2',
    icon: 'Bag',
    title: '2차 목표',
    description:
      '헬지암 게시판을 둘 예정, 서버는 대충 무료 찾아볼듯. 좀 재밌다고 판단되면 마이너한 헬지암 빼고 공유해서 집단에 상관 없이 즐길 수 있도록 해보려고 함',
  },
  {
    id: 'roadmap-3',
    icon: 'Rocket',
    title: '최종 목표',
    description:
      '여태 여행마다 게임이 재밌었으니 일단 재밌었으면 좋겠음, 재밌으면 저작권과 우리 개인에 관련한 부분을 전부 쳐내고 퀴즈 앱으로 하나 내보낼 의향이 있음',
  },
]

export const profileList = [
  {
    id: 'mingyu',
    name: '김민규',
    description:
      '(구)지각과 배신의 아이콘. 민규 없는 민규 생일 파티 오거나이저',
    birthday: '1998-02-18',
    keyword: [
      '남성_인권_위원회장',
      '헬지암_고학력자',
      '사진작가',
      '약속_브레이커',
    ],
  },
  {
    id: 'jongwon',
    name: '강종원',
    description: '전문 사재기 업자. 돈에 굉장히 민감하고 관심이 많음.',
    birthday: '1998-03-16',
    keyword: ['롤기견', '메이플', '흥선대원군'],
  },
  {
    id: 'gyeongseok',
    name: '유경석',
    description: '',
    birthday: '1998-06-01',
    keyword: ['모두까기인형', '큰_가슴'],
  },
  {
    id: 'hyeonu',
    name: '김현우',
    description:
      '고등학생 시절 씹덕들의 왕, 전역 이후 옷을 사입는 등 헬지암답지 않은 모습',
    birthday: '1998-06-06',
    keyword: ['뭐임?', '설명충', '씹덕', '불패'],
  },
  {
    id: 'jaewon',
    name: '전재원',
    description: '',
    birthday: '1998-09-10',
    keyword: ['헬지암_최고학력자', '시간_약속_망각인', '두환이_아빠', '일본인'],
  },
  {
    id: 'jaeyoon',
    name: '고재윤',
    description: 'FPS 재능충. 무릎 존나 잘꺾음. 특정 사람을 잘 긁음',
    birthday: '1998-09-23',
    keyword: ['고자', '밤의_황제', '효자'],
  },
  {
    id: 'gwiyeong',
    name: '박귀영',
    description:
      '남소 요청오면 소개시켜 주고 싶은 남자 1위. 계획적이며 져줄 줄 아는 인재',
    birthday: '1998-10-29',
    keyword: ['헬지암_리더', '술만_먹고_갈거_아니잖아요', '롤로노아_김동현'],
  },
  {
    id: 'deogun',
    name: '김덕운',
    description:
      '취업 이후 급격하게 거대화. 손해 보더라도 드랍쉽으로서 책임을 다함',
    birthday: '1998-10-30',
    keyword: ['헬지암_드랍쉽', '전문_노예', '집사'],
  },
  {
    id: 'wontae',
    name: '황원태',
    description: '헬지암 크리에이터',
    birthday: '1998-11-21',
    keyword: ['헬지암_디코_방장'],
  },
  {
    id: 'uchi',
    name: '전우치',
    description: '불의를 참지 못함. 정치 주제에 예민함.',
    birthday: '1998-12-21',
    keyword: ['RPG_사랑꾼', '도사'],
  },
  {
    id: 'donggi',
    name: '김동기',
    description: '',
    birthday: '1998-12-23',
    keyword: ['목소리페티쉬', '헬스인'],
  },
  {
    id: 'seunggi',
    name: '김승기',
    description: '',
    birthday: '1998-12-23',
    keyword: ['김동기사냥개', '장발거지', '먹방'],
  },
]

export const playerList = profileList.filter((v) => v.id !== 'wontae')

export const quizList: IQuiz[] = [
  {
    id: '1',
    type: 'etc',
    title:
      '다음은 영화 <말죽거리 잔혹사>에서 나온 장면이다. 극 중 대사로 옳은 것은?',
    difficulty: 2,
    image: '/images/quiz/1.png',
    data: ['옥상으로 따라와', '옥상으로 올라와'],
    answer: '옥상으로 올라와',
  },
  {
    id: '2',
    type: 'etc',
    title: '다음은 영화 <친구>에서 나온 장면이다. 극 중 대사로 옳은 것은?',
    difficulty: 2,
    image: '/images/quiz/2.png',
    data: ['고마해라, 마이 무따 아이가', '마이 무따 아이가, 고마해라'],
    answer: '마이 무따 아이가, 고마해라',
  },
  {
    id: '3',
    type: 'helljiam',
    title:
      '다음은 헬지암팸 디스코드 서버의 한 유저의 프로필 사진이다. 해당 프로필의 소유자는?',
    difficulty: 1,
    image: '/images/quiz/3.png',
    answer: '김현우',
  },
]
