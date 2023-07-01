let cont = document.querySelector(".container");
let subBtn = document.querySelector(".btn");
let okBtn = document.querySelector(".ok");
let msgDiv = document.querySelector(".msg-box");
let output = document.querySelector(".p1");
let dob = document.querySelector("#dob");
let name = document.querySelector("#name").value;


    const allNumbers = [1,2,3,4,5,6,7,8,9];
    const one = {
      role : "king",
      friends : [1,2,3,5,6,9],
      enemy : [8],
      neutral : [4,7]
    };
    const two = {
      role : "queen",
      friends : [1,2,3,5],
      enemy : [8,4,9],
      neutral : [7,6]
    };
    const three = {
      role : "teacher(god)",
      friends : [1,2,3,5,7],
      enemy : [6],
      neutral : [4,8,7,9]
    };
    const four = {
      role : "mysterious",
      friends : [1,5,7,6,4,8],
      enemy : [2,9,4,8],
      neutral : [3]
    };
    const five = {
      role : "prince",
      friends : [1,2,3,5,6],
      enemy : [],
      neutral : [4,7,8,9]
    };
    const six = {
      role : "teacher(devil)",
      friends : [1,5,6,7],
      enemy : [3],
      neutral : [2,4,8,9]
    };
    const seven = {
      role : "saint",
      friends : [1,3,5,4,6],
      enemy : [],
      neutral : [8,2,7,9]
    };
    const eight = {
      role : "judge",
      friends : [5,3,6,7,4,8],
      enemy : [1,2,4,8],
      neutral : [9]
    };
    const nine = {
      role : "commander",
      friends : [1,3,5],
      enemy : [4,2],
      neutral : [9,7,6,8]
    };

  
	subBtn.addEventListener("click", event => {
		
  	  if(name.value == "" && dob.value == ""){alert("Please Enter Or Date");}
  	  else{msgDiv.style.display = "flex";}
      cont.style.filter = "blur(100px)";
	    
      var dateInput = dob.value;
      var dateArray = dateInput.split("-");
      
      var day = dateArray[2];
      var month = dateArray[1];
      var year = dateArray[0];
      
      // Calculate mNum
      function sumToOneDigit(number) {
      var sum = 0;
      while (number > 0 || sum > 9) {
        if (number === 0) {
          number = sum;
          sum = 0;
        }
        sum += number % 10;
        number = Math.floor(number / 10);
      }
      return sum;
      }
      var mNum = day.length === 2 ? sumToOneDigit(parseInt(day[0]) + parseInt(day[1])) : day;
      
      // Calculate bNum
      var sum = sumToOneDigit(parseInt(day) + parseInt(month) + parseInt(year));
      var bNum = sum;
      
      // Output the results
      output.innerHTML = mNum; 
      console.log("bNum: " + bNum + " mNum: " + mNum);
    
      switch(mNum){
      case 1: 
        mNum = one;
        break;
      case 2: 
        mNum = two;
        break;
      case 3: 
        mNum = three;
        break;
      case 4: 
        mNum = four;
        break;
      case 5: 
        mNum = five;
        break;
      case 6: 
        mNum = six;
        break;
      case 7: 
        mNum = seven;
        break;
      case 8: 
        mNum = eight;
        break;
      case 9: 
        mNum = nine; 
        break;
      default: 
        alert("Enter a valid Date");
      } 
      switch(bNum){
      case 1: 
        bNum = one;
        break;
      case 2: 
        bNum = two;
        break;
      case 3: 
        bNum = three;
        break;
      case 4: 
        bNum = four;
        break;
      case 5: 
        bNum = five;
        break;
      case 6: 
        bNum = six;
        break;
      case 7: 
        bNum = seven;
        break;
      case 8: 
        bNum = eight;
        break;
      case 9: 
        bNum = nine; 
        break;
      default: 
        alert("Enter a valid Date");
      } 
      let lNums1 = [];
      let lNums2 = [];
      switch(mNum){
      case one: 
        lNums1 = allNumbers.filter(item => !one.enemy.includes(item) && !one.neutral.includes(item));
        break;
      case two: 
        lNums1 = allNumbers.filter(item => !two.enemy.includes(item) && !two.neutral.includes(item));
        break;
      case three: 
        lNums1 = allNumbers.filter(item => !three.enemy.includes(item) && !three.neutral.includes(item));
        break;
      case four: 
        lNums1 = allNumbers.filter(item => !four.enemy.includes(item) && !four.neutral.includes(item));
        break;
      case five: 
        lNums1 = allNumbers.filter(item => !five.enemy.includes(item) && !five.neutral.includes(item));
        break;
      case six: 
        lNums1 = allNumbers.filter(item => !six.enemy.includes(item) && !six.neutral.includes(item));
        break;
      case seven: 
        lNums1 = allNumbers.filter(item => !seven.enemy.includes(item) && !seven.neutral.includes(item));
        break;
      case eight: 
        lNums1 = allNumbers.filter(item => !eight.enemy.includes(item) && !eight.neutral.includes(item));
        break;
      case nine: 
        lNums1 = allNumbers.filter(item => !nine.enemy.includes(item) && !nine.neutral.includes(item));
        break;
      }
      switch(bNum){
      case one: 
        lNums2 = allNumbers.filter(item => !one.enemy.includes(item) && !one.neutral.includes(item));
        break;
      case two: 
        lNums2 = allNumbers.filter(item => !two.enemy.includes(item) && !two.neutral.includes(item));
        break;
      case three: 
        lNums2 = allNumbers.filter(item => !three.enemy.includes(item) && !three.neutral.includes(item));
        break;
      case four: 
        lNums2 = allNumbers.filter(item => !four.enemy.includes(item) && !four.neutral.includes(item));
        break;
      case five: 
        lNums2 = allNumbers.filter(item => !five.enemy.includes(item) && !five.neutral.includes(item));
        break;
      case six: 
        lNums2 = allNumbers.filter(item => !six.enemy.includes(item) && !six.neutral.includes(item));
        break;
      case seven: 
        lNums2 = allNumbers.filter(item => !seven.enemy.includes(item) && !seven.neutral.includes(item));
        break;
      case eight: 
        lNums2 = allNumbers.filter(item => !eight.enemy.includes(item) && !eight.neutral.includes(item));
        break;
      case nine: 
        lNums2 = allNumbers.filter(item => !nine.enemy.includes(item) && !nine.neutral.includes(item));
        break;
      }
      let lnumsCombination = [...lNums1, ...lNums2];

      let luckyNumbers = [...new Set(lnumsCombination)];
      output.innerHTML = `Hello ${name} Your Lucky Numbers Are ${luckyNumbers}`
	})

	okBtn.addEventListener("click", event =>{
		msgDiv.style.display = "none";
    cont.style.filter = "blur(0px)";

	})

    
