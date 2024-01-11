export type Street = {
    number: number,
    name: string,
}

export type Timezone = {
    offset: string,
    description: string
}

export type Coordinates = {
    latitude: string,
    longitude: string
}

export type Location = {
    street: Street,
    state: string,
    country: string,
    postcode: string
    coordinates: Coordinates
}

export type Name = {
    title: string,
    first: string,
    last: string,
}

export type Login = {
    uuid: string,
    username: string,
    password: string,
    salt: string,
    md5: string,
    sha1: string,
    sha256: string,
}

export type DOB = {
    date: string,
    age: string
}

export type Registered = {
    date: string,
    age: string
}

export type ID = {
    name: string,
    value: string | null
}

export type Picture = {
    large: string,
    medium: string,
    thumbnail: string,
}

export type User = {
    name: Name,
    cell: string,
    email: string,
    nat: string,
    gender: string,
    location: Location
    login: Login
    picture: Picture,
    id: ID,
    registered: Registered,
    dob: DOB,
}