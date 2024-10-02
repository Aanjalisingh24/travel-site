function submit(){
  const name=document.getElementById('name');
  const email=document.getElementById('email');
  const p1=document.getElementById('n');
  const p2=document.getElementById('e');
  const last=document.getElementById('last');
  if(name.value.trim()==''){
    p1.style.display='block';
    p1.style.color='red';
    p1.innerText="please write name ";
  }
  else if(email.value.trim()==''){
    p1.style.display='none';
    p2.style.display='block';
    p2.style.color='red';
    p2.innerText="please write email ";
  }
  else{
    p1.innerText = '';
    p2.style.display='none';
    last.style.display='block';
    last.style.color='green';
    last.innerText='submit succesfully';
  }
}

function book(){
  alert('THANK YOU FOR WISITING US, BOOKING IS SUCCESSFULLY')
}