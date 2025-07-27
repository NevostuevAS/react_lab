// 1_7_2 Nested lists in one component
/*
  Создайте список рецептов из этого массива! Для каждого рецепта в массиве выведите его название в виде <h2> и список ингредиентов в виде <ul>. Это потребует вложения двух различных вызовов map.
*/

import { recipes } from './data';

export type Recipe = {
    id: string;
    name: string;
    ingredients: string[];
}

export default function RecipeList() {
    const reclist = recipes.map((recipe) => (
        <li key={recipe.id}>
            <h2>{recipe.name}</h2>
            <p>ingredients:</p>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </li>
    ));

    return (
        <div>
            <h1>Recipes</h1>
            <ul>{reclist}</ul>
        </div>
    );
}