const validateForm = function() {
    const form = document.querySelector('.js-validate');
    const submit = document.querySelector('.js-submit');

    submit.addEventListener('click', function (e) {
        if (!form.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        }

        form.classList.add('was-validated');
    });
}
const init = function() {
    validateForm();
};

document.addEventListener("DOMContentLoaded", init);