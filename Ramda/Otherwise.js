const R = require('ramda')

const failedFetch = id => Promise.reject('bad ID');
const useDefault = () => ({ firstName: "Bob", lastName: "LobLaw" });

const recoverFromFailure = R.pipe(
  failedFetch,
  R.otherwise(useDefault),
  R.andThen(R.pick(['firstName', 'lastName']))
)

recoverFromFailure(12345).then(console.log) //{ firstName: 'Bob', lastName: 'LobLaw' }