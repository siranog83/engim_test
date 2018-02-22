

var $testo = $('.testo')
$("input").keyup(function() {
$testo.find('span.highlight').contents().unwrap();
var mysearchword = this.value.trim();
if (mysearchword) {
var re = new RegExp('(' + mysearchword.trim().split(/\s+/).join('|') + ')', "g");
    $testo.html(function(i, html) {
     return html.replace(re, '<span class="highlight">$1</span>')
    });
}
console.log(re);
});
