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

var todoApp = new Vue({
  el: '#todoApp',
  data: {
    title: "Welcome to Vue.js",
    fontStyle: {
      fontSize: "20px",
    },
    todo: "",
    todos: []
  },
  methods: {
    addTodo: function(){
      this.todos.push({
        id: this.todos.length,
        name: this.todo,
        doing: false
      })
      this.todo = ""
    },
    begin: function(todo){
      todo.doing = !todo.doing;
    }
  }
})

var ISSUES = "https://api.github.com/repos/[R]/issues?state=open"

var issueView = new Vue({
  el: "#issues",
  data: {
  	repository: "vuejs/vue",
    searchText: "",
    issues: []
  },
  created: function () {
    this.fetchData()
  },
  watch: {
    repository: "fetchData"
  },
  filters: {
  	formatDate: function (v) {
      return v.replace(/T|Z/g, ' ')
    }
  },
  computed: {
  	hasIssue: function(){
    	return this.issues.length > 0 ? true : false;
    }
  },
  methods: {
    fetchData: function () {
      var xhr = new XMLHttpRequest();
      var self = this;
      xhr.open("GET", ISSUES.replace("[R]", this.repository));
      xhr.onload = function () {
        self.issues = JSON.parse(xhr.responseText);
      }
      xhr.send()
    }
  }
})

Vue.component("todo-template", {
  props: ["t"],
  data: function(){
    return {
      doing: false
    }
  },
  template: "#todo-template",
  methods: {
    begin: function () {
      this.doing = !this.doing;
      this.$emit("todochanged", this.doing);
    }
  }
});

var todoApp2 = new Vue({
  el: '#todoApp2',
  data: {
    todo: "",
    todos: [],
    doings: 0
  },
  methods: {
    addTodo: function() {
      this.todos.push({
        name: this.todo,
        done: false
      })
      this.todo = ""
    },
    count: function(doing){
      this.doings += doing ? 1 : -1;
    }
  }
})
