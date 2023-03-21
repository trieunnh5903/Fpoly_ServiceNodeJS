const data = [{
    "id": 1,
    "name": "Zed"
}, {
    "id": 2,
    "name": "Elianore"
}, {
    "id": 3,
    "name": "Ogdon"
}, {
    "id": 4,
    "name": "Michaella"
}, {
    "id": 5,
    "name": "Tiertza"
}, {
    "id": 6,
    "name": "Meggy"
}, {
    "id": 7,
    "name": "Celeste"
}, {
    "id": 8,
    "name": "Chas"
}, {
    "id": 9,
    "name": "Jacob"
}, {
    "id": 10,
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