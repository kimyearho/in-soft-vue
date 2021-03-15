<div align="center">
  <img src="https://blog.kakaocdn.net/dn/nprmt/btqu0463kbN/Gso0UtWFz6UY0X1DLcOSnk/img.jpg" />
</div>
<br>

> Insoft Vue framework v0.1 (별도 명칭없음) <br><br>
> 이 프로젝트는 현재 개발 진행중이며, 상시 소스가 변경될 수 있습니다. <br>
> 이 프로젝트는 신규 프로젝트 개발시 개발비용을 최대한 감축시키고, 전사적으로 프로젝트 표준으로 지정하여 어느곳에가든 일관성있는 서비스를 구축하기 위한 목적 입니다. 따라서 문서 가이드를 참고하시고 코드 스타일 규격을 통일화 해주시길 바랍니다.
<br><br>
> 이 프로젝트는 사내 오픈 프로젝트로써 누구나 참여가능하오니 기여해주실분은 서비스 사업본부 김연호 과장에게 연락주세요. <br><br> <yeonho@in-soft.co.kr>
<br>


# Feature
- [x] Mock Server
- [x] Default Project
- [x] Vuex
- [x] Vue router
- [x] Vuetify
- [x] Vuetify wireframe
- [x] Vertical menu (3depth nesting menu)
- [ ] Horizon menu
- [x] Login (sample: token) / Logout / Remember me 
- [ ] Vuex Store Helper
- [ ] Common List component
- [ ] Common Detail component
- [ ] Common Modal component
- [ ] Common Search filter component
- [ ] Etc component

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
