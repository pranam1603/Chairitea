
var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        form.reset()
        status.innerHTML = "Thanks for your submission!";
        status.style = 'background-color: lightgreen; padding: 10px 0px;'
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
        status.style = 'background-color: lightred'
    });
}
form.addEventListener("submit", handleSubmit)
