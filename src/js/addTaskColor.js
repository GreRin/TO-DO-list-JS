import Picker from 'vanilla-picker';

export function addTaskColor() {
    const colorTask = '#f6f8f8ff';
    const colorTaskArr = [];
    const btnTaskColor = document.getElementById('taskColor');
    btnTaskColor.addEventListener('click', (event) => {
        const pickerTask = new Picker(btnTaskColor);
        pickerTask.onClose = function (color) {
            const colorTaskPicker = color.rgbaString;
            colorTaskArr.push(colorTask);
            localStorage.setItem('colorTask', JSON.stringify({
                colorTaskPicker,
            }));
        };
    });
}
