const UI = {
    btnLoad: document.getElementById("btnLoad"),
    btnRetry: document.getElementById("btnRetry"),
    status: document.getElementById("status"),
    error: document.getElementById("error"),
    grid: document.getElementById("grid"),
    meta: document.getElementById("meta"),
    toast: document.getElementById("toast")
};
function showToast(message){
    UI.toast.textContent = message;
    UI.toast.style.display = "block";
    setTimeout(() => (UI.toast.style.display = "none"), 2200);
}

//Render Users To UI
function renderUsers(users){
    UI.grid.innerHTML = users.map((u) => `<div class="user">
          <div style="font-weight:700;">${u.name}</div>
          <div class="muted">@${u.username}</div>
          <div style="margin-top:8px;" class="muted">${u.email}</div>
        </div>
      `
).join("");
}

//// loading UI → fetch → render → error handling → cleanup
async function loadUsers(){
    UI.btnLoad.disabled = true;
    UI.btnRetry.disabled = true;
    UI.error.style.display = "none";
    UI.grid.innerHTML = "";
    UI.status.style.dispaly = "flex";
    UI.meta.textContent = "";

    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!res.ok) throw new Error("Server responded with an error.");
        const users = await res.json();
        renderUsers(users);
        UI.meta.textContent = `Loaded ${users.length.toLocaleString()} users`;
        showToast("✅ Loaded successfully")
    }catch(err){
        UI.error.textContent = `❌ Failed to load users: ${err.message}`;
        UI.error.style.display = "block";
        UI.btnRetry.disabled = false;
        showToast("❌ Load failed");
    }finally{
        UI.status.style.display = "none";
        UI.btnLoad.disabled = false;
    }
}
UI.btnLoad.addEventListener("click", loadUsers);
UI.btnRetry.addEventListener("click", loadUsers);