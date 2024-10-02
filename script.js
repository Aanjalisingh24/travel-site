document.getElementById('booknowbutton').addEventListener('click',function(){
  window.location.href='book.html';
});



const places = {
  "beach": {
      photos: [
          "https://cdn.mos.cms.futurecdn.net/wtqqnkYDYi2ifsWZVW2MT4-1200-80.jpg",
          "https://t3.ftcdn.net/jpg/02/43/25/90/360_F_243259090_crbVsAqKF3PC2jk2eKiUwZHBPH8Q6y9Y.jpg"
      ],
      description: "A beautiful beach with clear waters and golden sand."
  },

  "temple":{
    
    photos : [
      "https://media.istockphoto.com/id/1432894575/photo/view-of-the-main-entrance-tower-of-jambukeswarar-temple-thiruvanaikaval-which-represent.jpg?s=612x612&w=0&k=20&c=exMeR-_PRybIBTgbZYu4nJR2L0D8KWYbrS2tLFzNq2o=",
      "https://assets.cntraveller.in/photos/65a4ca16f4f38543f111ce6d/16:9/w_960,c_limit/1444924249"

    ],
    description:"A beautiful temple offering peace and tranquilityl."
  },

};


function getcityinfo() {
  const input = document.getElementById('enter').value.toLowerCase();
  const resultDiv = document.getElementById('result');
  
  resultDiv.innerHTML = '';

  if (places[input]) {
      
      places[input].photos.forEach(photo => {
          const img = document.createElement('img');
          img.src = photo;
          img.alt = input;
          img.style.width = '300px';  
          img.style.right='0';
          resultDiv.appendChild(img);
      });

      const description = document.createElement('p');
      description.textContent = places[input].description;
      resultDiv.appendChild(description);
  } else {
      resultDiv.textContent = 'No information available for this place.';
  }
}

document.querySelector('.clear-btn').addEventListener('click', function() {
  document.getElementById('enter').value = '';
  document.getElementById('result').innerHTML = '';
});
