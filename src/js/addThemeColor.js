import Picker from 'vanilla-picker';

export function addThemeColor() {
    const btn = document.getElementById('parent');
    btn.addEventListener('click', (event) => {

        const parent = document.getElementById('bg-color');
        const picker = new Picker(parent);
        picker.onChange = function (color) {
            parent.style.background = color.rgbaString;
        };
        btn.removeEventListener('click', (event), true);
    }, true);
}
