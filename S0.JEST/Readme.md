# Jest 세팅 정보

## 1. package.json에 설정 추가
- Jest가 ES 모듈을 지원하도록 package.json에 설정을 추가합니다. package.json 파일을 열고 다음과 같이 "type": "module"을 추가하세요.
```json
{
  "type": "module",
  "scripts": {
    "test": "jest"
  }
}
```
- 이렇게 하면 Jest가 모듈을 ES 모듈 방식으로 해석할 수 있게 됩니다.

## 2. Babel 설정 추가
- Jest가 ES 모듈을 해석하려면 Babel을 사용하여 파일을 변환할 수 있습니다. 먼저, Babel과 관련 패키지를 설치합니다.
```bash
npm install --save-dev babel-jest @babel/core @babel/preset-env
 ```
- 그런 다음 프로젝트 루트 디렉토리에 .babelrc 파일을 생성하고 다음과 같이 설정합니다:
```json
{
  "presets": ["@babel/preset-env"]
}
```

## 3. jest.config.js 파일 설정
- Jest 설정 파일을 생성하고 Babel을 사용하여 변환하도록 Jest에 지시합니다. 프로젝트 루트 디렉토리에 jest.config.js 파일을 만들고 다음과 같이 작성합니다:
- jest.config.js
```js
export default {
    transform: {
        "^.+\\.jsx?$": "babel-jest",
    },
};
```

