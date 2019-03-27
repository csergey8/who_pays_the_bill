new Vue({
  el: "#app",
  data: {
    state: true,
    inputName: '',
    names: [],
    showError: false,
    result: ''
  },
  methods: {
    addNameToList() {
      if(this.validate(this.inputName)) {
        this.names.push(this.inputName);
        console.log('added')
        this.inputName = '';
        this.showError = false;
      } else {
        this.showError = true;
      }
    },
    validate(value) {
      if(value !== '') {
        return true
      } else {
        return false
      }
    },
    showResult() {
      let rand = this.names[Math.floor(Math.random() * this.names.length)];
      this.result = rand;
      this.state = false;
    },
    resetApp() {
      this.state = true;
      this.names = [];
      result: '';
    },
    removeName(i) {
      this.names.splice(i, 1);
    }
  }
})