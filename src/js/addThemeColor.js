import Picker from 'vanilla-picker';

export function addThemeColor() {
    const btnX = document.querySelector('#parent');
    const theme = document.getElementById('bg-color');
    btnX.addEventListener('click', (event) => {
        console.log(event.target.innerText);
        if (event.target.innerText === 'Theme color') {
            const pickerTheme = new Picker(theme);
            pickerTheme.onChange = function (color) {
                const themeColor = color.rgbaString;
                theme.style.backgroundColor = themeColor;
                console.log(themeColor);
            };
        }
        btnX.removeEventListener('click', (event), true);
    }, true);
}
