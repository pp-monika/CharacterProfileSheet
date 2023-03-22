
function displayDemographic() {

    document.getElementById("dispOutput").style.display = "inline";

    const firstname = document.getElementById("firstname").value;
    document.getElementById("firstnameOut").insertAdjacentHTML("beforeend", firstname);

    const middlename = document.getElementById("middlename").value;
    document.getElementById("middlenameOut").insertAdjacentHTML("beforeend", middlename);

    const lastname = document.getElementById("lastname").value;
    document.getElementById("lastnameOut").insertAdjacentHTML("beforeend", lastname);

    const othername = document.getElementById("othernames").value;
    document.getElementById("othernamesOut").insertAdjacentHTML("beforeend", othername);

    const titlehonorifics = document.getElementById("titlehonorifics").value;
    document.getElementById("titlehonorificsOut").insertAdjacentHTML("beforeend", titlehonorifics);
    
    const sexgender = document.getElementById("sexgender").value;
    document.getElementById("sexgenderOut").insertAdjacentHTML("beforeend", sexgender);

    const bloodline = document.getElementById("bloodline").value;
    document.getElementById("bloodlineOut").insertAdjacentHTML("beforeend", bloodline);

    const affiliation = document.getElementById("affiliation").value;
    document.getElementById("affiliationOut").insertAdjacentHTML("beforeend", affiliation);

    const occupation = document.getElementById("occupation").value;
    document.getElementById("occupationOut").insertAdjacentHTML("beforeend", occupation);

    const education = document.getElementById("education").value;
    document.getElementById("educationOut").insertAdjacentHTML("beforeend", education);
    
    const demographicsNote = document.getElementById("demographicsnote").value;
    document.getElementById("demographicsnoteOut").insertAdjacentHTML("beforeend", demographicsNote);

}


function displayAppearance() {

    const eyecolor = document.getElementById("eyecolor").value;
    document.getElementById("eyecolorOut").insertAdjacentHTML("beforeend", eyecolor);

    const skincolor = document.getElementById("skincolor").value;
    document.getElementById("skincolorOut").insertAdjacentHTML("beforeend", skincolor);

    const haircolor = document.getElementById("haircolor").value;
    document.getElementById("haircolorOut").insertAdjacentHTML("beforeend", haircolor);

    
    const height = document.getElementById("height").value;
    document.getElementById("heightOut").insertAdjacentHTML("beforeend", height);

    const weight = document.getElementById("weight").value;
    document.getElementById("weightOut").insertAdjacentHTML("beforeend", weight);

    const facialmarking = document.getElementById("facialmarking").value;
    document.getElementById("facialmarkingOut").insertAdjacentHTML("beforeend", facialmarking);

    const scars = document.getElementById("scars").value;
    document.getElementById("scarsOut").insertAdjacentHTML("beforeend", scars);

    const distingfeatures = document.getElementById("distingfeatures").value;
    document.getElementById("distingfeaturesOut").insertAdjacentHTML("beforeend", distingfeatures);

    const bodytype = document.getElementById("bodytype").value;
    document.getElementById("bodytypeOut").insertAdjacentHTML("beforeend", bodytype);

    const fashionstyle = document.getElementById("fashionstyle").value;
    document.getElementById("fashionstyleOut").insertAdjacentHTML("beforeend", fashionstyle);

    const accessories = document.getElementById("accessories").value;
    document.getElementById("accessoriesOut").insertAdjacentHTML("beforeend", accessories);

    const posture = document.getElementById("posture").value;
    document.getElementById("postureOut").insertAdjacentHTML("beforeend", posture);

    const weaknesses = document.getElementById("weaknesses").value;
    document.getElementById("weaknessesOut").insertAdjacentHTML("beforeend", weaknesses);

    const physappearancenote = document.getElementById("physappearancenote").value;
    document.getElementById("physappearancenoteOut").insertAdjacentHTML("beforeend", physappearancenote);

}


function displayHistory() {

    const birthdate = document.getElementById("birthdate").value;
    document.getElementById("birthdateOut").insertAdjacentHTML("beforeend", birthdate);

    const birthplace = document.getElementById("birthplace").value;
    document.getElementById("birthplaceOut").insertAdjacentHTML("beforeend", birthplace);

    const immediatefamily = document.getElementById("immediatefamily").value;
    document.getElementById("immediatefamilyOut").insertAdjacentHTML("beforeend", immediatefamily);

    const historynote = document.getElementById("historynote").value;
    document.getElementById("historynoteOut").insertAdjacentHTML("beforeend", historynote);

}


