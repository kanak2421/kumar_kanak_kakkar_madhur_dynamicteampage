(()=>{
	console.log('fired!');

	const name = document.querySelector(".memberInfo h2"),
		  contents = document.querySelector(".detail"),
		  position = document.querySelector(".memberInfo h3"),
		  buttons = document.querySelectorAll(".controlImg button"),
		  memberImg =  document.querySelector(".imageCon"),
		  desicons = document.querySelector("#desIcons"),
		     des = document.querySelector("#hien"),
		     dev = document.querySelector("#other");
        const twoMembers = [
		  ["Kanak Kumar", `I am pursuing my studies in media designing course from fanshawe college. I am looking forward to be more creative and skilled.
   My goal is to create as much unique designs I can by using my creativity into my hard work.My hobbies: I love to sketch, and travel:`, `Designer`],

	 	["Madhur Kakkar", `I’m an international student of fanshawe college and currently I am pursuing my study in interactive media design course.
  My hobbies : I love to do photography, and explore new things ..`, `Developer`]	];
	    function showBioInfo(){
		     arrayIndex = this.dataset.arrayref;
		      name.textContent = twoMembers[arrayIndex][0];
	     	contents.textContent = twoMembers[arrayIndex][1];
		   position.textContent = twoMembers[arrayIndex][2];
	}
     	function changeImageDes(){
		   document.getElementById('defaultImg').src = "images/1.jpg";
	     	desicons.style.visibility='visible';
	}
    	function changeImageDev(){
		 document.getElementById('defaultImg').src = "images/2.jpg";
		desicons.style.visibility='hidden';
	}
	   buttons.forEach(button => button.addEventListener("click", showBioInfo));
	  des.addEventListener("click", changeImageDes);
	 dev.addEventListener("click", changeImageDev);
})();
