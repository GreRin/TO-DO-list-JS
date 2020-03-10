function pickerTheme(event) {
    let colorThemePicker = '#f6f8f8ff';
    localStorage.setItem('colorTheme', JSON.stringify({
        colorThemePicker,
    }));
    const colorThemeArr = [];
    const theme = document.getElementById('bg-color');
    colorThemePicker = event.target.value;
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
