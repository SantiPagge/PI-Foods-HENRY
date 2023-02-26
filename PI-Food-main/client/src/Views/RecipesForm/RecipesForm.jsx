import React, { useState } from "react";
import axios from "axios";

export const RecipesForm = () => {
    const [name, setName] = useState('');
    const [summary, setSummary] = useState('');
    const [healthScore, setHealthScore] = useState(0);
    const [steps, setSteps] = useState('');
    const [image, setImage] = useState('');
    const [diets, setDiets] = useState([]);
    const [formErrors, setFormErrors] = useState([]);

    const handleName = (event) => {
        setName(event.target.value);
    };

    const handleSummary = (event) => {
        setSummary(event.target.value);
    };

    const handleHealthScore = (event) => {
        setHealthScore(event.target.value);
    };

    const handleSteps = (event) =>{
        setSteps(event.target.value);
    };

    const handleImage = (event) => {
        setImage(event.target.value);
    };

    const handleDiets = (event) => {
        const selectedDiets = Array.from(event.target.selectedOptions, (option) => option.value);
        setDiets(selectedDiets);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = [];
        if(!name) {
            errors.push('A name is needed.');
        }
        if(!summary){
            errors.push('Please enter a summary for the recipe.')
        }
        if(!healthScore || healthScore < 0 || healthScore > 100) {
            errors.push('The Health Score value must be a value between 0 and 100.')
        }
        if(!steps){
            errors.push('Please insert the steps of the recipe.')
        }
        if(!image){
            errors.push('Please insert a URL for the image.')
        }
        if (!diets) {
            errors.push('Please select at least one type of diet.')
        }

        if (errors.length > 0) {
            setFormErrors(errors);
        } else {
            axios.post('http://localhost:3001/recipes', {
                name,
                summary,
                healthScore,
                steps,
                image,
                diets
            })
            .then((response) => {
                console.log(response);
                setName('');
                setSummary('');
                setHealthScore(0);
                setSteps('');
                setImage('');
                setDiets([]);
                setFormErrors([]);
            })
            .catch((error) => {
                console.log(error);
            })
        }
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input type='text' id='name' value={name} onChange={handleName}></input>
            </div>
            <div>
                <label htmlFor="summary">Summary: </label>
                <textarea id="summary" value={summary} onChange={handleSummary}></textarea>
            </div>
            <div>
                <label htmlFor="healt-Score">HealthScore: </label>
                <input type='number' max='100' min='0' id='health-Score' value={healthScore} onChange={handleHealthScore}></input>
            </div>
            <div>
                <label htmlFor="steps">Steps: </label>
                <textarea id="steps" value={steps} onChange={handleSteps}></textarea>
            </div>
            <div>
                <label htmlFor="image">Image: </label>
                <input type='text' id='image' value={image} onChange={handleImage}></input>
            </div>
        </form>
        </div>
    )

}