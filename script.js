(function () {
    var themeTarget = document.body;
    var toggleButton = document.querySelector('.home-theme-toggle-button');
    var storageKey = 'home-theme';

    if (!themeTarget || !themeTarget.hasAttribute('data-home-theme') || !toggleButton) {
        return;
    }

    function normalizeTheme(value) {
        return value === 'dark' || value === 'light' ? value : 'light';
    }

    function getStoredTheme() {
        try {
            var rawValue = localStorage.getItem(storageKey);
            return normalizeTheme(rawValue);
        } catch (error) {
            return 'light';
        }
    }

    function saveTheme(theme) {
        var safeTheme = normalizeTheme(theme);

        try {
            localStorage.setItem(storageKey, safeTheme);
        } catch (error) {
            // Якщо localStorage недоступний, тема все одно працює в поточній сесії.
        }

        return safeTheme;
    }

    function applyTheme(theme) {
        var nextTheme = normalizeTheme(theme);

        themeTarget.setAttribute('data-home-theme', nextTheme);
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
        currentTheme = saveTheme(currentTheme);
    });
}());