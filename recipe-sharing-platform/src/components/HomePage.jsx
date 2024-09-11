import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import data from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState();
  

  useEffect(() => {
    setRecipes(data);
  }, []);

return (
    <div className="place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
      {recipes?.map((recipe) => (
        <Link className="flex justify-center" to={`/recipe/${recipe.id}`} >
          <div
            key={recipe.id}
            className=" shadow-xl bg-neutral-50 m-5 rounded-lg">
            <h1 className="font-mono font-bold text-blue-600 mx-2">{recipe.title}</h1>
            <p className="italic text-black-600 p-2">{recipe.summary}</p>
            <img
              src={recipe.image} className="m-auto py-5 hover:scale-125 transition ease-in-out duration-500"
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomePage;