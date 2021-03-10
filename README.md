### Vuetify 적용.

> vue.confing.js, main.js 참조
> 패키지 구조 설명은 제외

> 라우터 구성 / 스토어 구성 / 와이어 프레임 구성 / 로그인 / 로그아웃 / 메뉴 구성 / 브래드 크럼 / 검색필터 / 테이블 연동 등

<br>

### 0. VS Code 확장
1. Prettier - Code formatter <필수>
https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

<br>

2. EsLint <필수>
https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

<br>

3. Better Comments <필수는 아니지만 소스주석은 이걸로 사용됬음>
https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments

<br>

4. 기타 <필수!!>
크롬 앱 스토어에서 vue-dev-tool 설치할 것.
(Microsoft Edge에서도 사용가능)
https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd


<br>

### 1. Install

* Yarn Install (필수)
```
npm i -g yarn
```
<br>

* package install
- 패키지 관리는 yarn으로 관리 하세요. (npm 구림)
```
project root> yarn
```
<br>

### 2. Build (Production)
* production build
```
yarn build:prod
```
<br>

* Preview Mode
- 로컬 서버를 통해 Production 시연
```
yarn preview
```
<br>

### 3. Start
```
yarn dev
```
<br>

### 4. Code Style (Prettier)
> .prettierrc.json, .vscode -> setting.json 파일 참조
> 코드 스타일은 팀원과 협의하여 지정하는게 좋음.
> 코드 스타일을 정의하지 않으면 개발자별로 코드 스타일이 일관성이 없어짐
``` 
<prettierrc.json>
{
	"tabWidth": 2,
	"useTabs": false,
	"semi": false,
	"singleQuote": true,
	"trailingComma": "none",
	"bracketSpacing": false,
	"jsxBracketSameLine": false,
	"arrowParens": "always"
}
```
```
<setting.json>
{
    "editor.tabSize": 2,
    "editor.formatOnSave": false,
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true,
        "source.organizeImports": false
    },
    "eslint.format.enable": true,
    "eslint.alwaysShowStatus": true,
    "eslint.probe": [
    "javascript",
    "vue"
  ],
}
```
