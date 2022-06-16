import { v4 as uuid } from "uuid";
import { Quizzes, Mcqs } from "./Interface";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const quizzes: Quizzes[] = [
  {
    _id: "1b994852-ebea-11ec-8ea0-0242ac120002",
    title: "Old is Gold",
    totalScore: 20,
    mcqs: [
      {
        _id: "dddcd7a2-a479-482e-ae82-d55e2468534d",
        question: "What is Luigi's favourite food?",
        options: ["Sausages and mash", "Pizza", "Cheese toastie", "Roast beef"],
        answer: "Pizza",
      },
      {
        _id: "93664683-d515-44bf-80c4-cd52c279aeb6",
        question: "When was the Playstation 5 released?",
        options: ["Januart 2020", "June 2020", "November 2020", "January 2021"],
        answer: "November 2020",
      },
      {
        _id: "7e70f8e5-0760-4b5e-b833-38dab109ec54",
        question: "What was the first commercially successful video game?",
        options: ["Pong", "Donkey kong Country", "Super Mario Bros", "Shaq Fu"],
        answer: "Pong",
      },
      {
        _id: "7e70f8sd-0760-4b5e-b833-38dab109ec54",
        question: "What is the best-selling video game of all time? ",
        options: ["Red Dead Redemption 2", "Fifa", "Minecraft", "Call of Duty"],
        answer: "Minecraft",
      },
      {
        _id: "7e70f8sd-0760-4b5e-b833-38dabjs63c54",
        question: "What is a frag?",
        options: [
          "A cheat code",
          "A french bag",
          "The number of things you have killed in a game",
          "A burrowing marsupial that lives in the south Australian outback",
        ],
        answer: "The number of things you have killed in a game",
      },
    ],
    categoryName: "General Knowledge",
  },
  {
    _id: "1b99471c-ebea-11ec-8ea0-0242ac120002",
    title: "Only OG's can answer",
    totalScore: 20,
    mcqs: [
      {
        _id: "dasdas7a2-a479-482e-ae82-d55e246853d",
        question: "What is the armoured vehicle in Halo called? ",
        options: ["Sir Killalot", "Bashor", "Rocksteady", "Warthog"],
        answer: "Warthog",
      },
      {
        _id: "93664683-d515-44bf-80c4-cd52casdasb6",
        question: "What was Sonic the Hedgehog's original name?",
        options: [
          "Fast Blue Hedgehog",
          "Colin the Hedgehog",
          "Mr Needlemouse",
          "Steven",
        ],
        answer: "Mr Needlemouse",
      },
      {
        _id: "7e70f8e5-0840-4b5e-b833-38dab109ec54",
        question: "What is the name of Ratchet's killer robot friend?",
        options: ["Clank", "Clunk", "Bonk", "Bungo"],
        answer: "Clank",
      },
      {
        _id: "7e70f8sd-0760-4b5e-b8463-38dab109ec4",
        question: "What is the fictional language in The Sims?",
        options: ["Simian", "Simlish", "Simali", "Simento"],
        answer: "Simlish",
      },
      {
        _id: "7e70afasdsd-0760-4b5e-b833-38dabjs63",
        question: "How many Playstation 4 consoles have been sold?",
        options: ["5 million", "56 million", "62.5 million", "Over 102 millon"],
        answer: "Over 102 millon",
      },
    ],
    categoryName: "General Knowledge",
  },
  {
    _id: "1b9945fa-ebea-11ec-8ea0-0242ac120002",
    title: "GTA V",
    totalScore: 20,
    mcqs: [
      {
        _id: "1b993b5a-ebea-11ec-8ea0-0242ac120002",
        question: "Which company is publisher of Grand Theft Auto V?",
        options: ["Rockstar North", "Rockstar Games", "Blizzard", "EA Games"],
        answer: "Rockstar Games",
      },
      {
        _id: "1b993d76-ebea-11ec-8ea0-0242ac120002",
        question: "What year was the game released?",
        options: ["2013", "2014", "2012", "2011"],
        answer: "2012",
      },
      {
        _id: "1b993ed4-ebea-11ec-8ea0-0242ac120002",
        question: "With what character you start the game?",
        options: ["Michael", "Trevor", "Franklin", "None of these"],
        answer: "Michael",
      },
      {
        _id: "1b994258-ebea-11ec-8ea0-0242ac120002",
        question: "What was Trevor doing in the past?",
        options: [
          "He was a policeman",
          "He was a military pilot",
          "He was a soldier",
          "He was a doctor",
        ],
        answer: "He was a military pilot",
      },
      {
        _id: "1b9943a2-ebea-11ec-8ea0-0242ac120002",
        question: "What is the name of Michael's therapist?",
        options: [
          "Isiah Friedlander",
          "Steve Haines",
          "Isaac Penny",
          "Cris Formage",
        ],
        answer: "Isiah Friedlander",
      },
    ],
    categoryName: "Action",
  },
  {
    _id: "1b9944ce-ebea-11ec-8ea0-0242ac120002",
    title: "Red Dead Redemption 2",
    totalScore: 20,
    mcqs: [
      {
        _id: "1b994974-ebea-11ec-8ea0-0242ac120002",
        question: "What year Red Dead Redemption 2 is set in?",
        options: ["1881", "1887", "1893", "1899"],
        answer: "1899",
      },
      {
        _id: "1b994aa0-ebea-11ec-8ea0-0242ac120002",
        question: "Who is Leviticus Cornwall?",
        options: [
          "A sheriff from Ambarino",
          "A wealthy businessman",
          "A member of Van der Linde gang",
          "An agent of Pinkerton National Detective Agency",
        ],
        answer: "A wealthy businessman",
      },
      {
        _id: "1b994de8-ebea-11ec-8ea0-0242ac120002",
        question: "What gaming engine The RDR2 is based on?",
        options: ["Unity", "Unreal Engine", "RAGE", "CryEngine"],
        answer: "RAGE",
      },
      {
        _id: "1b994f14-ebea-11ec-8ea0-0242ac120002",
        question: "What breed of horse Duch van der Linde rides in The RDR2?",
        options: [
          "An Appaloosa with Brown Leopard coat",
          "A white Arabian horse",
          "Andalusian with dark bay coat",
          "An Albino horse",
        ],
        answer: "An Albino horse",
      },
      {
        _id: "1b994ffa-ebea-11ec-8ea0-0242ac120002",
        question: "Who killed Dutch's lover Annabelle in The Game?",
        options: [
          "Hosea Matthews",
          "Colm O'Driscoll",
          "Arthur Morgan",
          "Edgar Ross",
        ],
        answer: "Colm O'Driscoll",
      },
    ],
    categoryName: "Action",
  },
  {
    _id: "1b9950cc-ebea-11ec-8ea0-0242ac120002",
    title: "The Witcher 3 Wild Hunt",
    totalScore: 20,
    mcqs: [
      {
        _id: "1b9951a8-ebea-11ec-8ea0-0242ac120002",
        question: "Where does Geralt find a halfling's ear?",
        options: ["Novigrad", "Oxenfurt", "Crow's Perch", "Bald Mountain"],
        answer: "Oxenfurt",
      },
      {
        _id: "1b99527a-ebea-11ec-8ea0-0242ac120002",
        question: "Birna Bran is the mother of:",
        options: [
          "Harald Houndsnout",
          "Holger Blackhand",
          "Otrygg an Hindar",
          "Svanrige an Tuirseach",
        ],
        answer: "Svanrige an Tuirseach",
      },
      {
        _id: "1b99534c-ebea-11ec-8ea0-0242ac120002",
        question: "Phillipa's hideout is located in:",
        options: ["Olena's Grove", "Duen Hen", "Est Tayiar", "Lornruk"],
        answer: "Duen Hen",
      },
      {
        _id: "1b99541e-ebea-11ec-8ea0-0242ac120002",
        question: "White lilies are a symbol of:",
        options: ["Redania", "Temeria", "Skellige", "Scoia'tael"],
        answer: "Temeria",
      },
      {
        _id: "1b99564e-ebea-11ec-8ea0-0242ac120002",
        question: "Triss helps the Novigrad mages flee to where?",
        options: ["Kovir", "Aedirn", "Temeria", "Loc Muinne"],
        answer: "Aedirn",
      },
    ],
    categoryName: "RPG",
  },
];
