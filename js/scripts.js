function validate(){
    var zipcode = $("#zipcode").val();
    if(zipcode.length != 0 && zipcode.length != 5){
        alert("Zipcode is not valid or not in a valid format.");
        return false;
    }
}