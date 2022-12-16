let counter;

// imperative version
// =====================
// side effect
// mutable
function getCounter() {
  return counter++;
}

//functional version
//===================
//pure function
//immutable
function next(counter) {
  return counter + 1;
}