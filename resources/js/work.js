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

// Handling Filtering List From Select Input

const inputs = ['domain', 'lang', 'platform'];

const list_items = $(".work-item");

let hidden_select = []

let hidden_search = []

let numberItems = list_items.length

numberShownUpdate(numberItems)

for (i = 0; i < numberItems; i++) {

  hidden_select.push(false)
  hidden_search.push(false)

}

$("select").change(function(){

  var values = [];

    for (i = 0; i < inputs.length; i++) {

      const val = " " + document.getElementById(inputs[i]).value + " ";

      if (val != "  ") {

        document.getElementById(inputs[i]).parentElement.classList.add("active-search")

      } else {

        document.getElementById(inputs[i]).parentElement.classList.remove("active-search")

      }

      values.push(val)

    }

    for (j = 0; j < numberItems; j++) {

      hidden_select[j] = false;

      for (i = 0; i < inputs.length; i++) {

        const val = values[i];

        if (val != "  ") {

          tags = " " + $(list_items[j]).attr('data-tags') + " ";

          if (!tags.includes(val)) {hidden_select[j]=true}

        }

      }

    }

    processHides()

});

// Handling Input and Filtering From Search

$("#keyword").keyup(function(){

  const val = $("#keyword").val().toLowerCase()

  for (k = 0; k < numberItems; k++) {

    const text = list_items[k].getElementsByClassName('work')[0].innerText.toLowerCase()

    if (text.includes(val)) {hidden_search[k]=false} else {hidden_search[k]=true}

  }

  processHides()

});

// Handle Hiding Non-Conforming Items

function processHides() {

  numberShown = 0

  for (n = 0; n < numberItems; n++) {

    if (hidden_select[n] || hidden_search[n]) {

      list_items[n].style.maxHeight = "0px";

    } else {

      list_items[n].style.maxHeight = "200vh";

      numberShown += 1

    }

  }

  numberShownUpdate(numberShown)

}

function numberShownUpdate(numberShown) {

  var span = document.getElementById('numberItemsShown');

  while( span.firstChild ) {

    span.removeChild( span.firstChild );

  }

  let string = numberShown + " items"

  if (numberShown == 0) { string = numberShown + " item" }

  span.appendChild(document.createTextNode(string));

}
