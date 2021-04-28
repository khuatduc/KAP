//khuat van duc
var vueInstance= new Vue({
  el: '#app',
  data: {
      title:"bai viet1",
      url:"https://code.visualstudio.com/docs/?dv=win",
      price:999000
  },
  methods:{
      fotmatPrice(){   
     return (new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(this.price))
      }
  }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: false
    }
  })
//v-for
  var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  })
  //V-ON
  var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue.js!'
    },
    methods: {
      reverse: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })
  //v-model
  var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hello Vue!'
    }
  })
// component
  Vue.component('todo-item', {
    template: '<li>This is a todo</li>'
  })
  

  
