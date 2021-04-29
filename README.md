<p align="center">       
  <img  src="https://blog.kakaocdn.net/dn/nprmt/btqu0463kbN/Gso0UtWFz6UY0X1DLcOSnk/img.jpg" />
</p>

<p align="center">       
  <img  src="https://i.imgur.com/Leb7GqW.png" />
</p>

# Insoft Vue Template v0.2 <br>

<br>

> * 이 프로젝트의 목적은 만들어진 개발환경 구성을 사용하여 비용(시간)을 절감(단축)하고 콘텐츠 개발에 집중할 수 있도록 지원하는데 목적을 두고 있음.
<br/><br/>
> * 이 프로젝트는 현재 개발 진행중이며, 상시 소스가 변경될 수 있음. <br>
> * 이 프로젝트는 관리자형 포털을 개발할 때 사용가능한 템플릿 임<br>
> * 타 프로젝트에서 사용 된 컴포넌트들을 현재 환경에 맞춰 등록하고 있고, 예시를 포함하고 있음. <br>
> * 자세한 정보는 문서 항목을 참고하길 바람. <br>
> * 이 프로젝트는 사내 오픈 프로젝트로써 누구나 참여가능하오니 기여해주실분은 서비스 사업본부 김연호 과장에게 연락주세요. <br> <yeonho@in-soft.co.kr>

<br>

##### 이 프로젝트는 Vuetify를 사용합니다. Vuetify 레퍼런스는 아래 링크를 참고 하십시오.
https://vuetifyjs.com/en/

<br>

# Preview
- [Live Preview](http://158.247.198.68/login) (Login ID: admin)
<br>

# Component name or Props style rule
- https://kr.vuejs.org/v2/guide/components-props.html <br> <br>

1. Component name Rule
- kebab-case를 사용하도록 한다.
```html
<component-name></component-name> (O)

<ComponentName></ComponentName>   (x)
```
<br>

2. Props name Rule
- 값을 넘겨줄때는 동일하게 kebab-case를 사용하도록 한다.
- 컴포넌트 내부에서 Props를 선언할때는 camel-case로 받아서 처리한다.
```html
(O)
<component-name
  :visible-form="form"
  :example-id="id"
/>

(X)
<component-name
  :visibleForm="form"
  :exampleId="id"
/>>
```

<br>

3. Template Rule
- Props or Interpolation(보간법)에서 'this' 키워드를 사용하지 않는다.
```html
(O)
<component-name
  :visible-form="form"
  :example-id="id"
/>

(X)
<component-name
  :visible-form="this.form"
  :example-id="this.id"
/>

(O)
{{ id }}

(X)
{{ this.id }}
```
<br>

4. Mixin Rule
- https://vuejs.org/v2/style-guide/#Private-property-names-essential
- 믹스인 함수명에 대한 룰을 정의 합니다.
- 중첩 방지 및 믹스인 함수를 보다 정확하게 구분할 수 있도록 접두사로 mixin_를 사용하여 구분합니다.
```js
export default {
  methods: {
     mixin_fetch() {}
     ...
  }
}
```
<br>

# Mock API
1. New File
- 신규 .js 파일 생성 시 mock/index.js 파일에서 import 하여 주입 해주세요.
```js
const filter = require('./filter')

const mocks = [
  ...filter
]
```
<br>

### VS Code 확장
<br>
1. Prettier - Code formatter <필수>
https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

2. EsLint <필수>
https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

3. Better Comments <필수는 아니지만 소스주석은 이걸로 사용됬음>
https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments

4. 기타 <필수>
크롬 앱 스토어에서 vue-dev-tool 설치할 것 (Microsoft Edge에서도 사용가능)
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

### 3. Dev start
```
yarn dev
```
<br>

### 4. Default Code Style (Prettier)
> .prettierrc.json / .vscode -> setting.json 파일 참조 <br>
> 코드 스타일은 프로젝트 인원과 협의하여 Rule를 정해서 사용하세요. <br>
> 코드 스타일을 정의하지 않으면 개발자별로 코드 스타일에 일관성이 없어집니다.
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
<br>

# License
```
 GNU GENERAL PUBLIC LICENSE V3.0
 이 프로젝트는 상기 라이선스를 가집니다.
 해당 라이선스의 자세한 사항은 아래 링크를 참조해 주십시오.
 https://olis.or.kr/license/Detailselect.do?lId=1072
```
<br>
