import Picker from 'vanilla-picker';

export function taskColor() {
    const btnTaskColor = document.querySelector('#taskColor');
    // btnTaskColor.addEventListener('click', (event) => {
    console.log('Hello!');
    const pickerTask = new Picker(btnTaskColor);
    pickerTask.onClose = function (color) {
        const taskColor = color.rgbaString;
        console.log(taskColor);
    };
    //     btnTaskColor.removeEventListener('click', (event), true);
    // }, true);

    // const colorTaskArr = [];
    // if (taskColor !== null) {
    //     for (let i = 0; i < currentTasks.children.length; i++) {
    //         colorTaskArr.push(colorTask);
    //     }

    //     localStorage.setItem('colorThemeArr', JSON.stringify({
    //         taskColor,
    //     }));
    // }
}
