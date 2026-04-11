(function () {
    var homePage = document.querySelector('.home-page');
    var toggleButton = document.querySelector('.home-theme-toggle-button');
    var storageKey = 'home-theme';

    if (!homePage || !toggleButton) {
        return;
    }

    function getStoredTheme() {
        try {
            var rawValue = localStorage.getItem(storageKey);
            return rawValue === 'dark' || rawValue === 'light' ? rawValue : 'light';
        } catch (error) {
            return 'light';
        }
    }

    function saveTheme(theme) {
        try {
            localStorage.setItem(storageKey, theme);
        } catch (error) {
            // Якщо localStorage недоступний, тема все одно працює в поточній сесії.
        }
    }

    function applyTheme(theme) {
        var nextTheme = theme === 'dark' ? 'dark' : 'light';

        homePage.setAttribute('data-home-theme', nextTheme);
        toggleButton.setAttribute('aria-pressed', nextTheme === 'dark' ? 'true' : 'false');
        toggleButton.setAttribute(
            'aria-label',
            nextTheme === 'dark' ? 'Увімкнути світлу тему' : 'Увімкнути темну тему'
        );
    }

    var currentTheme = getStoredTheme();
    applyTheme(currentTheme);

    toggleButton.addEventListener('click', function () {
        currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(currentTheme);
        saveTheme(currentTheme);
    });
}());