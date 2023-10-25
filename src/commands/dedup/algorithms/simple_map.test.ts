import SimpleMap from "./simple_map"
import KeepLast from "../strategies/keep_last"

const testScenario = [
    {
        "type" : "short_text",
        "_id" : "61e869d51137bc002545fede",
        "key" : "field_1",
        "name" : "Products Name"
    },
    {
        "type" : "paragraph_text",
        "_id" : "61e869d51137bc002545fee1",
        "name" : "Description",
        "key" : "field_4"
    }, 
    {
        "type" : "paragraph_text",
        "_id" : "61e869d51137bc002545fee2",
        "name" : "Description",
        "key" : "field_4"
    }, 
    {
        "type" : "currency",
        "_id" : "61e869d51137bc002545fee3",
        "name" : "Price",
        "key" : "field_5"
    }
]

const expects = [
    {
        "type" : "short_text",
        "_id" : "61e869d51137bc002545fede",
        "key" : "field_1",
        "name" : "Products Name"
    },
    {
        "type" : "paragraph_text",
        "_id" : "61e869d51137bc002545fee2",
        "name" : "Description",
        "key" : "field_4"
    }, 
    {
        "type" : "currency",
        "_id" : "61e869d51137bc002545fee3",
        "name" : "Price",
        "key" : "field_5"
    }
]

describe("SimpleMap", () => {
    test("Removes the duplicated elements by added them into a Map", () => {
        const result = SimpleMap(testScenario, KeepLast)
        expect(result).toEqual(expects)
    })
})