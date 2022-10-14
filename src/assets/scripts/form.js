const submitForm = document.querySelector('#submit-form')
submitForm.addEventListener('submit', function(e) {
    e.preventDefault(); //prevent submitting a string of query including password
    console.log('Form submitted');
})