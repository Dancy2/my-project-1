// Function to toggle dark/light mode
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    document.getElementById('theme-light').style.display = isDarkMode ? 'inline-block' : 'none';
    document.getElementById('theme-dark').style.display = isDarkMode ? 'none' : 'inline-block';
}

// Add event listeners for theme toggle
document.getElementById('theme-light').addEventListener('click', toggleTheme);
document.getElementById('theme-dark').addEventListener('click', toggleTheme);
  