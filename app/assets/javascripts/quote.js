function Send_Quote()
{
    var BT = document.getElementById('building_type').value;
    var Grade = document.querySelectorAll('input[type=radio]:checked')[0].value;
    var Apart = 0;
    var Busi = 0;
    var Stage = 0;
    var Ss = 0;
    var Park = 0;
    var Cage = 0;
    var Occ = 0;
    var Hour = 0;
        if(BT == "Residential")
        {
           
            Apart = document.getElementById('NbApartRes').value;
            Stage = document.getElementById('NbStageRes').value;
            Ss = document.getElementById('NbSsRes').value;
        }
        if(BT == "Commercial")
        {
          
            Busi = document.getElementById('NbBusiCom').value;
            Stage = document.getElementById('NbStageCom').value;
            Ss = document.getElementById('NbSsCom').value;
            Park = document.getElementById('NbParkCom').value;
            Cage = document.getElementById('NbCageCom').value;
        }
        if(BT == "Corporate")
        {
            
            Busi = document.getElementById('NbBusiCorp').value;
            Stage = document.getElementById('NbStageCorp').value;
            Ss = document.getElementById('NbSsCorp').value;
            Park = document.getElementById('NbParkCorp').value;
            Occ = document.getElementById('MaxOccCorp').value;
        }
        if(BT == "Hybrid")
        {
            
            Busi = document.getElementById('NbBusiHyb').value;
            Stage = document.getElementById('NbStageHyb').value;
            Ss = document.getElementById('NbSsHyb').value;
            Park = document.getElementById('NbParkHyb').value;
            Occ = document.getElementById('MaxOccHyb').value;
            Hour = document.getElementById('OppHourHyb').value;
        }   
        var Total = document.getElementById('TotalFinal').innerHTML;
                    
     $.ajax({
         type: "POST",
         url: "/QuoteCreate/?",
         // The key needs to match your method's input parameter (case-sensitive).
         data:{ json: JSON.stringify({
         "Building_Type":BT,
         "Product_Grade":Grade,
         "Nb_Appartement":Apart,
         "Nb_Business":Busi,
         "Nb_Floor":Stage,
         "Nb_Basement":Ss,
         "Nb_Cage":Cage,
         "Nb_Parking":Park,
         "Nb_OccupantPerFloor":Occ,
         "Nb_OpperatingHour":Hour,
         "Final_Price":Total
         })},
         dataType: "json",
         success: function(data){alert(data);},
         failure: function(errMsg) {
             alert(errMsg);
         }
     });
}
