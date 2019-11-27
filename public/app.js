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
					document.querySelector('.card-title').style.color = 'red';
					document.querySelector('.card-text').style.color = 'red';
					document.querySelector('.card').style.display = 'block';
				}
				else{

					document.querySelector('.wait').style.display = 'none';
					document.querySelector('.card-title').textContent = 'No breach detected!';
					document.querySelector('.card-text').textContent =  " Safe Password ";
					document.querySelector('.card-title').style.color = 'green';
					document.querySelector('.card-text').style.color = 'green';
					document.querySelector('.card').style.display = 'block';

				}

		})		

	})
 e.preventDefault()
})

   


 
    