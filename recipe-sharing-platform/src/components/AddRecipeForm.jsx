import React, { useState, useEffect } from "react";
import data from "../data.json"
import { Link } from "react-router-dom";

const AddRecipeForm = () => {
    const [recipe, setRecipe] = useState({
        title: "",
        image: "",
        summary: "",
        ingredients: "",
        steps: ""

    })

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        if (isSubmitted) {
            alert("Recipe added successfully!")
            let timer = setTimeout(() => {
                setIsSubmitted(false);
            }, 4000)
            return () => {
                clearTimeout(timer)
            }
        }
    }, [isSubmitted])


    function handleChange(e) {
        const validate = e.target.value;
        const { value, name } = e.target;

        setRecipe(prevRecipe => (
            {
                ...prevRecipe,
                [name]: value,
            }
        ))

    }

    function handleSubmit(e) {
        e.preventDefault();
        const newErrors = {};

        
        if (!recipe.title) newErrors.title = 'Title is required';
        if (!recipe.ingredients || recipe.ingredients.split('\n').length < 2) newErrors.ingredients = 'Please provide at least two ingredients';
        if (!recipe.steps) newErrors.steps = 'Instructions are required';
        if (!recipe.image) newErrors.image = 'Image url is required';
        if (!recipe.summary) newErrors.summary = 'Summary is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setIsSubmitted(false);
        } else {
            const recipeId = data.length + 1;
            data.push({ ...recipe, id: recipeId });
           
            setErrors({});
            setIsSubmitted(true);
            setRecipe({
                title: "",
                image: "",
                summary: "",
                ingredients: "",
                steps: ""

            });
        }
    }
    return (
        <div className="bg-lime-50 p-3 shadow-lg sm:w-full md:w-1/2 m-auto mt-3 rounded-sm">
          <form
            className="flex flex-col place-items-center gap-5 mt-2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-solid border-2 border-amber-600 rounded-md p-2"
            />
            {errors.title && <span className="text-orange-600">{errors.title}</span>}
            <input
              type="text"
              name="summary"
              id="summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="border-solid border-2 border-amber-600 rounded-md p-2"
            />
            {errors.summary && (
              <span className="text-orange-600">{errors.summary}</span>
            )}
            <textarea
              name="ingredients"
              id="ingredients"
              cols="45"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="border-solid border-2 border-amber-600 rounded-md p-2"
            />
            {errors.ingredients && (
              <span className="text-orange-600">{errors.ingredients}</span>
            )}
            <textarea
              name="instructions"
              id="instructions"
              cols="45"
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              className="border-solid border-2 border-amber-600 rounded-md p-2"
            />
            {errors.steps && <span className="text-orange-600">{errors.steps}</span>}
            <button
              type="submit"
              className="bg-amber-50 text-neutral-50 rounded-lg p-3 font-bold"
            >
              Add Recipe
            </button>
          </form>
        </div>
      );
    }
    
    export default AddRecipeForm;