const state = {
  count: 0,
};

const handleIncrement = () => {
  state.count++;
};
const handleDecrement = () => {
  state.count--;
};
const render = () => {
  document.querySelector("h1").innerHTML = state.count;
};

const handlePlusBtnClick = () => {
  handleIncrement();
  render();
};
const handleMinusBtnClick = () => {
  handleDecrement();
  render();
};

document.querySelector("#plus").addEventListener("click", handlePlusBtnClick);
document.querySelector("#minus").addEventListener("click", handleMinusBtnClick);
