// with jQuery
$('.btn-close').click(function(){
    $(this).parents('.dialog').addClass('is-hidden');
})

// bind a click handler to the button
$('#btn-new').click(function(){
    // wrap the clicked button in jQuery
    var el = $(this);
    // change the state of the button
    el.addClass('is-pressed');
    // find the menu by stripping btn- and
    // adding it to menu selector
    $('#menu-' +
    el.id.substr(4)).removeClass('is-hidden');
});


// bind a click handler to each button
$(".btn").bind("click", function(){
    // change the state to pressed
    $(this).attr('data-state', 'pressed');
});

function showMessage (s) {
    var el = document.getElementById('message');
    el.innerHTML = s;
    /* set state */
    el.className = 'is-visible';
    setTimeout(function(){
        /* set state back */
        el.className = 'is-hidden';
        }, 3000);
}

/* and then our javascript */
function showMessage (s) {
    var el = document.getElementById('message');
    el.innerHTML = s;
    /* set state */
    el.className = 'is-visible';
    setTimeout(function(){
    /* set state back */
        el.className = 'is-hidden';
        setTimeout(function(){
            el.className = 'is-removed';
        }, 2000);
    }, 3000);
}

<link href="main.css" rel="stylesheet">
<link href="print.css" rel="stylesheet" media="print">

    