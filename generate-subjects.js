const fs = require('fs');
const path = require('path');

const TEL = '01083550401';
const TEL_DISPLAY = '010-8355-0401';
const OUT_DIR = path.join(__dirname, 'subjects');
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR);

function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

const SUBJECTS = [
  {
    slug: 'algebra',
    name: 'Algebra',
    h1: 'Algebra(알지브라) 맞춤과외 — 국제학교·해외 유학생 전문 1:1 매칭',
    lede: 'Pre-Algebra부터 Algebra 1·2까지, 스파이럴(순환형) 커리큘럼 특유의 개념 누적 구조를 이해하는 강사가 1:1로 매칭됩니다. 국내 국제학교 재학생과 해외 거주 유학생 모두 온라인·오프라인으로 수업 가능합니다.',
    body: 'Algebra(알지브라)는 한 단원을 끝내고 넘어가는 한국식 순차 학습과 달리, 같은 개념을 학년마다 조금씩 심화해 반복하는 스파이럴 방식으로 진행됩니다. 이 순서를 이해하지 못한 채 한국식으로 선행만 나가면 Quiz나 Unit Test에서 엉뚱한 방향으로 문제를 풀게 되는 경우가 많습니다. 글로벌스카이는 이 커리큘럼 흐름에 맞춘 개념 정리와 문제풀이를 병행합니다.',
    tags: ['알지브라','Pre-Algebra','Algebra 1','Algebra 2','스파이럴 커리큘럼','Quiz·Unit Test 대비'],
    related: ['math-tutoring','geometry','precalculus','calculus','sat-math'],
  },
  {
    slug: 'geometry',
    name: 'Geometry',
    h1: 'Geometry(지오메트리) 맞춤과외 — 증명·도형 개념부터 내신까지',
    lede: '정리(Theorem)와 증명(Proof) 중심으로 전개되는 Geometry 특성상, 공식 암기보다 논리 전개 방식을 익히는 것이 중요합니다. 국제학교·미국 교과과정 재학생을 위한 1:1 맞춤 수업입니다.',
    body: 'Geometry(지오메트리)는 도형의 성질을 암기하는 과목이 아니라, 주어진 조건에서 결론을 논리적으로 증명해내는 과목입니다. Two-Column Proof 등 학교마다 요구하는 증명 형식이 다르기 때문에, 재학 중인 학교의 평가 방식에 맞춘 연습이 필요합니다.',
    tags: ['지오메트리','Theorem·Proof','Two-Column Proof','좌표기하','도형 내신'],
    related: ['math-tutoring','algebra','precalculus','calculus'],
  },
  {
    slug: 'precalculus',
    name: 'Pre-Calculus',
    h1: 'Pre-Calculus(프리칼큘러스) 맞춤과외 — Calculus 진입 전 기초를 탄탄하게',
    lede: '함수·삼각함수·수열 등 Calculus로 넘어가기 전 반드시 다져야 할 개념을 집중적으로 보완합니다. AP Calculus·IB Math 준비생에게 특히 추천합니다.',
    body: 'Pre-Calculus(프리칼큘러스) 단계에서 함수의 성질과 삼각함수를 제대로 정리하지 못하면 이후 Calculus 진입 시 극한·미분 개념을 따라가기 어렵습니다. 다음 학기 목표 과목(AP Calculus, IB Math AA 등)을 먼저 확인하고 그에 맞춰 우선순위를 조정합니다.',
    tags: ['프리칼큘러스','함수','삼각함수','수열·급수','Calculus 대비'],
    related: ['math-tutoring','algebra','geometry','calculus','ap-calculus'],
  },
  {
    slug: 'calculus',
    name: 'Calculus',
    h1: 'Calculus(칼큘러스) 맞춤과외 — 극한·미분·적분 개념 정리',
    lede: '극한, 미분, 적분의 개념적 이해와 문제 풀이 속도를 함께 끌어올립니다. 학교 내신은 물론 AP Calculus AB/BC 시험 대비도 함께 진행할 수 있습니다.',
    body: 'Calculus(칼큘러스)는 이전 단원의 이해가 다음 단원까지 그대로 이어지는 과목이라, 한 번 놓친 개념이 누적되면 따라잡기가 특히 어렵습니다. 어느 지점에서 이해가 끊겼는지부터 진단한 뒤, 그 지점부터 순서대로 다시 채워나갑니다.',
    tags: ['칼큘러스','극한','미분','적분','AP Calculus AB/BC'],
    related: ['math-tutoring','precalculus','ap-calculus','sat-math'],
  },
  {
    slug: 'ap-calculus',
    name: 'AP Calculus',
    h1: 'AP Calculus AB·BC 맞춤과외 — 5점 목표 실전 대비',
    lede: 'AP Calculus AB/BC 시험 범위와 채점 기준(FRQ 서술형 포함)에 맞춘 실전 대비 수업입니다. 학교 내신과 5월 AP 시험 일정을 함께 고려한 커리큘럼을 짭니다.',
    body: 'AP Calculus는 객관식(MCQ)뿐 아니라 풀이 과정을 서술하는 FRQ(Free Response Question) 비중이 높아, 답만 맞히는 연습으로는 고득점이 어렵습니다. 채점 기준(Rubric)에 맞춰 풀이 과정을 서술하는 연습을 함께 진행합니다.',
    tags: ['AP칼큘러스','AP Calculus AB','AP Calculus BC','FRQ 서술형','5월 AP 시험'],
    related: ['math-tutoring','calculus','precalculus','ib-math-aa'],
  },
  {
    slug: 'ib-math-aa',
    name: 'IB Math AA',
    h1: 'IB Math AA(Analysis & Approaches) 맞춤과외',
    lede: 'IB Math AA HL/SL 커리큘럼과 IA(Internal Assessment) 작성까지 지원하는 1:1 수업입니다. 이과 계열 진학을 목표로 하는 학생에게 적합합니다.',
    body: 'IB Math AA는 순수 수학적 사고와 증명, 대수적 처리 능력을 중점적으로 평가합니다. HL과 SL의 난이도·범위 차이를 먼저 확인하고, IA 주제 선정부터 초안 첨삭까지 함께 진행할 수 있습니다.',
    tags: ['IB수학 AA','IB Math AA HL','IB Math AA SL','IA 첨삭','대수·해석'],
    related: ['math-tutoring','ib-math-ai','calculus','ap-calculus'],
  },
  {
    slug: 'ib-math-ai',
    name: 'IB Math AI',
    h1: 'IB Math AI(Applications & Interpretation) 맞춤과외',
    lede: '통계·모델링 등 실생활 응용 중심의 IB Math AI HL/SL 커리큘럼에 맞춘 1:1 수업입니다. 문과 계열·응용 진학 목표 학생에게 적합합니다.',
    body: 'IB Math AI는 순수 계산보다 통계 해석, 함수 모델링 등 실제 데이터를 다루는 문제 비중이 높습니다. 계산기·소프트웨어 활용이 요구되는 문제 유형도 있어, 시험에서 실제로 쓰는 도구까지 함께 연습합니다.',
    tags: ['IB수학 AI','IB Math AI HL','IB Math AI SL','통계·모델링','IA 첨삭'],
    related: ['math-tutoring','ib-math-aa','precalculus'],
  },
  {
    slug: 'sat-math',
    name: 'SAT Math',
    h1: 'SAT Math 맞춤과외 — 목표 점수별 전략 수업',
    lede: '디지털 SAT Math 영역의 문제 유형과 시간 배분 전략에 맞춘 실전 훈련입니다. 현재 점수대를 진단한 뒤 목표 점수까지의 학습 계획을 설계합니다.',
    body: 'SAT Math는 개념 자체보다 제한된 시간 안에 정확히 푸는 전략이 점수를 가릅니다. 모의고사 기반으로 취약 유형을 추려내고, 그 유형만 집중적으로 반복하는 방식으로 진행합니다.',
    tags: ['SAT수학','디지털 SAT','시간 관리 전략','오답 유형 분석'],
    related: ['math-tutoring','algebra','precalculus','calculus'],
  },
  {
    slug: 'toefl',
    name: 'TOEFL',
    h1: 'TOEFL(토플) 맞춤과외 — Speaking·Writing 집중 관리',
    lede: '리딩·리스닝보다 상대적으로 점수 올리기 어려운 Speaking·Writing 영역을 집중적으로 훈련합니다. 유학·국제학교 지원에 필요한 목표 점수에 맞춰 진행합니다.',
    body: 'TOEFL(토플)은 영역별로 요구하는 답변 구조가 정해져 있어, 정해진 템플릿과 시간 안에 논리적으로 답하는 연습이 핵심입니다. 실제 시험과 동일한 형식으로 모의 테스트를 반복하며 취약 영역을 보완합니다.',
    tags: ['토플','Speaking','Writing','Integrated Task','모의테스트'],
    related: ['english-tutoring','ielts','sat-math'],
  },
  {
    slug: 'ielts',
    name: 'IELTS',
    h1: 'IELTS(아이엘츠) 맞춤과외 — Academic·General 목표 밴드 달성',
    lede: 'Academic·General Training 두 트랙에 맞춰 Writing Task 1·2, Speaking 인터뷰까지 실전형으로 대비합니다.',
    body: 'IELTS(아이엘츠) Writing은 Task별 채점 기준(Criteria)이 명확히 나뉘어 있어, 기준에 맞춘 첨삭이 점수 향상에 직접적으로 도움이 됩니다. Speaking은 실제 인터뷰 형식으로 모의 세션을 진행하며 발화량과 논리 전개를 함께 훈련합니다.',
    tags: ['아이엘츠','Writing Task 1·2','Speaking 인터뷰','목표 밴드 스코어'],
    related: ['english-tutoring','toefl'],
  },
  {
    slug: 'ap-physics',
    name: 'AP Physics',
    h1: 'AP Physics(AP물리) 1·2·C 맞춤과외',
    lede: 'AP Physics 1, 2, C(Mechanics/E&M) 각 트랙의 개념과 FRQ 서술형 문제풀이를 함께 대비합니다.',
    body: 'AP Physics(AP물리) C는 Calculus 기반 문제풀이가 요구되는 만큼, 물리 개념과 동시에 필요한 수학 도구를 함께 점검합니다. 실험 기반 문제(Experimental Design) 유형도 놓치지 않도록 별도로 연습합니다.',
    tags: ['AP물리','AP Physics 1','AP Physics 2','AP Physics C','FRQ 서술형'],
    related: ['science-tutoring','ap-calculus','ap-chemistry'],
  },
  {
    slug: 'ap-chemistry',
    name: 'AP Chemistry',
    h1: 'AP Chemistry(AP화학) 맞춤과외',
    lede: '몰 개념, 화학반응식, 평형 등 AP Chemistry 핵심 단원을 실험 데이터 해석 문제와 함께 대비합니다.',
    body: 'AP Chemistry(AP화학)는 계산 문제와 실험 데이터 해석 문제가 함께 출제되어, 공식 적용과 그래프·데이터 읽기 능력을 모두 요구합니다. 두 유형을 나눠서 각각 집중 훈련합니다.',
    tags: ['AP화학','몰 개념','화학반응식','평형·산염기','실험 데이터 해석'],
    related: ['science-tutoring','ap-physics','ap-biology'],
  },
  {
    slug: 'ap-biology',
    name: 'AP Biology',
    h1: 'AP Biology(AP생물) 맞춤과외',
    lede: '방대한 암기량과 실험 기반 서술형이 함께 요구되는 AP Biology를 개념 지도 중심으로 정리합니다.',
    body: 'AP Biology(AP생물)는 단순 암기만으로는 FRQ에서 고득점이 어렵고, 개념 간의 인과관계를 서술하는 능력이 필요합니다. 단원별 개념 지도를 함께 그려가며 암기와 서술을 동시에 훈련합니다.',
    tags: ['AP생물','세포·유전','생태·진화','FRQ 서술형'],
    related: ['science-tutoring','ap-chemistry'],
  },
  {
    slug: 'admission-tutoring',
    name: '국제학교 입학과외',
    h1: '국제학교 입학과외 — 재학생이 아니어도 지금부터 준비하는 과외',
    lede: '아직 국제학교에 다니지 않는 학생을 대상으로, 지원 학교의 커리큘럼과 평가 방식에 맞춰 입학 전부터 미리 대비하는 1:1 과외입니다. 영어·수학 기초 진단부터 시작합니다.',
    body: '국제학교 입학과외는 이미 재학 중인 학생의 내신 보충과는 목표가 다릅니다. 목표 학교가 어떤 커리큘럼(IB/AP/IGCSE 등)을 쓰는지, 어떤 방식으로 학생을 평가하는지 먼저 파악한 뒤, 그 학교에 들어갔을 때 바로 따라갈 수 있는 수준까지 영어·수학 기초를 끌어올리는 것이 목표입니다. 특정 학교와 제휴·소속 관계가 없는 독립 과외 서비스입니다.',
    tags: ['입학 전 기초 다지기','영어·수학 진단','목표 학교 커리큘럼 파악'],
    related: ['admission-exam-prep','admission-interview','map-test'],
  },
  {
    slug: 'admission-exam-prep',
    name: '국제학교 입시과외',
    h1: '국제학교 입시과외 — 학교별 입학시험 유형 맞춤 대비',
    lede: '국제학교마다 다른 입학시험(Entrance Exam) 유형과 난이도에 맞춰 영어·수학 시험 준비를 진행합니다. 최근 시험을 앞둔 학생에게 특히 추천합니다.',
    body: '국제학교 입학시험은 학교마다 자체 출제하는 영어·수학 지필고사에 더해, MAP Test 같은 표준화 시험 점수를 함께 요구하는 경우가 많습니다. 지원할 학교가 정해졌다면 그 학교가 요구하는 시험 형식을 먼저 확인하고, 남은 기간에 맞춰 우선순위를 정해 대비합니다.',
    tags: ['학교별 입학시험','영어·수학 지필고사','MAP Test 병행'],
    related: ['admission-tutoring','map-test','admission-math-test','admission-english-test'],
  },
  {
    slug: 'transfer-tutoring',
    name: '국제학교 편입과외',
    h1: '국제학교 편입과외 — 학기 중 전학·편입 준비',
    lede: '일반학교에서 국제학교로, 혹은 다른 국제학교로 학기 중 편입을 준비하는 학생을 위한 과외입니다. 편입 시험과 함께 새 학교의 진도를 따라잡는 보충 수업을 병행합니다.',
    body: '편입은 정시 입학과 달리 준비 기간이 짧은 경우가 많습니다. 지원 시점부터 역산해 편입시험 대비와 진도 보충의 우선순위를 함께 정하고, 합격 이후에는 새 학교 커리큘럼에 맞춘 보충 수업으로 자연스럽게 이어갑니다.',
    tags: ['학기 중 편입','편입시험 대비','신규 학교 진도 보충'],
    related: ['admission-tutoring','admission-exam-prep'],
  },
  {
    slug: 'admission-interview',
    name: '국제학교 입학 면접과외',
    h1: '국제학교 입학 면접과외 — 영어 인터뷰 실전 대비',
    lede: '입학 사정에서 비중이 큰 영어 인터뷰를 실전처럼 반복 연습합니다. 예상 질문 준비부터 자연스러운 답변 태도까지 함께 훈련합니다.',
    body: '국제학교 입학 면접은 정해진 답을 외워서 말하는 자리가 아니라, 실제 수업에서 영어로 소통할 수 있는지를 보는 자리에 가깝습니다. 예상 질문에 대한 답변을 준비하되, 외운 티가 나지 않도록 실제 대화처럼 반복 연습하는 데 중점을 둡니다.',
    tags: ['영어 인터뷰','예상 질문 준비','모의 면접'],
    related: ['admission-tutoring','admission-exam-prep'],
  },
  {
    slug: 'map-test',
    name: 'MAP Test',
    h1: 'MAP Test(맵테스트) 대비 과외 — 국제학교 입학·배치 시험 준비',
    lede: '많은 국제학교가 입학·배치(Placement) 기준으로 활용하는 MAP Test(Measures of Academic Progress) 대비 수업입니다. 영어·수학 두 영역을 함께 다룹니다.',
    body: 'MAP Test(맵테스트)는 학년 단위 시험이 아니라 학생의 현재 실력에 맞춰 문제 난이도가 조정되는 적응형(Adaptive) 시험입니다. 정해진 범위를 외우는 방식이 아니라, 실제 학년 수준의 영어·수학 개념을 폭넓게 갖추는 것이 점수 향상의 핵심입니다.',
    tags: ['맵테스트','적응형(Adaptive) 시험','영어·수학 영역','입학·배치 기준'],
    related: ['admission-tutoring','admission-exam-prep','admission-math-test','admission-english-test'],
  },
  {
    slug: 'admission-math-test',
    name: '국제학교 입학 수학시험',
    h1: '국제학교 입학 수학시험 대비 과외',
    lede: '학교별 입학 수학시험 기출 유형과 MAP Test 수학 영역을 함께 준비합니다. 학년별 예상 범위를 진단 후 우선순위를 정해 보완합니다.',
    body: '국제학교 입학 수학시험은 단순 연산보다 문장제·논리 문제 비중이 높은 경우가 많습니다. 목표 학교·학년에서 요구하는 수준을 먼저 확인한 뒤, 부족한 개념을 채우는 방식으로 진행합니다.',
    tags: ['입학 수학시험','문장제·논리 문제','MAP Math'],
    related: ['map-test','admission-exam-prep','algebra'],
  },
  {
    slug: 'math-tutoring',
    name: '국제학교 수학',
    h1: '국제학교 수학 과외 — Algebra·Geometry·Pre-Calculus·Calculus·IB·AP 전문 매칭',
    lede: '중·고등 국제학교 수학 커리큘럼(Algebra, Geometry, Pre-Calculus, Calculus, IB Math AA/AI, AP Calculus)에 맞춰 과목별 전문 강사를 매칭하는 국제학교 수학 과외입니다.',
    body: '국제학교 수학 과외는 학년보다 진도(Course Level)를 기준으로 반이 나뉘는 경우가 많아, 같은 학년이라도 배우는 과목명이 서로 다를 수 있습니다. 지금 듣고 있는 과목명을 먼저 확인한 뒤, 그 과목에 맞춘 전문 강사를 매칭해 드립니다.',
    tags: ['국제학교 수학','Algebra','Geometry','Pre-Calculus','Calculus','IB Math','AP Calculus'],
    related: ['algebra','geometry','precalculus','calculus','ap-calculus','ib-math-aa','ib-math-ai'],
  },
  {
    slug: 'english-tutoring',
    name: '국제학교 영어',
    h1: '국제학교 영어 과외 — Essay·Literature·TOEFL·IELTS 전문 매칭',
    lede: '내신 Essay·Literature 수업부터 TOEFL·IELTS 같은 공인 영어시험까지, 목적에 맞는 국제학교 영어 과외 강사를 매칭합니다.',
    body: '국제학교 영어 과외는 내신용 Essay·Literature 수업과, 유학·입학에 필요한 TOEFL·IELTS 같은 공인시험 대비가 서로 다른 접근을 필요로 합니다. 목적을 먼저 확인한 뒤 그에 맞는 강사를 매칭합니다.',
    tags: ['국제학교 영어','Essay','Literature','TOEFL','IELTS'],
    related: ['toefl','ielts','sat-math'],
  },
  {
    slug: 'science-tutoring',
    name: '국제학교 과학',
    h1: '국제학교 과학 과외 — AP Physics·Chemistry·Biology 전문 매칭',
    lede: 'AP Physics, AP Chemistry, AP Biology 등 국제학교 과학 커리큘럼에 맞춘 국제학교 과학 과외입니다.',
    body: '국제학교 과학 과목은 계산 중심 단원과 서술형(FRQ) 단원이 함께 출제되는 경우가 많아, 두 유형을 나눠 대비하는 것이 중요합니다. 재학 중인 학교의 트랙(AP Physics 1/2/C 등)을 먼저 확인한 뒤 그에 맞춰 커리큘럼을 짭니다.',
    tags: ['국제학교 과학','AP Physics','AP Chemistry','AP Biology'],
    related: ['ap-physics','ap-chemistry','ap-biology'],
  },
  {
    slug: 'admission-english-test',
    name: '국제학교 입학 영어시험',
    h1: '국제학교 입학 영어시험 대비 과외',
    lede: '학교별 입학 영어시험(Reading·Writing·Grammar)과 MAP Test 영어 영역을 함께 준비합니다.',
    body: '국제학교 입학 영어시험은 문법 지식보다 실제 지문을 읽고 이해·서술하는 능력을 더 비중 있게 평가하는 경우가 많습니다. 읽기 속도와 이해도를 함께 끌어올리는 방향으로 수업을 구성합니다.',
    tags: ['입학 영어시험','Reading·Writing','MAP Reading·Language'],
    related: ['map-test','admission-exam-prep','admission-interview'],
  },
];

