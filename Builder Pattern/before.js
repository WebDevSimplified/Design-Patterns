class Address {
  constructor(zip, street) {
    this.zip = zip
    this.street = street
  }
}

class User {
  constructor(name, age, phone, address) {
    this.name = name
    this.age = age
    this.phone = phone
    this.address = address
  }
}

const user = new User('Bob', undefined, undefined, new Address('12345', 'Main St.'))