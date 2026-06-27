const registerUser = () => {

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const dob = document.getElementById("dob").value;
const phone = document.getElementById("phone").value;
const pet = document.getElementById("pet").value;
const address = document.getElementById("address").value;
const photo = document.getElementById("photo").files[0];

if(name=="" || email=="" || password=="" || dob=="" || phone=="" || pet=="" || address==""){
alert("Please fill all the fields");
return;
}

const data={
name,
email,
password,
dob,
phone,
pet,
address
};

localStorage.setItem("petRegistration",JSON.stringify(data));

document.getElementById("result").innerHTML=`
<div class="card">
<h2>Registration Successful</h2>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Date of Birth:</strong> ${dob}</p>
<p><strong>Phone:</strong> ${phone}</p>
<p><strong>Preferred Pet:</strong> ${pet}</p>
<p><strong>Address:</strong> ${address}</p>
${photo ? `<p><strong>Photo:</strong> ${photo.name}</p>` : ""}
</div>
`;

document.getElementById("registerForm").reset();

};