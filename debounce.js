function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
}

function searchAPI() {
  console.log("API Call");
}

const debouncedSearch = debounce(searchAPI, 500);
