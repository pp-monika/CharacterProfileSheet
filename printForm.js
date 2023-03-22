
function displayDemographic() {

    document.getElementById("dispOutput").style.display = "inline";

    let firstname = document.getElementById("firstname").value;
    document.getElementById("firstnameOut").insertAdjacentHTML("beforeend", firstname);

    let middlename = document.getElementById("middlename").value;
    document.getElementById("middlenameOut").insertAdjacentHTML("beforeend", middlename);

    let lastname = document.getElementById("lastname").value;
    document.getElementById("lastnameOut").insertAdjacentHTML("beforeend", lastname);

    let othername = document.getElementById("othernames").value;
    document.getElementById("othernamesOut").insertAdjacentHTML("beforeend", othername);

    let titlehonorifics = document.getElementById("titlehonorifics").value;
    document.getElementById("titlehonorificsOut").insertAdjacentHTML("beforeend", titlehonorifics);
    
    let sexgender = document.getElementById("sexgender").value;
    document.getElementById("sexgenderOut").insertAdjacentHTML("beforeend", sexgender);

    let bloodline = document.getElementById("bloodline").value;
    document.getElementById("bloodlineOut").insertAdjacentHTML("beforeend", bloodline);

    let affiliation = document.getElementById("affiliation").value;
    document.getElementById("affiliationOut").insertAdjacentHTML("beforeend", affiliation);

    let occupation = document.getElementById("occupation").value;
    document.getElementById("occupationOut").insertAdjacentHTML("beforeend", occupation);

    let education = document.getElementById("education").value;
    document.getElementById("educationOut").insertAdjacentHTML("beforeend", education);
    
    let demographicsNote = document.getElementById("demographicsnote").value;
    document.getElementById("demographicsnoteOut").insertAdjacentHTML("beforeend", demographicsNote);

}


function displayAppearance() {

    let eyecolor = document.getElementById("eyecolor").value;
    document.getElementById("eyecolorOut").insertAdjacentHTML("beforeend", eyecolor);

    let skincolor = document.getElementById("skincolor").value;
    document.getElementById("skincolorOut").insertAdjacentHTML("beforeend", skincolor);

    let haircolor = document.getElementById("haircolor").value;
    document.getElementById("haircolorOut").insertAdjacentHTML("beforeend", haircolor);

    
    let height = document.getElementById("height").value;
    document.getElementById("heightOut").insertAdjacentHTML("beforeend", height);

    let weight = document.getElementById("weight").value;
    document.getElementById("weightOut").insertAdjacentHTML("beforeend", weight);

    let facialmarking = document.getElementById("facialmarking").value;
    document.getElementById("facialmarkingOut").insertAdjacentHTML("beforeend", facialmarking);

    let scars = document.getElementById("scars").value;
    document.getElementById("scarsOut").insertAdjacentHTML("beforeend", scars);

    let distingfeatures = document.getElementById("distingfeatures").value;
    document.getElementById("distingfeaturesOut").insertAdjacentHTML("beforeend", distingfeatures);

    let bodytype = document.getElementById("bodytype").value;
    document.getElementById("bodytypeOut").insertAdjacentHTML("beforeend", bodytype);

    let fashionstyle = document.getElementById("fashionstyle").value;
    document.getElementById("fashionstyleOut").insertAdjacentHTML("beforeend", fashionstyle);

    let accessories = document.getElementById("accessories").value;
    document.getElementById("accessoriesOut").insertAdjacentHTML("beforeend", accessories);

    let posture = document.getElementById("posture").value;
    document.getElementById("postureOut").insertAdjacentHTML("beforeend", posture);

    let weaknesses = document.getElementById("weaknesses").value;
    document.getElementById("weaknessesOut").insertAdjacentHTML("beforeend", weaknesses);

    let physappearancenote = document.getElementById("physappearancenote").value;
    document.getElementById("physappearancenoteOut").insertAdjacentHTML("beforeend", physappearancenote);

}


