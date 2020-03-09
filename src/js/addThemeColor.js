function pickerTheme(event) {
    const colorThemeArr = [];
    const theme = document.getElementById('bg-color');
    console.log(event.target.innerText);
    const colorThemePicker = document.getElementById('parent').value;
    console.log(colorThemePicker);
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
