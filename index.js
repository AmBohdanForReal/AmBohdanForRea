function sendMail() {
    var params = {
        name: document.getElementById("name").value ,
        discord: document.getElementById("discord").value ,
        time: document.getElementById("time").value ,
    }
}
const serviceID = "service_uw2gatn";
const templateID = "template_5xhasbj"

email.js.send(serviceID, templateID, params)
    .then(
        res => {
            document.getElementById("name").value = "";
            document.getElementById("discord").value = "";
            document.getElementById("time").value = "";
            console.log(res);
            alert("test")
        
    }
)
.catch((er) => console.log(err))

