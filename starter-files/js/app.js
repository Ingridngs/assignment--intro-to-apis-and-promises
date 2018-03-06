const request= superagent
console.log(superagent)
const container= document.querySelector(".countries-container")



request
  .get("https://restcountries.eu/rest/v2/all")
  .then(function (data){
       
       let countriesFinal= data.body
    
       for(let i=0; i< countriesFinal.length; i++){
       	 let country=countriesFinal[i].name
         let cptl=countriesFinal[i].capital
         let flg=countriesFinal[i].flag
         const div= document.createElement("div")
         container.appendChild(div).classList.add("country-card")
         const image= document.createElement("img")
         image.classList.add("country-flag")
         image.src=flg
         div.appendChild(image)
         const name= document.createElement("h4")
         name.classList.add("country-name")
         div.appendChild(name)
         name.textContent=country 
         const capital= document.createElement("p")
         capital.classList.add("country-capital")
         div.appendChild(capital)
         capital.textContent=cptl
      
}
  })
