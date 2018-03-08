class Visitor {

    constructor(){
        this.deatails = [];
    }
}




clearForm = () => {
    localStorage.clear();
    window.location.reload()
};
var visitorList = ""

displayOrder = () => {

    for (var i = 0, len = localStorage.length; i < len; i++) {
        var key = localStorage.key(i);
        var value = localStorage[key];
        visitorList += "<li>" + key + " => " + value + "</li>";
        document.getElementById("visitorList").innerHTML = ((visitorList) ? visitorList : 0)

    }
    /*
        for (var i = 0; i< localStorage.getItem("visitor").length ; i++)
        {
            visitorList += "<li>" + this.deatails + "</li>";
            document.getElementById("visitorList").innerHTML = ((visitorList) ? visitorList : 0)
        }
     */
}



function addVisitor() {

    var currentVisitor = new Visitor();

    let deatailArr = document.getElementsByClassName("visitorDeatails");
    for (let singleElement of deatailArr) {

        currentVisitor.deatails.push(singleElement.value);
        
        }
     
    var prevVisitorList = localStorage.getItem("visitor");
    prevVisitorList = prevVisitorList ? JSON.parse(prevVisitorList) : [];

    prevVisitorList.push(currentVisitor);

    localStorage.setItem("visitor", JSON.stringify(prevVisitorList));
  
    displayOrder()
}
