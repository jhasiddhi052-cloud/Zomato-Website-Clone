// ===============================
// ZOMATO LANDING PAGE SCRIPT
// ===============================

// Search Function
function searchFood() {

    const input = document.getElementById("search");

    if (!input) return;

    const food = input.value.trim();

    if (food === "") {

        alert("Please enter a food name.");

    } else {

        alert("Searching for: " + food + " 🍕");

    }

}

// Search on Enter Key
const searchInput = document.getElementById("search");

if (searchInput) {

    searchInput.addEventListener("keypress", function (e) {

        if (e.key === "Enter") {

            e.preventDefault();

            searchFood();

        }

    });

}

// Order Button
document.querySelectorAll(".food button").forEach(function(btn){

    btn.addEventListener("click",function(){

        alert("🎉 Food added to cart!");

    });

});

// Offer Buttons
document.querySelectorAll(".offer-card button").forEach(function(btn){

    btn.addEventListener("click",function(){

        alert("🔥 Offer Applied Successfully!");

    });

});

// Booking Form
const bookingForm = document.querySelector(".booking form");

if(bookingForm){

bookingForm.addEventListener("submit",function(e){

e.preventDefault();

alert("✅ Table Reserved Successfully!");

bookingForm.reset();

});

}

// Newsletter
const subscribeBtn=document.querySelector(".subscribe button");

if(subscribeBtn){

subscribeBtn.addEventListener("click",function(){

const email=document.querySelector(".subscribe input");

if(email.value===""){

alert("Enter your Email.");

}

else{

alert("🎉 Thanks For Subscribing!");

email.value="";

}

});

}

// Learn More Button
const learnBtn=document.querySelector(".about-home button");

if(learnBtn){

learnBtn.addEventListener("click",function(){

alert("More exciting features coming soon!");

});

}

// Scroll Animation
const sections=document.querySelectorAll("section");

window.addEventListener("scroll",function(){

sections.forEach(function(sec){

const top=window.scrollY;

const offset=sec.offsetTop-350;

if(top>offset){

sec.style.opacity="1";

sec.style.transform="translateY(0)";

}

});

});

// Initial Animation Style
sections.forEach(function(sec){

sec.style.opacity="0";

sec.style.transform="translateY(60px)";

sec.style.transition="all 0.8s ease";

});

// Scroll To Top Button
const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="scrollTop";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="20px";
topBtn.style.bottom="20px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#e23744";
topBtn.style.color="#fff";
topBtn.style.fontSize="22px";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.boxShadow="0 5px 15px rgba(0,0,0,.3)";
topBtn.style.zIndex="999";

window.addEventListener("scroll",function(){

if(window.scrollY>300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

});

// Hero Text Animation
const heroTitle=document.querySelector(".hero-content h1");

if(heroTitle){

let scale=1;

setInterval(function(){

scale=scale===1?1.03:1;

heroTitle.style.transform="scale("+scale+")";

},1200);

}

// Social Icons
document.querySelectorAll(".social-icons a").forEach(function(icon){

icon.addEventListener("mouseenter",function(){

this.style.transform="translateY(-8px) rotate(10deg)";

});

icon.addEventListener("mouseleave",function(){

this.style.transform="translateY(0) rotate(0deg)";

});

});

console.log("✅ Zomato Landing Page Loaded Successfully");