function subjectCard(s) {
  return `<a href="/subjects/${s.slug}.html" class="subject-card" style="display:block;text-decoration:none;"><h3>${esc(s.name)}</h3><ul class="tags">${s.tags.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></a>`;
}

const HEAD_STYLE = `
  @font-face { font-family: 'BMDoHyeon'; src: url('https://cdn.jsdelivr.net/gh/fonts-archive/BMDOHYEON/BMDOHYEON.woff2') format('woff2'); font-weight:normal; font-style:normal; font-display:swap; }
  :root {
    --font-body: "Pretendard Variable", "Pretendard", "Apple SD Gothic Neo", "Malgun Gothic", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; --font-display: 'BMDoHyeon', "Pretendard Variable", "Pretendard", "Malgun Gothic", sans-serif;
    --bg: #E6F4FC; --bg-alt: #D3EAFA; --surface: #FFFFFF; --surface-2: #EAF5FC;
    --ink: #1A1A1A; --ink-muted: #414C57; --ink-faint: #667079;
    --border: #E4EBF0; --border-strong: #CEDAE1;
    --sky: #4FA8E8; --sky-deep: #2E7FC4; --sky-wash: #EAF5FF; --pink: #FF2D87; --pink-wash: #FFE3F0;
    --yellow: #FFD400; --yellow-ink: #3A2900; --red: #E8382D;
    --card-white: #FFFFFF; --card-pink: #FFE1F1; --card-yellow: #FFF3C2; --card-green: #E7F6C6; --card-purple: #ECE3FF; --card-peach: #FFE7D6;
  }
  * { box-sizing: border-box; }
  body { margin:0; background:var(--bg); color:var(--ink); font-family:var(--font-body); line-height:1.7; word-break:keep-all; overflow-wrap:break-word; overflow-x:hidden; }
  a { color:inherit; }
  .wrap { max-width:920px; margin:0 auto; padding:0 20px; }
  h1,h2,h3 { font-weight:800; margin:0; letter-spacing:-0.01em; text-wrap:balance; font-family:var(--font-display); }
  h3 { position:relative; }
  .subject-card h3 { padding-left:0; }
  header.site { background:var(--surface); border-bottom:1px solid var(--border); padding:14px 0; }
  .nav-row { display:flex; align-items:center; justify-content:space-between; }
  .logo { font-weight:800; font-size:1.15rem; text-decoration:none; color:var(--ink); }
  .btn { display:inline-flex; align-items:center; gap:8px; font-weight:700; text-decoration:none; padding:12px 20px; border-radius:999px; background:var(--pink); color:#fff; font-size:.94rem; }
  .breadcrumb { font-size:.86rem; color:var(--ink-faint); margin:20px 0 6px; }
  .breadcrumb a { text-decoration:none; color:var(--ink-faint); }
  .breadcrumb a:hover { color:var(--pink); }
  .hero { padding:20px 0 32px; }
  .hero h1 { font-size:clamp(1.5rem,3.6vw,2.2rem); color:var(--sky-deep); text-shadow:2px 3px 0 rgba(0,0,0,.08); }
  .hero .lede { margin-top:14px; color:var(--ink-muted); font-size:1.05rem; max-width:65ch; }
  section { padding:24px 0; }
  h2 { font-size:1.3rem; margin-bottom:14px; }
  .info-card { background:#fff; border:2px solid var(--border-strong); border-radius:18px; padding:26px; }
  .info-card p { color:var(--ink-muted); margin:0; }
  .tags { margin-top:14px; display:flex; flex-wrap:wrap; gap:8px; padding:0; list-style:none; }
  .tags li { font-size:.82rem; font-weight:600; background:var(--surface-2); color:var(--ink-muted); border-radius:999px; padding:5px 12px; }
  .subject-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; }
  @media (max-width:880px){ .subject-grid{ grid-template-columns:repeat(2,1fr);} }
  @media (max-width:560px){ .subject-grid{ grid-template-columns:1fr;} }
  .subject-card { background:#fff; border:2px solid var(--border-strong); border-radius:16px; padding:20px; color:var(--ink); }
  .subject-card:nth-child(4n+1) { background:var(--card-white); }
  .subject-card:nth-child(4n+2) { background:var(--card-pink); }
  .subject-card:nth-child(4n+3) { background:var(--card-yellow); }
  .subject-card:nth-child(4n+4) { background:var(--card-green); }
  .subject-card h3 { font-size:1.02rem; }
  .subject-card .tags li { font-size:.76rem; }
  .mini-cta { display:flex; align-items:center; justify-content:space-between; gap:20px; flex-wrap:wrap; background:var(--sky-wash); border:2px solid var(--sky); border-radius:18px; padding:24px; margin-top:36px; }
  .mini-cta h3 { font-size:1.2rem; }
  .mini-cta p { margin-top:6px; color:var(--ink-muted); }
  footer { border-top:1px solid var(--border); padding:24px 0; font-size:.82rem; color:var(--ink-faint); }
`;

