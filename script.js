function volume_sphere() {
    //Write your code here
	
    let x = document.getElementById('radius').value;
	let ans = (4*22*x**3)/7;
	 console.log(ans);
    let volume = document.getElementById('volume');
	volume.value = ans;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
