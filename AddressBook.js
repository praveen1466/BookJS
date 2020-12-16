class AddessBook{
    constructor(...param){
        this.firstname=param[0];
        this.lastname=param[1];
        this.city=param[2];
        this.state=param[3];
        this.pincode=param[4];
        this.phoneNumber=param[5];
        this.email=param[6];
    }
    
    //firstname
    get(){
        return this._firstname;
    }
    set(firstname){
        let regX = RegExp("^[A-Z]{1}[a-z]{2,}");
        if(regX.test(firstname));{
            this._firstName=firstName;
        }
    }
    
    //lastname
    get(){
        return this._lastname;
    }
    set(lastname){
        let regX = RegExp("^[A-Z]{1}[a-z]{2,}");
        if(regX.test(lastname)){
            this._lastname=lastname;
        }
    } 
    
    //city
    get(){
        return this._city;
    }
    set(city){
        let regX = RegExp("^[A-Z]{1}[a-z]{2,}");
        if(regX.test(city)){
            this._city=city;
        }  
    }
    
    //state
    get(){
        return this._state;
    }
    set(state){
        let regX = RegExp("^[A-Z]{1}[a-z]{2,}");
        if(regX.test(state)){
            this._state=state;
        }
    }
    
    
    //pincode
    get(){
        return this._pincode;
    }
    set(pincode){
        let regX = RegExp("^[0-9]{6}$")
        if(regX.test(pincode)){
        this._pincode=pincode}
    }
    
    //phone number
    get(){
        return this._phonenNumber;
    }
    set(phoneNumber){
        let regX = RegExp("^[6-9]{1}[0-9{9}$");
        if(regX.test(phoneNumber)){
            this._phoneNumber=phoneNumber;
        }
    }
    
    //email
    get(){
        return this._email;
    }
    set(email){
        let regX = RegExp("^[a-zA-Z0-9]?[.?!#$&]*[A-za-z0-9][@][a-z]{6}[.][a-z]{2,}[.]*[a-z]*$");
        if(regX.test(email)){
            this._email=email;
        }
    }
    
    toString(){
        return "First Name="+this.firstname+", last name="+this.lastname+" city="+this.city+", state="+this.state+", pincode="+this.pincode+", phone Number="+this.phoneNumber+", email="+this.email;
    }
}

//UC3
let addressBookArray = new Array();
addressBookArray.push(new AddessBook("praveen","sakinala","hyderbad","telangana",508011,8181818181,"praveen@gmail.com"));
addressBookArray.push(new AddessBook("naveen","sakinala","hyderbad","telangana",508011,8181818182,"praveen@gmail.com"));
addressBookArray.push(new AddessBook("rajesh","sakinala","hyderbad","telangana",508011,8181818183,"praveen@gmail.com"));
console.log("Address Book details: "+addressBookArray.toString());


//UC4
console.log("\nFinding existing contact number: ");
let indexNum = addressBookArray.findIndex(phone => phone.phoneNumber == 8181818183);
addressBookArray[indexNum].phoneNumber=9191919191;
console.log(addressBookArray.toString());

//UC5
console.log("\nFinding person contact: ");
let nameindex = addressBookArray.findIndex(name => name.firstName=="naveen");
addressBookArray.splice(nameindex,nameindex);
console.log(addressBookArray.toString());

//UC6
let totalContacts = addressBookArray.length;
console.log("Total Contacts: ", totalContacts);