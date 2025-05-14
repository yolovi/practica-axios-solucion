const API_URL = "https://jsonplaceholder.typicode.com/todos"
// GET REQUEST

const getTodos = async () => {
  try {
    const respuesta = await axios.get(API_URL)
    console.log(respuesta)
    // console.log(respuesta.data)
    showOutput(respuesta)
  } catch (error) {
    console.error(err)
  }
}

// POST REQUEST
const addTodo = async () => {
  try {
    const respuesta = await axios.post(API_URL, {
      title: "hacer excelente readme",
      completed: false
    })
    showOutput(respuesta)
  } catch (error) {
    console.error(err)
  }
}

// PUT/PATCH REQUEST
const updateTodo = async () => {
  try {
    const respuesta = await axios.put(API_URL + "/13", {
      title: "hacer excelente readme",
      completed: true
    })
    showOutput(respuesta)
  } catch (error) {
    console.error(err)
  }
}

// DELETE REQUEST
const removeTodo = async () => {
  try {
    const res = await axios.delete(`${API_URL}/3`)
    console.log("Eliminado con éxito");
    showOutput(res)
  } catch (error) {
    console.error(err)
  }
}

// Show output in browser
const showOutput = res => {
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