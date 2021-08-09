// window.addEventListener('load',()=> {
//     const params = (new URL(document.location)).searchParams;
//     const eid = params.get('id');
//     console.log(eid);
//     console.log("gaurav");  
// })
let spinner1El=document.getElementById('spinner1');
spinner1El.classList.toggle('d-none');
let ans=localStorage.getItem("idArr");
console.log(ans);
let ans1=localStorage.getItem("clickedId");
console.log(ans1);

let page2IdDivContainerEl = document.getElementById("page2IdDivContainer");
let originalServings;
    
    
    function funcBoth(data1,dIv2){
        dIv2.textContent="";
        for (let each1 of data1.extendedIngredients) {
                //console.log(each1);
                let dIv3 = document.createElement("div");
                dIv3.classList.add("col-md");
                dIv2.appendChild(dIv3);

                // let DIV1 =  document.createElement("div");
                // DIV.classList.add("card-deck");
                // dIv3.appendChild(DIV);

                let dIv4 = document.createElement("div");
                dIv4.classList.add("card", "text-light");
                // dIv4.style.width="7rem";
                // dIv4.style.height="12rem";
                dIv3.appendChild(dIv4);


                let imageEl2 = document.createElement("img");
                imageEl2.style.width="15rem";
                imageEl2.style.height="20rem";
                imageEl2.classList.add("card-img-top");
                imageEl2.src = "https://spoonacular.com/cdn/ingredients_250x250/" + each1.image;
                dIv4.appendChild(imageEl2);

                let chethan = document.createElement("div");
                chethan.classList.add("card-body");
                dIv4.appendChild(chethan);

                let div5 = document.createElement("div");
                div5.classList.add("card-title","text-dark", "mb-3");
                chethan.appendChild(div5);

                let div6 = document.createElement("div");
                div6.classList.add("card-text","text-dark");
                chethan.appendChild(div6);
    
                let ingredientNameEl = document.createElement("p");
                ingredientNameEl.textContent = each1.name;
                ingredientNameEl.style.fontWeight="bold";
                ingredientNameEl.style.fontFamily="Roboto";
                ingredientNameEl.style.fontSize="20px";
                div5.appendChild(ingredientNameEl);

                console.log(ingredientNameEl);
    
                let quantityEl = document.createElement("p");
                quantityEl.textContent = (((each1.amount)*(data1.servings))/originalServings).toFixed(2) + " " + each1.unit;
                quantityEl.style.fontWeight="bold";
                quantityEl.style.fontFamily="Roboto";
                quantityEl.style.fontSize="20px";
                div6.appendChild(quantityEl);
            }
    }
    
    function funcMinus(data1, inpElNumber,dIv2) {
        data1.servings -= 1;
        inpElNumber.value = data1.servings;
        funcBoth(data1,dIv2);
    }
    
    function funcPlus(data1, inpElNumber,dIv2) {
        data1.servings += 1;
        inpElNumber.value = data1.servings;
        funcBoth(data1,dIv2);
    }
    
    let object1 = {
        method: "GET"
    }
    
    fetch("https://api.spoonacular.com/recipes/"+ans1+"/information?apiKey=7c0b13e53f9145a38385f6ff27144f2b&includeNutrition=false", object1)
        .then(function(response) {
            return response.json();
        })
        .then(function(data1) {

            let nav1 = document.createElement("nav");
            nav1.classList.add("navbar", "navbar-expand-lg", "bg-dark", "navbar-dark","mb-5" ,"fixed-top");
            page2IdDivContainerEl.appendChild(nav1);
            
            let nav2 = document.createElement("div");
            nav2.classList.add("container");
            nav1.appendChild(nav2);

            let brand = document.createElement("a");
            brand.classList.add("navbar-brand");
            brand.textContent = "Recipee App";
            brand.style.fontWeight="bold";
            brand.style.fontFamily="Roboto";
            nav2.appendChild(brand);

            let bton = document.createElement("button");
            bton.onclick =  function() {window.location.href = 'welcome.php';}
            bton.textContent = "Recipees";
            bton.classList.add("btn", "btn-danger");
            nav2.appendChild(bton);
           
            //console.log(data1);
            let vinesh = document.createElement("section");
            vinesh.classList.add("container", "py-5");
            page2IdDivContainerEl.appendChild(vinesh);

            let vinesh1 = document.createElement("div");
            vinesh1.classList.add("d-md-flex" , "align-items-center" , "justify-content-between","pt-5");
            vinesh.appendChild(vinesh1);

            let vinesh2 = document.createElement("div");
            vinesh2.classList.add("pt-5");
            vinesh1.appendChild(vinesh2);

            let titleEl1 = document.createElement("h1");
            titleEl1.textContent = data1.title;
            titleEl1.style.fontWeight="bold";
            titleEl1.style.fontFamily="Roboto";
            titleEl1.classList.add("text-danger", "text-uppercase", "text-center", "py-3");
            vinesh2.appendChild(titleEl1);


            let timeEl = document.createElement("h3");
            timeEl.textContent = "Ready in " + data1.readyInMinutes + " minutes";
            timeEl.style.fontWeight="bold";
            timeEl.style.fontFamily="Roboto";
            vinesh2.appendChild(timeEl);
    
            let scoreEl = document.createElement("h3");
            scoreEl.textContent = "Spoonacular Score: " + data1.spoonacularScore;
            scoreEl.style.fontWeight="bold";
            scoreEl.style.fontFamily="Roboto";
            vinesh2.appendChild(scoreEl);

            let imageEl1 = document.createElement("img");
            imageEl1.src = data1.image;
            // imageEl1.style.object-fit =  "contain";
            // imageEl1.style.max-width = "100%";
            // imageEl1.style.max-height = "100%";            
            vinesh1.appendChild(imageEl1);
    
    
            
    
            let hrEl = document.createElement("hr");
            page2IdDivContainerEl.appendChild(hrEl);
    
            let numberOfPeopleEl = document.createElement("p");
            numberOfPeopleEl.textContent = "Number Of Serving People";
            numberOfPeopleEl.classList.add("px-5");
            page2IdDivContainerEl.appendChild(numberOfPeopleEl);
    
            let minusButtonEl = document.createElement("button");
            minusButtonEl.textContent = "-";
            minusButtonEl.classList.add("btn", "btn-primary", "pl-5");
            page2IdDivContainerEl.appendChild(minusButtonEl);
    
            let inpElNumber = document.createElement("input");
            inpElNumber.type = "input";
            inpElNumber.style.textAlign = "center";
            inpElNumber.value = data1.servings;
            originalServings=data1.servings;
            // inpElNumber.classList.add("px-5");
            page2IdDivContainerEl.appendChild(inpElNumber);
    
            let plusButtonEl = document.createElement("button");
            plusButtonEl.textContent = "+";
            plusButtonEl.classList.add("btn", "btn-primary", "pr-5");
            page2IdDivContainerEl.appendChild(plusButtonEl);

            let ingredientsListEl = document.createElement("h1");
            ingredientsListEl.textContent = "Ingredients : ";
            ingredientsListEl.classList.add("p-5")
            page2IdDivContainerEl.appendChild(ingredientsListEl);

            let hrEl1 = document.createElement("hr");
            page2IdDivContainerEl.appendChild(hrEl1);
    
            // let divElp2 = document.createElement("div");
            // page2IdDivContainerEl.appendChild(divElp2);
            let secTion = document.createElement("section");
            secTion.classList.add("p-5");
            page2IdDivContainerEl.appendChild(secTion);
            let dIv1 = document.createElement("div");
            dIv1.classList.add("container");
            secTion.appendChild(dIv1);
            let dIv2 = document.createElement("div");
            dIv2.classList.add("row", "text-center", "g-4");
            dIv1.appendChild(dIv2);

            

            // divElp2.appendChild(secTion);
            spinner1El.classList.toggle('d-none');
            for (let each1 of data1.extendedIngredients) {
                //console.log(each1);
                let dIv3 = document.createElement("div");
                dIv3.classList.add("col-md");
                dIv2.appendChild(dIv3);

                // let DIV1 =  document.createElement("div");
                // DIV.classList.add("card-deck");
                // dIv3.appendChild(DIV);

                let dIv4 = document.createElement("div");
                dIv4.classList.add("card", "text-light");
                // dIv4.style.width="7rem";
                // dIv4.style.height="12rem";
                dIv3.appendChild(dIv4);


                let imageEl2 = document.createElement("img");
                imageEl2.style.width="15rem";
                imageEl2.style.height="20rem";
                imageEl2.classList.add("card-img-top");
                imageEl2.src = "https://spoonacular.com/cdn/ingredients_250x250/" + each1.image;
                dIv4.appendChild(imageEl2);

                let chethan = document.createElement("div");
                chethan.classList.add("card-body");
                dIv4.appendChild(chethan);

                let div5 = document.createElement("div");
                div5.classList.add("card-title","text-dark", "mb-3");
                chethan.appendChild(div5);

                let div6 = document.createElement("div");
                div6.classList.add("card-text","text-dark");
                chethan.appendChild(div6);
    
                let ingredientNameEl = document.createElement("h1");
                ingredientNameEl.textContent = each1.name;
                ingredientNameEl.style.fontWeight="bold";
                ingredientNameEl.style.fontFamily="Roboto";
                ingredientNameEl.style.fontSize="20px";
                div5.appendChild(ingredientNameEl);

                console.log(ingredientNameEl);
    
                let quantityEl = document.createElement("p");
                quantityEl.textContent = each1.amount + " " + each1.unit;
                quantityEl.style.fontWeight="bold";
                quantityEl.style.fontFamily="Roboto";
                quantityEl.style.fontSize="20px";
                div6.appendChild(quantityEl);
            }

            minusButtonEl.onclick = function() {
                
                if (data1.servings > 1) {
                    funcMinus(data1, inpElNumber,dIv2);
                }
            }
    
            plusButtonEl.onclick = function() {
                
                funcPlus(data1, inpElNumber,dIv2);
            }
    
            let stepsEl = document.createElement("h1");
            stepsEl.textContent = "Steps For Recipee";
            stepsEl.classList.add("py-3");
            stepsEl.style.fontWeight="bold";
            stepsEl.style.fontFamily="Roboto";
            page2IdDivContainerEl.appendChild(stepsEl);
    
            console.log(data1.instructions);
            console.log(data1.instructions);
            if(data1.instructions[0]=='<')
            {
                let arr = data1.instructions.split("<li>");
                
                for (let i = 1; i < arr.length; i++) {
                    let stepArr = arr[i].split("</li>");
                    
                    let stepEl = document.createElement("p");
                    stepEl.textContent = i + "." + stepArr[0];
                    stepEl.style.fontWeight="bold";
                    stepEl.style.fontFamily="Roboto";
                    page2IdDivContainerEl.appendChild(stepEl);
                }
            }
            else
            {
                let arr = data1.instructions.split("\n");
                for (let i = 0; i < arr.length; i++) {
                    let stepEl = document.createElement("p");
                    stepEl.textContent = (i+1) + "." + arr[i];
                    stepEl.style.fontWeight="bold";
                    stepEl.style.fontFamily="Roboto";
                    page2IdDivContainerEl.appendChild(stepEl);
                }
            }
    
        });
    
    