function displayHistory() {

    let birthdate = document.getElementById("birthdate").value;
    document.getElementById("birthdateOut").insertAdjacentHTML("beforeend", birthdate);

    let birthplace = document.getElementById("birthplace").value;
    document.getElementById("birthplaceOut").insertAdjacentHTML("beforeend", birthplace);

    let immediatefamily = document.getElementById("immediatefamily").value;
    document.getElementById("immediatefamilyOut").insertAdjacentHTML("beforeend", immediatefamily);

    let historynote = document.getElementById("historynote").value;
    document.getElementById("historynoteOut").insertAdjacentHTML("beforeend", historynote);

}


function displayRelationships() {

    let father = document.getElementById("father").value;
    document.getElementById("fatherOut").insertAdjacentHTML("beforeend", father);

    let mother = document.getElementById("mother").value;
    document.getElementById("motherOut").insertAdjacentHTML("beforeend", mother);

    let legalguardian = document.getElementById("legalguardian").value;
    document.getElementById("legalguardianOut").insertAdjacentHTML("beforeend", legalguardian);

    let lovers = document.getElementById("lovers").value;
    document.getElementById("loversOut").insertAdjacentHTML("beforeend", lovers);

    let children = document.getElementById("children").value;
    document.getElementById("childrenOut").insertAdjacentHTML("beforeend", children);

    let grandparents = document.getElementById("grandparents").value;
    document.getElementById("grandparentsOut").insertAdjacentHTML("beforeend", grandparents);

    let grandchildren = document.getElementById("grandchildren").value;
    document.getElementById("grandchildrenOut").insertAdjacentHTML("beforeend", grandchildren);

    let bestfriends = document.getElementById("bestfriends").value;
    document.getElementById("bestfriendsOut").insertAdjacentHTML("beforeend", bestfriends);

    let friends = document.getElementById("friends").value;
    document.getElementById("friendsOut").insertAdjacentHTML("beforeend", friends);

    let rivals = document.getElementById("rivals").value;
    document.getElementById("rivalsOut").insertAdjacentHTML("beforeend", rivals);

    let enemies = document.getElementById("enemies").value;
    document.getElementById("enemiesOut").insertAdjacentHTML("beforeend", enemies);

    let colleagues = document.getElementById("colleagues").value;
    document.getElementById("colleaguesOut").insertAdjacentHTML("beforeend", colleagues);

    let superiors = document.getElementById("superiors").value;
    document.getElementById("superiorsOut").insertAdjacentHTML("beforeend", superiors);

    let mentors = document.getElementById("mentors").value;
    document.getElementById("mentorsOut").insertAdjacentHTML("beforeend", mentors);
 
    let rolemodels = document.getElementById("rolemodels").value;
    document.getElementById("rolemodelsOut").insertAdjacentHTML("beforeend", rolemodels);

    let subordinates = document.getElementById("subordinates").value;
    document.getElementById("subordinatesOut").insertAdjacentHTML("beforeend", subordinates);

    let pets = document.getElementById("pets").value;
    document.getElementById("petsOut").insertAdjacentHTML("beforeend", pets);

    let combatanimals = document.getElementById("combatanimals").value;
    document.getElementById("combatanimalsOut").insertAdjacentHTML("beforeend", combatanimals);

    let acquaintances = document.getElementById("acquaintances").value;
    document.getElementById("acquaintancesOut").insertAdjacentHTML("beforeend", acquaintances);

    let publicperception = document.getElementById("publicperception").value;
    document.getElementById("publicperceptionOut").insertAdjacentHTML("beforeend", publicperception);

    let relationshipsnote = document.getElementById("relationshipsnote").value;
    document.getElementById("relationshipsnoteOut").insertAdjacentHTML("beforeend", relationshipsnote);

}


function displayResult() {
    
    displayDemographic();
    displayAppearance();
    displayHistory();
    displayRelationships();

    document.getElementById("characterform").remove();

}