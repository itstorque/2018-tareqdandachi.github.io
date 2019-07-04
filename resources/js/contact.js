email_button = document.getElementById('email_button');

dm_button = document.getElementById('dm_button');

bg1 = document.getElementById('background-1');

bg2 = document.getElementById('background-2');

email_button.addEventListener("mouseover", function() {

    bg1.style.opacity = 1;

});

email_button.addEventListener("mouseout", function() {

    bg1.style.opacity = 0.1;

});

dm_button.addEventListener("mouseover", function() {

    bg2.style.opacity = 1;

});

dm_button.addEventListener("mouseout", function() {

    bg2.style.opacity = 0.1;

});
