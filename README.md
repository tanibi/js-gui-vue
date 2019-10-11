# js-gui-vue

> JavaScript is a great language for writing and testing quick apps with user interaction.
>
> Vue.js is an easy addition that enables two-way data binding (immediate updates are easy and no more 'document.getElementById')

## Links

- [Demo](https://mprogers.github.io/js-gui-vue/)
- [Source](https://github.com/tanibi/name-length-calculator)

## Requirements

- A browser (e.g., Chrome)
- A text editor (e.g., VS Code or Notepad++, or Chrome)

## Benefits

- No downloads required - almost every computer already has a browser
- Built-in features for user input
- Easy-to-style with a CSS CDN link
- Easy-to-use Vue components with a Vue.js CDN link

## No Build Tools Required

- This example does not require any build tools...

## Converting an App to use Vue

1. Create a wrapper component and assign an id
2. For each data element, duplicate the 'id' attribute as a 'v-model' attribute
3. Remove any default values from the HTML input elements
4. If you used a button to trigger an update event, you can delete it. Vue will automatically update results as inputs change.
5. Covert output HTML elements to use {{identifier}} for the inner HTML. The 'id' attribute is not needed for updating the data and can be removed.

## Adding Vue from CDN

Add Vue.js with a script element pointing to the CDN source.

```HTML
  <!-- Before custom code, add Vue.js from https://cdnjs.com/libraries/vue -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js"></script>
```

## Specifying Vue Compoents

Then, remove any calculational event handlers, and instead, specify your Vue components. For each new Vue component, define:

1. el - short for HTML element for this component
2. data - the inputs, defined in your HTML with the 'v-model' attribute
3. computed - the outputs, placed in inner HTML with double curly braces

An example is shown below.

```JavaScript
// testable function
const add = (x, y) => { return x + y }

// new Vue component
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
```

## Resources

- [Bootstrap Material Design CDN](https://mdbootstrap.com/md-bootstrap-cdn/)
- [HTML Validator](https://validator.w3.org/)
- [JavaScript Standard Style Validator](https://standardjs.com/demo.html)
- [Vue.js JavaScript framework CDN](https://vuejs.org/v2/guide/installation.html) - small, incrementally-adoptable framework for JavaScript user interfaces

## Expanded Examples

### Digital Clock using Vue.js
- [Demo](https://nandinidoppalapudi.github.io/js-gui-vue/)
- [Source](https://github.com/nandinidoppalapudi/js-gui-vue)

### Vue Components for Multiplication and Division
- [Source](https://github.com/KaranamVijayKumar/js-gui-vue)
- [Demo](https://karanamvijaykumar.github.io/js-gui-vue/)




## See Also

- [More App Examples](https://profcase.github.io/web-apps-list/)
