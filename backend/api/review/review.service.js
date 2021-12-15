const dbService = require('../../services/db.service')
const ObjectId = require('mongodb').ObjectId
const asyncLocalStorage = require('../../services/als.service')

async function query(filterBy = {}) {
    try {
        var re = new RegExp(`${filterBy[0]}`);
        console.log('re', re);
        // const criteria = filterBy;
        const collection = await dbService.getCollection('review')
        if(filterBy[0]) var reviews = await collection.find({"txt":re}).toArray()
        else var reviews = await collection.find().toArray()
        // const reviews = await collection.find({"txt":/o/}).toArray()
        return reviews
    } catch (err) {
        logger.error('cannot find reviews', err)
        throw err
    }

}

async function remove(reviewId) {
    try {
        const store = asyncLocalStorage.getStore()
        const { userId, isAdmin } = store
        const collection = await dbService.getCollection('review')
        // remove only if user is owner/admin
        const criteria = { _id: ObjectId(reviewId) }
        if (!isAdmin) criteria.byUserId = ObjectId(userId)
        await collection.deleteOne(criteria)
    } catch (err) {
        logger.error(`cannot remove review ${reviewId}`, err)
        throw err
    }
}


async function add(review) {
    try {
        // peek only updatable fields!
        // const reviewToAdd = {
        //     byUserId: ObjectId(review.byUserId),
        //     aboutUserId: ObjectId(review.aboutUserId),
        //     txt: review.txt
        // }
        const collection = await dbService.getCollection('review')
        // await collection.insertOne(reviewToAdd)
        await collection.insertOne(review)
        return review;
        // return reviewToAdd;
    } catch (err) {
        logger.error('cannot insert review', err)
        throw err
    }
}

function _buildCriteria(filterBy) {
    const criteria = {}
    return criteria
}

module.exports = {
    query,
    remove,
    add
}


