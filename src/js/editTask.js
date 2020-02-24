import { currentTime } from './timeFunc';

export function editTask() {
    const listItem = this.parentNode.parentNode.parentNode;
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
        contextInput.removeEventListener('keydown', (event), true);
    }, true);

    document.addEventListener('click', (event) => {
        if (event.target.tagName !== 'INPUT') {
            const text = contextInput.value;
            context.classList.remove('hidden');
            context.textContent = text;
            contextInput.classList.add('hidden');
        }
        document.removeEventListener('click', (event), true);
    }, true);
}
