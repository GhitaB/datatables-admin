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
    LOREM: "Demo text",
    NONE: "",
    test_editable: 'Click me to edit',
    columns: ['Demo column 1', 'Demo column 2', 'Demo column 3', 'Demo column 4'],
    rows: [
      ['col1 data1', 'col2 data1', 'col3 data1', 'col4 data1'],
      ['col1 data2', 'col2 data2', 'col3 data2', 'col4 data2'],
      ['col1 data3', 'col2 data3', 'col3 data3', 'col4 data3'],
    ],
  },
  methods: {
    update_editable(content) {
      this.test_editable = content;
    },

    update_col(content, col_index) {
      this.columns[col_index] = content;
    },

    add_col: function (col_index) {
      // Add a new column at given index
      this.columns.splice(col_index, 0, this.LOREM);
      for (var i = 0; i < this.rows.length; i++) {
        var row = this.rows[i];
        row.splice(col_index, 0, this.NONE);
      }
    },

    delete_col: function (col_index) {
      // Remove column
      this.columns.splice(col_index, 1);

      // Remove related items in rows
      for (var i = 0; i < this.rows.length; i++) {
        var row = this.rows[i];
        row.splice(col_index, 1);
      }
    },

    add_row: function (row_index) {
      // Add a new row at given index
      this.rows.splice(row_index, 0, new Array(this.columns.length));
    },

    delete_row: function (row_index) {
      this.rows.splice(row_index, 1);
    }
  }
});
