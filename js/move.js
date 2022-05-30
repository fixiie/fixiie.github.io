var createMove = function() {
	var moveOuter = document.createElement("div");
	var moveAside1 = document.createElement("aside");
	var moveAside1OptionsTitleOuter = document.createElement("div");
	var moveAside1OptionsSearchOuter = document.createElement("div");
	var moveAside1OptionsSearch = document.createElement("input");
	var moveAside1OptionsSearchExit = document.createElement("span");
	var moveAside1OptionsOuter = document.createElement("div");
	var moveAside1Options = document.createElement("div");
	var moveAside2 = document.createElement("aside");
	var moveAside2Title = document.createElement("span");
	var moveAside2TitleID = document.createElement("h1");
	var moveAside2TitleName = document.createElement("h1");
	var moveAside2Debut = document.createElement("span");
	var moveAside2DebutText = document.createElement("h4");
	var moveAside3 = document.createElement("aside");
	var moveAside3Description = document.createElement("div");
	var moveAside3DescriptionText = document.createElement("p");
	var moveAside3EffectTitle = document.createElement("h3");
	var moveAside3EffectText = document.createElement("p");
	var moveAside4 = document.createElement("aside");
	moveOuter.setAttribute("id", "move-outer");
	moveOuter.setAttribute("name", "Moves");
	moveAside1.setAttribute("id", "move-aside1");
	moveAside1OptionsTitleOuter.setAttribute("id", "move-options-title");
	moveAside1OptionsSearchOuter.setAttribute("id", "move-options-search");
	moveAside1OptionsSearch.setAttribute("type", "text");
	moveAside1OptionsSearch.setAttribute("id", "move-search");
	if(Generation == 8) {
		moveAside1OptionsSearch.setAttribute("title", "Search options:\ntype:: [normal/flying/...]\ncategory:: [physical/special/status]\npp:: [value]\npp:> [value]\npp:< [value]\npower:: [value]\npower:> [value]\npower:< [value]\naccuracy:: [value]\naccuracy:> [value]\naccuracy:< [value]\nmachine:: [TM00/HM00/TR00]\ncontact:: [y/n]\ntutor:: [y/n]");
	} else {
		moveAside1OptionsSearch.setAttribute("title", "Search options:\ntype:: [normal/flying/...]\ncategory:: [physical/special/status]\npp:: [value]\npp:> [value]\npp:< [value]\npower:: [value]\npower:> [value]\npower:< [value]\naccuracy:: [value]\naccuracy:> [value]\naccuracy:< [value]\nmachine:: [TM00/HM00]\ncontact:: [y/n]\ntutor:: [y/n]");
	}
	moveAside1OptionsSearch.setAttribute("placeholder", "Search Moves...");
	moveAside1OptionsSearch.setAttribute("onfocus", "this.placeholder=''");
	moveAside1OptionsSearch.setAttribute("onblur", "this.placeholder='Search Moves...'");
	moveAside1OptionsSearch.setAttribute("autocomplete", "off");
	moveAside1OptionsSearchExit.setAttribute("id", "move-search-exit");
	moveAside1OptionsOuter.setAttribute("id", "move-options-outer");
	moveAside1Options.setAttribute("id", "move-options");
	moveAside2.setAttribute("id", "move-aside2");
	moveAside2Title.classList.add("move-title");
	moveAside2TitleID.innerText = "#";
	moveAside2TitleName.innerText = "-";
	moveAside2Debut.classList.add("move-debut");
	moveAside2DebutText.innerText = "-";
	moveAside3.setAttribute("id", "move-aside3");
	moveAside3Description.classList.add("move-description");
	moveAside3DescriptionText.innerText = "-";
	moveAside3EffectTitle.innerText = "Effect";
	moveAside3EffectText.innerHTML = "-";
	moveAside4.setAttribute("id", "move-aside4");
	document.querySelector("#contain").appendChild(moveOuter);
	moveOuter.appendChild(moveAside1);
	moveAside1.appendChild(moveAside1OptionsTitleOuter);
	moveAside1OptionsTitleOuter.appendChild(moveAside1OptionsSearchOuter);
	moveAside1OptionsSearchOuter.appendChild(moveAside1OptionsSearchExit);
	moveAside1OptionsSearchOuter.appendChild(moveAside1OptionsSearch);
	moveAside1.appendChild(moveAside1OptionsOuter);
	moveAside1OptionsOuter.appendChild(moveAside1Options);
	moveOuter.appendChild(moveAside2);
	moveAside2.appendChild(moveAside2Title);
	moveAside2Title.appendChild(moveAside2TitleID);
	moveAside2Title.appendChild(moveAside2TitleName);
	moveAside2.appendChild(moveAside2Debut);
	moveAside2Debut.appendChild(moveAside2DebutText);
	moveOuter.appendChild(moveAside3);
	moveAside3.appendChild(moveAside3Description);
	moveAside3Description.appendChild(moveAside3DescriptionText);
	moveAside3Description.appendChild(moveAside3EffectTitle);
	moveAside3Description.appendChild(moveAside3EffectText);
	moveOuter.appendChild(moveAside4);
	var moveAside3Sidebar = document.createElement("div");
	var moveAside3SidebarLeft = document.createElement("div");
	var moveAside3SidebarType = document.createElement("div");
	var moveAside3SidebarTypeText = document.createElement("span");
	var moveAside3SidebarTypeTextImg = document.createElement("img");
	var moveAside3SidebarTypeTextText = document.createElement("h4");
	var moveAside3SidebarTypeMove = document.createElement("span");
	var moveAside3SidebarPPPA = document.createElement("div");
	var moveAside3SidebarPPPAPowerPoints = document.createElement("span");
	var moveAside3SidebarPPPAPowerPointsContent = document.createElement("span");
	var moveAside3SidebarPPPAPowerPointsTitle = document.createElement("h3");
	var moveAside3SidebarPPPAPowerPointsText = document.createElement("p");
	var moveAside3SidebarPPPAPower = document.createElement("span");
	var moveAside3SidebarPPPAPowerContent = document.createElement("span");
	var moveAside3SidebarPPPAPowerTitle = document.createElement("h3");
	var moveAside3SidebarPPPAPowerText = document.createElement("p");
	var moveAside3SidebarPPPAAccuracy = document.createElement("span");
	var moveAside3SidebarPPPAAccuracyContent = document.createElement("span");
	var moveAside3SidebarPPPAAccuracyTitle = document.createElement("h3");
	var moveAside3SidebarPPPAAccuracyText = document.createElement("p");
	var moveAside3SidebarRight = document.createElement("div");
	var moveAside3SidebarContact = document.createElement("div");
	var moveAside3SidebarContactContent = document.createElement("span");
	var moveAside3SidebarContactText = document.createElement("p");
	moveAside3Sidebar.classList.add("move-sidebar");
	moveAside3SidebarType.classList.add("move-sidebar-type");
	moveAside3SidebarTypeTextImg.setAttribute("title", "");
	moveAside3SidebarTypeTextText.innerText = "";
	moveAside3SidebarPPPA.classList.add("move-sidebar-pppa");
	moveAside3SidebarPPPAPowerPointsTitle.innerText = "PP";
	moveAside3SidebarPPPAPowerPointsText.innerText = "";
	moveAside3SidebarPPPAPowerTitle.innerText = "Power";
	moveAside3SidebarPPPAPowerText.innerText = "";
	moveAside3SidebarPPPAAccuracyTitle.innerText = "Accuracy";
	moveAside3SidebarPPPAAccuracyText.innerText = "";
	moveAside3SidebarContact.classList.add("move-sidebar-contact");
	moveAside3SidebarContactText.innerText = "";
	moveAside3.appendChild(moveAside3Sidebar);
	moveAside3Sidebar.appendChild(moveAside3SidebarLeft);
	moveAside3Sidebar.appendChild(moveAside3SidebarRight);
	moveAside3SidebarLeft.appendChild(moveAside3SidebarType);
	moveAside3SidebarType.appendChild(moveAside3SidebarTypeText);
	moveAside3SidebarTypeText.appendChild(moveAside3SidebarTypeTextImg);
	moveAside3SidebarTypeText.appendChild(moveAside3SidebarTypeTextText);
	moveAside3SidebarType.appendChild(moveAside3SidebarTypeMove);
	moveAside3SidebarLeft.appendChild(moveAside3SidebarPPPA);
	moveAside3SidebarPPPA.appendChild(moveAside3SidebarPPPAPowerPoints);
	moveAside3SidebarPPPAPowerPoints.appendChild(moveAside3SidebarPPPAPowerPointsContent);
	moveAside3SidebarPPPAPowerPointsContent.appendChild(moveAside3SidebarPPPAPowerPointsTitle);
	moveAside3SidebarPPPAPowerPointsContent.appendChild(moveAside3SidebarPPPAPowerPointsText);
	moveAside3SidebarPPPA.appendChild(moveAside3SidebarPPPAPower);
	moveAside3SidebarPPPAPower.appendChild(moveAside3SidebarPPPAPowerContent);
	moveAside3SidebarPPPAPowerContent.appendChild(moveAside3SidebarPPPAPowerTitle);
	moveAside3SidebarPPPAPowerContent.appendChild(moveAside3SidebarPPPAPowerText);
	moveAside3SidebarPPPA.appendChild(moveAside3SidebarPPPAAccuracy);
	moveAside3SidebarPPPAAccuracy.appendChild(moveAside3SidebarPPPAAccuracyContent);
	moveAside3SidebarPPPAAccuracyContent.appendChild(moveAside3SidebarPPPAAccuracyTitle);
	moveAside3SidebarPPPAAccuracyContent.appendChild(moveAside3SidebarPPPAAccuracyText);
	moveAside3SidebarRight.appendChild(moveAside3SidebarContact);
	moveAside3SidebarContact.appendChild(moveAside3SidebarContactContent);
	moveAside3SidebarContactContent.appendChild(moveAside3SidebarContactText);
	var moveAside4Learnset = document.createElement("div");
	moveAside4Learnset.classList.add("move-learnset");
	moveAside4.appendChild(moveAside4Learnset);
	var moveAside4LearnsetTitle = document.createElement("div");
	var moveAside4LearnsetTitleText = document.createElement("h2");
	moveAside4LearnsetTitle.classList.add("move-sidebar-title");
	moveAside4LearnsetTitleText.innerText = "Learnset";
	moveAside4Learnset.appendChild(moveAside4LearnsetTitle);
	moveAside4LearnsetTitle.appendChild(moveAside4LearnsetTitleText);
	var MoveLearnsetOption = ["Level Up", "HM"];
	var moveAside4LearnsetContent = document.createElement("div");
	var moveAside4LearnsetHeader = document.createElement("div");
	var moveAside4LearnsetUl = document.createElement("ul");
	moveAside4LearnsetContent.classList.add("move-learnset-content");
	moveAside4LearnsetHeader.classList.add("move-learnset-header");
	moveAside4Learnset.appendChild(moveAside4LearnsetContent);
	moveAside4LearnsetContent.appendChild(moveAside4LearnsetHeader);
	moveAside4LearnsetContent.appendChild(moveAside4LearnsetUl);
	for(var q = 0; q < MoveLearnsetOption.length; q++) {
		var moveAside4LearnsetHeaderText = document.createElement("h6");
		if(q == 0) {
			moveAside4LearnsetHeaderText.innerText = "Pokémon";
		} else {
			moveAside4LearnsetHeaderText.innerText = "Source";
		}
		moveAside4LearnsetHeader.appendChild(moveAside4LearnsetHeaderText);
	}
	var firstmoveiteration;
	for(var q = 0; q < finaldataMove.length; q++) {
		if(finaldataMove[q][JSONPath_MoveReference] == "true") {
			var moveAside1OptionsInput = document.createElement("input");
			var moveAside1OptionsLabel = document.createElement("label");
			moveAside1OptionsInput.setAttribute("type", "radio");
			moveAside1OptionsInput.setAttribute("name", "move-options");
			moveAside1OptionsInput.setAttribute("id", "move-options-" + q);
			moveAside1OptionsInput.setAttribute("autocomplete", "off");
			moveAside1OptionsInput.value = q;
			moveAside1OptionsLabel.setAttribute("for", "move-options-" + q);
			moveAside1OptionsLabel.setAttribute("name", "medium");
			if(finaldataMove[q]["Name" + "_" + JSONPath_MoveName] != undefined) {
				moveAside1OptionsLabel.setAttribute("data-search-name", finaldataMove[q]["Name" + "_" + JSONPath_MoveName].toLowerCase());
			} else {
				moveAside1OptionsLabel.setAttribute("data-search-name", "");
			}
			if(finaldataMoveType[q]["Type_" + JSONPath_MoveType] != undefined) {
				moveAside1OptionsLabel.setAttribute("data-search-type", finaldataMoveType[q]["Type_" + JSONPath_MoveType].toLowerCase());
			} else {
				moveAside1OptionsLabel.setAttribute("data-search-type", "");
			}
			if(finaldataMoveCategory[q]["Category_" + JSONPath_MoveCategory] != undefined) {
				moveAside1OptionsLabel.setAttribute("data-search-category", finaldataMoveCategory[q]["Category_" + JSONPath_MoveCategory].toLowerCase());
			} else {
				moveAside1OptionsLabel.setAttribute("data-search-category", "");
			}
			if(finaldataMovePP[q]["PP Min_" + JSONPath_MovePP] != undefined) {
				moveAside1OptionsLabel.setAttribute("data-search-pp", finaldataMovePP[q]["PP Min_" + JSONPath_MovePP].toLowerCase());
			} else {
				moveAside1OptionsLabel.setAttribute("data-search-pp", "");
			}
			if(finaldataMovePower[q]["Power_" + JSONPath_MovePower] != undefined) {
				moveAside1OptionsLabel.setAttribute("data-search-power", finaldataMovePower[q]["Power_" + JSONPath_MovePower].toLowerCase());
			} else {
				moveAside1OptionsLabel.setAttribute("data-search-power", "");
			}
			if(finaldataMoveAccuracy[q]["Accuracy_" + JSONPath_MoveAccuracy] != undefined) {
				moveAside1OptionsLabel.setAttribute("data-search-accuracy", finaldataMoveAccuracy[q]["Accuracy_" + JSONPath_MoveAccuracy].toLowerCase());
			} else {
				moveAside1OptionsLabel.setAttribute("data-search-accuracy", "");
			}
			if(finaldataMoveOtherMoves[q]["Contact"] == "Makes contact") {
				moveAside1OptionsLabel.setAttribute("data-search-contact", "y");
			} else if(finaldataMoveOtherMoves[q]["Contact"] == "Does not make contact") {
				moveAside1OptionsLabel.setAttribute("data-search-contact", "n");
			} else {
				moveAside1OptionsLabel.setAttribute("data-search-contact", "");
			}
			if(finaldataMoveTutor[q]["Tutor_" + JSONPath_MoveTutor] != undefined) {
				moveAside1OptionsLabel.setAttribute("data-search-tutor", "y");
			} else {
				moveAside1OptionsLabel.setAttribute("data-search-tutor", "n");
			}
			if(finaldataMoveMachine[q]["Machine_" + JSONPath_MoveMachine] != undefined) {
				moveAside1OptionsLabel.setAttribute("data-search-machine", finaldataMoveMachine[q]["Machine_" + JSONPath_MoveMachine].toLowerCase());
			} else {
				moveAside1OptionsLabel.setAttribute("data-search-machine", "");
			}
			moveAside1OptionsLabel.innerText = finaldataMove[q]["Name" + "_" + JSONPath_MoveName];
			moveAside1Options.appendChild(moveAside1OptionsInput);
			moveAside1Options.appendChild(moveAside1OptionsLabel);
			moveAside1OptionsInput.addEventListener("click", moveOptionsSelector);

			function moveOptionsSelector() {
				moveAside2TitleName.innerText = finaldataMove[this.value]["Name" + "_" + JSONPath_MoveName];
				moveAside2TitleID.innerText = "#" + finaldataMoveID[this.value]["ID" + "_" + JSONPath_MoveID];
				if(finaldataMoveID[this.value]["ID Type"] != undefined) {
					moveAside2TitleID.title = finaldataMoveID[this.value]["ID Type"] + " Index number";
				} else {
					moveAside2TitleID.title = "Index number";
				}
				moveAside2DebutText.innerText = "Introduced in " + finaldataMove[this.value]["Debut"].split("-")[0];
				moveAside3DescriptionText.innerText = finaldataMoveDescription[this.value]["Description_" + JSONPath_MoveDescription];
				moveAside3SidebarTypeTextImg.setAttribute("onerror", "this.style.display='none';this.nextElementSibling.style.display='block'");
				moveAside3SidebarTypeTextImg.src = "./media/Images/Misc/Type/Text/" + MEDIAPath_Type_Text + "/" + finaldataMoveType[this.value]["Type_" + JSONPath_MoveType] + ".png";
				moveAside3SidebarTypeTextImg.setAttribute("title", finaldataMoveType[this.value]["Type_" + JSONPath_MoveType]);
				if(finaldataMoveType[this.value]["Type_" + JSONPath_MoveType] == undefined) {
					moveAside3SidebarTypeTextImg.style.display = "none";
					moveAside3SidebarTypeTextText.style.display = "block";
				} else {
					moveAside3SidebarTypeTextImg.style.display = "block";
					moveAside3SidebarTypeTextText.style.display = "none";
				}
				moveAside3SidebarTypeTextText.innerText = finaldataMoveType[this.value]["Type_" + JSONPath_MoveType];
				var cate = moveAside3SidebarTypeMove.querySelectorAll(":scope > *");
				for(var u = 0; u < cate.length; u++) {
					cate[u].remove();
				}
				for(var u = 0; u < finaldataMoveCategory[this.value]["Category_" + JSONPath_MoveCategory].split(",").length; u++) {
					var moveAside3SidebarTypeMoveImg = document.createElement("img");
					moveAside3SidebarTypeMoveImg.setAttribute("onerror", "this.style.display='none';this.nextElementSibling.style.display='block'");
					moveAside3SidebarTypeMoveImg.src = "./media/Images/Misc/Type/Category/" + MEDIAPath_Type_Category + "/" + finaldataMoveCategory[this.value]["Category_" + JSONPath_MoveCategory].split(",")[u] + ".png";
					moveAside3SidebarTypeMoveImg.setAttribute("title", finaldataMoveCategory[this.value]["Category_" + JSONPath_MoveCategory].split(",")[u]);
					moveAside3SidebarTypeMove.appendChild(moveAside3SidebarTypeMoveImg);
					var moveAside3SidebarTypeMoveText = document.createElement("h4");
					moveAside3SidebarTypeMoveText.innerText = finaldataMoveCategory[this.value]["Category_" + JSONPath_MoveCategory].split(",")[u];
					moveAside3SidebarTypeMove.appendChild(moveAside3SidebarTypeMoveText);
				}
				if(finaldataMovePP[this.value]["PP Min_" + JSONPath_MovePP] == undefined) {
					moveAside3SidebarPPPAPowerPointsText.innerHTML = "–";
				} else if(finaldataMovePP[this.value]["PP Min_" + JSONPath_MovePP] != undefined && finaldataMovePP[this.value]["PP Max_" + JSONPath_MovePP] == undefined) {
					moveAside3SidebarPPPAPowerPointsText.innerHTML = finaldataMovePP[this.value]["PP Min_" + JSONPath_MovePP];
				} else {
					moveAside3SidebarPPPAPowerPointsText.innerHTML = finaldataMovePP[this.value]["PP Min_" + JSONPath_MovePP] + " <span>(max. " + finaldataMovePP[this.value]["PP Max_" + JSONPath_MovePP] + ")</span>";
				}
				if(finaldataMovePower[this.value]["Power_" + JSONPath_MovePower] == undefined) {
					moveAside3SidebarPPPAPowerText.innerText = "–";
				} else {
					moveAside3SidebarPPPAPowerText.innerText = finaldataMovePower[this.value]["Power_" + JSONPath_MovePower];
				}
				if(finaldataMoveAccuracy[this.value]["Accuracy_" + JSONPath_MoveAccuracy] == undefined) {
					moveAside3SidebarPPPAAccuracyText.innerText = "–";
				} else {
					moveAside3SidebarPPPAAccuracyText.innerText = finaldataMoveAccuracy[this.value]["Accuracy_" + JSONPath_MoveAccuracy];
				}
				if(finaldataMoveOtherMoves[this.value]["Contact"] == "Makes contact") {
					moveAside3SidebarContactText.innerHTML = "Makes <b>contact</b>";
				} else if(finaldataMoveOtherMoves[this.value]["Contact"] == "Does not make contact") {
					moveAside3SidebarContactText.innerHTML = "Does not make <b>contact</b>";
				}
				if(finaldataMoveOtherMoves[this.value]["Contact"].includes("not") || finaldataMoveOtherMoves[this.value]["Contact"].includes("Not")) {
					moveAside3SidebarContact.setAttribute("name", "negative");
				} else {
					moveAside3SidebarContact.setAttribute("name", "positive");
				}
				var divs = moveAside3SidebarRight.querySelectorAll(":scope > div");
				for(var u = 0; u < divs.length; u++) {
					if(divs[u].getAttribute("class") == "move-sidebar-description-hmtm" || divs[u].getAttribute("class") == "move-sidebar-description-tutor" || divs[u].getAttribute("class") == "move-sidebar-description-other") {
						divs[u].remove();
					}
				}
				if(Generation == 1) {
					var othermove = ["Mirror Move", "Sound-Based", "Outside Battle"];
				}
				if(Generation == 2) {
					var othermove = ["Protect", "Mirror Move", "King's Rock", "Sound-Based", "Outside Battle", ];
				}
				if(Generation >= 3 && Generation <= 4) {
					var othermove = ["Protect", "Magic Coat", "Snatch", "Mirror Move", "King's Rock", "Sound-Based", "Outside Battle", ];
				}
				if(Generation >= 5 && Generation <= 8) {
					var othermove = ["Protect", "Magic Coat/Magic Bounce", "Snatch", "Mirror Move", "King's Rock", "Sound-Based", "Outside Battle", ];
				}
				for(var u = 0; u < othermove.length; u++) {
					if(finaldataMoveOtherMoves[this.value][othermove[u]] != undefined) {
						var moveAside3SidebarOther = document.createElement("div");
						var moveAside3SidebarOtherContent = document.createElement("span");
						var moveAside3SidebarOtherText = document.createElement("p");
						moveAside3SidebarOther.classList.add("move-sidebar-description-other");
						for(var q = 0; q < othermove.length; q++) {
							if(finaldataMoveOtherMoves[this.value][othermove[u]] == "Affected by " + othermove[q]) {
								moveAside3SidebarOtherText.innerHTML = "Affected by <b>" + othermove[q] + "</b>";
							} else if(finaldataMoveOtherMoves[this.value][othermove[u]] == "Not affected by " + othermove[q]) {
								moveAside3SidebarOtherText.innerHTML = "Not affected by <b>" + othermove[q] + "</b>";
							}
						}
						if(finaldataMoveOtherMoves[this.value][othermove[u]] == "Usable outside of battle") {
							moveAside3SidebarOtherText.innerHTML = "Usable <b>outside of battle</b>";
						} else if(finaldataMoveOtherMoves[this.value][othermove[u]] == "Is a sound-based move") {
							moveAside3SidebarOtherText.innerHTML = "Is a <b>sound-based</b> move";
						} else if(finaldataMoveOtherMoves[this.value][othermove[u]] == "Affected by Magic Coat and Magic Bounce") {
							moveAside3SidebarOtherText.innerHTML = "Affected by <b>Magic Coat and Magic Bounce</b>";
						} else if(finaldataMoveOtherMoves[this.value][othermove[u]] == "Not affected by Magic Coat") {
							moveAside3SidebarOtherText.innerHTML = "Not affected by <b>Magic Coat</b>";
						}
						moveAside3SidebarRight.appendChild(moveAside3SidebarOther);
						moveAside3SidebarOther.appendChild(moveAside3SidebarOtherContent);
						moveAside3SidebarOtherContent.appendChild(moveAside3SidebarOtherText);
						if(finaldataMoveOtherMoves[this.value][othermove[u]].includes("not") || finaldataMoveOtherMoves[this.value][othermove[u]].includes("Not")) {
							moveAside3SidebarOther.setAttribute("name", "negative");
						} else {
							moveAside3SidebarOther.setAttribute("name", "positive");
						}
					}
				}
				if(finaldataMoveMachine[this.value]["Machine_" + JSONPath_MoveMachine] != undefined) {
					var moveAside3SidebarHMTM = document.createElement("div");
					var moveAside3SidebarHMTMOuter = document.createElement("span");
					var moveAside3SidebarHMTMContent = document.createElement("span");
					var moveAside3SidebarHMTMTitle = document.createElement("h3");
					var moveAside3SidebarHMTMText = document.createElement("p");
					moveAside3SidebarHMTM.classList.add("move-sidebar-description-hmtm");
					moveAside3SidebarHMTMTitle.innerText = "Machine";
					moveAside3SidebarHMTMText.innerText = finaldataMoveMachine[this.value]["Machine_" + JSONPath_MoveMachine];
					moveAside3SidebarRight.appendChild(moveAside3SidebarHMTM);
					moveAside3SidebarHMTM.appendChild(moveAside3SidebarHMTMOuter);
					moveAside3SidebarHMTMOuter.appendChild(moveAside3SidebarHMTMContent);
					moveAside3SidebarHMTMContent.appendChild(moveAside3SidebarHMTMTitle);
					moveAside3SidebarHMTMContent.appendChild(moveAside3SidebarHMTMText);
				}
				if(finaldataMoveTutor[this.value]["Tutor_" + JSONPath_MoveTutor] != undefined) {
					var moveAside3SidebarTutor = document.createElement("div");
					var moveAside3SidebarTutorOuter = document.createElement("span");
					var moveAside3SidebarTutorContent = document.createElement("span");
					var moveAside3SidebarTutorTitle = document.createElement("h3");
					var moveAside3SidebarTutorText = document.createElement("p");
					moveAside3SidebarTutor.classList.add("move-sidebar-description-tutor");
					moveAside3SidebarTutorTitle.innerText = "Move Tutor";
					moveAside3SidebarTutorText.innerText = finaldataMoveTutor[this.value]["Tutor_" + JSONPath_MoveTutor];
					moveAside3SidebarRight.appendChild(moveAside3SidebarTutor);
					moveAside3SidebarTutor.appendChild(moveAside3SidebarTutorOuter);
					moveAside3SidebarTutorOuter.appendChild(moveAside3SidebarTutorContent);
					moveAside3SidebarTutorContent.appendChild(moveAside3SidebarTutorTitle);
					moveAside3SidebarTutorContent.appendChild(moveAside3SidebarTutorText);
				}
				var lis = moveAside4LearnsetUl.querySelectorAll(":scope > li");
				for(var u = 0; u < lis.length; u++) {
					lis[u].remove();
				}
				var learnsetlevelarr = [];
				for(var q = 0; q < finaldataLearnsetLevel.length; q++) {
					if(finaldataLearnsetLevel[q]["Move"] == finaldataMove[this.value]["Name" + "_" + JSONPath_MoveName]) {
						var obj = new Object();
						obj["Pokémon"] = finaldataLearnsetLevel[q]["Pokémon"];
						if(finaldataLearnsetLevel[q]["Form"] != undefined) {
							obj["Form"] = finaldataLearnsetLevel[q]["Form"];
						}
						obj["Factor"] = finaldataLearnsetLevel[q]["Factor"];
						learnsetlevelarr.push(obj);
					}
				}
				learnsetlevelarr = learnsetlevelarr.filter(
					(value) => Object.keys(value).length !== 0);
				learnsetlevelarr.sort(function(a, b) {
					return parseInt(a["Factor"]) - parseInt(b["Factor"]);
				});
				for(var q = 0; q < learnsetlevelarr.length; q++) {
					var moveAside4LearnsetLi = document.createElement("li");
					moveAside4LearnsetUl.appendChild(moveAside4LearnsetLi);
					var moveAside4LearnsetLiImgOuter = document.createElement("div");
					var moveAside4LearnsetLiImg = document.createElement("img");
					var moveAside4LearnsetLiSourceOuter = document.createElement("span");
					var moveAside4LearnsetLiSource = document.createElement("p");
					moveAside4LearnsetLiSourceOuter.title = "Level Up";
					moveAside4LearnsetLiSource.innerHTML = "Level Up: " + "<b>" + learnsetlevelarr[q]["Factor"] + "</b>";
					if(learnsetlevelarr[q]["Form"] == undefined) {
						moveAside4LearnsetLiImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + getPokémonMediaPath(learnsetlevelarr[q]["Pokémon"]) + ".png";
						moveAside4LearnsetLiImg.title = learnsetlevelarr[q]["Pokémon"];
						moveAside4LearnsetLiImg.value = getPokémonInt(learnsetlevelarr[q]["Pokémon"]);
					} else {
						moveAside4LearnsetLiImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + getPokémonMediaPath(learnsetlevelarr[q]["Form"]) + ".png";
						moveAside4LearnsetLiImg.title = learnsetlevelarr[q]["Form"];
						moveAside4LearnsetLiImg.value = getPokémonInt(learnsetlevelarr[q]["Form"]);
					}
					moveAside4LearnsetLiImg.addEventListener("click", modalData);
					moveAside4LearnsetLiImg.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
					moveAside4LearnsetLi.appendChild(moveAside4LearnsetLiImgOuter);
					moveAside4LearnsetLiImgOuter.appendChild(moveAside4LearnsetLiImg);
					moveAside4LearnsetLi.appendChild(moveAside4LearnsetLiSourceOuter);
					moveAside4LearnsetLiSourceOuter.appendChild(moveAside4LearnsetLiSource);
				}
				for(var q = 0; q < finaldataLearnsetMachine.length; q++) {
					if(finaldataLearnsetMachine[q]["Move"] == finaldataMove[this.value]["Name" + "_" + JSONPath_MoveName]) {
						var moveAside4LearnsetLi = document.createElement("li");
						moveAside4LearnsetUl.appendChild(moveAside4LearnsetLi);
						var moveAside4LearnsetLiImgOuter = document.createElement("div");
						var moveAside4LearnsetLiImg = document.createElement("img");
						var moveAside4LearnsetLiSourceOuter = document.createElement("span");
						var moveAside4LearnsetLiSource = document.createElement("p");
						if(finaldataLearnsetMachine[q]["Machine"].includes("HM")) {
							moveAside4LearnsetLiSource.innerHTML = "<b>" + finaldataLearnsetMachine[q]["Machine"] + "</b>";
							moveAside4LearnsetLiSource.title = "HM";
						} else if(finaldataLearnsetMachine[q]["Machine"].includes("TM")) {
							moveAside4LearnsetLiSource.innerHTML = "<b>" + finaldataLearnsetMachine[q]["Machine"] + "</b>";
							moveAside4LearnsetLiSource.title = "TM";
						} else if(finaldataLearnsetMachine[q]["Machine"].includes("TR")) {
							moveAside4LearnsetLiSource.innerHTML = "<b>" + finaldataLearnsetMachine[q]["Machine"] + "</b>";
							moveAside4LearnsetLiSource.title = "TR";
						}
						if(finaldataLearnsetMachine[q]["Form"] == undefined) {
							moveAside4LearnsetLiImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + getPokémonMediaPath(finaldataLearnsetMachine[q]["Pokémon"]) + ".png";
							moveAside4LearnsetLiImg.title = finaldataLearnsetMachine[q]["Pokémon"];
							moveAside4LearnsetLiImg.value = getPokémonInt(finaldataLearnsetMachine[q]["Pokémon"]);
						} else {
							moveAside4LearnsetLiImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + getPokémonMediaPath(finaldataLearnsetMachine[q]["Form"]) + ".png";
							moveAside4LearnsetLiImg.title = finaldataLearnsetMachine[q]["Form"];
							moveAside4LearnsetLiImg.value = getPokémonInt(finaldataLearnsetMachine[q]["Form"]);
						}
						moveAside4LearnsetLiImg.addEventListener("click", modalData);
						moveAside4LearnsetLiImg.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
						moveAside4LearnsetLi.appendChild(moveAside4LearnsetLiImgOuter);
						moveAside4LearnsetLiImgOuter.appendChild(moveAside4LearnsetLiImg);
						moveAside4LearnsetLi.appendChild(moveAside4LearnsetLiSourceOuter);
						moveAside4LearnsetLiSourceOuter.appendChild(moveAside4LearnsetLiSource);
					}
				}
				for(var q = 0; q < finaldataLearnsetBreed.length; q++) {
					if(finaldataLearnsetBreed[q]["Move"] == finaldataMove[this.value]["Name" + "_" + JSONPath_MoveName]) {
						var moveAside4LearnsetLi = document.createElement("li");
						moveAside4LearnsetUl.appendChild(moveAside4LearnsetLi);
						var moveAside4LearnsetLiImgOuter = document.createElement("div");
						var moveAside4LearnsetLiImg = document.createElement("img");
						var moveAside4LearnsetLiSourceOuter = document.createElement("span");
						var moveAside4LearnsetLiSourceText = document.createElement("p");
						var moveAside4LearnsetLiSourceImgOuter = document.createElement("span");
						moveAside4LearnsetLiSourceOuter.title = "Parent";
						moveAside4LearnsetLiSourceText.innerText = "Parent:";
						if(finaldataLearnsetBreed[q]["Parent"].includes(",")) {
							for(var r = 0; r < finaldataLearnsetBreed[q]["Parent"].split(",").length; r++) {
								var moveAside4LearnsetLiSource = document.createElement("img");
								moveAside4LearnsetLiSource.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + getPokémonMediaPath(finaldataLearnsetBreed[q]["Parent"].split(",")[r]) + ".png";
								moveAside4LearnsetLiSource.title = finaldataLearnsetBreed[q]["Parent"].split(",")[r];
								moveAside4LearnsetLiSource.value = getPokémonInt(finaldataLearnsetBreed[q]["Parent"].split(",")[r]);
								moveAside4LearnsetLiSourceImgOuter.appendChild(moveAside4LearnsetLiSource);
								moveAside4LearnsetLiSource.addEventListener("click", modalData);
							}
						} else if(finaldataLearnsetBreed[q]["Parent"] == "None") {
							moveAside4LearnsetLiSourceImgOuter.innerText = finaldataLearnsetBreed[q]["Parent"];
						} else {
							var moveAside4LearnsetLiSource = document.createElement("img");
							moveAside4LearnsetLiSource.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + getPokémonMediaPath(finaldataLearnsetBreed[q]["Parent"]) + ".png";
							moveAside4LearnsetLiSource.title = finaldataLearnsetBreed[q]["Parent"];
							moveAside4LearnsetLiSourceImgOuter.appendChild(moveAside4LearnsetLiSource);
						}
						if(finaldataLearnsetBreed[q]["Form"] == undefined) {
							moveAside4LearnsetLiImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + getPokémonMediaPath(finaldataLearnsetBreed[q]["Pokémon"]) + ".png";
							moveAside4LearnsetLiImg.title = finaldataLearnsetBreed[q]["Pokémon"];
							moveAside4LearnsetLiImg.value = getPokémonInt(finaldataLearnsetBreed[q]["Pokémon"]);
						} else {
							moveAside4LearnsetLiImg.src = "./media/Images/Pokémon/Box/PNG/" + MEDIAPath_Pokémon_Box + "/" + getPokémonMediaPath(finaldataLearnsetBreed[q]["Form"]) + ".png";
							moveAside4LearnsetLiImg.title = finaldataLearnsetBreed[q]["Form"];
							moveAside4LearnsetLiImg.value = getPokémonInt(finaldataLearnsetBreed[q]["Form"]);
						}
						moveAside4LearnsetLiImg.addEventListener("click", modalData);
						moveAside4LearnsetLiImg.setAttribute("onerror", "this.src='./media/Images/Pokémon/Box/PNG/"+MEDIAPath_Pokémon_Box+"/0.png'");
						moveAside4LearnsetLi.appendChild(moveAside4LearnsetLiImgOuter);
						moveAside4LearnsetLiImgOuter.appendChild(moveAside4LearnsetLiImg);
						moveAside4LearnsetLi.appendChild(moveAside4LearnsetLiSourceOuter);
						moveAside4LearnsetLiSourceOuter.appendChild(moveAside4LearnsetLiSourceText);
						moveAside4LearnsetLiSourceOuter.appendChild(moveAside4LearnsetLiSourceImgOuter);
					}
				}
			}
			if(firstmoveiteration != true) {
				firstmoveiteration = true;
				moveAside1OptionsLabel.click();
			}
		}
	}
};