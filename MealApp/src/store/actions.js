import axiosClient from "../axiosClient";
import {setSearchMeals} from "./mutations.js";

export function serchMeals({commit}, keyWord){
    axiosClient.get(`search.php?s=${keyWord}`)
        .then(({data}) => {
            commit('setSearchMeals', data.meals)
        })
}

export function detaiInformation(id){
    axiosClient.get(`lookup.php?i=${id}`).then()
}