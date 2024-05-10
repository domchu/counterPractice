const state = {
  count: 0,
};
const handleIncrement = () => {
  state.count++;
};

const render = () => {
  document.querySelector("h1").innerHTML = state.count;
};

const handlePlusBtnClick = () => {
  handleIncrement();
  render();
};

document.querySelector("#plus").addEventListener("click", handlePlusBtnClick);
