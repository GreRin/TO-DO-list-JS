function pickerTheme() {
    const colorThemeArr = [];
    const theme = document.getElementById('bg-color');
    const colorThemePicker = document.getElementById('parent').value;
    theme.style.backgroundColor = colorThemePicker;
    colorThemeArr.push(colorThemePicker);
    localStorage.setItem('colorTheme', JSON.stringify({
        colorThemePicker,
    }));
}

export function addThemeColor() {
    const btnX = document.getElementById('parent');
    btnX.addEventListener('change', pickerTheme);
}
