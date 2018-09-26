Vue.component('editable', {
  template: `
    <div contenteditable="true" @blur="emitChange">
      {{ content }}
    </div>
  `,
  props: ['content'],
  methods: {
    emitChange(ev) {
      this.$emit('update', ev.target.textContent)
    }
  }
})

new Vue({
  el: '#datatables-admin',
  data: {
    test_editable: 'Click me to edit',
    columns: ['Demo column 1', 'Demo column 2', 'Demo column 3', 'Demo column 4'],
    rows: [
      {
        'Demo column 1': 'some data here',
        'Demo column 2': 'test',
        'Demo column 3': 'test 2',
        'Demo column 4': 'something'
      },

      {
        'Demo column 1': 'second row',
        'Demo column 2': 'test',
        'Demo column 3': 'test 2',
        'Demo column 4': 'something'
      }
    ]
  },
  methods: {
    update_editable (content) {
      this.test_editable = content
    }
  }
})
