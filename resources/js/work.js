// Handling More Info Button Click

$(".more_info_button").click(function(){

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

let numberItems = list_items.length

let hidden_select = Array(numberItems).fill(false)

let hidden_search = Array(numberItems).fill(false)

numberShownUpdate(numberItems)

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

// Clear all Search items

function clearSearch() {

  $(':input').val('');
  $(':input').parent().removeClass("active-search");

  hidden_select = Array(numberItems).fill(false)
  hidden_search = Array(numberItems).fill(false)

  processHides()

}

// Show/Hide the Search Items

$("#toggleSearch").click(function(){

  clearSearch()
  toggleSearch()

});

function toggleSearch() {

  if ($("#toggleSearch").html() == "Show Search") {

    $("#toggleSearch").html("Hide Search")

    $("#search").css("max-height", "100vh")

    $("#clearSearch").css("opacity", "1")

  } else {

    $("#toggleSearch").html("Show Search")

    $("#search").css("max-height", "0px")

    $("#clearSearch").css("opacity", "0")

  }

}
