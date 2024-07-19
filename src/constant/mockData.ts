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
      '(구)지각과 배신의 아이콘. 민규 없는 민규 생일 파티 오거나이저.',
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
    description: '본인에게 관대하고 남에게 엄격한 내로남불 사상을 지지함.',
    birthday: '1998-06-01',
    keyword: ['모두까기인형', '바버샵_경험자'],
  },
  {
    id: 'hyeonu',
    name: '김현우',
    description:
      '고등학생 시절 씹덕들의 왕, 전역 이후 옷을 사입는 등 헬지암답지 않은 모습.',
    birthday: '1998-06-06',
    keyword: ['뭐임?', '설명충', '씹덕', '불패'],
  },
  {
    id: 'jaewon',
    name: '전재원',
    description: '슈퍼 정자를 보유하고 있음. 경상도 사투리 면역 보유.',
    birthday: '1998-09-10',
    keyword: ['헬지암_최고학력자', '시간_약속_망각인', '두환이_아빠', '일본인'],
  },
  {
    id: 'jaeyoon',
    name: '고재윤',
    description: 'FPS 재능충. 무릎 존나 잘꺾음. 특정 사람을 잘 긁음.',
    birthday: '1998-09-23',
    keyword: ['고자', '밤의_황제', '효자'],
  },
  {
    id: 'gwiyeong',
    name: '박귀영',
    description:
      '남소 요청오면 소개시켜 주고 싶은 남자 1위. 계획적이며 져줄 줄 아는 인재.',
    birthday: '1998-10-29',
    keyword: ['헬지암_리더', '술만_먹고_갈거_아니잖아요', '롤로노아_김동현'],
  },
  {
    id: 'deogun',
    name: '김덕운',
    description:
      '취업 이후 급격하게 거대화. 손해 보더라도 드랍쉽으로서 책임을 다함.',
    birthday: '1998-10-30',
    keyword: ['헬지암_드랍쉽', '전문_노예', '집사'],
  },
  {
    id: 'wontae',
    name: '황원태',
    description: '헬지암 크리에이터.',
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
    description: '순결을 훔친 남자',
    birthday: '1998-12-23',
    keyword: ['목소리페티쉬', '헬스인'],
  },
  {
    id: 'seunggi',
    name: '김승기',
    description: '로리콘 의심이 경력이 있음',
    birthday: '1998-12-23',
    keyword: ['김동기사냥개', '장발거지', '먹방'],
  },
]

export const playerList = profileList.filter((v) => v.id !== 'wontae')

