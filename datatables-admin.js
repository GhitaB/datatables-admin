new Vue({
  el: '#datatables-admin',
  data: {
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
  }
})
