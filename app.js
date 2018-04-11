console.log("Loading . . .")


//window.onload=function () { makeGraph("graph", "labels") }

function load(){
    var data = []
    for(i=1; i<13; i++){
        data[i] = document.getElementById(i).value;
    }
    console.log(data); 
    makeGraph("graph", "labels",data);
// Graph Making Function
    function makeGraph(container, labels){
    container = document.getElementById(container);
    labels = document.getElementById(labels)
    var dnl = container.getElementsByTagName("li");
    for(var i = 0; i < dnl.length; i++){
        var item = dnl.item(i);        
        var Names = item.innerHTML;
        var value = data[i+1];
        item.style.height=value + "px";
        item.style.top=(250 - value) + "px";
        item.style.left = (i * 50 + 20) + "px";
        item.style.height = value + "px";
        item.innerHTML = value;
        item.style.visibility="visible";	
        color = getColor(value);
        if(color != false) item.style.background=color;
        labels.innerHTML = labels.innerHTML +
             "<span style='margin:4px;background:"+ color+"'>" + 
             Names + "</span>";
        }	
    }
};
function getColor(value){
    if (value  < 150){
        return 'Green';
    }else if(value >=150 & value <200){
        return 'Yellow';
    }else{
        return 'Red'
    }
};
