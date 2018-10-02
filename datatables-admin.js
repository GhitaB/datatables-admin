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
});

Vue.component('table-preview', {
  template: `
    <div class="table-preview-container">
      <button v-on:click="render_table">Render table to preview (like in view mode)</button>
      <table class="table-render-preview"></table>
    </div>
  `,
  props: ['content'],
  methods: {
    render_table() {
      var columns = this.$parent.columns;
      var rows = this.$parent.rows;
      var el = event.srcElement;
      var parent = el.offsetParent;
      var table_placeholder = document.querySelector('.table-render-preview');

      function make_table_html(columns, rows) {
          var result = "<table border=1><thead><tr>";

          for(var i = 0; i < columns.length; i++) {
            result += "<th>" + columns[i] + "</th>";
          }

          result += "</thead><tbody>"
          for(var i = 0; i < rows.length; i++) {
            result += "<tr>";
            for(var j = 0; j < rows[i].length; j++) {
              result += "<td>" + rows[i][j] + "</td>";
            }
            result += "</tr>";
          }
          result += "</tbody></table>";

          return result;
      }

      var new_el = document.createElement("table");
      new_el.className = "table-render-preview";
      new_el.innerHTML = make_table_html(columns, rows);
      table_placeholder.parentNode.replaceChild(new_el, table_placeholder);
    }
  }
});

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

    delete_col: function(col_index, skip_confirm = false) {
      if(!skip_confirm) {
        var result = confirm("Are you sure you want to delete this column?");
        if(!result) {
          return;
        }
      }

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

    delete_row: function(row_index, skip_confirm = false) {
      if(!skip_confirm) {
        var result = confirm("Are you sure you want to delete this row?");
        if(!result) {
          return;
        }
      }

      this.rows.splice(row_index, 1);

      this.refresh();
    },

    delete_all_rows: function() {
      var result = confirm("Are you sure you want to delete all rows?");
      if(!result) {
        return;
      }

      var nr_rows = this.rows.length;
      for(var i = 0; i < nr_rows; i++) {
        this.delete_row(0, skip_confirm = true);
      }

      this.refresh();
    },

    delete_all_cols: function() {
      var result = confirm("Are you sure you want to delete all columns?");
      if(!result) {
        return;
      }

      var nr_cols = this.columns.length;
      for(var i = 0; i < nr_cols; i++) {
        this.delete_col(0, skip_confirm = true);
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

// TODO:
// On column move move the rows data, too.
// Fix bug on rows move with new content added.
