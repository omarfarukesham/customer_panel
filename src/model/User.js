class User {
  constructor(data) {
    this.id = data.id;
    this.username = data.username;
    this.email = 'admin@soldfy.com';
    this.phone = data.phone;
    this.isVerified = data.isVerified;
    this.customer = data.customer;
  }
}

export default User;
