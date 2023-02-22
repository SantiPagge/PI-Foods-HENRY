const axios = require('axios');
const { Recipe, Diets } = require('../../db');


//     "results": [{
//         "vegetarian": true,
//         "vegan": true,
//         "glutenFree": true,
//         "dairyFree": true,
//         "veryHealthy": true,
//         "cheap": false,
//         "veryPopular": true,
//         "sustainable": false,
//         "lowFodmap": false,
//         "weightWatcherSmartPoints": 4,
//         "gaps": "no",
//         "preparationMinutes": -1,
//         "cookingMinutes": -1,
//         "aggregateLikes": 3689,
//         "healthScore": 76,
//         "creditsText": "Full Belly Sisters",
//         "license": "CC BY-SA 3.0",
//         "sourceName": "Full Belly Sisters",
//         "pricePerServing": 112.39,
//         "id": 716426,
//         "title": "Cauliflower, Brown Rice, and Vegetable Fried Rice",
//         "readyInMinutes": 30,
//         "servings": 8,
//         "sourceUrl": "http://fullbellysisters.blogspot.com/2012/01/cauliflower-fried-rice-more-veggies.html",
//         "image": "https://spoonacular.com/recipeImages/716426-312x231.jpg",
//         "imageType": "jpg",
//         "summary":


// mapeo la api
const searchInApi = async () => {
    try {
        const searchInApiRequest = await axios(`https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`)
    //     const BuscarenApi = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=447dc9bae5d14e9f9ca46069530aeadb&addRecipeInformation=true&number=100`,
    //   { headers: { "Accept-Encoding": "gzip,deflate,compress" }})
    //  )      PARA LOS LLAMADOS LIMITADOS, USAR ESTO PARA LA CORRECCION

        let info = await searchInApiRequest.data.results?.map((element) => {
            return{
                id: element.id,
                name: element.title,
                summary: element.summary,
                healthScore: element.healthScore,
                image: element.image,
                dishTypes: element.dishTypes?.map(element => element),
                diets: element.diets?.map(element => element),
                steps: element.analyzedInstructions[0]?.steps.map((element) => `${element.number} ${element.step}`).join(' '),
            }
        })
        return info; 

    } catch (error) {
        error;
    }
};


//mapeo la db
const searchInDb = async () => {
    try {
        const searchDb = await Recipe.findAll({
            include:{
                model: Diets,
                atributes: ['name'],
                through: {
                    atributes: [],
                }
            }
        })

        let infoDb = await searchDb?.map((element) => {
            return {
                id: element.id,
                name: element.name,
                summary: element.summary,
                healthScore: element.healthScore,
                image: element.image,
                steps: element.steps,
                diets: element.diets?.map(element => element.name)
            }
        }) 
    return infoDb;

    } catch (error) {
        return error;    
    }
};


// junto api y db
const dbApi = async () => {
    try {
        const api = await searchInApi();
        const db = await searchInDb();
        const dbapi = api.concat(db);
    return dbapi;
    } catch (error) {
        return error;
    }
};


//receta por query y todas si no hay query
const queryRecipe = async (recipe) => {
    try {
    //const agregarlas =  await info.filter((ele) => ele.name === receta)
    //const agregaradb = await Recipe.findOrCreate(agregarlas) ME CAGO EN HENRY ERA MAS FACIL
    if(recipe){
        const searchRecipe = await dbApi();
        const result = searchRecipe.filter((element) => element.name.toLowerCase().includes(recipe.toLowerCase()))
        if(result.length) return result;
    } else {
        const all = await dbApi();
        return all;
    }

    throw Error (`We don't have data about this recipe`);

    } catch (error) {
        return error;
    }
};

// buscar receta por id
const recipeId = async (id) => {

        let searchRecipe = await dbApi();
        let recipe = searchRecipe.find((element) => element.id == id);
        console.log(searchRecipe)
        if(recipe) {
            return recipe;
        } else {
            throw new Error (`Ups, we don't have a recipe with this id`);
        }
};


// Mostrar dietas
const showDiets = async () => {
    // const allDiets = await axios(`https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5`)
    // const dietTypes = allDiets.map((recipe) => recipe.diet.map((e) => e))
    // console.log(dietTypes);
    const dietTypes = [
        "gluten free", //
        "ketogenic", //
        "lacto ovo vegetarian", //
        "vegan", //
        "pescatarian", //
        "paleolithic", //
        "primal",//
        "fodmap friendly", //
        "whole 30", //
        "dairy free", //
    ];
    dietTypes.forEach((diet) => {
        Diets.findOrCreate({
            where: {
                name: diet
            }
        })
    })
    return Diets.findAll();
};

const postRecipe = async (objRecipe) => {
    try {
        const { name, summary, healthScore, steps, image, diets } = objRecipe;
        const recipe = {
            name,
            summary,
            healthScore,
            steps,
            image
        };

        const dietInfo = await Diets.findAll({
            where: {
                name: diets
            }
        });
        const createRecipe = await Recipe.create(recipe);

        createRecipe.addDiets(dietInfo);

        return Recipe.findAll();

    } catch (error) {
        throw Error ('No se creo');
    }
};

module.exports = {
    searchInApi,
    searchInDb,
    dbApi,
    queryRecipe,
    recipeId,
    showDiets,
    postRecipe
};