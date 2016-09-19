/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var mapmode=""
var map_x="";
var map_y="";
var hostapp=""
	var hostfunction=""
 var handleOpenURL = function(url) {
        
            checkCall(url)
        };
var caller=""
function closeTheApp(val){
	alert(hostapp+'://?MYJOBS='+hostfunction+'|'+val)
	cordova.InAppBrowser.open(hostapp+'://?MYJOBS='+hostfunction+'|'+val,'_system')
	window.open(hostapp+'://?MYJOBS='+hostfunction+'|'+val)
	
}

function checkCall(url){
 
	alert(url)
   
    	
      		      if (url.indexOf('myjobsmap://' > -1)) {
		    	  url_parameters=url.split("?")
		    	  subprameters=url_parameters[1].split("=")
		    	  if(subprameters[0]=="MYJOBS")
		    	  	{
		    		
		    		 functions=subprameters[1].split("|")

					mapmode=functions[0];
		    		alert(mapmode)
		    		 if(functions[0]=="plotjob") {		    			 
		    				 map_x=functions[1]
		    			 	 map_y=functions[2]
		    				
		    		 		}
		    		 if(functions[0]=="getlocation") {		    			 
		    			 hostapp=functions[1]
	    				 hostfunction=functions[2]
	    				
	    		 		}
		    		}
		    	  
		    	  
		    	  
		       
		      }else{
		    	  alert("Not a MYJOBS CAll")
		      }
    }  



function openMap(){
	checkPassedParams();
	location.href='GoogleMapsGetLocation.html'
}