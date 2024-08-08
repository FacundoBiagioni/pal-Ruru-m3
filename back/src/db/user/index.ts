import { IUser } from "../../types/user";

export const users : IUser[] = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@mail.com",
        birthdate: new Date ("1990-01-01"),
        dni_number: 12345678,
        appointments: [],
        credentialsID: 1,
    },
    {
        id: 1,
        name: "Juan Perez",
        email: "Juan.Perez@mail.com",
        birthdate: new Date ("1995-01-01"),
        dni_number: 12345679,
        appointments: [],
        credentialsID: 2,
    },
]