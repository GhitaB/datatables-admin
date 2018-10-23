// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

const UNIQUE_KEY_PROP = '__unique_key_prop__'

const KEY_PREFIX = '__key_prefix__' + Date.now() + '_'

const generate_id = obj => {
  return KEY_PREFIX;
}

Vue.mixin({
  methods: { generate_id }  // https://github.com/vuejs/vue/issues/6235#issuecomment-318607296
})

Vue.config.productionTip = false

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
      <button class='render-table' v-on:click="render_table">Preview table</button>
      <table class="table-render-preview"></table>
    </div>
  `,
  props: ['content'],
  methods: {
    render_table() {
      var columns = this.$parent.columns;
      var rows = this.$parent.rows;
      var table_placeholder = document.querySelector('.table-render-preview');

      function make_table_html(columns, rows) {
        function render_link(url) {
          if(url !== undefined) {
            return "<a href='" + url +"' target='_blank' title=" + url + ">Link<span style='display:none !important'>" + url + "</span></a>";
          } else {
            return "N/A";
          }
        }

        var result = "<table border=1><thead><tr>";

        for(var i = 0; i < columns.length; i++) {
          result += "<th>" + columns[i] + "</th>";
        }

        result += "</thead><tbody>"
        for(var i = 0; i < rows.length; i++) {
          result += "<tr>";
          for(var j = 0; j < rows[i].length; j++) {
            if(columns[j] == "URL") {
              result += "<td>" +  render_link(rows[i][j]) + "</td>";
            } else {
              result += "<td>" + rows[i][j] + "</td>";
            }
          }
          result += "</tr>";
        }
        result += "</tbody></table>";

        return result;
      }

      if ($.fn.DataTable.isDataTable(".table-render-preview")) {
        $('.table-render-preview').DataTable().clear().destroy();
      }

      var new_el = document.createElement("table");
      new_el.className = "table-render-preview";
      new_el.innerHTML = make_table_html(columns, rows);
      table_placeholder.parentNode.replaceChild(new_el, table_placeholder);

      $('.table-render-preview').dataTable({
        "destroy": true,
        aaSorting: []
      });
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#datatables-admin',
  template: '<App/>',
  components: { App }
});
