async function get() {
  await fetch("https://jsonplaceholder.typicode.com/todo/1")
    .then((response) => {
      console.log(response.status);

      return response.json();
    })
    .then((result) => console.log(result));
}

get();
