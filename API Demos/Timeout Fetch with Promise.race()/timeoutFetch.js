const btn = document.getElementById("btn");
const msInput = document.getElementById("ms");
const out = document.getElementById("out");

// Create a promise that rejects after X ms (our timeout)'
function timeout(ms){
    return new Promise((_ , reject) => {
        setTimeout(() => reject(new Error(`Time out after ${ms}ms`)), ms);
    });
}

async function fetchWithTimeout(url, ms){
    const res = await Promise.race([fetch(url), timeout(ms)]); //whichever settles first wins

    // If fetch wins, we still need to check HTTP status
    if(!res.ok) throw new Error ("Server responded with error.");
    return res.json();
}
btn.addEventListener("click", async() => {
    btn.disabled = true;
    out.textContent = "Loading...";
    const ms = Number(msInput.value);

    try{
        const data = await fetchWithTimeout("https://jsonplaceholder.typicode.com/posts/1", ms);
        out.textContent = JSON.stringify(data, null, 2);
    }catch(e){
         out.textContent = `❌ ${e.message}`;
    }
    finally{
        btn.disabled = false;
    }
});
