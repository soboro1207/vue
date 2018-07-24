// まずは手始めに
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
//メッセージ出せる
var app2 = new Vue({
  el:'#app-2',
  data:{
    message: 'You loaded this page on' + new Date().toLocaleString()
  }
})
//条件分岐
var app3 = new Vue({
  el: '#app-3',
  data:{
    seen:true
  }
})
//配列
var app4 = new Vue({
  el:'#app-4',
  data:{
    todos:[
      {text: '配列表示もちゃちゃっとできます'},
      {text: '左の数字は自動で割り振ってくれる'},
      {text: 'Lean JavaScript'},
      {text: 'Lean Vue'},
      {text: 'Build something awesome'}
    ]
  }
})
//直感的にDOM操作、考えるな書け
var app5 = new Vue({
  el:'#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function(){
      this.message = this.message.split('').reverse().join('')
    }
  }
})
//最近のフレームワークではおなじみの双方向バインディング。マジで便利
var app6 = new Vue({
  el:'#app-6',
  data: {
    message: 'Hello Vue!'
  }
})
//todo-itemという名の新しいコンポーネントを定義
Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})
