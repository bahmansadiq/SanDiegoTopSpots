 $(function(){  
        $.getJSON('topspots.json',function(data){

            $.each(data.topspots,function(index,Name){
                $('table').append('<tr><td>' +Name.name +
                	'</td><td>'+Name.description+
                  '</td><td><a href=https://www.google.com/maps?q=' +Name.location[0]+ ","
                   +Name.location[1]+'> <button type="button" class="btn btn-primary">Open in Google Maps</button></a></td></tr>');

     
            });

        });

    });