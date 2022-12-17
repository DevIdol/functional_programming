function processPayment() {
  console.log("Process payment");
}

const once = (fn) => {
  let done = false;
  return () => done ? undefined : ((done = true), fn.apply(this, arguments))
}

let paymentOnce = once(processPayment)
paymentOnce(); // Can call one times
