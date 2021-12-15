import axios from "axios"
import { httpService } from "./http.service"

var gReviews = [
    {
        txt: 'Hi there',
        email: 'tal.bahat2@gmail.com',
        imgUrl: '',
    },
    {
        txt: 'Hello',
        email: 'gilro79@gmail.com',
        imgUrl: '',
    },
    {
        txt: 'Hello again',
        email: 'yaakovmargalit@gmail.com',
        imgUrl: '',
    },
]

export const reviewService = {
    query,
    add,
}

async function query (filterBy) {
    return await httpService.get('review', filterBy);
    // return gReviews;
}

async function add(review) {
    return await httpService.post('review', review);
}