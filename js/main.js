new Vue({
/*基本的な構成
* なんとなくこんな形になる
*/
//1.mountする要素
//アプリケーションを紐付ける要素のセレクタ
  el: '#app',
//2.アプリケーションで使用するデータ
  data: {
    list: [],
    current: '',
    topics: [
      { value: 'vue', name: 'Vue.js' },
      { value: 'jQuery', name: 'jQuery' }
    ]
  },
//3.算出プロパティ
watch: {
  current: function(value){  //監視するデータ: function(新しい値、古い値)
    axios.get('https://api.github.com/search/repositories',{
      params: { q: 'topic:' + value }
    }).then(function(response){
      this.list = response.data.items
    }.bind(this))
  }
},
  // computed: {
  //   computedMessage: function(){
  //     return this.message + '!'
  //   }
  // },
//4.ライフサイクルフック
/*Vue.jsのおはようからおやすみまでの一定のサイクルを表すもの
* あらかじめ登録した処理をVueインスタンスの特定のタイミングで自動的に呼び出す。
* こうした処理を割り込ませる仕組みのことをフックと呼ぶ
*/
  //created: function(){
    //データの監視、リアクティブまわりの初期化が終わった後に呼び出される
    //このインスタンスの作成＆初期化が終わったらすぐ以下の処理を行う
    //使用できるメソッドがあらかじめ決められている

    //}
//5.アプリケーションで使用するメソッド
    /*myMethod: function(){}*/
})
