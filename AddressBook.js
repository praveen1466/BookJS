class AddessBook{
    constructor(...param){
        this.firstname=param[0];
        this.lastname=param[1];
        this.city=param[2];
        this.state=param[3];
        this.pincode=param[4];
        this.phonenNumber=param[5];
        this.email=param[6];
    }
    
    //firstname
    get(){
        return this.firstname;
    }
    set(firstName){
        this._firstName=firstName;
    }
     //lastname
    get(){
        return this.lastname;
    }
    set(lastname){
        this._lastname=lastname;
    }
    //city
    get(){
        return this.city;
    }
    set(city){
        this._city=city;
    }
    //state
    get(){
        return this.state;
    }
    set(city){
        this._state=state;
    }
    //pincode
    get(){
        return this.pincode;
    }
    set(city){
        this._pincode=picode;
    }
    //phone number
    get(){
        return this.phonenNumber;
    }
    set(city){
        this._phonenNumber=phonenNumber;
    }
    //email
    get(){
        return this.email;
    }
    set(city){
        this._email=email;
    }
    
    toString(){
        return "First Name="+this.firstname+", last name="+this.lastname+" city="+this.city+", state="+this.state+", pincode="+this.pincode+", phone Number="+this.phoneNumber+", email="+this.email;
    }
}
let book = new AddessBook("Praveen","Sakinala","Hyderabad","Telangana",420483,1234567890,"praveen@gmail.com");
console.log(book.toString());