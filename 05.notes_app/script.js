document.addEventListener("DOMContentLoaded", () => {
  const notesContainer = document.querySelector(".notes-container");
  const createBtn = document.querySelector(".btn");
  let notes = document.querySelectorAll(".input-box");

  function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
  }

  showNotes();

  function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
  }

  createBtn.addEventListener("click", () => {
    notesContainer.innerHTML += `<p class="input-box" contenteditable="true">
          <img class="delete" src="../images/delete.png" />
        </p>`;
  });

  function deleted(e) {
    if (e.target.classList.contains("delete")) {
      e.target.parentElement.remove();

      updateStorage();
    } else if (e.target.tagName === "P") {
      notes = document.querySelectorAll(".input-box");
      notes.forEach((nt) => {
        nt.onkeyup = function () {
          updateStorage();
        };
      });
    }
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      document.execCommand("insertLineBreak");
      event.preventDefault();
    }
  });

  notesContainer.addEventListener("click", deleted);
});
