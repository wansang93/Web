# Vue Tutorial

- 2022.11.21 ~

Tutorial 링크 -> [https://vuejs.org/tutorial](https://vuejs.org/tutorial)

## 2. Declarative Rendering `{{ data }}`

데이터를 DOM에 렌더링 가능

```html
<script setup>
import { ref } from 'vue';

// 1. 이렇게 데이터를 JS에 정의하고
const data = "Test";
const data2 = "0";

</script>

<template>
  <!-- 2. data 랜더링 가능 -->
  <h1>{{data}}</h1>
  <h1>{{data2}}</h1>
</template>

```

## 3. Attribute Bindings `v-bind:`, `:`

속성에 렌더링하려면 `v-bind:` 쓰세요~

```html
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

```html
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

```html
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

```html
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

<style>
.myClass {
  color: red;
}
</style>

```

## 7. List  Rendering

for문 사용법

```html
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

TODO: Computed Property 왜써요?

```html
<script setup>
import { computed } from '@vue/reactivity';
import { ref } from 'vue'

let id = 0

const newTodo = ref('')
const hideCompleted =ref(false)
const todos = ref([
  { id: id++, text: 'Learn JS', done: true},
  { id: id++, text: 'Learn HTML', done: true},
  { id: id++, text: 'Learn Vue', done: false},
])

const filteredTodos = computed(() => {
  return hideCompleted.value
    ? todos.value.filter((t) => !t.done)
    : todos.value
})

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value })
  newTodo.value = ''
}

function removeTodo(todo) {
  todos.value = todos.value.filter((x) => x !== todo)
}

function myFilterTodos() {
  return hideCompleted.value
    ? mytodos.value = todos.value.filter((t) => !t.done)
    : mytodos.value = todos.value
}
</script>

<template>
<form @submit.prevent="addTodo">
  <input v-model="newTodo">
  <button>Add Todo</button>
</form>
  <ul>
    <li v-for="todo in filteredTodos" :id="todo.id">
    <input type="checkbox" v-model="todo.done">
    <span :class="{ done: todo.done }">{{ todo.text }}</span>
    <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
<button @click="hideCompleted = !hideCompleted">{{hideCompleted ? 'Show all' : 'Hide completed'}}</button>
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>

```

## 9. Lifecycle and Template Refs

## 10. Watchers

## 11. Components

## 12. Props

## 13. Emits

## 14. Slots
