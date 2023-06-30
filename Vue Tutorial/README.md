# Vue Tutorial

- 2022.11.21 ~ 2023.06.30

Tutorial 링크 -> [https://vuejs.org/tutorial](https://vuejs.org/tutorial)

## 2. Declarative Rendering `{{ data }}`

- 데이터를 DOM에 렌더링 가능(declarative rendering)
- SFC(Single-File-Component): HTML, CSS, JS로 이뤄진 .vue 파일 -> 캡슐화, 재사용성

```vue
<script setup>
import { reactive, ref } from 'vue'

// reactive에는 원자값 넣지 않기
const counter = reactive({ count: 0 })
counter.count++

// ref는 value를 찍어야 함
const message = ref('Hello World!')
console.log(message.value)
message.value = 'Changed'
</script>

<template>
  <!-- JS 함수 적용 가능 -->
  <h1>{{ message.split('').reverse().join('') }}</h1>
  <!-- value를 안찍어도 됨, 자동으로 unwrapped -->
  <p>Count is: {{ counter.count+1 }}</p>
</template>

```

## 3. Attribute Bindings `v-bind:`, `:`

속성에 렌더링하려면 `v-bind:` 쓰세요~

- 위에서 배운 `{{ }}`는 텍스트로 단순히 출력할 때만 사용해요~

```vue
<script setup>
import { ref } from 'vue';

// 1. 속성변수에 html이나 css를 참고
const titleClass1 = ref('title');
const titleClass2 = ref('title2');
</script>

<template>
  <!-- 2. v-bind으로 속성값 바인딩 하는데 속성변수로 연결 -->
  <h1 v-bind:class="titleClass1">Make me red</h1>
  <h1 :class="titleClass2">Make me background-pink</h1>
</template>

<style>
.title {
  color: red;
}

.title2 {
  background-color: pink;
}
</style>

```

## 4. Event Listener `v-on`, `@`

이벤트 리스너는 `v-on`을 쓰세요~

```vue
<script setup>
import { ref } from 'vue';

// 1. 변경될 변수 선언하고
const count1 = ref(0)
const count2 = ref(0)

// 2. 함수 선언 해서 로직을 짜고
function increment(num) {
  if (num === 1) {
    count1.value++;
  } else if (num === 2) {
    count2.value++;
  }
}
</script>

<template>
  <!-- 3. v-on으로 클릭 이벤트 발생하면 함수 실행되게 ㄱㄱ -->
  <button v-on:click="increment(1)">count is: {{count1}}</button>
  <button @click="increment(2)">count is: {{count2}}</button>
</template>

```

## 5. Form Bindings

V-model은 양방향 바인딩

```vue
<script setup>
import { ref } from 'vue';

// 1. 변경될 text를 지정하고
const mytext = ref('')

// 3. v-model을 안쓰면 text 정의하고
const text = ref('')
// 4. onInput 함수로 데이터 동기화
function onInput(e) {
  text.value = e.target.value
}
const myVue = ref('myClass')
</script>

<template>
  <!-- 2. v-model에 연결 -->
  <input v-model="mytext">
  <div> v-model: {{ mytext }} </div>
  <!-- 5. v-bind로 text 연결, v-on으로 함수 연결 -->
  <input v-bind:value="text" v-on:input="onInput">
  <div v-bind:class="myVue"> bind and on: {{ text }} </div>
</template>

<style>
.myClass {
  color: red;
}
</style>

```

## 6. Conditional Rendering

조건문 렌더링

```vue
<script setup>
import { ref } from 'vue';

const awesome = ref(true)

function toggle() {
  awesome.value = !awesome.value;
}

</script>

<template>
  <button @click="toggle">toggle</button>
  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>
</template>

```

## 7. List Rendering

for문 사용법

```vue
<script setup>
import { ref } from 'vue';

let id = 0;

const newTodo = ref('')
const todos = ref([
  { id: id++, text: 'Learn HTML' },
  { id: id++, text: 'Learn JavaScript' },
  { id: id++, text: 'Learn Vue' }
])

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value })
  newTodo.value = ''
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}

</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo">
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      {{ todo.text }} <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
</template>

```

## 8. Computed Property

- Computed Property 왜써요? -> Caching 방식을 사용하기 때문
- Caching 방법 vs Method 방법 존재하는데 Caching 방식으로 적용해서 좋아요

```vue
<script setup>
import { ref, computed } from 'vue'

let id = 0

const newTodo = ref('')
const hideCompleted = ref(false)
const todos = ref([
  { id: id++, text: 'Learn HTML', done: true },
  { id: id++, text: 'Learn JavaScript', done: true },
  { id: id++, text: 'Learn Vue', done: false }
])

const filteredTodos = computed(() => {
  return hideCompleted.value
    ? todos.value.filter((t) => !t.done)
    : todos.value
})

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false })
  newTodo.value = ''
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}
</script>

<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo">
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button>
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>

```

## 9. Lifecycle and Template Refs

DOM을 수동으로 조작해야 할 때가 있어요

- `beforeCreate`: Init Options API 전 호출, 데이터 초기화 x, **데이터 접근 불가**
- `created`: Init Options API 후 DOM에 마운트 되기 전 호출, **데이터 접근 가능**
- `beforeMount`: Vue 인스턴스가 DOM에 마운트되기 전 호출, 템플릿이 컴파일, 렌더링 되기 전, **DOM 요소 접근 불가**
- `mounted`: Vue 인스턴스가 DOM에 마운트된 후 호출, 템플릿이 DOM 요소로 렌더링 후 실행, **DOM 요소 접근 가능**
- `beforeUpdate`: 데이터 변경 DOM 업데이트 전에 호출, **변경 전 상태에 접근 가능**
- `updated`: 데이터 변경 DOM 업데이트 후에 호출, **이 때 상태 변경 시 무한루프 주의**
- `beforeDestroy`: Vue Instance 파괴 되기 전 호출, **데이터 접근 가능**
- `destroyed`: Vue Instance 파괴된 후 호출, **인스턴스 정리 작업 수행**

## 10. Watchers

상태 변화에 대응해 side effect를 수행할 때 사용해요

- DOM을 변경하거나, 비동기 작업 결과에 따라 다른 상태를 변경하는 경우

```vue
<script setup>
import { ref, watch } from 'vue'

const todoId = ref(1)
const todoData = ref(null)

async function fetchData() {
  todoData.value = null
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  todoData.value = await res.json()
}

fetchData()

watch(todoId, fetchData)
</script>

<template>
  <p>Todo id: {{ todoId }}</p>
  <button @click="todoId++">Fetch next todo</button>
  <p v-if="!todoData">Loading...</p>
  <pre v-else>{{ todoData }}</pre>
</template>

```

## 11. Components

`ChildeComp.vue` 를 정의

```vue
<template>
  <h2>A Child Component!</h2>
</template>
```

`App.vue`에서 가져오기

```vue
<script setup>
import ChildComp from './ChildComp.vue'
</script>

<template>
  <ChildComp />
</template>
```

## 12. Props

부모가 자식에게 값을 전달하고 싶을 때 사용

- 자식의 컴포넌트는 부모의 속성을 입력받아 적용 가능해요~

```vue
<script setup>
// props를 정의
const props = defineProps({
  msg: String
})
</script>

<template>
  <h2>{{ msg || 'No props passed yet' }}</h2>
</template>
```

`App.vue`에서 `<ChildComp :msg="greeting">`로 props 전달

```vue
<script setup>
import { ref } from 'vue'
import ChildComp from './ChildComp.vue'

const greeting = ref('Hello from parent')
</script>

<template>
  <!--자식으로 greeting 변수 전달 -->
  <ChildComp :msg="greeting" />
</template>
```

## 13. Emits

자식이 부모에게 값을 전달하고 싶을 때

- 부모 컴포넌트는 자식의 에밋을 입력받아 적용 가능해요~

emit 선언하기

```vue
<script setup>
const emit = defineEmits(['myResponse'])

emit('myResponse', 'hello from child')
</script>

<template>
  <h2>Child component</h2>
</template>
```

`App.vue`에서 `@` 옵션으로 Emits 가져오기

```vue
<script setup>
import { ref } from 'vue'
import ChildComp from './ChildComp.vue'

const childMsg = ref('No child msg yet')
</script>

<template>
  <!-- @로 emit 데이터 가져오기 -->
  <ChildComp @myResponse="(msg) => childMsg = msg" />
  <p>{{ childMsg }}</p>
</template>

```

## 14. Slots

템플릿 조각을 자식에게 전달할 때

- `<slot>`태그는 부모로부터 물려 받으면 그 안의 데이터들은 부모껄로 대체

`ChildComp.vue`에서 정의

```vue
<template>
  <!-- slot 정의 -->
  <slot>Fallback content</slot>
</template>

```

`App.vue`에서 msg 가져오기

```vue
<script setup>
import { ref } from 'vue'
import ChildComp from './ChildComp.vue'

const msg = ref('from parent')
</script>

<template>
  <!-- 자식에게 템플릿 조각 전달 -->
  <ChildComp>Message: {{ msg }}</ChildComp>
</template>

```
