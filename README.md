<p align="center">       
  <img  src="https://blog.kakaocdn.net/dn/nprmt/btqu0463kbN/Gso0UtWFz6UY0X1DLcOSnk/img.jpg" />
</p>

<br>

> Insoft Vue framework v0.1 <br><br>
> 이 프로젝트는 현재 개발 진행중이며, 상시 소스가 변경될 수 있습니다. <br>
> 이 프로젝트는 신규 프로젝트 개발시 개발비용을 최대한 줄이고, 전사적으로 프로젝트 표준으로 지정하여 어느곳에가든 일관성있는 서비스를 구축하기 위한 목적 입니다. 따라서 문서 가이드를 참고하시고 코드 스타일 규격을 통일화 해주시길 바랍니다.
<br><br>
> 이 프로젝트는 사내 오픈 프로젝트로써 누구나 참여가능하오니 기여해주실분은 서비스 사업본부 김연호 과장에게 연락주세요. <br><br> <yeonho@in-soft.co.kr>

<br>

##### 이 프로젝트는 Vuetify UI Component를 사용합니다. 자세한 사항은 아래 링크를 참고 하십시오.
https://vuetifyjs.com/en/

<br>

# License
```
 GNU GENERAL PUBLIC LICENSE V3.0
 이 프로젝트는 상기 라이선스를 가집니다.
 해당 라이선스의 자세한 사항은 아래 링크를 참조해 주십시오.
 https://olis.or.kr/license/Detailselect.do?lId=1072
```
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

# Precautions
- Eventbus 사용을 자제 하세요.
- Eventbus는 상태를 추적할 수 없으므로 프로젝트 단위에서는 꼭 필요한 경우를 제외하고서는 사용을 자제하세요.
<br>

# Mock
#### Mock api를 구성하려면 mock 패키지 하위에 api를 만들어주시면 됩니다.
#### 그런다음 소스에서 만들어진 api를 사용하세요.
#### 실제 API 연동시에는 프로젝트에서 Mock을 제거하세요. (vue.config.js & main.js 참조)

<br>

### 0. VS Code 확장
<br>
1. Prettier - Code formatter <필수>
https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

2. EsLint <필수>
https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

3. Better Comments <필수는 아니지만 소스주석은 이걸로 사용됬음>
https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments

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
