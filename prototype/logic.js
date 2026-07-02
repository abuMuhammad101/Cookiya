import { RECIPES } from './data';

export function missingIngredients(recipe, pantry) {
  return recipe.ingredients.filter((i) => !i.staple && !pantry[i.key]);
}

export function haveCount(recipe, pantry) {
  const trackable = recipe.ingredients.filter((i) => !i.staple);
  return { have: trackable.length - missingIngredients(recipe, pantry).length, total: trackable.length };
}

function seededShuffle(arr, seedStr) {
  let seed = 0;
  for (let i = 0; i < seedStr.length; i++) seed = (seed * 31 + seedStr.charCodeAt(i)) >>> 0;
  function rand() {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  }
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Builds today's order once per day, ranked so ready-to-cook dishes float to the top.
export function buildTodayQueue(pantry) {
  const todayKey = new Date().toISOString().slice(0, 10);
  const shuffled = seededShuffle(RECIPES, todayKey);
  const scored = shuffled.map((r) => ({ r, miss: missingIngredients(r, pantry).length }));
  scored.sort((a, b) => a.miss - b.miss);
  return { queue: scored.map((x) => x.r.id), queueDate: todayKey };
}

export function getRecipe(id) {
  return RECIPES.find((r) => r.id === id);
}
