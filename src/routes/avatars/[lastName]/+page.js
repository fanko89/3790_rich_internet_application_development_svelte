//npm install --save-dev @faker-js/faker  to get random names api
import { faker } from '@faker-js/faker'

export async function load({ params }) {
    
    const {lastName} = params // destructoring 
    const firstName  = faker.name.firstName()
    console.log(params)
    return{
        lastName,
        firstName: faker.name.firstName(),
        avatar:`https://avatars.dicebear.com/api/big-smile/${lastName}.svg`,
        title: faker.name.jobTitle(),
        phone: faker.phone.number(),
        email: faker.internet.email(`${firstName}`, `${lastName}`)
    
    }
}