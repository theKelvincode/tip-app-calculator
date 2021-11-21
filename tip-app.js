
const tipBtns = document.querySelectorAll('.btn');
const amountInput = document.querySelector('#bill-amount');
const feedback = document.querySelector('.feedback');
const feedback_2 = document.querySelector('.feedback-2');
const feedback_custom = document.querySelector('.feedback-custom');
const numberInput = document.querySelector('.number-input');
const peopleInput = document.querySelector('.people-number');
const tipFigure = document.querySelector('.amount-figure');
const totalFigure = document.querySelector('.total-figure');
const customPercent = document.querySelector('.custom-percent')
const resetBtn = document.querySelector('.reset')

// The bill input event listener -- also checks to make sure that figure
//  above 0 is entered.
amountInput.addEventListener('input', function(e){
  let value = e.target.value;
  if (value < 1 ){
    e.preventDefault();
    amountInput.classList.add('red-input');
    feedback.textContent = 'Bill amount can NOT be less than 1';
  }
  else {
    feedback.textContent = '';
    amountInput.classList.remove('red-input');
    // let currentValue = `$${value}`;
  }
})
// end of bill input ...


// number of people input event listener -- also checks that figure above 0 is entered.
peopleInput.addEventListener('input', function(e){
  const value = e.target.value;
  if (value < 1 ){
    e.preventDefault();
    peopleInput.classList.add('red-input');
    feedback_2.textContent = 'Number of people can NOT be less than 1';
  } else {
    feedback_2.textContent = '';
    peopleInput.classList.remove('red-input');
  };
});
// end of people input event listener...


// event listener for % buttons 
tipBtns.forEach(function (btn){
  btn.addEventListener('click', function(e){
    let btnValue = e.target.textContent;
    let peopleInputValue = peopleInput.value;
    let percentNum = btnValue;

    percentageNum = function (value) {
      
    }
    console.log(percentageNum(btnValue))

    tipFigure.innerHTML = `$`;

    if (peopleInputValue < 1){
      feedback_2.textContent = 'Enter number of people!';
      peopleInput.classList.add('red-input');
      tipFigure.textContent = `$0.00`;
      totalFigure.textContent = `$0.00`;
    } 
    else if (peopleInputValue < 0){
      feedback_2.textContent = 'Number of people can NOT be less than 1!';
      peopleInput.classList.add('red-input');
      tipFigure.textContent = `$0.00`;
      totalFigure.textContent = `$0.00`;
    } else {
      switch (percentNum){
        case '5%':
          answer = (amountInput.value * (5 / 100) / peopleInputValue);
          tipFigure.textContent += answer.toFixed(2);
          totalAnswer = (answer + (amountInput.value / peopleInputValue)).toFixed(2);
          totalFigure.textContent = `$${totalAnswer}`;
        break;
  
        case '10%':
          answer = (amountInput.value * (10/100) / peopleInputValue);
          tipFigure.textContent += answer.toFixed(2);
          totalAnswer = (answer + (amountInput.value / peopleInputValue)).toFixed(2);
          totalFigure.textContent = `$${totalAnswer}`;
        break;
  
        case '15%':
          answer = (amountInput.value * (15/100) / peopleInputValue);
          tipFigure.textContent += answer.toFixed(2);
          totalAnswer = (answer + (amountInput.value / peopleInputValue)).toFixed(2);
          totalFigure.textContent = `$${totalAnswer}`;
        break;
  
        case '25%':
          answer = (amountInput.value * (25/100) / peopleInputValue);
          tipFigure.textContent += answer.toFixed(2);
          totalAnswer = (answer + (amountInput.value / peopleInputValue)).toFixed(2);
          totalFigure.textContent = `$${totalAnswer}`;
        break;
  
        case '50%':
          answer = (amountInput.value * (50/100) / peopleInputValue);
          tipFigure.textContent += answer.toFixed(2);
          totalAnswer = (answer + (amountInput.value / peopleInputValue)).toFixed(2);
          totalFigure.textContent = `$${totalAnswer}`;
        break;
      }; 
    };
  });
});
// end of % buttons


// event listener for custom event button
customPercent.addEventListener('input', function(e){
  let customValue = e.target.value;
  tipFigure.innerHTML = `$`;
  console.log(customValue)

  if (!amountInput.value == 0 && !peopleInput.value == 0){
    answer = ((amountInput.value * (customValue / 100) / peopleInput.value));
    tipFigure.textContent += answer.toFixed(2);
    totalAnswer = (answer + (amountInput.value / peopleInput.value)).toFixed(2);
    totalFigure.textContent = `$${totalAnswer}`;
  } else {
    feedback.textContent = 'Bill amount can NOT be less than 1';
    feedback_2.textContent = 'Enter number of people!';
    tipFigure.textContent = `$0.00`;
    totalFigure.textContent = `$0.00`;
  }
})


// reset button
resetBtn.addEventListener('click', function(){
  amountInput.value = ``;
  peopleInput.value = ``;
  customPercent.value = ``;
  tipFigure.textContent = `$0.00`;
  totalFigure.textContent = `$0.00`;
  feedback.textContent = ``;
  feedback_2.textContent = ``;
  feedback_custom.textContent = ``;
})