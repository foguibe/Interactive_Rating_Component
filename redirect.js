// redirect.js

// Check if the page was loaded from a refresh
if (performance.navigation.type === 1) {
    // Redirect to index.html
    window.location.href = 'index.html';
}  