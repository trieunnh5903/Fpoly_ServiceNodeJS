const data = [{
    "_id": 1,
    "name": "Zed"
}, {
    "_id": 2,
    "name": "Elianore"
}, {
    "_id": 3,
    "name": "Ogdon"
}, {
    "_id": 4,
    "name": "Michaella"
}, {
    "_id": 5,
    "name": "Tiertza"
}, {
    "_id": 6,
    "name": "Meggy"
}, {
    "_id": 7,
    "name": "Celeste"
}, {
    "_id": 8,
    "name": "Chas"
}, {
    "_id": 9,
    "name": "Jacob"
}, {
    "_id": 10,
    "name": "Shelden"
}]

const getAllCategories = async () => {
    try {
        return data
    } catch (error) {
        console.log("getAllCategories : " + error)
    }
}

module.exports = {getAllCategories};