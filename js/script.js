// Milestone 1 Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout. 
// Milestone 2 Coloriamo le icone per tipo
// Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone

const icons = [
    {
      nome: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      nome: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      nome: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      nome: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      nome: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      nome: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      nome: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      nome: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      nome: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      nome: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      nome: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      nome: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      nome: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      nome: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      nome: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      nome: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
  ];

   

const arrayColorato = colorIcons(icons);

print(arrayColorato);

console.log(arrayColorato);

 const types = [];

 arrayColorato.forEach((element) => {
   if(!types.includes(element.type)){
     types.push(element.type);
     document.getElementById('type').innerHTML = 
     `
     <option value="${element.type}">${element.type}</option>
     `
   }
 });
 console.log(types);
// LA SELECT PRENDE UNA SOLA OPZIONE, NON SO PERCHé

// funzioni
   function print(array){

    array.forEach((element) => {
      
      // destrutturazione
       const {color, nome, prefix, family} = element;
  
       const elementHTML = `
       <div>
         <i class="${family} ${prefix}${nome}" style = "color:${color}"></i>
         <div class="title">${nome.toUpperCase()}</div>
       </div>
       `;
  
       document.getElementById('icons').innerHTML += elementHTML;
    
    });
  
    }

    function colorIcons(array){
      const arrayColorato = array.map((element) => {

        let color = 'pink';
      
        if(element.type == 'animal'){
          color = 'blue';
        }else if(element.type == 'vegetable'){
          color = 'green';
        }
        return{
          ...element,
          color
        } 
      });
     return arrayColorato;
    }