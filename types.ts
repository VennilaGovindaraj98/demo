

export interface user {
  users: User[]
}

export interface User {
  id:       number;
  name:     string;
  username: string;
  email:    string;
  address:  Address;
  phone:    string;
  website:  string;
  company:  Company;
}

export interface Address {
  street:  string;
  suite:   string;
  city:    string;
  zipcode: string;
  geo:     Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name:        string;
  catchPhrase: string;
  bs:          string;
}




export type CakeAction = { 
  action: {
    type: String
  }
}

export type state = {
  numOfCakes: number
}


export interface stateParams {
   state:
    {
      numOfCakes: number
    }
}

export interface CakeProps {
  props: {
    addCake: ()=> any
    buycake: () => any
    numOfCakes: number
     
  }
  
}

export interface stateParams  {
  numOfCakes: number
}


