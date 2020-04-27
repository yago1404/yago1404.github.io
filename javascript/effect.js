function transition_content(onclicked_button, div_to_change){
    clear_elements();
    document.getElementById(onclicked_button).style.padding = "10px 30px";
    document.getElementById(onclicked_button).style.border = "3px solid #A40610";
    document.getElementById(div_to_change).style.zIndex = "10";
}

function show_email(){
    alert("Email: ytaveiros@gmail.com")
}

function clear_elements(){
    var elements = ['web-developer-button', 'mobile-developer-button', 'design-button', 'twig-button'];
    for (let element of elements){
        document.getElementById(element).style.border = "0px";
        document.getElementById(element).style.padding = "0px";
    }
    var div_elements = ['design-div', 'web-developer-div', 'mobile-developer-div', 'twig-div'];
    for (let element of div_elements){
        document.getElementById(element).style.zIndex = "0";
    }
}
function load_page(){
    document.getElementById('design-button').style.padding = "10px 30px";
    document.getElementById('design-button').style.border = "3px solid #A40610";
    document.getElementById('design-div').style.zIndex = "10";

}

function scroll_page(pos){
    window.scroll({
        top: pos, 
        left: 0, 
        behavior: 'smooth'
    });
}
