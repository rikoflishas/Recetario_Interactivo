let recipes = [];

// Function to add a recipe
function addRecipe(title, description, imageUrl) {
    const recipe = {
        id: Date.now(), // Unique ID for each recipe
        title,
        description,
        imageUrl // Include image URL
    };
    recipes.push(recipe);

    renderRecipe();
}

// Function to render recipes (Draw recipes in HTML)
function renderRecipe() {
    const recipeList = document.getElementById("recipeList");
    recipeList.innerHTML = ""; // Clear the list of recipes

    recipes.forEach(recipe => {
        const listItem = document.createElement('li');
        listItem.className = "list-group-item d-flex justify-content-between align-items-center";

        listItem.innerHTML = `
            <div>
                <h5>${recipe.title}</h5>
                <p class="mb-1">${recipe.description}</p>
                <img src="${recipe.imageUrl}" alt="${recipe.title}" class="img-thumbnail mb-2" style="max-width: 150px;">
                <button class="btn btn-danger btn-sm" onclick="deleteRecipe(${recipe.id})">Eliminar</button>
            </div>
        `;

        recipeList.appendChild(listItem);
    });

    console.log(recipes);
}

// Handle the form submission
document.getElementById("recipeForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("recipeTitle").value;
    const description = document.getElementById("recipeDescription").value;
    const imageUrl = document.getElementById("recipeImage").value; // Get image URL

    addRecipe(title, description, imageUrl);

    event.target.reset();
});

// Function to delete a recipe
function deleteRecipe(id) {
    recipes = recipes.filter(recipe => recipe.id !== id); // Remove the recipe with the matching ID
    console.log("Deleted recipe with ID: ", id);
    renderRecipe(); // Re-render the recipe list
}
// crear una funcion que elimine una tarea
// function deleteRecipe(id) {
//     recipes = recipes.filter(recipe => recipe.id !== id); // Filtra las tareas elimando la que coincida con el id de la tarea selecionada
//     console.log("elimine la tarea con id : ", id )
//     renderRecipe(); // Volver a renderizar/dibujar las tareas ya con el id eliminado
// }

// function deleteRecipe2(id) {
//     for (let i = 0; i < recipes.length; i++) {
//         if (recipes[i].id === id) {
//             recipes.splice(i, 1); // Elimina la tarea encontrada
//             break
//         }
//     }
//     renderRecipe();
// }

// function deleteRecipe3(id) {
//     const indice = recipes.findIndex(recipe => recipe.id === id);
//     if (indice !== -1) {
//         recipes.splice(i, 1);
//         renderRecipe();
//     }
// }