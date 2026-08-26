const input = document.getElementById("searchInput");
const resultsEl = document.getElementById("results");
const statusEl = document.getElementById("status");

let debounceTimer = null;
let currentController = null;

function renderUsers(users){
resultsEl.innerHTML = users.map((user) => `<div class="item">
          <strong>${user.name}</strong>
          <div>${user.email}</div>
        </div>`
    ).join("");      
}

// Core async search function
async function searchUsers(query){
    // Cancel any previous in-flight request
    if(currentController){

        currentController.abort();
    }

    // Create a new AbortController for this request
    currentController = new AbortController();
    statusEl.textContent = "Searching...";
    resultsEl.innerHTML = "";

    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users", {signal: currentController.signal});
        if(!response.ok){
            throw new Error("Server Error!!");
        }
        const users = await response.json();

        // Simple client-side filtering
        const filtered = users.filter((user) => user.name.toLowerCase().includes(query.toLowerCase()));

        renderUsers(filtered);
        statusEl.textContent = `Found ${filtered.length} result(s)`;
    }
    catch(error){
        if(error.name === "AbortError"){
            return;
        }

        statusEl.textContent = "Error  loading data";
    }
}

// Debounced input handler
input.addEventListener("input", () => {
    const query = input.value.trim();

    // Clear previous debounce timer
    clearTimeout(debounceTimer);

    if(!query){
        resultsEl.innerHTML = "";
        statusEl.textContent = "Idle";
        return;
    }

    // Debounce: wait 400ms after user stops typing
    debounceTimer = setTimeout(() => {
        searchUsers(query);
    }, 400);
});