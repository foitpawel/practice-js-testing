export default class User {
  constructor({email, password}) {
    this.email=email;
    this.password=password;
    this.validateEmail();
    this.validatePassword();
    this.login();
  }

  getEmail() {return this.email}
  getPassword() {return this.password}

  validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(this.email)) {
      throw new Error('Invalid email address');
    }
  }

  validatePassword() {
    if(this.password.length < 4) {
      throw new Error('Invalid password');
    }
  }

  login() {
    if(this.email.includes('devmentor.pl')) return true
    else return false
  }
};
