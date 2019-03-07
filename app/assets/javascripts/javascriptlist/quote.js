/////////////////////////////////HIDE/SHOW//////////////////////////////////////////////////////////////////
$(function() {
    $("#comQ, #resiQ, #corpQ, #hybQ").hide();
    $('#slt').change(function(){
        if($('#slt').val() == 'Residential') {
            $('#resiQ').show(500); 
            clear();
        } else {
            $('#resiQ, #Qst').hide(); 
        } 
        if ($('#slt').val() == 'Commercial') {
            $('#comQ').show(500);
            clear();
        } else {
            $('#comQ').hide(); 
        } 
        if($('#slt').val() == 'Corporate') {
            $('#corpQ').show(500);
            clear();
        } else {
            $('#corpQ').hide(); 
        } 
        if($('#slt').val() == 'Hybrid') {
            $('#hybQ').show(500);
            clear();
        } else {
            $('#hybQ').hide(); 
        } 

    });
}); /// SHOW HIDE
function clc() {
    
    var input = document.querySelectorAll('input[type=radio]:checked')[0];
    if(input.value == "standard" ) {
       return RadStd; 
       

    }
    if(input.value == "premium" ) {
        return RadPrem; 

    }
    if(input.value == "excelium" ){
        return RadExcl;

    }
} /// CLEAR CALC////////////
function clear(){
    $(".rst").val("")
    document.getElementById('TotalElevators').innerHTML = "0";
    document.getElementById('perc').innerHTML = "10%";
    document.getElementById('TotalFinal').innerHTML = "0.00$";

}
////////////////// RADIO VARIABLES ////////////////////////////////////////////////////////////////////////
var RadStd = (7565 * 1.10);// Prix Standard en $
var RadPrem = (12345 * 1.13);// Prix Premium en $
var RadExcl = (15400* 1.16);// Prix Excelium en $
/////////////////////////////////VARIABLES et CALCULS Commercial///////////////////////////////////////////
function CalcCom(){
    var NbElevCom = parseInt(document.getElementById('CageCom').value);
    TtNbElevCom =Math.ceil(NbElevCom);
    
    TtNbElevComRad = (TtNbElevCom * clc()).toFixed(2);
    document.getElementById('TotalElevators').innerHTML = TtNbElevCom;
    document.getElementById('TotalFinal').innerHTML = '$' + TtNbElevComRad;
    
    if(isNaN(TtNbElevComRad,TtNbElevCom) == true){
    TtNbElevComRad = document.getElementById('TotalFinal').innerHTML = 'Calculating...';
    TtNbElevCom = document.getElementById('TotalElevators').innerHTML = 'Calculating...';
}
}
/////////////////////////////////VARIABLES et CALCULS Residential//////////////////////////////////////////
function CalcRes(){
    var NbAppRes = parseInt(document.getElementById('ApartRes').value); // Nombre d'appartement Residential
    var NbStageRes = parseInt(document.getElementById('FloorRes').value); // Nombre d'etage Residential

    AppR = NbAppRes / NbStageRes;
    NbElevRes = Math.ceil(AppR / 6);
    NbColRes = Math.ceil(NbStageRes / 20); 
    TtNbElevRes = NbElevRes * NbColRes;

    TtNbElevResRad = (TtNbElevRes * clc()).toFixed(2);
    document.getElementById('TotalElevators').innerHTML = TtNbElevRes;
    document.getElementById('TotalFinal').innerHTML = '$' + TtNbElevResRad;
    
    if(isNaN(TtNbElevResRad,TtNbElevRes)){
        TtNbElevRes = document.getElementById('TotalElevators').innerHTML = 'Calculating...'; 
        TtNbElevResRad = document.getElementById('TotalFinal').innerHTML = 'Calculating...';
    }
}
/////////////////////////////////VARIABLES et CALCULS Corporate////////////////////////////////////////////
function CalcCorp(){
    var MaxOccuCorp = parseInt(document.getElementById('MaxOccCorp').value);
    var NbStageCorp = parseInt(document.getElementById('NbStageCorp').value);
    var NbSsCorp = parseInt(document.getElementById('NbSsCorp').value);
    var RealLevel = NbStageCorp + NbSsCorp;

    OccTtCorp = Math.ceil(RealLevel* MaxOccuCorp);
    NbColCorp = Math.ceil(RealLevel/20);
    NbElevCorp = Math.ceil((OccTtCorp / 1000) / NbColCorp);
    TtElev= Math.ceil(NbElevCorp / NbColCorp);
    TtNbElevCorp= NbColCorp * NbElevCorp;
    
    TtNbElevCorpRad = (TtNbElevCorp * clc()).toFixed(2);
    document.getElementById('TotalElevators').innerHTML = TtNbElevCorp;
    document.getElementById('TotalFinal').innerHTML = '$' + TtNbElevCorpRad;
  
    if(isNaN(TtNbElevCorpRad,TtNbElevCorp)){
        TtNbElevCorp = document.getElementById('TotalElevators').innerHTML = 'Calculating...'; 
        TtNbElevCorpRad = document.getElementById('TotalFinal').innerHTML = 'Calculating...';
    }
}
/////////////////////////////////VARIABLES et CALCULS Hybride//////////////////////////////////////////////
function CalcHyb() {
    
    var MaxOccuHyb = parseInt(document.getElementById('MaxOccHyb').value);
    var NbStageHyb = parseInt(document.getElementById('NbStageHyb').value);
    var NbSsHyb = parseInt(document.getElementById('NbSsHyb').value);
    var RealLvl = NbStageHyb + NbSsHyb; 

    OccTtHyb = Math.ceil(RealLvl * MaxOccuHyb);
    NbColHyb = Math.ceil(RealLvl / 20);
    NbElevHyb = Math.ceil((OccTtHyb / 1000) / NbColHyb);
    TtElev= Math.ceil(NbElevHyb / NbColHyb);
    TtNbElevHyb = NbColHyb * NbElevHyb;

    TtNbElevHybRad = (TtNbElevHyb * clc()).toFixed(2);
    document.getElementById('TotalElevators').innerHTML = TtNbElevHyb;
    document.getElementById('TotalFinal').innerHTML = '$' + TtNbElevHybRad; 
   
    if(isNaN(TtNbElevHybRad,)){
        TtNbElevHyb = document.getElementById('TotalElevators').innerHTML = 'Calculating...'; 
        TtNbElevHybRad = document.getElementById('TotalFinal').innerHTML = 'Calculating...';
    }
}
////////////////////////////////RADIO BOUTON///////////////////////////////////////////////////////////////
function checkRadiovalue() {
    var input = document.querySelectorAll('input[type=radio]:checked')[0];
    if(input.value == "standard" ) {
       //clc()
       document.getElementById('perc').innerHTML = '10%'; 
    }
    if(input.value == "premium" ) {
       //clc()
         document.getElementById('perc').innerHTML = '13%'; 

    }
    if(input.value == "excelium" ){
      //clc()
    document.getElementById('perc').innerHTML = '16%';

    }
    var building_type = document.getElementById('slt').value;
    if(building_type == "Residential"){
        CalcRes()
    }
    if(building_type == "Commercial"){
        CalcCom()
    }
    if(building_type == "Corporate"){
        CalcCorp()
    }
    if(building_type == "Hybrid"){
        CalcHyb()
     }   
    
    }
////////////////////////////////CALCULS////////////////////////////////////////////////////////////////////