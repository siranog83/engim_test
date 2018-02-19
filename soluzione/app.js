let source = $("p").text();
let hl;

$("input").keyup(function() {
  $("p").text(source);
  hl = $("input").val();
  $("p").html((_, html) => {
   return html.split(hl).join("<span>" + hl + "</span>");
  });
})
