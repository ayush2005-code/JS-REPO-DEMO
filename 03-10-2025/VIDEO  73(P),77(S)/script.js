function CreateCard(title,cName,views,monthsOld,duration,thumbnail){
 if(views>1000){
    views=views/1000 + "k";
 }
 else if(views>1000000){
     views=views/1000000 + "m";
 }
 let html =` <div class="card">
        <div class="image">
            <img src="${thumbnail}">
            <div class="time-stamp">${duration}</div>
        </div>
        <div class="text">
            <h1>${title}</h1>
            <p>${cName} . ${views} . ${monthsOld} months old </p>
        </div>
      </div>`

      document.querySelector(".container").innerHTML=  document.querySelector(".container").innerHTML+ html;
    
}

CreateCard("SIGMA-WEB-DEV||VIDEO #1","CodewithHarry",56000,"2","31:22","https://i.ytimg.com/vi/kJEsTjH5mVg/maxresdefault.jpg")