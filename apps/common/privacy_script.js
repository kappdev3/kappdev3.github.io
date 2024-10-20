const toggleButton = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

document.documentElement.setAttribute('data-theme', currentTheme);
toggleButton.textContent = currentTheme === "dark" ? "Light" : "Dark";

toggleButton.addEventListener('click', () => {
    const theme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    toggleButton.textContent = theme === "dark" ? "Light" : "Dark";
    localStorage.setItem('theme', theme);
});
