let stolenItems = [
  {
   socks: 7,
   spoons: 20,
   nutella_jar: 5,
   keys: 0,
   shoelaces: 4,
   rotisserie_chicken:1
 },
 
 {
   socks: 2,
   spoons: 2,
   nutella_jar: 0,
   keys: 0,
   shoelaces: 4, 
   rotisserie_chicken: 2
 },
   
 {
   socks: 0,
   spoons: 0,
   nutella_jar: 0,
   keys: 0,
   shoelaces: 0,
   rotisserie_chicken: 0
 },
 
   {
   socks: 2,
   spoons: 10,
   nutella_jar: 4,
   keys: 4,
   shoelaces: 12,
   rotisserie_chicken: 0
 }, 
   
 {
   socks: 12,
   spoons: 17,
   nutella_jar: 0,
   keys: 2,
   shoelaces: 0,
   rotisserie_chicken: 0
 },
 
 {
   socks: 0,
   spoons: 0,
   nutella_jar: 2,
   keys: 0,
   shoelaces: 0,
   rotisserie_chicken: 0
 }, 
   
 {
   socks: 2,
   spoons: 2,
   nutella_jar: 0,
   keys: 4,
   shoelaces: 1,
   rotisserie_chicken: 0
 }, 
   
 {
   socks: 43,
   spoons: 10,
   nutella_jar: 50,
   keys: 2,
   shoelaces: 0,
   rotisserie_chicken: 0
 }, 
 
 {
   socks: 0,
   spoons: 2,
   nutella_jar: 0,
   keys: 3,
   shoelaces: 0,
   rotisserie_chicken: 0
 }, 
 {
   socks: 0,
   spoons: 0,
   nutella_jar: 0,
   keys: 0,
   shoelaces: 14,
   rotisserie_chicken: 0
 }
]
let item_list=["socks", "spoons", "nutella jar","keys","shoelaces","rotisserie chickesn"]

// PROBLEM ONE
// Given an object of the stolen items for a household, return the total amount of items stolen (number). If nothing was robbed, return the string "Lucky you!”.

function houseTotal(obj) {


  return (obj.socks+obj.spoons+obj.nutella_jar+obj.keys+obj.shoelaces+obj.rotisserie_chicken)
  
  }
  // uncomment these out to test it out
  console.log(houseTotal(stolenItems[0])); 
  console.log(houseTotal(stolenItems[1]));
  console.log(houseTotal(stolenItems[2])); 
   
  // PROBLEM TWO
  // Given an object of the stolen items for a household and a string in lowercase representing a specific item, return true if that item was stolen and false if it was not. 
  
  function isStolen(obj, item) {
  let house_objects=[] 
  return([item_list.indexOf(item)]>0)
  }
  // uncomment these out to test it out
  console.log(isStolen(stolenItems[0], "keys")); 
  console.log(isStolen(stolenItems[1], "socks"));
  console.log(isStolen(stolenItems[2], "spoons")); 
  
  
  // EXTRA CREDIT!!!!! PROBLEM THREE
  // Given an array of objects representing an entire neighborhood, return the most frequently stolen item. This is NOT the item that has been stolen from the most households, this is the item that has been stolen the most times TOTAL. 
  
  function neighborhoodTotal(arr) {
    let item_numbers=[0,0,0,0,0,0]
    let total=0
    for (let obj=0; obj<arr.length;obj++){
      let house_objects=[arr[obj].socks,arr[obj].spoons,arr[obj].nutella_jar,arr[obj].keys,arr[obj].shoelaces,arr[obj].rotisserie_chicken]
      console.log(house_objects)
      for (let j=0; j<item_numbers.length;j++){
        item_numbers[j]+=house_objects[j]
      }
    } 
    console.log(item_numbers[0]+" "+item_numbers[1]+" "+item_numbers[2]+" "+item_numbers[3]+" "+item_numbers[4]+" "+item_numbers[5]+" ")
    for (let i=0;i<item_numbers.length;i++){
      if (item_numbers[i]>item_numbers[total]){
        total=i
      }
    }
    total=item_list[total]
    return total; 
    
  }
  console.log(neighborhoodTotal(stolenItems))
 console.log("I think it's the foxes because they are the tonly one to wear clothes")

