import { v4 as uuid } from "uuid";
import { Categories } from "./Interface";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories: Categories[] = [
  {
    _id: uuid(),
    categoryName: "General Knowledge",
    description: "Random questions related to Games",
  },
  {
    _id: uuid(),
    categoryName: "Action",
    description: "Random questions related to Action Games",
  },
  {
    _id: uuid(),
    categoryName: "RPG",
    description: "Random questions related to RPG Games",
  },
];
