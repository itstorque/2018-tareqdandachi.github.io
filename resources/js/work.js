// Handling More Info Button Click

$(".more_info_button").click(function(){
  // Holds the product ID of the clicked element
  var desc_id = $(this).attr('data-for-id')

  $("#"+desc_id).toggleClass("hidden_desc");

  if ($(this).html() == "Show Technical Information") {

    $(this).html("Hide Technical Information")

  } else {

    $(this).html("Show Technical Information")

  }

});

// Handling Ordering & Filtering List

let inputs = ['domain', 'lang'];

let list_items = $(".work-item");

$("#submit-query").click(function(){

    console.log("submit");

    for (j = 0; j < list_items.length; j++) {

      let doesConform = true;

      for (i = 0; i < inputs.length; i++) {

        let val = " " + document.getElementById(inputs[i]).value + " ";

        if (val != "  ") {

          tags = " " + $(list_items[j]).attr('data-tags') + " ";

          if (!tags.includes(val)) {doesConform=false}

        }

      }

      if (doesConform) {

        list_items[j].style.maxHeight = "200vh";

      } else {

        list_items[j].style.maxHeight = "0px";

      }

    }

});
