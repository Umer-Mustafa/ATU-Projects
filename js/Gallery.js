// Counter
var i = 0;
//Array contaning all the images
var images = [];
images[0]= "Images/Pisa.jpg"
images[1]= "Images/Castle Nuovo.jpg"
images[2]= "Images/Colosseum.jpg"
images[3]= "Images/Venice.jpg"
images[4]= "Images/Royal Palace of Naples.jpg"
images[5]= "Images/Teatro Di San Carlo.jpg"
images[6]= "Images/Pantheon.jpg"
images[7]= "Images/Trevi Fountain.jpg"
images[8]= "Images/Pompeii.jpg"
images[9]= "Images/Florence.jpg"


//Function to show the next image
function next(){
	
	if(i < images.length-1){
		i++;
	} else {
		i=0;
	}
	
	var img = document.getElementById('slider');
	img.src=images[i]; 
	
};

//Function to show the previous image
function prev(){
	
	if(i < images.length){
		i--;
	} else {
		i=9;
	}
	
	var img = document.getElementById('slider');
	img.src=images[i];

};