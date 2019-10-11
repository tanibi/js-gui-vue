const nameLenth = (x) => { return x }

const nameLenth = new Vue({
  el: '#adder',
  data: {
    name: '',
  },
  computed: {
    result: function () {
      return `${this.guest}, your name length is ${nameLenth(i)}.`
    }
  }

})