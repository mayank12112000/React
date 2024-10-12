// 1 challenge
const nums = [1,3,55,22,44]
const evenOddSum = nums.reduce((acc,num)=>{
  if(num%2===0){
    return {...acc,even:acc.even +num}
  }else{
    return {...acc,odd:acc.odd + num}
  }
},{even:0,odd:0})
console.log(evenOddSum)
// 2 challenge
const numList = [
  { type: 'odd', payload: 1 },
  { type: 'odd', payload: 3 },
  { type: 'odd', payload: 55 },
  { type: 'even', payload: 22 },
  { type: 'even', payload: 44 },
 ]
 const evenOddSUm2 = numList.reduce((acc,numObj)=>{
  if(numObj.type=="odd"){
    return {...acc,odd:acc.odd + numObj.payload}
  }else{
    return {...acc,even:acc.even + numObj.payload}
  }
 },{even:0,odd:0})
 console.log(evenOddSUm2)
//   using switch
const usignSwitch = numList.reduce((acc,numObj)=>{
  switch(numObj.type){
    case "even":
      return {...acc,even:acc.even + numObj.payload}
      case "odd":
      return {...acc,odd:acc.odd + numObj.payload}
      
      
  }
},{even:0,odd:0})
console.log(usignSwitch)