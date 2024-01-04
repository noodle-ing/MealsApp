import axiosClient from "../axiosClient";
import {setSearchMeals} from "./mutations.js";

export function serchMeals({commit}, keyWord){
    axiosClient.get(`search.php?s=${keyWord}`)
        .then(({data}) => {
            commit('setSearchMeals', data.meals)
        })
}

export function serchMealByLetter({commit}, keyLetter){
    axiosClient.get(`search.php?f=${keyLetter}`)
        .then(({data}) => {
            commit('setSearchMeals', data.meals)
        })
}