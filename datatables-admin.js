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
    LOREM: "Click me to edit",
    NONE: "",
    columns: ['Click me to edit', 'Demo column 2', 'Demo column 3', 'Demo column 4'],
    rows: [
      ['col1 data1', 'col2 data1', 'col3 data1', 'col4 data1'],
      ['col1 data2', 'col2 data2', 'col3 data2', 'col4 data2'],
      ['col1 data3', 'col2 data3', 'col3 data3', 'col4 data3'],
    ],
  },
  methods: {
    refresh: function() {
      this.$forceUpdate();
    },

    update_col: function(content, col_index) {
      this.columns[col_index] = content;
      this.refresh();
    },

    update_row: function(content, row_index, col_index) {
      this.rows[row_index][col_index] = content;
      this.refresh();
    },

    add_col: function(col_index) {
      // Add a new column at given index
      this.columns.splice(col_index, 0, this.LOREM);
      for(var i = 0; i < this.rows.length; i++) {
        var row = this.rows[i];
        row.splice(col_index, 0, this.NONE);
      }
      this.refresh();
    },

    delete_col: function(col_index) {
      // Remove column
      this.columns.splice(col_index, 1);

      // Remove related items in rows
      for(var i = 0; i < this.rows.length; i++) {
        var row = this.rows[i];
        row.splice(col_index, 1);
      }

      this.refresh();
    },

    add_row: function(row_index) {
      // Add a new row at given index
      this.rows.splice(row_index, 0, new Array(this.columns.length));

      this.refresh();
    },

    delete_row: function(row_index) {
      this.rows.splice(row_index, 1);

      this.refresh();
    },

    delete_all_rows: function() {
      var nr_rows = this.rows.length;
      for(var i = 0; i < nr_rows; i++) {
        this.delete_row(0);
      }

      this.refresh();
    },

    delete_all_cols: function() {
      var nr_cols = this.columns.length;
      for(var i = 0; i < nr_cols; i++) {
        this.delete_col(0);
      }

      this.refresh();
    },

    move_col_to_left: function(col_index) {
      if(col_index == 0) {
        return;
      }
      var temp = this.columns[col_index - 1];
      this.columns[col_index - 1] = this.columns[col_index];
      this.columns[col_index] = temp;

      this.refresh();
    },

    move_col_to_right: function(col_index) {
      if(col_index == this.columns.length - 1) {
        return;
      }
      var temp = this.columns[col_index + 1];
      this.columns[col_index + 1] = this.columns[col_index];
      this.columns[col_index] = temp;

      this.refresh();
    },

    move_row_up: function(row_index) {
      if(row_index == 0) {
        return;
      }
      var temp = this.rows[row_index - 1];
      this.rows[row_index - 1] = this.rows[row_index];
      this.rows[row_index] = temp;

      this.refresh();
    },

    move_row_down: function(row_index) {
      if(row_index == this.rows.length - 1) {
        return;
      }
      var temp = this.rows[row_index + 1];
      this.rows[row_index + 1] = this.rows[row_index];
      this.rows[row_index] = temp;

      this.refresh();
    }
  }
});
