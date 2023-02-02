/*In this project, you will create a personal profile website that showcases your details as a social media app does. The website will be responsive and display well on both desktop and mobile devices. You will use HTML to structure the content, CSS to style the page, and JavaScript to add dynamic features such as a lightbox for images and a contact form. By the end of the project, you will have a fully functional portfolio website that you can share with your friends.
Write css,html and javascript code separately but well linked and be creative with nice css design
*/


//JAVASCRIPT
// Lightbox
let images = document.querySelectorAll('.photos-container img');

for (let i = 0; i < images.length; i++) {

  images[i].addEventListener('click', function() {
    let lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    document.body.appendChild(lightbox);

    let img = document.createElement('img');
    img.src = this.src;
    lightbox.appendChild(img);

    lightbox.addEventListener('click', function() {
      this.remove();
    });
  });

}

// Form Validation
let form = document.querySelector('form');
let name = document.querySelector('input[name="name"]');
let email = document.querySelector('input[name="email"]');
let message = document.querySelector('textarea[name="message"]');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  if (name.value === '' || email.value === '' || message.value === '') {
    alert('Please fill out all fields!');
  } else {
    alert('Form Submitted!');
    name.value = '';
    email.value = '';
    message.value = '';
  }
});