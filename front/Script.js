function login(event) {
    event.preventDefault(); 
    let Username = document.getElementById('UserName').value;
    let Password = document.getElementById('Password').value;
    console.log("Username:", Username);
    console.log("Password:", Password);
    if (Username === "vishal" && Password === "12345") {
        setTimeout(function() {
            window.location.href="userverification.html";
        }, 2000); 
    } else {
        alert("Invalid Username or Password");
    }
}
function addbikedetails(event){
    event.preventDefault();
    let ownerName = document.getElementById('OwnerName').value;
    let bikeRc= document.getElementById('BikeRc').value;
    let bikeNumber = document.getElementById('BikeNumber').value;
    let bikeMobileNumber = document.getElementById('BikeMobileNumber').value;
    let bikeAvailableStart =document.getElementById('BikeAvailableStarting').value;
    let bikeAvailableEnd = document.getElementById('BikeAvailableEnding').value;
    let bikeLocation = document.getElementById('BikeLocation').value;
    let bikeCost = document.getElementById('BikeCost').value;

    console.log("Username:", ownerName);
    console.log("Username:", bikeRc);
    console.log("Username:", bikeNumber);
    console.log("Username:", bikeMobileNumber);
    console.log("Username:", bikeAvailableStart);
    console.log("Username:", bikeAvailableEnd);
    console.log("Username:", bikeLocation);
    console.log("Username:", bikeCost);

    alert("Your Details Are Entered Successfully");
}
function updatebikedetails(event){
    event.preventDefault();
    let bikenumber = document.getElementById('BikeNumberPlate').value;
    let newownerName = document.getElementById('NewOwnerName').value;
    let newbikeRc= document.getElementById('NewBikeRc').value;
    let newbikeNumber = document.getElementById('NewBikeNumberPlate').value;
    let newbikeMobileNumber = document.getElementById('NewMobileNumber').value;
    let newbikeAvailableStart =document.getElementById('NewBikeAvailableStart').value;
    let newbikeAvailableEnd = document.getElementById('NewBikeAvailableEnd').value;
    let newbikeLocation = document.getElementById('NewBikeLocation').value;
    let newbikeCost = document.getElementById('NewBikeCost').value;

    console.log("BikeNumberPlate",bikenumber);
    console.log("NewOwnerName:", newownerName);
    console.log("NewBikeRc:", newbikeRc);
    console.log("NewBikeNumberPlate:", newbikeNumber);
    console.log("NewBikeMobileNumber:", newbikeMobileNumber);
    console.log("NewBikeAvailableStart:", newbikeAvailableStart);
    console.log("NewBikeAvailableEnd:", newbikeAvailableEnd);
    console.log("NewBikeLocation:", newbikeLocation);
    console.log("NewBikeCost:", newbikeCost);

    alert("Your Details Are Entered Successfully");
}
function deletebikedetails(event){
    event.preventDefault();
    let numberplate = document.getElementById('NumberPlate').value;
    console.log("BikeNumberPlate:",numberplate);
}
function renter(event)
{
    event.preventDefault();
    let rentername = document.getElementById('rentername').value;
    let rentermobilenumber=document.getElementById('rentermobilenumber').value;
    let renterlocation=document.getElementById('renterlocation').value;
    let renterstartingtime=document.getElementById('renterstartingtime').value;
    let renterendingtime=document.getElementById('renterendingtime').value;
    let renterlicenses=document.getElementById('renterlicenses').value;
    console.log("rentername:", rentername);
    console.log("rentermobilenumber:",rentermobilenumber);
    console.log("renterlocation:",renterlocation);
    console.log("renterstartingtime:",renterstartingtime);
    console.log("renterendingtime:",renterendingtime);
    console.log("renterlicenses:",renterlicenses);
    alert("your details are entered sucessfully");
    setTimeout(function() {
        window.location.href="Available.html";
    }, 2000); 
}
function updaterenterdetails(event)
{
    event.preventDefault();
    let licenses = document.getElementById('licenses').value;
    let newname = document.getElementById('newname').value;
    let newmobilenumber = document.getElementById('newmobilenumber').value;
    let newlocation = document.getElementById('newlocation').value;
    let newrenterstartingtime = document.getElementById('newrentstartingtime').value;
    let newrenterendtiming = document.getElementById('newrentendingtime').value;
    console.log("licenses:",licenses);
    console.log("newname:",newname);
    console.log("newmobilenumber:",newmobilenumber);
    console.log("newlocation",newlocation);
    console.log("newrenterstartingtime",newrenterstartingtime);
    console.log("newrenterendingtime",newrenterendtiming);
    alert("Your Details are Updated Suceessfully");
}
function deleterenterdetails(event)
{
    event.preventDefault();
    let licenses = document.getElementById('licenses').value;
    console.log("licenses:",licenses);
}
function forgot(event)
{
    event.preventDefault();
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    console.log("email",email);
    console.log("password",password);
}
function register(event)
{
    event.preventDefault();
    let regUserName = document.getElementById('RegUsername').value;
    let regEmailId = document.getElementById('RegEmailId').value;
    let regmobilenumber = document.getElementById('RegmobileNumber').value;
    let regpassword = document.getElementById('Regpassword').value;
    console.log("Username",regUserName);
    console.log("EmailId",regEmailId);
    console.log("MobileNumber",regmobilenumber);
    console.log("Password",regpassword); 
    setTimeout(function() {
        window.location.href="login.html";
    }, 2000);
}
function emergency(event)
{
    event.preventDefault();
    let emergencybikenumberplate = document.getElementById('NumberPlate').value;
    let emergencylicense = document.getElementById('LicensesNumber').value;
    let emergencyBikeIssues = document.getElementById('BikeIssues').valiue;
    let emergencyLocation = document.getElementById('Location').value;
    console.log("BikeNumberPlate",emergencybikenumberplate);
    console.log("Licenses",emergencylicense);
    console.log("BikeIssues",emergencyBikeIssues);
    console.log("Location",emergencyLocation);
    alert(" Complaint Received Our Team will Reached Soon");
}
function booked(event)
{
    event.preventDefault();
    let bookingBikeNumberPlate = document.getElementById('numberplate').value;
    console.log("NumberPlate", bookingBikeNumberPlate);
    setTimeout(function() {
        window.location.href="Damage.html";
    }, 2000); 
} 
function damage(event)
{
    event.preventDefault();
    let preDamageCount = document.getElementById('PreDamagecount').value;
    let postDamageCount = document.getElementById('PostDamagecount').value;
    console.log("PreDamageCount",preDamageCount);
    console.log("PostDamageCount",postDamageCount);
    setTimeout(function() {
        window.location.href="Payment.html";
    }, 2000);
}
function userverification(event)
{
    event.preventDefault();
    let userverify = document.getElementById('aadharnumber').value;
    let text = userverify.length;
    if(text === 12)
    {
        setTimeout(function() {
            window.location.href="DashBoard.html";
        }, 2000); 
        console.log("AadharNumber",userverify);
    }
    else{
        alert(" Invalid!..Enter the Aadhar Number Correct");
    }
}
function feedback(event)
{
    event.preventDefault();
    let feedback = document.getElementById('Paragarph').value;
    console.log("Feedback",feedback);
    setTimeout(function() {
        window.location.href="thanks.html";
    }, 2000);
}
function Showpassword() {
    const password = document.getElementById('Password');
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }
  function Showpassword1() {
    const password = document.getElementById('Regpassword');
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  }




