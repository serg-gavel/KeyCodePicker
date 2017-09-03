"use strict";

document.addEventListener("keydown", function (event) {
    document.body.innerHTML = "\n&nbsp;&nbsp;&nbsp;&nbsp;\n" +
        "<b>Which: " + event.which + "</b>\n" +
        "<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n" + "<b> Key code is:</b> " + event.keyCode + "\n" +
        "<br>&nbsp;&nbsp;&nbsp;\n<b>Shift key active:</b> " + event.shiftKey + "\n" +
        "</br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n<b> Alt key active:</b> " + event.altKey + "\n" +
        "<br>&nbsp;&nbsp;&nbsp;&nbsp;\n<b> Ctrl key active:</b> " + event.ctrlKey + "\n" +
        "<br>&nbsp;&nbsp;&nbsp;\n<b> Meta key active:</b> " + event.metaKey + "\n";
});


// ES6 code

// document.addEventListener("keydown", function(event) {
//
//     document.body.innerHTML = `
//     &nbsp;&nbsp;&nbsp;
//     <b>Which: ${event.which}</b>
//     <br>&nbsp;
//     <b>Key code is:</b> ${event.keyCode}
//     <br>&nbsp;&nbsp;&nbsp;
//     <b>Shift key active:</b> ${event.shiftKey}
//     </br>&nbsp;&nbsp;&nbsp;&nbsp;
//     <b>Alt key active:</b> ${event.altKey}
//     <br>&nbsp;&nbsp;&nbsp;
//     <b>Ctrl key active:</b> ${event.ctrlKey}
//     <br>&nbsp;&nbsp;
//     <b>Meta key active:</b> ${event.metaKey}
//   `;
//
// });