export const quizList: IQuiz[] = [
  {
    id: '1',
    type: 'movie',
    title:
      '다음은 영화 <말죽거리 잔혹사>에서 나온 장면이다. 극 중 대사로 옳은 것은?',
    difficulty: 2,
    image: '/images/quiz/1.png',
    data: ['1. 옥상으로 따라와', '2. 옥상으로 올라와', '3. 옥상으로 얼른 와'],
    answer: {
      image: null,
      text: '2. 옥상으로 올라와',
    },
  },
  {
    id: '2',
    type: 'movie',
    title: '다음은 영화 <친구>에서 나온 장면이다. 극 중 대사로 옳은 것은?',
    difficulty: 2,
    image: '/images/quiz/2.png',
    data: ['1. 고마해라, 마이 무따 아이가', '2. 마이 무따 아이가, 고마해라'],
    answer: {
      image: null,
      text: '2. 마이 무따 아이가, 고마해라',
    },
  },
  {
    id: '3',
    type: 'helljiam',
    title:
      '다음은 헬지암팸 디스코드 서버의 한 유저의 프로필 사진이다. 해당 프로필의 소유자는?',
    difficulty: 1,
    image: '/images/quiz/3.png',
    answer: {
      image: null,
      text: '김현우',
    },
  },
  {
    id: '4',
    type: 'helljiam',
    title: '다음은 헬지암팸 멤버이다. 해당 멤버의 생일은?? (ex. 01월 01일)',
    difficulty: 1,
    image: '/images/profile/jaeyoon.png',
    answer: {
      image: null,
      text: '09월 23일',
    },
  },
  {
    id: '5',
    type: 'character',
    title:
      '다음 두 인물 중에서 독립 운동가를 고르시오.  (다른 한 명은 친일파입니다.)',
    difficulty: 5,
    image: ['/images/quiz/5-1.png', '/images/quiz/5-2.png'],
    answer: {
      image: '/images/quiz/5-2.png',
      text: '[이동휘 선생] 일제강점기 때, 학교와 서북학회 등을 설립해 민족계몽운동을 전개하였으며, 대한민국임시정부 국무총리 등을 역임한 독립운동가.',
    },
  },
  {
    id: '6',
    type: 'character',
    title: '다음 인물은 누구인가요?',
    difficulty: 1,
    image: '/images/quiz/6.png',
    answer: {
      image: null,
      text: '박보검',
    },
  },
  {
    id: '7',
    type: 'character',
    title: '다음 인물은 누구인가요?',
    difficulty: 1,
    image: '/images/quiz/7.png',
    answer: {
      image: null,
      text: '도널드 트럼프 (Donald Trump)',
    },
  },
  {
    id: '8',
    type: 'character',
    title: '다음 인물은 누구인가요?',
    difficulty: 2,
    image: '/images/quiz/8.png',
    answer: {
      image: null,
      text: '조승우',
    },
  },
  {
    id: '9',
    type: 'game',
    title:
      '다음 캐릭터는 리그오브레전드의 챔피언 "유미"이다. 유미의 Q 스킬 이름은?',
    difficulty: 3,
    image: '/images/quiz/9.png',
    data: ['1. 피슝', '2. 반짝 미사일', '3. 샤르르탄', '4. 슈르르탄'],
    answer: {
      image: null,
      text: '3. 샤르르탄',
    },
  },
  {
    id: '10',
    type: 'character',
    title: '다음 캐릭터는 누구인가요?',
    difficulty: 2,
    image: '/images/quiz/10.png',
    answer: {
      image: null,
      text: '또치',
    },
  },
  {
    id: '11',
    type: 'game',
    title:
      '리그오브레전드에서 6번째에 위치한 챔피언의 이름은? (2024년 07월 기준)',
    difficulty: 3,
    image: '/images/quiz/11-1.png',
    answer: {
      image: '/images/quiz/11-2.png',
      text: '그웬',
    },
  },
  {
    id: '12',
    type: 'etc',
    title: '다음 국기는 어느 나라 것인가?',
    difficulty: 5,
    image: '/images/quiz/12.png',
    answer: {
      image: null,
      text: '루마니아',
    },
  },
  {
    id: '13',
    type: 'character',
    title: '다음 인물은 누구인가요?',
    difficulty: 2,
    image: '/images/quiz/13.png',
    answer: {
      image: null,
      text: '손석구',
    },
  },
  {
    id: '14',
    type: 'character',
    title: '다음 인물은 누구인가요?',
    difficulty: 4,
    image: '/images/quiz/14.png',
    answer: {
      image: null,
      text: '김영철',
    },
  },
  {
    id: '15',
    type: 'character',
    title: '다음 캐릭터는 누구인가요?',
    difficulty: 3,
    image: '/images/quiz/15.png',
    answer: {
      image: null,
      text: '자스민 공주',
    },
  },
  {
    id: '16',
    type: 'character',
    title: '다음 인물은 누구인가요?',
    difficulty: 3,
    image: '/images/quiz/16.png',
    answer: {
      image: null,
      text: '봉준호',
    },
  },
  {
    id: '17',
    type: 'game',
    title:
      '다음 캐릭터는 리그오브레전드의 챔피언 "다리우스"이다. 다리우스의 W 스킬 이름은?',
    difficulty: 3,
    image: '/images/quiz/17.png',
    data: [
      '1. 학살의 일격',
      '2. 도끼의 일격',
      '3. 강화의 일격',
      '4. 마비의 일격',
    ],
    answer: {
      image: null,
      text: '4. 마비의 일격',
    },
  },
  {
    id: '18',
    type: 'game',
    title:
      '다음 캐릭터는 리그오브레전드의 챔피언 "샤코"이다. 본 스킨의 이름은?',
    difficulty: 3,
    image: '/images/quiz/18.png',
    data: [
      '1. 겨울의 축복 샤코',
      '2. 밤의 끝 샤코',
      '3. 겨울 동화 샤코',
      '4. 깜짝 선물 샤코',
    ],
    answer: {
      image: null,
      text: '1. 겨울의 축복 샤코',
    },
  },
  {
    id: '19',
    type: 'game',
    title:
      '다음 이미지는 리그오브레전드의 13.18 패치에 상점에 추가된 스킨이다. 어떤 챔피언인가?',
    difficulty: 3,
    image: '/images/quiz/19.png',
    data: ['1. 이블린', '2. 아칼리', '3. 자이라', '4. 카이사'],
    answer: {
      image: null,
      text: '3. 자이라',
    },
  },
  {
    id: '20',
    type: 'game',
    title: '다음 이미지는 서든어택의 총기 중 하나이다. 해당 총기의 이름은?',
    difficulty: 3,
    image: '/images/quiz/20.png',
    answer: {
      image: null,
      text: '윈체스터',
    },
  },
  {
    id: '21',
    type: 'game',
    title:
      '다음 이미지는 어몽어스에서 술래가 됐을 때, 보이는 화면이다. 술래의 명칭은?',
    difficulty: 3,
    image: '/images/quiz/21.png',
    answer: {
      image: null,
      text: '임포스터',
    },
  },
  {
    id: '22',
    type: 'game',
    title: '다음 이미지는 대형 기업의 로고이다. 해당 기업의 명칭은?',
    difficulty: 2,
    image: '/images/quiz/22.png',
    answer: {
      image: null,
      text: '샤오미',
    },
  },
  {
    id: '23',
    type: 'helljiam',
    title:
      '다음 인물은 헬지암팸의 김현우이다. 그의 형제자매 여부는? ex) 형 1, 누나 1',
    difficulty: 1,
    image: '/images/profile/hyeonu.png',
    answer: {
      image: null,
      text: '여동생 1',
    },
  },
  {
    id: '24',
    type: 'etc',
    title: '세상의 온갖 고생과 시련을 겪어 경험이 많다는 뜻의 사자성어는?',
    difficulty: 4,
    image: '/images/quiz/idioms.png',
    answer: {
      image: null,
      text: '산전수전',
    },
  },
  {
    id: '25',
    type: 'character',
    title: '다음 인물은 누구인가요?',
    difficulty: 2,
    image: '/images/quiz/25.png',
    answer: {
      image: null,
      text: '이경규',
    },
  },
  {
    id: '26',
    type: 'etc',
    title: '다음 이미지는 세종대왕이 한글을 만든 장소이다. 이곳의 명칭은?',
    difficulty: 3,
    image: '/images/quiz/26.png',
    answer: {
      image: null,
      text: '집현전',
    },
  },
  {
    id: '27',
    type: 'etc',
    title:
      'V.I.P는 Very Important Person의 약자로 "매우 중요한 사람"이라는 뜻이다. 그렇다면 스포츠에서 M.V.P의 약자는?',
    difficulty: 3,
    image: '/images/quiz/27.png',
    data: [
      '1. Most Variable Player',
      '2. Most Volume Person',
      '3. Most Victory Person',
      '4. Most Valuable Player',
    ],
    answer: {
      image: null,
      text: '4. Most Valuable Player',
    },
  },
  {
    id: '28',
    type: 'character',
    title:
      '다음 두 인물 중에서 독립 운동가를 고르시오. (다른 한 명은 친일파입니다.)',
    difficulty: 5,
    image: ['/images/quiz/28-1.png', '/images/quiz/28-2.png'],
    answer: {
      image: '/images/quiz/28-2.png',
      text: '[홍범도 장군] 일제강점기 때, 대한독립군 총사령관, 대한독립군단 부총재 등을 역임하며 봉오동전투, 청산리대첩에서 대승을 이끈 군인 · 독립운동가.',
    },
  },
  {
    id: '29',
    type: 'etc',
    title: '다음 중 한국표준직업분류에 해당하지 않는 것은?',
    difficulty: 4,
    image: '/images/quiz/29-1.png',
    data: [
      '1. 기능 검수 종사자',
      '2. 서비스 종사자',
      '3. 사무 종사자',
      '4. 농림어업 숙련 종사자',
    ],
    answer: {
      image: '/images/quiz/29-2.png',
      text: '1. 기능 검수 종사자',
    },
  },
  {
    id: '30',
    type: 'helljiam',
    title:
      '다음은 헬지암팸 멤버 김동기이다. 24년 06월 12일 수요일 동기의 총 체스트플라이 횟수는?',
    difficulty: 5,
    image: '/images/profile/donggi.png',
    data: ['1. 36회', '2. 42회', '3. 48회'],
    answer: {
      image: null,
      text: '1. 36회',
    },
  },
  {
    id: '31',
    type: 'helljiam',
    title:
      '다음은 헬지암팸 멤버 박귀영이다. 24년 03월 16일 토요일 귀영이의 근무 종류는?',
    difficulty: 5,
    image: '/images/profile/gwiyeong.png',
    data: ['1. 주간', '2. 야간', '3. 휴무'],
    answer: {
      image: null,
      text: '3. 휴무',
    },
  },
  {
    id: '32',
    type: 'character',
    title: '다음 캐릭터는 누구인가요?',
    difficulty: 3,
    image: '/images/quiz/32.png',
    answer: {
      image: null,
      text: '카마도 탄지로',
    },
  },
  {
    id: '33',
    type: 'etc',
    title:
      '다음은 도널드 트럼프 펜실베이니아 총격 피습 사건이다. 한국 시간으로 언제인가?',
    difficulty: 3,
    image: '/images/quiz/33.png',
    data: ['1. 07월 11일', '2. 07월 13일', '3. 07월 15일'],
    answer: {
      image: null,
      text: '2. 07월 13일',
    },
  },
  {
    id: '34',
    type: 'character',
    title: '다음 인물은 누구인가요?',
    difficulty: 3,
    image: '/images/quiz/34.png',
    answer: {
      image: null,
      text: '이제훈',
    },
  },
  {
    id: '35',
    type: 'character',
    title: '다음 캐릭터는 누구인가요?',
    difficulty: 2,
    image: '/images/quiz/35.png',
    answer: {
      image: null,
      text: '배찌',
    },
  },
  {
    id: '36',
    type: 'character',
    title: '다음 인물은 누구인가요?',
    difficulty: 1,
    image: '/images/quiz/36.png',
    answer: {
      image: null,
      text: '김재성',
    },
  },
  {
    id: '37',
    type: 'game',
    title:
      '다음 캐릭터는 리그오브레전드의 챔피언 "워윅"이다. 본 스킨의 이름은?',
    difficulty: 3,
    image: '/images/quiz/37.png',
    data: [
      '1. 불화산 워윅',
      '2. 염열지옥 워윅',
      '3. 불송곳니 워윅',
      '4. 불타는 워윅',
    ],
    answer: {
      image: null,
      text: '3. 불송곳니 워윅',
    },
  },
  {
    id: '38',
    type: 'game',
    title:
      '다음 캐릭터는 리그오브레전드의 챔피언 "마스터 이"이다. 본 스킨의 이름은?',
    difficulty: 3,
    image: '/images/quiz/38.png',
    data: [
      '1. 암살자 마스터 이',
      '2. 선택받은 마스터 이',
      '3. 아이오니아 마스터 이',
      '4. 인간사냥꾼 마스터 이',
    ],
    answer: {
      image: null,
      text: '1. 암살자 마스터 이',
    },
  },
  {
    id: '39',
    type: 'game',
    title:
      '다음 캐릭터는 리그오브레전드의 아이템 "구인수의 격노검"이다. 올바른 설명은?',
    difficulty: 3,
    image: '/images/quiz/39-1.png',
    data: [
      '1. 분노: 기본 공격 시 15의 마법 피해(적중 시)를 입힙니다.',
      '2. 분노: 기본 공격 시 20의 마법 피해(적중 시)를 입힙니다.',
      '3. 분노: 기본 공격 시 25의 마법 피해(적중 시)를 입힙니다.',
      '4. 분노: 기본 공격 시 30의 마법 피해(적중 시)를 입힙니다.',
    ],
    answer: {
      image: '/images/quiz/39-2.png',
      text: '4. 분노: 기본 공격 시 30의 마법 피해(적중 시)를 입힙니다.',
    },
  },
  {
    id: '40',
    type: 'game',
    title:
      '다음 캐릭터는 리그오브레전드의 챔피언 "아트록스"이다. OP.GG 24년 07월 19일 기준 "상대하기 어려운 챔피언 TOP 3"가 아닌 챔피언은?',
    difficulty: 4,
    image: '/images/quiz/40-1.png',
    data: ['1. 나피리', '2. 피오라', '3. 우디르', '4. 워윅'],
    answer: {
      image: '/images/quiz/40-2.png',
      text: '2. 피오라',
    },
  },
  {
    id: '41',
    type: 'character',
    title: '다음 인물은 누구인가요?',
    difficulty: 2,
    image: '/images/quiz/41.png',
    answer: {
      image: null,
      text: '뉴진스 민지',
    },
  },
  {
    id: '42',
    type: 'character',
    title: '다음 캐릭터는 누구인가요?',
    difficulty: 2,
    image: '/images/quiz/42.png',
    answer: {
      image: null,
      text: '시나모롤',
    },
  },
  {
    id: '43',
    type: 'etc',
    title: '다음 중 유네스코에서 지정한 4월 국제기념일이 아닌 것은?',
    difficulty: 5,
    image: '/images/quiz/43-1.png',
    data: [
      '1. 3일 세계 언론 자유의 날',
      '2. 23일 세계 책과 저작권의 날',
      '3. 30일 세계 재즈의 날',
    ],
    answer: {
      image: '/images/quiz/43-2.png',
      text: '1. 3일 세계 언론 자유의 날 (05월 03일)',
    },
  },
  {
    id: '44',
    type: 'game',
    title:
      '다음 캐릭터는 리그오브레전드의 챔피언 "말파이트"이다. 다리우스의 Q 스킬 이름은?',
    difficulty: 3,
    image: '/images/quiz/44.png',
    data: ['1. 굴렁쇠', '2. 대지의 파편', '3. 지진의 파편', '4. 지면의 파편'],
    answer: {
      image: null,
      text: '3. 지진의 파편',
    },
  },
  {
    id: '45',
    type: 'movie',
    title: '다음은 영화 <달콤한 인생>에서 나온 장면이다. 극 중 대사는?',
    difficulty: 3,
    image: '/images/quiz/45.png',
    answer: {
      image: null,
      text: '넌 나에게 모욕감을 줬어.',
    },
  },
  {
    id: '46',
    type: 'movie',
    title: '다음은 영화 <부당 거래>에서 나온 장면이다. 극 중 대사는?',
    difficulty: 3,
    image: '/images/quiz/46.png',
    answer: {
      image: null,
      text: '호의가 계속되면 그게 권리인줄 알아요.',
    },
  },
  {
    id: '47',
    type: 'movie',
    title: '다음은 영화 <신세계>에서 나온 장면이다. 극 중 대사는?',
    difficulty: 3,
    image: '/images/quiz/47.png',
    answer: {
      image: null,
      text: '거, 장난이 너무 심한거 아니오?',
    },
  },
  {
    id: '48',
    type: 'helljiam',
    title: '다음 이미지는 헬지암 워크숍 기념 이미지이다. 연도는??',
    difficulty: 3,
    image: '/images/quiz/48.png',
    answer: {
      image: null,
      text: '2020년',
    },
  },
  {
    id: '49',
    type: 'helljiam',
    title: '다음 영상을 찍은 날짜는?',
    difficulty: 3,
    image: '/images/quiz/49.mp4',
    data: ['1. 06월 01일', '2. 06월 03일', '3. 06월 06일', '4. 06월 09일'],
    answer: {
      image: null,
      text: '1. 06월 01일 (2020년)',
    },
    isVideo: true,
  },
  {
    id: '50',
    type: 'game',
    title: '다음 캐릭터는 메이플스토리의 마법사 기술이다. 스킬 이름은?',
    difficulty: 4,
    image: '/images/quiz/50.png',
    answer: {
      image: null,
      text: '매직 클로',
    },
  },
  {
    id: '51',
    type: 'character',
    title: '다음 캐릭터는 누구인가요?',
    difficulty: 3,
    image: '/images/quiz/51.png',
    answer: {
      image: null,
      text: '제이나',
    },
  },
  {
    id: '52',
    type: 'helljiam',
    title:
      '다음은 헬지암팸 멤버 김민규이다. 24년 07월 19일 기준 리그오브레전드 랭크 게임에서 가장 많이 플레이한 챔피언은?',
    difficulty: 5,
    image: '/images/profile/mingyu.png',
    data: ['1. 케이틀린', '2. 루시안', '3. 베이가', '4. 카직스'],
    answer: {
      image: '/images/quiz/52.png',
      text: '4. 카직스',
    },
  },
  {
    id: '53',
    type: 'character',
    title: '다음 캐릭터는 누구인가요?',
    difficulty: 2,
    image: '/images/quiz/53.png',
    answer: {
      image: null,
      text: '크롱',
    },
  },
  {
    id: '54',
    type: 'character',
    title: '다음 캐릭터는 누구인가요?',
    difficulty: 4,
    image: '/images/quiz/54.png',
    answer: {
      image: null,
      text: '채성아 선생님',
    },
  },
  {
    id: '55',
    type: 'etc',
    title: '나라의 운명을 위태롭게 할 만한 절세의 미인이라는 뜻의 사자성어는?',
    difficulty: 2,
    image: '/images/quiz/idioms.png',
    answer: {
      image: null,
      text: '경국지색',
    },
  },
  {
    id: '56',
    type: 'etc',
    title: '크게 될 인물은 공적을 쌓아 늦게 이루어진다는 뜻의 사자성어는?',
    difficulty: 4,
    image: '/images/quiz/idioms.png',
    answer: {
      image: null,
      text: '대기만성',
    },
  },
  {
    id: '57',
    type: 'character',
    title: '다음 인물은 누구인가요?',
    difficulty: 1,
    image: '/images/quiz/57.png',
    answer: {
      image: null,
      text: '김태희',
    },
  },
  {
    id: '58',
    type: 'character',
    title: '다음 인물은 누구인가요?',
    difficulty: 1,
    image: '/images/quiz/58.png',
    answer: {
      image: null,
      text: '박보영',
    },
  },
  {
    id: '59',
    type: 'character',
    title: '다음 인물은 누구인가요?',
    difficulty: 2,
    image: '/images/quiz/59.png',
    answer: {
      image: null,
      text: '고경표',
    },
  },
  {
    id: '60',
    type: 'character',
    title: '다음 인물은 누구인가요?',
    difficulty: 2,
    image: '/images/quiz/60.png',
    answer: {
      image: null,
      text: '박은빈',
    },
  },
  {
    id: '61',
    type: 'character',
    title: '다음 인물은 누구인가요?',
    difficulty: 1,
    image: '/images/quiz/61.png',
    answer: {
      image: null,
      text: '송중기',
    },
  },
  {
    id: '62',
    type: 'character',
    title: '다음 인물은 누구인가요?',
    difficulty: 2,
    image: '/images/quiz/62.png',
    answer: {
      image: null,
      text: '방탄소년단 지민',
    },
  },
  {
    id: '63',
    type: 'etc',
    title:
      '다음 이미지는 인간의 7대 죄악을 표현한 칠죄종이다. 7대 죄악이 아닌 것은?',
    difficulty: 4,
    image: '/images/quiz/63.png',
    data: ['1. 기만', '2. 인색', '3. 분노', '4. 나태'],
    answer: {
      image: null,
      text: '1. 기만',
    },
  },
  {
    id: '64',
    type: 'etc',
    title:
      '다음 이미지는 대한민국의 국기인 태극기이다. 건곤감리가 상징하지 않는 것은?',
    difficulty: 3,
    image: '/images/quiz/64.png',
    data: ['1. 나무', '2. 하늘', '3. 물', '4. 땅'],
    answer: {
      image: null,
      text: '1. 나무',
    },
  },
  {
    id: '65',
    type: 'helljiam',
    title: '다음은 헬지암팸 멤버 박귀영이다. 그의 고등학교 여자친구 이름은?',
    difficulty: 1,
    image: '/images/profile/gwiyeong.png',
    data: ['1. 강소임', '2. 강수연', '3. 문수현', '4. 문소현'],
    answer: {
      image: null,
      text: '3. 문수현',
    },
  },
  {
    id: '66',
    type: 'etc',
    title: '다음 이미지는 미국 특정 지역의 지하철 노선도이다. 어느 지역인가?',
    difficulty: 5,
    image: '/images/quiz/66.png',
    data: ['1. 로스앤젤레스', '2. 뉴욕', '3. 워싱턴', '4. 라스베이가스'],
    answer: {
      image: null,
      text: '2. 뉴욕',
    },
  },
  {
    id: '67',
    type: 'etc',
    title: '다음 이미지는 다이소이다. 다이소의 출범일은?',
    difficulty: 5,
    image: '/images/quiz/67.png',
    data: ['1. 1992년', '2. 1996년', '3. 1998년', '4. 2001년'],
    answer: {
      image: null,
      text: '3. 1998년',
    },
  },
  {
    id: '68',
    type: 'etc',
    title: '다음 이미지의 물건의 명칭은?',
    difficulty: 3,
    image: '/images/quiz/68.png',
    answer: {
      image: null,
      text: '벨크로',
    },
  },
  {
    id: '69',
    type: 'etc',
    title: '다음 이미지는 해양생물 화석이다. 무엇의 화석인가?',
    difficulty: 5,
    image: '/images/quiz/69.png',
    data: ['1. 불가사리', '2. 성게', '3. 말미잘', '4. 산호'],
    answer: {
      image: null,
      text: '성게',
    },
  },
  {
    id: '70',
    type: 'etc',
    title:
      '다음 두 상징 중에서 불교 만자를 고르시오. (다른 하나는 나치 하켄크로이츠 문양입니다.)',
    difficulty: 5,
    image: ['/images/quiz/70-1.png', '/images/quiz/70-2.png'],
    answer: {
      image: '/images/quiz/70-2.png',
      text: '불교의 상징',
    },
  },
  {
    id: '71',
    type: 'etc',
    title: '다음 이미지는 원소이다. 원소 주기율표에서 15번째에 있는 원소는?',
    difficulty: 3,
    image: '/images/quiz/71-1.png',
    data: ['1. Ca', '2. Mg', '3. P', '4. Si'],
    answer: {
      image: '/images/quiz/71-2.png',
      text: '3. P',
    },
  },
  {
    id: '72',
    type: 'character',
    title: '다음 인물은 누구인가요?',
    difficulty: 3,
    image: '/images/quiz/72.png',
    answer: {
      image: null,
      text: '임지연',
    },
  },
  {
    id: '73',
    type: 'character',
    title: '다음 인물은 누구인가요?',
    difficulty: 3,
    image: '/images/quiz/73.png',
    answer: {
      image: null,
      text: '샘 스미스',
    },
  },
  {
    id: '74',
    type: 'character',
    title: '다음 인물은 누구인가요?',
    difficulty: 2,
    image: '/images/quiz/74.png',
    answer: {
      image: null,
      text: '뉴진스 하니',
    },
  },
  {
    id: '75',
    type: 'song',
    title: '다음 노래의 가수-제목은?',
    difficulty: 3,
    image: '/images/quiz/75-1.png',
    answer: {
      image: '/images/quiz/75-2.png',
      text: 'SG워너비 - 살다가',
    },
  },
  {
    id: '76',
    type: 'song',
    title: '다음 노래의 가수-제목은?',
    difficulty: 4,
    image: '/images/quiz/76-1.png',
    answer: {
      image: '/images/quiz/76-2.png',
      text: '씨스타 - 나혼자',
    },
  },
  {
    id: '77',
    type: 'song',
    title: '다음 노래의 가수-제목은?',
    difficulty: 3,
    image: '/images/quiz/77-1.png',
    answer: {
      image: '/images/quiz/77-2.png',
      text: '레드벨벳 - 빨간맛',
    },
  },
  {
    id: '78',
    type: 'song',
    title: '다음 노래의 가수-제목은?',
    difficulty: 3,
    image: '/images/quiz/78-1.png',
    answer: {
      image: '/images/quiz/78-2.png',
      text: '씨앤블루 - 외톨이야',
    },
  },
  {
    id: '79',
    type: 'song',
    title: '다음 노래의 가수-제목은?',
    difficulty: 3,
    image: '/images/quiz/79-1.png',
    answer: {
      image: '/images/quiz/79-2.png',
      text: '트와이스 - TT',
    },
  },
  {
    id: '80',
    type: 'song',
    title: '다음 노래의 가수-제목은?',
    difficulty: 2,
    image: '/images/quiz/80-1.png',
    answer: {
      image: '/images/quiz/80-2.png',
      text: '정기고, 소유 - 썸',
    },
  },
  {
    id: '81',
    type: 'song',
    title: '다음 노래의 가수-제목은?',
    difficulty: 2,
    image: '/images/quiz/81-1.png',
    answer: {
      image: '/images/quiz/81-2.png',
      text: '소찬휘 - Tears',
    },
  },
  {
    id: '82',
    type: 'song',
    title: '다음 노래의 가수-제목은?',
    difficulty: 2,
    image: '/images/quiz/82-1.png',
    answer: {
      image: '/images/quiz/82-2.png',
      text: '혁오 - 위잉위잉',
    },
  },
  {
    id: '83',
    type: 'song',
    title: '다음 노래의 가수-제목은?',
    difficulty: 2,
    image: '/images/quiz/83-1.png',
    answer: {
      image: '/images/quiz/83-2.png',
      text: '빅뱅 - 하루하루',
    },
  },
  {
    id: '84',
    type: 'character',
    title: '다음 인물은 누구인가요?',
    difficulty: 2,
    image: '/images/quiz/84.png',
    answer: {
      image: null,
      text: '장성규',
    },
  },
  {
    id: '85',
    type: 'character',
    title: '다음 인물은 누구인가요?',
    difficulty: 2,
    image: '/images/quiz/85.png',
    answer: {
      image: null,
      text: '이성민',
    },
  },
  {
    id: '86',
    type: 'character',
    title: '다음 인물은 누구인가요?',
    difficulty: 1,
    image: '/images/quiz/86.png',
    answer: {
      image: null,
      text: '춘식이',
    },
  },
  {
    id: '87',
    type: 'character',
    title: '다음 인물은 누구인가요?',
    difficulty: 2,
    image: '/images/quiz/87.png',
    answer: {
      image: null,
      text: '남궁민',
    },
  },
  {
    id: '88',
    type: 'character',
    title: '다음 캐릭터는 누구인가요?',
    difficulty: 2,
    image: '/images/quiz/88.png',
    answer: {
      image: null,
      text: '쿠로미',
    },
  },
  {
    id: '89',
    type: 'character',
    title: '다음 캐릭터는 누구인가요?',
    difficulty: 3,
    image: '/images/quiz/89.png',
    answer: {
      image: null,
      text: '미니마우스',
    },
  },
  {
    id: '90',
    type: 'character',
    title: '다음 캐릭터는 누구인가요?',
    difficulty: 3,
    image: '/images/quiz/90.png',
    answer: {
      image: null,
      text: '우디',
    },
  },
  {
    id: '91',
    type: 'character',
    title: '다음 캐릭터는 누구인가요?',
    difficulty: 1,
    image: '/images/quiz/91.png',
    answer: {
      image: null,
      text: '다람이',
    },
  },
  {
    id: '92',
    type: 'character',
    title: '다음 캐릭터는 누구인가요?',
    difficulty: 2,
    image: '/images/quiz/92.png',
    answer: {
      image: null,
      text: '핑구',
    },
  },
  {
    id: '93',
    type: 'movie',
    title: '다음은 영화 <극한 직업>에서 나온 장면이다. 극 중 대사는?',
    difficulty: 3,
    image: '/images/quiz/93.png',
    answer: {
      image: null,
      text: '지금까지 이런 맛은 없었다. 이것은 갈비인가 통닭인가.',
    },
  },
]
