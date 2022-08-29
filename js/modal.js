(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector(newFunction()),
    backdrop: document.querySelector('[data-backdrop]'),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

function newFunction() {
  return "[data-modal-close]";
}

  function toggleModal() {
    document.body.classList.toggle('modal-open');
    refs.backdrop.classList.toggle("is-hidden");
    refs.modal.classList.toggle('modal--active');
  }
})();