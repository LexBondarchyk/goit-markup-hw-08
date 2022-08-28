(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector(newFunction()),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
  function newFunction() {
    return "[data-modal-close]";
  }

    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();
