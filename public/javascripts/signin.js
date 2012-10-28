function ajax_load(){
    $.ajax({
      url: '/welcome/load_url',
      data: "info=" + $("#webaddress_list").html()
    }).done(function(){
    });
}
$(document).ready(function() {
  $(".url").keypress(function(e){
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if(keycode == 13) {
        url_exp = /^(http|https?:\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?)$/
        current_url = $("#url").val() ;
        url_framgment = current_url.split('/');
        updated_url = url_framgment[2];
        already_added = false
        url_list = $("#webaddress_list").html();
        if( current_url.match(url_exp)  ){
            if ( url_list != ''){
              url_array = url_list.split("<br/>")
              var i;
              for (i = 0; i < url_array.length; ++i) {
                url_exp = new RegExp(updated_url, "g");
                if( url_array[i].match(url_exp)  ){
                  already_added = true ;
                }
              }
            }
          if(already_added == false){
            $("#webaddress_list").prepend(updated_url + "<br/>" );
          }
          $("#url").val("");
        }
    }
  });
    window.setInterval("ajax_load()",15000);
});