const FAVICON = `<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 100%27%3E%3Crect width=%27100%27 height=%27100%27 rx=%2720%27 fill=%27%23FFD400%27/%3E%3Cg fill=%27%23BFE6F7%27 stroke=%27%231A1A1A%27 stroke-width=%273%27%3E%3Ccircle cx=%2735%27 cy=%2755%27 r=%2718%27/%3E%3Ccircle cx=%2755%27 cy=%2748%27 r=%2722%27/%3E%3Ccircle cx=%2770%27 cy=%2758%27 r=%2716%27/%3E%3Ccircle cx=%2748%27 cy=%2768%27 r=%2720%27/%3E%3Crect x=%2728%27 y=%2755%27 width=%2752%27 height=%2726%27 rx=%2713%27/%3E%3C/g%3E%3C/svg%3E" />`;

const HEADER = `<header class="site"><div class="wrap nav-row"><a class="logo" href="/">글로벌스카이</a><a class="btn" href="tel:${TEL}">📞 ${TEL_DISPLAY}</a></div></header>`;
const FOOTER = `<footer><div class="wrap">글로벌스카이 — 서울 강남구 대치동 · ${TEL_DISPLAY} <a href="/">홈으로</a></div></footer>`;

for (const s of SUBJECTS) {
  const title = `${s.name} 과외 | ${s.name} 맞춤과외 - 국제학교·유학생 전문 | 글로벌스카이`;
  const desc = `${s.h1}. ${s.lede}`;
  const relatedCards = s.related.map(slug => SUBJECTS.find(x => x.slug === slug)).filter(Boolean).map(subjectCard).join('\n');

  const html = `<!doctype html>
<html lang="ko">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}" />
<meta name="keywords" content="${esc(s.name)},${esc(s.name)} 과외,${esc(s.name)} 맞춤과외,${s.tags.map(esc).join(',')},국제학교 수학,국제학교 과외" />
<link rel="canonical" href="https://globalsky.kr/subjects/${s.slug}.html" />
${FAVICON}
<meta property="og:type" content="website" />
<meta property="og:title" content="${esc(title)}" />
<meta property="og:description" content="${esc(desc)}" />
<meta property="og:url" content="https://globalsky.kr/subjects/${s.slug}.html" />
<meta property="og:image" content="https://globalsky.kr/images/og-banner.png" />
<meta property="og:locale" content="ko_KR" />
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type":"ListItem","position":1,"name":"글로벌스카이","item":"https://globalsky.kr/"},
    {"@type":"ListItem","position":2,"name":"국제학교과외","item":"https://globalsky.kr/tutoring.html"},
    {"@type":"ListItem","position":3,"name":"${esc(s.name)} 과외","item":"https://globalsky.kr/subjects/${s.slug}.html"}
  ]
}
</script>
<style>${HEAD_STYLE}</style>
</head>
<body>
${HEADER}
<div class="wrap">
  <p class="breadcrumb"><a href="/">글로벌스카이</a> › <a href="/tutoring.html">국제학교과외</a> › ${esc(s.name)}</p>

  <section class="hero">
    <h1>${esc(s.h1)}</h1>
    <p class="lede">${esc(s.lede)}</p>
    <div style="margin-top:20px;"><a class="btn" href="tel:${TEL}">🎁 무료 체험수업 신청 · 전화상담</a></div>
  </section>

  <section>
    <div class="info-card">
      <p>${esc(s.body)}</p>
      <ul class="tags">${s.tags.map(t=>`<li>${esc(t)}</li>`).join('')}</ul>
    </div>
  </section>

  <section>
    <h2>함께 찾는 과목</h2>
    <div class="subject-grid">${relatedCards}</div>
  </section>

  <div class="mini-cta"><div><h3>${esc(s.name)} 무료 체험수업, 지금 신청하세요</h3><p>학생의 학교와 학년만 말씀해 주셔도 상담을 시작할 수 있습니다.</p></div><a class="btn" href="tel:${TEL}">${TEL_DISPLAY} 전화하기</a></div>
</div>
${FOOTER}
</body>
</html>`;

  fs.writeFileSync(path.join(OUT_DIR, s.slug + '.html'), html, 'utf8');
  console.log('written', s.slug);
}

console.log('total:', SUBJECTS.length);
