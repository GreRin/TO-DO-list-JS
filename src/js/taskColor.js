import Picker from 'vanilla-picker';

export function taskColor() {
    const btnTaskColor = document.querySelector('#taskColor');
    btnTaskColor.addEventListener('click', (event) => {
        console.log('Hello!');
        const pickerTask = new Picker(btnTaskColor);
        pickerTask.onClose = function (color) {
            const taskColor = color.rgbaString;
            console.log(taskColor);
        };
        btnTaskColor.removeEventListener('click', (event), true);
    }, true);
    return taskColor;
}
