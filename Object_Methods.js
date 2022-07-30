
const person = {
    firstName: 'mit ',
    lastName: 'vasoya',
    contactNo: "9099783424",
    isAvailable:true,
    showPersonDetails() {
        const accepting = this.isAvailable ? "Yes he is." : "Nope, he is not.";
        document.write("The "+ this.firstName +" "+ this.lastName +" ("+this.position+") - "+ this.contactNo +" is available:"+ accepting+" age of a founder is:"+ this.age);
    }
};
try{

const founder = Object.create(person);
founder.position = "Founder & Executive Chairman";
founder.showPersonDetails();

const coFounder=Object.create(founder);
coFounder.showPersonDetails();

const coFounder2=Object.create(coFounder);
founder.age = 21;
coFounder.showPersonDetails();
}
catch (err) {
    document.write(err);
  }

const roles = {
	founder: 'mit vasouya',
	coFounder: 'mit vasoya',
	managingDirector: 'jenish',
};


const keys = Object.keys(roles);
document.write("<br/>"+keys);


const values = Object.values(roles);
document.write("<br/>"+values);


Object.keys(roles).forEach(key => {
    let value = roles[key];
    document.write("<br/>"+key+":"+value);
});


const technicalRoles = {
	js: 'mit vasoya',
	php: 'mit vasoya',
	mobileApps: 'jenish',
};


const nestedRoles = Object.entries(technicalRoles);
document.write("<br/>"+nestedRoles);


nestedRoles.forEach(nestedRole => {
    let key = nestedRole[0];
    let value = nestedRole[1];

    document.write("<br/>"+key+":"+value);
});


const personName = {
    firstName: 'mit',
    lastName: 'vasoya'
};


const personRole = {
    designation: 'Assistent Professor',
    company: 'silver'
};

const profile = Object.assign(personName, personRole);
document.write("<br/>"+JSON.stringify(profile));


const profileSpread = {...personName, ...personRole}
document.write("<br/>"+JSON.stringify(profileSpread));



const user = {
	username: 'mitvasoya957@gmail.com',
	password: 'XYZ123abc'
};


const newUser = Object.freeze(user);

newUser.password = '*******';
newUser.active = true;

document.write("<br/>"+JSON.stringify(newUser));



const userRecord = {
	username: 'mitvasoya957@gmail.com',
	password: 'XYZ123abc'
};


const newUserRecord = Object.seal(userRecord);

newUserRecord.password = '*******';
newUserRecord.active = true;

document.write("<br/>"+JSON.stringify(newUserRecord)+"<br/>");


const persons = ['ABC', 'DEF', 'GHI', 'JKL'];
document.write("<br/>"+Object.getPrototypeOf(persons)===Array.prototype);
