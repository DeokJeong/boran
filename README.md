# boran_portfoilo
2020.08.09 ~ 2021.01.25
그린컴퓨터아카데미

----
HTML 메모

### __html내 lang 속성__
스크린 리더의 기본 문자셋 설정
lang 의 기본값은 '알수없음'이므로 필수적으로 입력이 필요함
'ko','eng'

### __html내 dir 속성__
요소의 쓰기방향을 열거성 특성
'ltr'은 왼쪽에서 오른쪽으로를 뜻하며 한국어나 영어에 사용
'rtl'은 오른쪽에서 왼쪽으로를 뜻하며 아랍어에서 사용함
'auto'는 사용자 에이전트가결정 
영어나 한국어는 굳이 dir='ltr'로 선언을 안해줘도 됌

### __html내 meta 태그__
메타태그(meta tag)는 웹페이지(Web page)의 요약이므로 상당히 중요
메타태그 3가지 속성
1. http-equiv - 웹 브라우저 서버에 명령을 내리는 속성
 - content-security-policy
 - content-type
 - default-style
 - refresh + content = "30" = 30초마다 문서 새로고침
2. name - 몇 개의 meta 정보의 이름을 정할 수 있으며 지정하지 않으면 http-equiv 와 같은 기능
 - application-name
 - googlebot - Googlebot 에만 페이지의 색인을 생성하지 못하게 설정 가능
 `<meta name="googlebot" content="noindex" />`
 - robots - 페이지 및 텍스트 수준 설정을 사용하여 Google 검색결과에 나오는 콘텐츠를 제어
  - noindex : 검색결과에 페이지 표시하지 않음
  - nofollow : 페이지의 링크를 따라가지 않음
  - noarchive : 검색결과에 저장된 페이지 링크 표시하지 않음
  - all(기본값) : 색인 생성이나 게재에 대한 제한이 없음
  - none : noindex와 nofollow랑 일치함
  - index : 페이지를 수집대상으로 함
  - follow : 페이지를 포함에 링크가 걸린곳을 수집대상으로 함
 - author + content="bora" - 페이지 작성자를 정의
 - description - 검색 결과에 표시되는 문자 지정
 - generator
 - keywords - 검색엔진에 검색되는 단어 지정
 - viewport - 웹사이트가 모든 기기에서 잘 보이도록 표시 영역 설정 `content="width=device-width, initial-scale=1.0"`
  - width=device-width부분은 장치의 화면 너비를 따르도록 페이지 너비를 설정
  - initial-scale=1.0부분은 페이지가 브라우저에 의해 처음 로드될 때 초기 확대/축소 수준을 설정
3. content - meta 정보의 내용을 지정 
 - text

 ex) 
 <meta name="robots" content="noindex, nofollow" />
 자신의 사이트가 구글에 노출되길 원치 않을 때 사용함
 
4. charset - 'utf-8' 문자 깨짐을 방지위하기위한 선언
 - character-set