function displayRelationships() {

    const father = document.getElementById("father").value;
    document.getElementById("fatherOut").insertAdjacentHTML("beforeend", father);

    const mother = document.getElementById("mother").value;
    document.getElementById("motherOut").insertAdjacentHTML("beforeend", mother);

    const legalguardian = document.getElementById("legalguardian").value;
    document.getElementById("legalguardianOut").insertAdjacentHTML("beforeend", legalguardian);

    const lovers = document.getElementById("lovers").value;
    document.getElementById("loversOut").insertAdjacentHTML("beforeend", lovers);

    const children = document.getElementById("children").value;
    document.getElementById("childrenOut").insertAdjacentHTML("beforeend", children);

    const grandparents = document.getElementById("grandparents").value;
    document.getElementById("grandparentsOut").insertAdjacentHTML("beforeend", grandparents);

    const grandchildren = document.getElementById("grandchildren").value;
    document.getElementById("grandchildrenOut").insertAdjacentHTML("beforeend", grandchildren);

    const bestfriends = document.getElementById("bestfriends").value;
    document.getElementById("bestfriendsOut").insertAdjacentHTML("beforeend", bestfriends);

    const friends = document.getElementById("friends").value;
    document.getElementById("friendsOut").insertAdjacentHTML("beforeend", friends);

    const rivals = document.getElementById("rivals").value;
    document.getElementById("rivalsOut").insertAdjacentHTML("beforeend", rivals);

    const enemies = document.getElementById("enemies").value;
    document.getElementById("enemiesOut").insertAdjacentHTML("beforeend", enemies);

    const colleagues = document.getElementById("colleagues").value;
    document.getElementById("colleaguesOut").insertAdjacentHTML("beforeend", colleagues);

    const superiors = document.getElementById("superiors").value;
    document.getElementById("superiorsOut").insertAdjacentHTML("beforeend", superiors);

    const mentors = document.getElementById("mentors").value;
    document.getElementById("mentorsOut").insertAdjacentHTML("beforeend", mentors);
 
    const rolemodels = document.getElementById("rolemodels").value;
    document.getElementById("rolemodelsOut").insertAdjacentHTML("beforeend", rolemodels);

    const subordinates = document.getElementById("subordinates").value;
    document.getElementById("subordinatesOut").insertAdjacentHTML("beforeend", subordinates);

    const pets = document.getElementById("pets").value;
    document.getElementById("petsOut").insertAdjacentHTML("beforeend", pets);

    const combatanimals = document.getElementById("combatanimals").value;
    document.getElementById("combatanimalsOut").insertAdjacentHTML("beforeend", combatanimals);

    const acquaintances = document.getElementById("acquaintances").value;
    document.getElementById("acquaintancesOut").insertAdjacentHTML("beforeend", acquaintances);

    const publicperception = document.getElementById("publicperception").value;
    document.getElementById("publicperceptionOut").insertAdjacentHTML("beforeend", publicperception);

    const relationshipsnote = document.getElementById("relationshipsnote").value;
    document.getElementById("relationshipsnoteOut").insertAdjacentHTML("beforeend", relationshipsnote);

}


function formatCharacterImage() {

    document.getElementById("characterImage").remove();
    const characterImage = document.getElementById("characterImageOut");
    characterImage.style.width = "300px";
    characterImage.style.height = "auto";


}

/**
 * Display the rendering of the form in a readable and printable format.
 */
function displayResult() {

    formatCharacterImage()

    displayDemographic();
    displayAppearance();
    displayHistory();
    displayRelationships();

    document.getElementById("characterform").remove();

}





// Display the rendering result when submit button is clicked
const formSubmitButton = document.querySelector("#formsubmit");
formSubmitButton.addEventListener("click", displayResult);

// Display image from user input
const characterImageIn = document.getElementById("characterImage");
let characterImageOut = document.getElementById("characterImageOut");
let characterImage;

characterImageIn.addEventListener("change", () => {
    const imgFiles = characterImageIn.files;
    const characterImage = imgFiles[0];
    characterImageOut.src = URL.createObjectURL(characterImage);
    console.log(characterImage.size);
})