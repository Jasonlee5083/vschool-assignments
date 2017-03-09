var peopleInNeed = {
    name: "Bob",
    age: 35,
    possiblePlaceToGo: ["Cal", "Utah"],
    familyMembers: [
         {
            name : "Sarah",
            age : 34,
            iskid : false,
            thingsNeeded : ["watch","Computer"],
            Birthday : function() {
                console.log(familyMembers.age++ ); 
            }
        },
                 {
            name : "Adam",
            age : 7,
            iskids : true,
            thingsNeeded : ["Clothes","Toys"],
            Birthday : function() {
                console.log(familyMembers.age++ ); 
            }
        },
        
         {
            name : "Paul",
            age : 5,
            iskid : true,
            thingsNeeded : ["shoes","Toys"],
            Birthday : function() {
                console.log(familyMembers.age++ ); 
            }
        },
        
         {
            name : "Ann",
            age : 2,
            iskid : true,
            thingsNeeded : ["Toys","books"],
            Birthday : function() {
                console.log(familyMembers.age++ ); 
            }
        }
        
        
    ]
}

//console.log(peopleInNeed);

  peopleInNeed.possiblePlaceToGo.push("Texas");
  peopleInNeed.lastName = " Smith " ;
  peopleInNeed.familyMembers[0].hobby = " Painting " ;

console.log(peopleInNeed);
console.log(peopleInNeed.familyMembers[1]);






