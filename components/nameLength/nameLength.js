const nameLength = (x) => {
    let  length = 0 
     for(let i =0 ; i<=x;i++){
       length = length + i 
     }
     return length 
   }
   
   const nameLength = new Vue({
     el: '#nameLength',
     data: {
       length1: 6,
       
     },
     computed: {
       nameLength: function () {
         const i = parseInt(this.length1)
         return `The length is ${nameLength(i)}.`
       }
     }
   })