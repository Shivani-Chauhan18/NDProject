function searchDestination() {
	const query=document.getElementById("searchInput").ariaValueMax.toLowerCase();
	const packages=document.querySelectorAll(".package");

	let found=false;
	packages.forEach(pkg=>{
		const title=pkg.querySelector("h3").innerText.toLowerCase();
		if(title.includes(query)) {
			pkg.style.display="block";
			found=true;
		}else{
			pkg.style.display="none";

		}

	});
	if(!found){
		alert("No travel packages found for your search.")
	}


}



function scrollToPackages() {
	document.getElementById('packages').scrollIntoView({behavior:'smooth'})
}

document.getElementById('contactForm').addEventListener('submit',function(e){
	e.preventDefault();
	alert('Thank You for your message!We will get back to you soon');
});