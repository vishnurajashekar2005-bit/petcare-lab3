const registerUser = () => {

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const password = document.getElementById("password").value;
const dob = document.getElementById("dob").value;
const phone = document.getElementById("phone").value.trim();
const pet = document.getElementById("pet").value;
const address = document.getElementById("address").value.trim();
const photo = document.getElementById("photo").files[0];

if (name === "") {
    alert("Please enter your full name");
    return;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return;
}

if (password.length < 6) {
    alert("Password must contain at least 6 characters");
    return;
}

if (dob === "") {
    alert("Please select your date of birth");
    return;
}

const phonePattern = /^[0-9]{10}$/;

if (!phonePattern.test(phone)) {
    alert("Phone number must contain exactly 10 digits");
    return;
}

if (pet === "") {
    alert("Please select a pet");
    return;
}

if (!photo) {
    alert("Please upload a pet photo");
    return;
}

if (address === "") {
    alert("Please enter your address");
    return;
}

const data = {
    name,
    email,
    password,
    dob,
    phone,
    pet,
    address
};

localStorage.setItem("petRegistration", JSON.stringify(data));

document.getElementById("result").innerHTML = `
<div class="card">

<h2>Registration Successful</h2>

<p><strong>Name:</strong> ${name}</p>

<p><strong>Email:</strong> ${email}</p>

<p><strong>Date of Birth:</strong> ${dob}</p>

<p><strong>Phone:</strong> ${phone}</p>

<p><strong>Preferred Pet:</strong> ${pet}</p>

<p><strong>Address:</strong> ${address}</p>

<p><strong>Photo:</strong> ${photo.name}</p>

</div>
`;

document.getElementById("registerForm").reset();

};
