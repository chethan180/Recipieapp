let searchEl = document.getElementById("search");
let spinnerEl=document.getElementById("spinner");
let containerResultAnsEl=document.getElementById("containerResultAns");
let mainContentEl;
let id,object,cnt;
let arr=[];


function mainfunc(event) {
    //spinnerEl.classList.toggle('d-none');
    if (event.key === "Enter") {
        containerResultAnsEl.textContent = "";
        spinnerEl.classList.toggle('d-none');
        object = {
            method: "GET"
        }

        localStorage.setItem("searchInput",searchEl.value);
        fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=7c0b13e53f9145a38385f6ff27144f2b&query=" + searchEl.value+"&number=100", object)
            .then(function(value) {
                return value.json();
            })
            .then(function(data) {
                console.log(data);
                spinnerEl.classList.toggle('d-none');
                cnt=0;
                for (let each of data.results) {
                    if(cnt%4==0)
                    {
                        let mainContentId="mainContent"+cnt;
                        let rowDivEl=document.createElement("div");
                        rowDivEl.classList.add("row","d-flex","flex-row","justify-content-start");
                        rowDivEl.id=mainContentId;
                        containerResultAnsEl.appendChild(rowDivEl);
                        mainContentEl=document.getElementById(mainContentId);
                    }
                    cnt+=1;


                    let divEl = document.createElement("div");
                    divEl.id=each.id;
                    divEl.classList.add("col-12","col-md-3","pt-5", "pt-4","d-flex","flex-column","justify-content-center");
                    
                    arr.push(divEl.id);
                    localStorage.setItem("idArr",arr);
                    mainContentEl.appendChild(divEl);

                    //spinnerEl.classList.toggle('d-none');

                    let imgEl = document.createElement("img");
                    imgEl.src = each.image;
                    divEl.appendChild(imgEl);

                    let nameEl = document.createElement("p");
                    nameEl.textContent = each.title;
                    nameEl.style.fontSize="20px";
                    nameEl.style.fontWeight="bold";
                    nameEl.style.textAlign="center";
                    divEl.appendChild(nameEl);
					
					// let favButton=document.createElement("button");
					// favButton.id="like";
					// favButton.name="like";
					// favButton.textContent="Favourites";
					// divEl.appendChild(favButton);

                    let viewMoreEl = document.createElement("a");
                    viewMoreEl.textContent = "View Recipe....";
                    viewMoreEl.href = "page2.html";
                    viewMoreEl.style.backgroundColor="red";
                    viewMoreEl.style.color="white";
                    viewMoreEl.style.fontWeight="bold";
                    viewMoreEl.style.textAlign="center";
                    viewMoreEl.style.padding="7px";
                    viewMoreEl.style.borderRadius="10px";
                    
                    viewMoreEl.onclick=function(){
                        localStorage.setItem("clickedId",divEl.id);
                    }
                    divEl.appendChild(viewMoreEl);
                }
        });
    }
}



searchEl.addEventListener("keyup", mainfunc);



console.log("abc");
console.log(searchEl.value);
console.log("xyz");

spinnerEl.classList.toggle('d-none');
if(localStorage.getItem("searchInput")===null){
    localStorage.setItem("searchInput","");
}

let fromLocalStorage=localStorage.getItem("searchInput");


fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=7c0b13e53f9145a38385f6ff27144f2b&query=" + fromLocalStorage +"&number=100", object)
            .then(function(value) {
                return value.json();
            })
            .then(function(data) {
                console.log(data);
                spinnerEl.classList.toggle('d-none');
                cnt=0;
                for (let each of data.results) {
                    if(cnt%4==0)
                    {
                        let mainContentId="mainContent"+cnt;
                        let rowDivEl=document.createElement("div");
                        rowDivEl.classList.add("row","d-flex","flex-row","justify-content-start");
                        rowDivEl.id=mainContentId;
                        containerResultAnsEl.appendChild(rowDivEl);
                        mainContentEl=document.getElementById(mainContentId);
                    }
                    cnt+=1;


                    let divEl = document.createElement("div");
                    divEl.id=each.id;
                    divEl.classList.add("col-12","col-md-3","pt-5", "pt-4","d-flex","flex-column","justify-content-center");
                    
                    arr.push(divEl.id);
                    localStorage.setItem("idArr",arr);
                    mainContentEl.appendChild(divEl);

                    //spinnerEl.classList.toggle('d-none');

                    let imgEl = document.createElement("img");
                    imgEl.src = each.image;
                    divEl.appendChild(imgEl);

                    let nameEl = document.createElement("p");
                    nameEl.textContent = each.title;
                    nameEl.style.fontSize="20px";
                    nameEl.style.fontWeight="bold";
                    nameEl.style.textAlign="center";
                    divEl.appendChild(nameEl);

                    let viewMoreEl = document.createElement("a");
                    viewMoreEl.textContent = "View Recipe....";
                    viewMoreEl.href = "page2.html";
                    viewMoreEl.style.backgroundColor="red";
                    viewMoreEl.style.color="white";
                    viewMoreEl.style.fontWeight="bold";
                    viewMoreEl.style.textAlign="center";
                    viewMoreEl.style.padding="7px";
                    viewMoreEl.style.borderRadius="10px";
                    
                    viewMoreEl.onclick=function(){
                        localStorage.setItem("clickedId",divEl.id);
                    }
                    divEl.appendChild(viewMoreEl);
                }
        });


