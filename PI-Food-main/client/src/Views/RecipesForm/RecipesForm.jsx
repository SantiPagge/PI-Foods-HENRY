import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { traerDietas } from "../../redux/actions";
import validations from "./validations";
import axios from "axios";
import style from '../RecipesForm/RecipesForm.module.css'
import { useNavigate } from "react-router-dom";
import { Nav2 } from "../../Components/Nav2/Nav2";

export const RecipesForm = () => {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() =>{
        dispatch(traerDietas())
    }, [])

    const diets = useSelector(state => state.dietas)


    const [form, setForm] = useState({
        name: '',
        summary: '',
        healthScore: 0,
        steps: '',
        image: '',
        diets: []
    });

    // console.log(diets)
    

    const [error, setError] = useState('');

    const handleName = (event) => {
        setForm({
            ...form,
            name: (event.target.value)
        })
        validations({
            ...form,
            name: (event.target.value)
        })
    };

    const handleSummary = (event) => {
        setForm({
            ...form,
            summary: (event.target.value)
        })
        validations({
            ...form,
            summary: (event.target.value)
        })
    };

    const handleHealthScore = (event) => {
        setForm({
            ...form,
            healthScore: (event.target.value)
        })
        validations({
            ...form,
            healthScore: (event.target.value)
        })
    };

    const handleSteps = (event) =>{
        setForm({
            ...form,
            steps: (event.target.value)
        })
        validations({
            ...form,
            steps: (event.target.value)
        })
    };

    const handleImage = (event) => {
        setForm({
            ...form,
            image: (event.target.value)
        })
        validations({
            ...form,
            image: (event.target.value)
        })
    };

    const handleDiets = (event) => {
        if(event.target.checked){
            setForm({
                ...form,
                diets: [...form.diets, event.target.value]
            })
    
            setError(validations({
                ...form,
                diets: [...form.diets, event.target.value]
            },
            ))
        } else {
            setForm({
                ...form,
                diets: form.diets.filter(t => t !== event.target.value)
            })
    
            setError(validations({
                ...form,
                diets: form.diets.filter(t => t !== event.target.value)
            }))
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post('/recipes', form)
        .then((a) =>
        setForm({
            name: '',
            summary: '',
            healthScore: 0,
            steps: '',
            image: '',
            diets: []
        }))
        alert('The recipe has been created.')
        navigate.push('/home')
    }
    // console.log(form);
    
    useEffect(() => {
        setError(validations(form))
    }, [form])
console.log(error);

    return (
        <div className={style.container}>
            <Nav2/>
                <form onSubmit={handleSubmit} className={style.form}>
                    <div className={style.createName}>
                        <label htmlFor="name">Name: </label>
                        <br/>
                        <input type='text' id='name' value={form.name} onChange={handleName}></input>
                        <br/>
                        {error.name && <p className={style.errorMessage} >{error.name}</p>}
                    </div>
                    <div className={style.createSummary}>
                        <label htmlFor="summary">Summary: </label>
                        <br/>
                        <textarea id="summary" value={form.summary} onChange={handleSummary}></textarea>
                        <br/>
                        {error.summary && <p className={style.errorMessage} >{error.summary}</p>}
                    </div>
                    <div className={style.createHealthScore}>
                        <label htmlFor="healt-Score">HealthScore: </label>
                        <br/>
                        <input type='number' pattern="^[0-9]\d*$" max='100' min='0' id='health-Score' value={form.healthScore} onChange={handleHealthScore}></input>
                        <br/>
                        {error.healthScore && <p className={style.errorMessage} >{error.healthScore}</p>}
                    </div>
                    <div className={style.createSteps}>
                        <label htmlFor="steps">Steps: </label>
                        <br/>
                        <textarea id="steps" value={form.steps} onChange={handleSteps}></textarea>
                        <br/>
                        {error.steps && <p className={style.errorMessage} >{error.steps}</p>}
                    </div>
                    <div className={style.createImage}>
                        <label htmlFor="image">Image: </label><br/>
                        <input type='text' id='image' value={form.image} onChange={handleImage}></input>
                        <br/>
                        {error.image && <p className={style.errorMessage} >{error.image}</p>}
                    </div>
                    <span className={style.createDietsText}>Diets: </span>
                        <div className={style.createDiets}>
                            {diets?.map((option, index) => (
                                <label key={index}>
                                    <input
                                        type="checkbox"
                                        value={option.name}
                                        id={option.id}
                                        onChange={handleDiets}/>
                                    {option.name}
                                </label>
                            ))}
                            <br/>
                            {error.diets && <p className={style.errorMessage} >{error.diets}</p>}
                        </div>
                        <div>
                            <button className={style.createButton} type="submit" disabled={(!form.name || !form.summary || !form.steps || !form.healthScore || !form.diets.length || !form.image )? true : false}>Create Recipe</button>
                        </div>
                </form>
            </div>
    )

}