const url = "https://jsonplaceholder.typicode.com/posts";

// GET REQUEST
function getTodos() {
  // console.log("GET");
  // aquí tu código
  axios
    .get(url)
    // .then((res) => console.log(res))
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
  // aquí tu código
}

// POST REQUEST
function addTodo() {
  console.log("POST");
  // aquí tu código
  axios
    .post(url, {
      title: "New Post",
      body: "Body title",
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}

// PUT REQUEST
function updateTodo() {
  console.log("PUT/PATCH");
  // aquí tu código
  axios
    .put(url + "/1", {
      title: "New Post",
      body: "Body Edited",
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}

// DELETE REQUEST
function removeTodo() {
  console.log("DELETE");
  // aquí tu código
  axios
    .delete(url + "/1")
    .then((res) => console.log(res, "usuario eliminado correctamente"))
    .catch((err) => console.error(err));
  // aquí tu código
}

// Show output in browser
//Nota: en este ejemplo usamos JSON.stringify para hacer rápido el ejercicio (normalmente usaremos un bucle para pintar datos)
function showOutput(res) {
  document.getElementById("res").innerHTML = `
      <div class="card card-body mb-4">
        <h5>Status: ${res.status}</h5>
      </div>
      <div class="card mt-3">
        <div class="card-header">
          Data
        </div>
        <div class="card-body">
          <pre>${JSON.stringify(res.data, null, 2)}</pre>
        </div>
      </div>
    `;
}

// Event listeners
document.getElementById("get").addEventListener("click", getTodos);
document.getElementById("post").addEventListener("click", addTodo);
document.getElementById("update").addEventListener("click", updateTodo);
document.getElementById("delete").addEventListener("click", removeTodo);

