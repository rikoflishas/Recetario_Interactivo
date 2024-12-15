let recipes = [];

//Funcion para añadir tarea
function addRecipe(title, description) {
    const recipe = {
        id: Date.now(), // Id unico para cada tarea el cual obtiene la fecha exacgta y la utiliza como id
        title,
        description
    };
    recipes.push(recipe)

    renderRecipe();
}

// Funcion que reenderiza las tareas (Dibuje las tareas en html)
function renderRecipe(){
    const recipeList = document.getElementById("recipeList")
    recipeList.innerHTML = ""; //limpia la lista de tareas

    recipes.forEach(recipe => {
        const listItem = document.createElement('li')
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";

        listItem.innerHTML = `
            <div>
                <h5>${recipe.title}</h5>
                <p class="mb-1">${recipe.description}</p>
                <button class="btn btn-danger btn-sm" onclick="deleteRecipe(${recipe.id})">eliminar</button>
            </div>
        `;

        recipeList.appendChild(listItem);
    });

    console.log(recipes)
}

// manejar el formulario
document.getElementById("recipeForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.getElementById("recipeTitle").value;
    const description = document.getElementById("recipeDescription").value;

    addRecipe(title, description)

    event.target.reset()
})


// crear una funcion que elimine una tarea
function deleteRecipe(id) {
    recipes = recipes.filter(recipe => recipe.id !== id); // Filtra las tareas elimando la que coincida con el id de la tarea selecionada
    console.log("elimine la tarea con id : ", id )
    renderRecipe(); // Volver a renderizar/dibujar las tareas ya con el id eliminado
}

function deleteRecipe2(id) {
    for (let i = 0; i < recipes.length; i++) {
        if (recipes[i].id === id) {
            recipes.splice(i, 1); // Elimina la tarea encontrada
            break
        }
    }
    renderRecipe();
}

function deleteRecipe3(id) {
    const indice = recipes.findIndex(recipe => recipe.id === id);
    if (indice !== -1) {
        recipes.splice(i, 1);
        renderRecipe();
    }
}