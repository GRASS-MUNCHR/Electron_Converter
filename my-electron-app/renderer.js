document.getElementById("light-dark-toggle").addEventListener("click", async () => {
    const isDarkMode = await window.darkMode.toggle()
    document.getElementById("theme-source").innerHTML = isDarkMode ? "Dark" : "Light"
})

document.getElementById("sync-btn").addEventListener("click", async () => {
    await window.darkMode.system()
    document.getElementById("theme-source").innerHTML = "System"
})
