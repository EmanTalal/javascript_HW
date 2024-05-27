// document.getElementById("name").onmousemove = function(event) { myFunction(event) };

// window.onload = function(e) {
//     document.getElementById("name").innerHTML = "eman";

// }

let nameElement = document.getElementById("Naminf");

nameElement.onmousemove = function() {
    let newName = "Changed Name";
    newName.style.display = block;
    // Replace with your desired name
    this.textContent.st = newName;
};


let profile = document.getElementById("Profile")
profile.innerText = " A highly driven individual that thrives in challenging environments";


setInterval(function() {

    document.getElementById('Profile').innerText = " A highly driven individual that thrives in challenging environments";

}, 100)

function changeName() {
    var heading = document.getElementById('name');
    heading.textContent = 'New Name';

}

document.getElementById("phonr").innerHTML = " +987-545-2222";
document.getElementById("email").innerHTML = 'eman@example.com</a>';
document.getElementById("address ").innerText = "Riyadh";
document.getElementById("web").innerHTML = 'www.eman.com</a>';
document.getElementById("education1").innerHTML = "2019 - 2024 <br>Computer Science";
document.getElementById("education2").innerHTML = "<strong>2020- 2024</strong><br> <br> Bachelor ofComputer Science GPA: 4.16 / 4";
document.getElementById("wrok1").innerHTML = "Mobile application developer";
document.getElementById("time").innerHTML = "2024";
document.getElementById("Mean").innerHTML = "developer";
document.getElementById("card - link").innerHTML = "eman@example.com</a>";



names.onmouseover = function() {
    document.getElementById("name");
    names.textContent = 'Eman Talal'
};