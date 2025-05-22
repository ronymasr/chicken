function sendmail() {
  var name = document.getElementById("name").value;
  var phoneNumber = document.getElementById("PhoneNumber").value;
  var flatNo = document.getElementById("FlatNo").value;
  var buildingNo = document.getElementById("BuildingNo").value;
  var streetName = document.getElementById("StreetName").value;
  var compoundName = document.getElementById("CompoundName").value;
  var areaName = document.getElementById("AreaName").value;
  var nearestBranch = document.getElementById("NearestBranch").value;
  if (name === "" || phoneNumber === "" || flatNo === "" || buildingNo === "" || streetName === "" || compoundName === "" || areaName === "" || nearestBranch === "") {
    alert("Please fill in all fields.");
    return;
  }

  Emailjs.send ("service_v78s6q8", "template_x5cqtzl", {

    from_name: name,
    phone_number: phoneNumber,
    flat_no: flatNo,
    building_no: buildingNo,
    street_name: streetName,
    compound_name: compoundName,
    area_name: areaName,
    nearest_branch: nearestBranch
  })
