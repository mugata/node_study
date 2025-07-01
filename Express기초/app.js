/* 
    Express 프레임워크 설정 방법(순서)
    1) 워크스페이스에 express모듈 설치하기
    2) 메인서버파일 제작하기 -> app.js
    3) 역할을 담당하는 폴더 제작
        - config = 연결 정보를 담당하는 폴더(db,key)
        - public = 정적 파일들을 관리하는 공간(img,js,css,html)
        - routes = 경로를 담당하는 공간(이정표)
        - views = 동적HTML을 관리하는 공간 -> react대체


    app.js =  사장님
    - express에서 가장 중요한 역할을 하는 파일
    - 역할 : 서버생성 ,모듈등록,업무지시,환경설정
*/ 