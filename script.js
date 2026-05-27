//your JS code here. If required.
const text = document.querySelector("#text");
const delay = document.querySelector("#delay");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");

const promise1 = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      output.innerHTML = text.value;
      resolve();
    }, delay.value);
  });
  return "promise resolved";
};

btn.addEventListener("click", promise1);
