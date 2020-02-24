import { currentTime } from './timeFunc';

export function editTask() {
    const listItem = this.parentNode.parentNode.parentNode;
    const contextParent = listItem.firstElementChild;
    const context = listItem.querySelector('p');
    const contextInput = listItem.querySelector('input');
    const currentDate = listItem.firstElementChild.firstElementChild.lastElementChild.lastElementChild;
    currentDate.innerText = currentTime();

    context.classList.add('hidden');
    contextInput.classList.remove('hidden');
    contextInput.addEventListener('keydown', (event) => {
        if (event.keyCode === 13) {
            const text = contextInput.value;
            contextInput.classList.add('hidden');
            context.innerText = text;
            context.classList.remove('hidden');
        }
    });
}
