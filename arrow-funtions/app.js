const fc = (datas) => {
  if (datas) {
    datas.map((x, i) => console.log(x, "index:", i));
  } else {
    const fakedatas = [-1, -2, -3, -4, -5];
    fakedatas.map((x, i) => console.log(x, "index:", i));
  }
};

fc([1, 2, 3, 4, 5]);
fc();
