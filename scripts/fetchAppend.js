
const showReceipe = async (url) => {
    try{
        
        let res = await fetch(url)
        let data = await res.json()
        return data;
    }
    
    catch(err){
        console.log("err :",err)
    }
      
      }
    
    
      const append = (data,parent) => {
      
        data.forEach((el) => {
         
         
         let div = document.createElement("div")
         div.setAttribute("class","poster")
    
         let tdiv = document.createElement("div")
         tdiv.setAttribute("class","desc")
    
         let poster = document.createElement("img")
         poster.src = el.strMealThumb;
    
         let title = document.createElement("p")
         title.innerText = "Title:"+" "+el.strMeal;
    
         let catagory = document.createElement("p")
         catagory.innerText = "Catogory:"+" "+el.strCategory
        
         let instruct = document.createElement("p")
         instruct.innerText = "Instruction :"+" "+el.strInstructions;
    
         div.append(poster)
         tdiv.append(title,catagory,instruct)
    
         parent.append(div,tdiv)
    
        })
    
    
      }
    
      export { showReceipe, append }