webpackJsonp([1],{NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("7+uW"),a={name:"app",data:function(){return{LOREM:"Click me to edit",NONE:"",columns:["Click me to edit","Demo column 2","Demo column 3","URL"],rows:[["col1 data1","col2 data1","col3 data1","https://www.google.com"],["col1 data2","col2 data2","col3 data2","https://www.yahoo.com"]]}},methods:{refresh:function(){this.$forceUpdate()},update_col:function(t,e){this.columns[e]=t,this.refresh()},update_row:function(t,e,o){this.rows[e][o]=t,this.refresh()},add_col:function(t){this.columns.splice(t,0,this.LOREM);for(var e=0;e<this.rows.length;e++){this.rows[e].splice(t,0,this.NONE)}this.refresh()},delete_col:function(t){if(!(arguments.length>1&&void 0!==arguments[1]&&arguments[1])&&!confirm("Are you sure you want to delete this column?"))return;this.columns.splice(t,1);for(var e=0;e<this.rows.length;e++){this.rows[e].splice(t,1)}this.refresh()},add_row:function(t){this.rows.splice(t,0,new Array(this.columns.length));for(var e=0;e<this.columns.length;e++)this.rows[t][e]=this.NONE;this.refresh()},delete_row:function(t){if(!(arguments.length>1&&void 0!==arguments[1]&&arguments[1])&&!confirm("Are you sure you want to delete this row?"))return;this.rows.splice(t,1),this.refresh()},delete_all_rows:function(){if(confirm("Are you sure you want to delete all rows?")){for(var t=this.rows.length,e=0;e<t;e++)this.delete_row(0,!0);this.refresh()}},delete_all_cols:function(){if(confirm("Are you sure you want to delete all columns?")){for(var t=this.columns.length,e=0;e<t;e++)this.delete_col(0,!0);this.refresh()}},move_col_to_left:function(t){if(0!=t){var e=this.columns[t-1];this.columns[t-1]=this.columns[t],this.columns[t]=e;for(var o=0;o<this.rows.length;o++)e=this.rows[o][t-1],this.rows[o][t-1]=this.rows[o][t],this.rows[o][t]=e;this.refresh()}},move_col_to_right:function(t){if(t!=this.columns.length-1){var e=this.columns[t+1];this.columns[t+1]=this.columns[t],this.columns[t]=e;for(var o=0;o<this.rows.length;o++)e=this.rows[o][t+1],this.rows[o][t+1]=this.rows[o][t],this.rows[o][t]=e;this.refresh()}},move_row_up:function(t){if(0!=t){var e=this.rows[t-1];this.rows[t-1]=this.rows[t],this.rows[t]=e,this.refresh()}},move_row_down:function(t){if(t!=this.rows.length-1){var e=this.rows[t+1];this.rows[t+1]=this.rows[t],this.rows[t]=e,this.refresh()}}}},n={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"datatables-admin"}},[o("h1",[t._v("Datatables admin")]),t._v(" "),o("table",{attrs:{id:"editor"}},[o("thead",[o("tr",[t._l(t.columns,function(e,s){return o("th",{key:s},[o("i",{staticClass:"fas fa-long-arrow-alt-left fa-2x dta-btn move-col-left",attrs:{title:"Move column to left"},on:{click:function(e){t.move_col_to_left(s)}}}),t._v(" "),o("i",{staticClass:"fas fa-long-arrow-alt-right fa-2x dta-btn move-col-right",attrs:{title:"Move column to right"},on:{click:function(e){t.move_col_to_right(s)}}}),t._v(" "),o("i",{staticClass:"fas fa-plus fa-2x dta-btn add-col",attrs:{title:"Add a column after this one"},on:{click:function(e){t.add_col(s+1)}}}),t._v(" "),o("i",{staticClass:"fas fa-times fa-2x dta-btn delete-col",attrs:{title:"Delete this column"},on:{click:function(e){t.delete_col(s)}}}),t._v(" "),o("br"),t._v(" "),o("editable",{attrs:{content:t.columns[s]},on:{update:function(e){t.update_col(e,s)}}})],1)}),t._v(" "),o("th",[o("i",{staticClass:"fas fa-plus fa-2x dta-btn add-col",attrs:{title:"Add a column"},on:{click:function(e){t.add_col(0)}}}),t._v(" "),o("i",{staticClass:"fas fa-plus fa-2x dta-btn add-row",attrs:{title:"Add a row"},on:{click:function(e){t.add_row(0)}}}),t._v(" "),o("i",{staticClass:"fas fa-times fa-2x dta-btn delete-all-cols",attrs:{title:"Delete all columns"},on:{click:t.delete_all_cols}}),t._v(" "),o("i",{staticClass:"fas fa-times fa-2x dta-btn delete-all-rows",attrs:{title:"Delete all rows"},on:{click:t.delete_all_rows}})])],2)]),t._v(" "),o("tbody",t._l(t.rows,function(e,s){return o("tr",{key:s},[t._l(t.columns,function(e,a){return o("td",{key:a},[o("editable",{attrs:{content:t.rows[s][a]},on:{update:function(e){t.update_row(e,s,a)}}})],1)}),o("td",[o("i",{staticClass:"fas fa-long-arrow-alt-up fa-2x dta-btn move-row-up",attrs:{title:"Move row up"},on:{click:function(e){t.move_row_up(s)}}}),t._v(" "),o("i",{staticClass:"fas fa-long-arrow-alt-down fa-2x dta-btn move-row-down",attrs:{title:"Move row down"},on:{click:function(e){t.move_row_down(s)}}}),t._v(" "),o("i",{staticClass:"fas fa-plus fa-2x dta-btn add-row",attrs:{title:"Add a row under this one"},on:{click:function(e){t.add_row(s+1)}}}),t._v(" "),o("i",{staticClass:"fas fa-times fa-2x dta-btn delete-row",attrs:{title:"Delete this row"},on:{click:function(e){t.delete_row(s)}}})])],2)}))]),t._v(" "),o("table-preview")],1)},staticRenderFns:[]};var r=o("VU/8")(a,n,!1,function(t){o("Nf0i")},null,null).exports;s.a.config.productionTip=!1,s.a.component("editable",{template:'\n    <div contenteditable="true" @blur="emitChange">\n      {{ content }}\n    </div>\n  ',props:["content"],methods:{emitChange:function(t){this.$emit("update",t.target.textContent)}}}),s.a.component("table-preview",{template:'\n    <div class="table-preview-container">\n      <button class=\'render-table\' v-on:click="render_table">Preview table</button>\n      <table class="table-render-preview"></table>\n    </div>\n  ',props:["content"],methods:{render_table:function(){var t=this.$parent.columns,e=this.$parent.rows,o=document.querySelector(".table-render-preview");$.fn.DataTable.isDataTable(".table-render-preview")&&$(".table-render-preview").DataTable().clear().destroy();var s=document.createElement("table");s.className="table-render-preview",s.innerHTML=function(t,e){for(var o,s="<table border=1><thead><tr>",a=0;a<t.length;a++)s+="<th>"+t[a]+"</th>";for(s+="</thead><tbody>",a=0;a<e.length;a++){s+="<tr>";for(var n=0;n<e[a].length;n++)"URL"==t[n]?s+="<td>"+(void 0!==(o=e[a][n])?"<a href='"+o+"' target='_blank' title="+o+">Link<span style='display:none !important'>"+o+"</span></a>":"N/A")+"</td>":s+="<td>"+e[a][n]+"</td>";s+="</tr>"}return s+="</tbody></table>"}(t,e),o.parentNode.replaceChild(s,o),$(".table-render-preview").dataTable({destroy:!0,aaSorting:[]})}}}),new s.a({el:"#datatables-admin",template:"<App/>",components:{App:r}})},Nf0i:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e2a7f94d80ad592dfb30.js.map