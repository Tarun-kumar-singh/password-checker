 var form =  document.querySelector('form')
 
 form.addEventListener('submit',(e) => {
   
   var inputdata = document.querySelector('input').value
  
   document.querySelector('.wait').style.display = 'block';

   fetch('/verify?data=' + inputdata).then((response) =>{

 		 

		response.json().then((data) =>{
 				
				if(data.breached){
					
					document.querySelector('.wait').style.display = 'none';
					document.querySelector('.card-title').textContent = 'Breach has happened at some time with the given passsword at somewhere.';
					document.querySelector('.card-text').textContent = data.no_of_times + " times ";
  					document.querySelector('#report1').style.display = 'block';

				}
				else{

					document.querySelector('.wait').style.display = 'none';
					document.querySelector('.report2-title').textContent = 'No breach detected!';
					document.querySelector('.report2-card-text').textContent =  " Safe Password ";
   					document.querySelector('#report2').style.display = 'block';

				}

		})		

	})
 e.preventDefault()
})

   


 
    