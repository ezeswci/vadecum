document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    // Now safe to use device APIs
      window.FirebasePlugin.setAnalyticsCollectionEnabled(true);
}
function cambiarCalculadora(pagina)
{
  window.FirebasePlugin.logEvent("select_content", {content_type: "page_view", item_id: pagina});
  window.location=pagina;
 //avisarPremium();
}
function avisarPremium(){
/*BootstrapDialog.show({
			type:BootstrapDialog.TYPE_INFO,
			closable: false,
			 title: "Versión de prueba",
            message: "<p>Le quedan "+daysToRun()+" días de prueba.</p><p> Para acceder a la versión completa ingrese su código.</p><p>  Para conseguir su código acceda a la misma en www.simmer.com.ar o a través de su representante de Roemmers .</p><p><input type=\"text\" id=\"pass-sim\" placeholder=\"CÓDIGO\"></p>",
			buttons: [{
                label: ' Continuar Prueba ',
				cssClass: 'btn-warning',
                action: function(dialogItself){
                    continuarPrueba(dialogItself);
                },
            },{
                label: ' Ingresar Clave ',
				cssClass: 'btn-primary',
                action: function(dialogItself){
                    comprobarClave(dialogItself);
                },
            }]
		 });*/
}
function continuarPrueba(dialog){
	/*var now= new Date();
	setCookie("dateChecked", JSON.stringify(now));
	dialog.close();*/
}
function comprobarClave(dialog){
	/*if(document.getElementById("pass-sim").value=="12345678"){
		setCookie("enterPassword", JSON.stringify(true));
		dialog.close();
	}else{
		codigoErroneo();
	}*/
}
function codigoErroneo(){
	/*BootstrapDialog.show({
			 type:BootstrapDialog.TYPE_WARNING,
			 closable: false,
			 title: "Código invalido",
			 closable: false,
            message: "El código ingresado es invalido.",
			buttons: [{
                label: ' Aceptar ',
				cssClass: 'btn-warning',
                action: function(dialogItself){
                    dialogItself.close();
                },
            }]
		 });*/
}
function finVersionDePrueba(){
	/*BootstrapDialog.show({
			 title: "",
            message: "",
			buttons: [{
                label: ' Aceptar ',
				id:'boton-close-loading',
                action: function(dialogItself){
                    dialogItself.close();
                },
            }]
		 });*/
}
function resetTimeOfLastTableAskToServer(){
	/*window.lastTableCheck= new Date();
	var jsonUpdt=JSON.stringify(window.lastTableCheck);
	setCookie("tablesToPlay-lastCheck-Jp"+getUserJugaplayId(), jsonUpdt, 120);*/
}
function updateTablesFromServer(){// Veo si lo traigo de memoria o no
	if(secondsFromNow(window.lastTableCheck)>300){// Si tiene mas de 5 minutos 300 segundos
			resetTimeOfLastTableAskToServer();
		return true;
	}else{
		return false;
	}
}
function daysToRun(){
	var date1 = new Date(JSON.parse(getCookie("dateInstall")));
    var date2 = new Date();
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (86400000));
    return(31-diffDays);
}
function hasToCheck(){
	var date1 = new Date(JSON.parse(getCookie("dateChecked")));
    var date2 = new Date();
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var diffDays = Math.ceil(timeDiff / (86400000))-1;
    return(diffDays>=1);
}
function acceptsLocalStorage(){
	if(typeof(Storage) !== "undefined") {
    return true;
	} else {
    // Sorry! No Web Storage support..
	return false;
	}
}
function setCookie(cname, cvalue) {
	var exdays=1200;
	cname="pr-"+cname;
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
	if(acceptsLocalStorage()){
		localStorage.setItem(cname, cvalue);
	}else{
    	document.cookie = cname + "=" + cvalue + "; " + expires;
	}
}
function getCookie(cname) {
	cname="pr-"+cname;
	if(acceptsLocalStorage()){
		if(localStorage.getItem(cname)!=null){
		return localStorage.getItem(cname);}else{ return "";}
	}else{
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i=0; i<ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1);
			if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
		}
		return "";
	}
}
function delete_cookie( cname ) {
	cname="pr-"+cname;
	if(acceptsLocalStorage()){
		localStorage.setItem(cname, " ");
	}else{
 		 document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
	}
}
// <input type="text" id="pass-sim" placeholder="CÓDIGO">
//setTimeout(function(){verificarPassword();}, 1000);
function verificarPassword(){
	/*if(getCookie("dateInstall")!=""){// Esta instaladas
		var enterPassword=JSON.parse(getCookie("enterPassword"));
		if(hasToCheck()&&!enterPassword){
			avisarPremium();
		}
	}else{// Es un usuario nuevo
		var now= new Date();
		setCookie("dateInstall", JSON.stringify(now));
		var op=new Date(1401507903635);
		setCookie("dateChecked", JSON.stringify(op));
		setCookie("enterPassword", JSON.stringify(false));
		avisarPremium();
	}*/
}
