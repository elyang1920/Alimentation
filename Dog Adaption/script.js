class ModalForm {
    constructor(modalId, openBtnId, closeClass, submitBtnId, successMessageId) {
        this.modal = document.getElementById(modalId);
        this.openBtn = document.getElementById(openBtnId);
        this.closeBtn = document.getElementsByClassName(closeClass)[0];
        this.submitBtn = document.getElementById(submitBtnId);
        this.successMessage = document.getElementById(successMessageId);

        // Bind event listeners
        this.initEvents();
    }

    // Method to initialize all events
    initEvents() {
        // Open modal on button click
        this.openBtn.onclick = () => this.openModal();

        // Close modal on 'x' click
        this.closeBtn.onclick = () => this.closeModal();

        // Close modal when clicking outside the modal
        window.onclick = (event) => {
            if (event.target == this.modal) {
                this.closeModal();
            }
        };

        // Handle form submission
        this.submitBtn.onclick = () => this.handleSubmit();
    }

    // Method to open the modal
    openModal() {
        this.modal.style.display = "block";
    }

    // Method to close the modal
    closeModal() {
        this.modal.style.display = "none";
    }

    // Method to handle form submission
    handleSubmit() {
        const name = document.getElementById("name").value;
        const address = document.getElementById("address").value;
        const age = document.getElementById("age").value;

        if (this.validateForm(name, address, age)) {
            // Display success message with dynamic content
            alert(`Thanks, ${name}! Please go to our center to process your papers.`);
            // Redirect to another page
            window.location.href = "../Dog Adaption/adaption.html";
        } else {
            alert("Please fill in all fields.");
        }
    }

    // Form validation method
    validateForm(name, address, age) {
        return name && address && age; // Return true if all fields are filled
    }
}

// Create an instance of the ModalForm class and initialize it
const modalForm = new ModalForm(
    "myModal",           // Modal element ID
    "openModalBtn",      // Button to open the modal
    "close",             // Class name for the close button
    "submitBtn",         // Submit button ID
    "successMessage"     // Success message element ID
);
