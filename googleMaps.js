$('#gmap').live("pagecreate", function() {
	$('#map_canvas').gmap('addMarker',{'id':'client', 'position' : '4.668847,-74.07208', 'bounds':true})
	$('#map_canvas').gmap('addMarker',{'id':'client', 'position' : '4.720467,-74.067654', 'bounds':true})
	$('#map_canvas').gmap('addMarker',{'id':'client', 'position' : '4.620833,-74.1521958', 'bounds':true})
	$('#map_canvas').gmap('addMarker',{'id':'client', 'position' : '6.255872,-75.598302', 'bounds':true})
	$('#map_canvas').gmap('addMarker',{'id':'client', 'position' : '3.421991,-76.547445', 'bounds':true})
	$('#map_canvas').gmap('addMarker',{'id':'client', 'position' : '4.146536,-73.638827', 'bounds':true})

	
	
	$('#map_canvas').gmap({'center': '4.668847,-74.07208', 'mapTypeId': 'roadmap', 'zoom': 12}).bind('init', function(evt, map){
		
			$('#map_canvas').gmap('watchPostion', function(position, status){
				if ( status=='OK' ){
					
					var latlang = new google.maps.latlang(position.coords.latitude, position.coords.longitude);
					
					var markers = $('#map_canvas').gmap('get', 'markers');
					if ( !markers['client']){
						$('#map_canvas').gmap('addMarker',{'id':'client', 'position' : latlang, 'bounds':true});
						
					}else{
						markers['client'].setPosition(latlang);
						map.panTo(latlang);
						}
				
				}
			});
		});
	});
