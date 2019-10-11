const name = (x) => { return x; };

const nameLength = new Vue({
  el: '#nameLength',
  data: {
    name: 'Lily',
  },
  computed: {
    result: function () {
        const nLength = parseInt((this.name).length);

      return `${this.name}, your name length is ${name(nLength)}.`;
    }
  }

})