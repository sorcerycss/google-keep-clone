class App {
    constructor() {
        console.log('app works!');
        // use $ to recognize HTML element as compared to data
        this.$form = document.querySelector('#form');
        this.$noteTitle = document.querySelector('#note-title');
        this.$formButtons = document.querySelector('#form-buttons');

        this.addEventListeners(); // runs when our app starts up
    }

    addEventListeners() {
        document.body.addEventListener('click', event => {
            this.handleFormClick(event);
        });
    }

    handleFormClick(event) {
      const isFormClicked = this.$form.contains(event.target); // returns true or false

      if (isFormClicked) {
        // open form
        this.openForm();
      } else {
        // close form
        this.closeForm();
      }
    }

    openForm() { // .form-open & #note-title
        this.$form.classList.add('form-open');
        this.$noteTitle.style.display = 'block';
        this.$formButtons.style.display = 'block';
    }

    closeForm() {
        this.$form.classList.remove('form-open');
        this.$noteTitle.style.display = 'none';
        this.$formButtons.style.display = 'none';
    }
}

new App()