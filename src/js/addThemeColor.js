import Picker from 'vanilla-picker';

export function addThemeColor() {
    const colorTheme = '#f6f8f8ff';
    const colorThemeArr = [];
    const btnX = document.querySelector('#parent');
    const theme = document.getElementById('bg-color');
    btnX.addEventListener('click', (event) => {
        console.log(event.target.innerText);
        if (event.target.innerText === 'Theme color') {
            const pickerTheme = new Picker(theme);
            pickerTheme.onChange = function (color) {
                const colorThemePicker = color.rgbaString;
                theme.style.backgroundColor = colorThemePicker;
                colorThemeArr.push(colorTheme);
                localStorage.setItem('colorTheme', JSON.stringify({
                    colorThemePicker,
                }));
            };
        }
        btnX.removeEventListener('click', (event), true);
    }, true);
}
