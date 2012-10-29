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
        console.log(current_url);
        if(current_url.indexOf('www.')== -1 && current_url.indexOf('http://')== -1 ){
            current_url = 'www.' + current_url;
            console.log("Added www");
            console.log(current_url);

        }
        if(current_url.indexOf('http://') == -1){
            current_url = 'http://' + current_url ;
            console.log("Added http");
            console.log(current_url);
        }
        url_framgment = current_url.split('/');
        updated_url = url_framgment[2];
        already_added = false
        url_list = $("#webaddress_list").html();
        if( current_url.match(url_exp) && current_url.match( /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/ )  ){
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