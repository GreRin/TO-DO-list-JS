export function addThemeColor() {
    let colorThemePicker;

    if (localStorage.getItem('colorTheme')) {
        const colorData = JSON.parse(localStorage.getItem('colorTheme'));
        const colorTheme = document.getElementById('bg-color');
        colorTheme.style.backgroundColor = colorData.colorThemePicker;
    } else { colorThemePicker = '#f6f8f8ff'; }

    const btnX = document.getElementById('parent');
    btnX.addEventListener('change', (e) => {
        const theme = document.getElementById('bg-color');
        colorThemePicker = e.target.value;
        theme.style.backgroundColor = colorThemePicker;
        localStorage.setItem('colorTheme', JSON.stringify({
            colorThemePicker,
        }));
    });
}
