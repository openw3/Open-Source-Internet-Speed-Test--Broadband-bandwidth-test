// Speed test JScript by Vishnu //
var time = "";
var timeup = "";
var i = 0;
var yourping = "";
var dataup = [];
var uploaddata = "";

function starttest()
				  {
			pingtest();
			TestDownload();
			

}
		function pingtest(){
		pingstart = new Date().getTime();
		$.ajax({
                type: "GET",
				url: 0 + "" + "?n=" + Math.random(),
				
				async: false,
                success: function(msg) {
				pingend = new Date().getTime();
                pingdata = msg;
                    
					
				pingtime = (pingend - pingstart) / 1000 ;
				pingsize = pingdata.length;
				pingloaded = pingsize * 8;
				pingbps = (pingloaded / pingtime);
				yourping1 = pingloaded / pingbps ;
				yourping = (yourping1 * 1000).toFixed(2) ;
				
				
				document.getElementById("getping").innerHTML=yourping;
				document.getElementById("Status").innerHTML='Testing ping';
				
				
				
		   }
				
				
				
		
		});
		}

		
function TestDownload() {
		document.getElementById("Status").innerHTML='Testing Download Speed ! Please Wait';
        start = new Date().getTime();
		$.ajax({
                type: "GET",
				url: i + "?n=" + Math.random(),
				success: function(datadown) {
                dataup.push(datadown);
				end = new Date().getTime();
				time = (end - start) / 1000 ;
											
								if (time<10){
								i++;
								TestDownload()
														
								}
								else
											{
											document.getElementById("Status").innerHTML='Testing Upload Speed ! Please Wait';
															var duration = time;
															var bytes = dataup[i].length;
															var bitsLoaded = bytes * 8;
															var speedBps = (bitsLoaded / duration).toFixed(2);
															var speedKbps = (speedBps / 1024).toFixed(2);
															var speedMbps = (speedKbps / 1024).toFixed(2);
															document.getElementById("down").innerHTML=speedMbps;
											
											
								
								
								TestUpload();
								}
							}
				
				
					});
		
		
		}
function TestUpload() {
			
		  	uploaddata = dataup[i-1];
			startup = new Date().getTime();
         		  
         $.ajax({
                type: "POST",
				url: 0 + "?n=" + Math.random(),
                async: false,
				data: uploaddata,
                success: function(uploaddata) {
						endup = new Date().getTime();
						timeup = (endup - startup) / 1000 ;
				
																{
															var durationup = timeup;
															k = (i-1);
															var bytesUP = dataup[k].length;
															var bitsLoadedUP = bytesUP * 8;
															var speedBpsUP = (bitsLoadedUP / durationup).toFixed(2);
															var speedKbpsUP = (speedBpsUP / 1024).toFixed(2);
															var speedMbpsUP = (speedKbpsUP / 1024).toFixed(2);
															$('#starttest').removeClass('clicked')
															
															document.getElementById("Upload").innerHTML=speedMbpsUP;
				
													}
									   }
				});

		}
					





