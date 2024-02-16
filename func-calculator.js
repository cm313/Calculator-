let calculation= JSON.parse(localStorage.getItem('calculation'))|| '';
          function updateCalculation(number){
            calculation += number; 
            localStorage.setItem('calculation',JSON.stringify(calculation));
            document.querySelector('.js-displaytag').innerHTML=`${calculation}`
          } 