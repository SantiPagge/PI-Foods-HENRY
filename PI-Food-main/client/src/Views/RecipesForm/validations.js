const validations = (form) => {

    let errors = {}

    if(!form.name) {
        errors.name = 'A name is needed.'
    } else if (!/^[ a-zA-ZÀ-ÿ\u00f1\u00d1]*$/g.test(form.name)) {
        errors.name = 'The name is invalid.'
    }
    if (!form.summary) {
        errors.summary = 'Please enter a summary for the recipe.'
    }
    if (form.healthScore === 0) {
        errors.healthScore = 'Please insert a value for the Health Score.'
    }
    if(!form.steps) {
        errors.steps = 'Please insert the steps of the recipe.'
    }
    if(!form.image) {
        errors.image = 'Please insert a URL for the image.'
    }
    if(!form.diets){
        errors.diets = 'Please select at least one type of diet.'
    }
    return errors;
}

export default validations;