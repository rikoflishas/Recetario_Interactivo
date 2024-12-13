// object of new recipe
// const newRecipe = {
//     name: name, 
//     ingredients: ingredients, 
//     description: description, 
//     category: category, 
//     image:image
// };

//Arreglo para guardar nuevas recetas
let recipes = [];

//Function to add new recipes
function addRecipe (title, description){
    const recipe = {
        id: Date.now(),//id para guardar la fecha 
        title,
        description
    };
    recipes.push(recipe);
    renderRecipe();
}

function renderRecipe() {
    const recipeList = document.getElementById("recipeList");
    recipeList.innerHTML = "";//limpia la lista

    recipes.forEach(recipe => {
        const listItem = document.createElement('li');
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";

            listItem.innerHTML = `
            <div>
                <h5>${recipe.title}</h5>
                <p class = "mb-1">${recipe.description}</p>
                <button class="btn btn-danger btn-sm" onclick = "deleteRecipe(${recipe.id})">Eliminar</button>
            </div>
            `;

            recipeList.appendChild(listItem);
    });
    console.log(recipes);
}

//Manejando el formulario
document.getElementById("recipeForm").addEventListener("submit", function(event){
    event.preventDefault();//cancela el evento
    const title = document.getElementById("recipeTitle").value;
    const description = document.getElementById("recipeDescription").value;

    addRecipe(title, description);

    event.target.reset();
})

//Función que elimine una tarea
function deleteRecipe(id) {
    recipes = recipes.filter(task => task.id);
    console.log("Elimina la tarea con id: ", id);
    renderRecipe();
}