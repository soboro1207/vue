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
//上のコンポーネントの内容
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

/*
* インスタンス
* すべてのVueアプリケーションはここから始まる
*/

//データオブジェクト
var data = {a : 1}
//インスタンス生成
var vm = new Vue({
  //vmはViewModelの略、よく使うらしい。いあゆるデファクトスタンダード。
  el: '#example',
  data:data
})

//インスタンスのプロパティを取得すると
//元のデータからそのプロパティが返される
vm.a == data.a // これはtrue

//プロパティへの代入は、元のデータにも反映される
vm.a = 2
data.a // これは2となる

//・・・・そして逆もまた然り、です。
data.a = 3
vm.a //もちろん、3です。

//dataの他にも便利なものはがあります
//それはユーザ定義のプロパティと区別するために頭に＄が付けられる
vm.$data === data //true
vm.$el === document.getElementById('example') //true

//$watchはインスタンスメソッド
vm.$watch('a', function(newValue, oldValue){
  //このコールバックは'vm.a'の値が変わるときに呼ばれます。
  //将来的にはAPIリファレンスみないといけないらしい
})

//インスタンスライフサイクルフック
//createフックはインスタンスが生成された後にコードを実行したいときに使われる
new Vue({
  data:{
    a:1
  },
  created: function(){
    //'this'はどこでも使われています
    console.log('a is: ' + this.a)
  }
})// "a is: 1" の関係が完成する

//この他にもmounted,updated,destroyedがなどある
