let modalContainer;
window.onload = function () {
    modalContainer = document.getElementsByClassName('modal-container')[0];
}

function showModal(modalId) {
    const modalToShow = document.getElementById(modalId);
    modalContainer.classList.remove('non-active');
    modalToShow.classList.remove('hidden');
}

function closeModal(modalElement) {
    modalContainer.classList.add('non-active');
    modalElement.classList.add('hidden');
}

function handleModalClick(event) {
    const modal = document.querySelector('.modal-container div:not(.hidden)');
    const modalPos = modal.getBoundingClientRect();

    // si el evento click se adentro del modal, no salgo.
    if(
        event.clientX > modalPos.left &&
        event.clientX < modalPos.right &&
        event.clientY > modalPos.top &&
        event.clientY < modalPos.bottom
    ) return;

    closeModal(modal);
}
