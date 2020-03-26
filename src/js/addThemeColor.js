export function addThemeColor() {
    const colorTheme = '#f6f8f8ff';
    localStorage.setItem('colorTheme', JSON.stringify({
        colorTheme,
    }));
    const btnX = document.getElementById('parent');
    btnX.addEventListener('change', themeColorPicker);
}

function themeColorPicker(e) {
    const theme = document.getElementById('bg-color');
    console.log(e.target.value);
    const colorThemePicker = e.target.value;
    theme.style.backgroundColor = colorThemePicker;
    localStorage.setItem('colorTheme', JSON.stringify({
        colorThemePicker,
    }));
}
