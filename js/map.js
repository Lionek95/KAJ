var mapa; // obiekt globalny
            
function dodajMarker(lat,lon,opcjeMarkera)
	{
	// tworzymy marker z współrzędnymi i opcjami z argumentów funkcji dodajMarker
	opcjeMarkera.position = new google.maps.LatLng(lat,lon);
                
	opcjeMarkera.map = mapa; // obiekt mapa jest obiektem globalnym!
	var marker = new google.maps.Marker(opcjeMarkera);
	}
            
function mapa_js()  
	{  
		var opcjeMapy = 
			{
			center: new google.maps.LatLng(53.6472795,16.650488),
			zoom: 11,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false 
			}
			
		mapa = new google.maps.Map(document.getElementById("map_js"), opcjeMapy); 
                
		// ten marker będzie przesuwalny            
		//dodajMarker(53.400,14.700,{title: 'Przeciągnij mnie', draggable: true});  
                
		// ten marker nie będzie klikalny
		//dodajMarker(53.400,14.600,{title: 'Jestem nieklikalny', clickable: false});  
                
		// to będzie zwykły marker z tooltipem
		//dodajMarker(53.672222, 16.719167,{title: 'odziezuzywana.co'});  
                
		// ...a to zwykły bez tooltipa
		dodajMarker(53.7016491,16.7046658,{});  //Szczecinek
		dodajMarker(53.658958,16.734424,{});  //Turowo
		dodajMarker(53.576043,16.5492749,{});  //Borne Sulinowo
	}  
