import paneer from '@/assets/paneer-tikka.jpg';
import biryani from '@/assets/vegetable-biryani.jpg';
import dal from '@/assets/dal-tadka.jpg';
export type Dish = { id:string; name:string; description:string; price:number; category:string; cuisine:string; calories:number; protein:number; carbohydrates:number; fat:number; spice_level:string; is_vegetarian:boolean; is_vegan:boolean; is_available:boolean; preparation_time:number; average_rating:number; allergens:string[]; ingredients:string[]; dietary_tags:string[]; meal_types:string[]; image_url:string|null };
export type Preferences = { food_type:string; cuisines:string[]; spice_level:string; dietary_requirements:string[]; allergies:string[]; budget_min:number; budget_max:number; meal_type:string };
export const initialPreferences:Preferences = {food_type:'No Preference',cuisines:[],spice_level:'Medium',dietary_requirements:[],allergies:[],budget_min:0,budget_max:1000,meal_type:'Dinner'};
export function dishImage(dish:Dish) { return dish.image_url || (/paneer|tikka/i.test(dish.name) ? paneer : /biryani|rice|noodles|dosa/i.test(dish.name) ? biryani : dal); }
const spice=['No Spice','Mild','Medium','Spicy','Very Spicy'];
export function rankDishes(dishes:Dish[],p:Preferences, favoriteIds:string[]=[]){
 return dishes.filter(d=>d.is_available && !d.allergens.some(a=>p.allergies.includes(a)) && (p.food_type==='No Preference' || (p.food_type==='Vegan'?d.is_vegan:p.food_type==='Vegetarian'?d.is_vegetarian && !d.allergens.includes('Eggs'):p.food_type==='Eggetarian'?d.is_vegetarian:!d.is_vegetarian)) && !p.dietary_requirements.some(r=>r==='Gluten Free'&&d.allergens.includes('Gluten') || r==='Dairy Free'&&d.allergens.includes('Milk/Dairy')))
 .map(d=>{
  const cuisine=p.cuisines.length===0||p.cuisines.includes(d.cuisine)?100:30;
  const budget=d.price>=p.budget_min&&d.price<=p.budget_max?100:d.price>p.budget_max?Math.max(0,100-(d.price-p.budget_max)/3):80;
  const spiceScore=Math.max(0,100-Math.abs(spice.indexOf(d.spice_level)-spice.indexOf(p.spice_level))*27);
  const nutrition=p.dietary_requirements.length===0?85:p.dietary_requirements.every(r=>d.dietary_tags.includes(r))?100:40;
  const meal=d.meal_types.includes(p.meal_type)?100:40;
  const diet=p.dietary_requirements.length===0?100:Math.round(p.dietary_requirements.filter(r=>d.dietary_tags.includes(r)).length/p.dietary_requirements.length*100);
  const score=Math.round(meal*.25+diet*.20+cuisine*.15+budget*.15+spiceScore*.10+nutrition*.05+(favoriteIds.includes(d.id)?100:65)*.05+(Number(d.average_rating)/5*100)*.05);
  const reasons=[p.food_type!=='No Preference' ? `${p.food_type.toLowerCase()} choice` : null,cuisine===100&&p.cuisines.length?`${d.cuisine} cuisine`:null,budget===100?'within your budget':null,spiceScore>=73?`${d.spice_level.toLowerCase()} spice`:null,...p.dietary_requirements.filter(r=>d.dietary_tags.includes(r)).map(r=>r.toLowerCase()),meal===100?`suits ${p.meal_type.toLowerCase()}`:null].filter(Boolean);
  return {dish:d,score,explanation:reasons.length?`Recommended because it's ${reasons.join(', ')}.`:`A well-rated ${d.cuisine} dish to explore.`};
 }).sort((a,b)=>b.score-a.score);
}
