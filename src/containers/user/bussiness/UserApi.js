import {faker} from '@faker-js/faker'

export const getUsers = (numRecords) =>  Array(numRecords).fill(1).map(faker.helpers.createCard)