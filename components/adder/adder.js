const add = (x, y) => { return x + y }

const adder = new Vue({
  el: '#adder',
  data: {
    guest: 'Emmett',
    firstNumber: 5,
    secondNumber: 3
  },
  computed: {
    result: function () {
      const i = parseInt(this.firstNumber)
      const j = parseInt(this.secondNumber)
      return `${this.guest}, your sum is ${add(i, j)}.`
    }
  }

})