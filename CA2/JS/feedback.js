var slider = document.getElementById('influence')//Gat value of range slider
var output = document.getElementById('val')//Output value of slider
output.innerHTML = slider.value

slider.oninput = function() {
    output.innerHTML =this.value
}