var size = 4;
	var min = 0;
	var max = size - 1;
	
	var isMoved = false;
	var score = 0;
	
	var excludeIds = [];

	function load() {
		//alert("load");
		//Load the table
		var html = '<table border="1">';
		for(var row=0;row<size;row++) {
			html += '<tr>';
			for(var col=0;col<size;col++) {
				var id = row+""+col;
				html += '<td align="center" valign="center" height="40" width="40" id="'+id+'"></td>';
			}
			html += '</tr>';
		}
		html += '</table>';
		//alert(html);
		document.getElementById("canvas").innerHTML = html;

		var id1 = getId();
		var id2 = "";
		while(true) {
			id2 = getId();
			if(id1 != id2)
			break;
		}
		//Set initial 2 values
		document.getElementById(id1).innerHTML = "2";
		document.getElementById(id2).innerHTML = "2";

		document.getElementById(id1).style.backgroundColor = getColor(2);
		document.getElementById(id2).style.backgroundColor = getColor(2);
		
		score = 0;
		document.getElementById("score").innerHTML = score;

		return false;
	}
	function getRandom()
	{
		return Math.floor(Math.random()*(max-min+1)+min);
	}
	function getId()
	{
		var i = getRandom();
		var j = getRandom();
		return i+""+j;
	}
	function up() {
		isMoved = false;
		excludeIds = [];
		for(var j=min;j<=max;j++) {
			for(var i=min;i<=max;i++) {
				var id = i+""+j;
				if(document.getElementById(id).innerHTML != "") {
					moveUp(id);
				}
			}
		}
		if(isMoved == true) {
			update();
		}
		return false;
	}
	function moveUp(id) {		
		if(!id.startsWith(min)) {
			var arr = id.split("");
			var i = parseInt(arr[0]);
			var j = parseInt(arr[1]);
			for(var k=(i-1);k>=min;k--) {
				var nId = k+""+j;
				if(document.getElementById(nId).innerHTML != "") {
					var val = parseInt(document.getElementById((k+1)+""+j).innerHTML);
					var nVal = parseInt(document.getElementById(nId).innerHTML);
					if(val == nVal) {
						if(excludeIds.indexOf(nId) == -1){
							excludeIds.push(nId);
							document.getElementById(nId).innerHTML = (val+nVal);
							document.getElementById(nId).style.backgroundColor = getColor((val+nVal));
							document.getElementById((k+1)+""+j).innerHTML = "";
							document.getElementById((k+1)+""+j).style.backgroundColor = "#ffffff";
							isMoved = true;
							score += (val+nVal);
						}
						break;
					}
				}
				else {
					document.getElementById(nId).innerHTML = document.getElementById((k+1)+""+j).innerHTML;
					document.getElementById(nId).style.backgroundColor = document.getElementById((k+1)+""+j).style.backgroundColor;
					document.getElementById((k+1)+""+j).innerHTML = "";
					document.getElementById((k+1)+""+j).style.backgroundColor = "#ffffff";
					isMoved = true;
				}
			}
		}
		return false;
	}
	function left() {
		isMoved = false;
		excludeIds = [];
		for(var i=min;i<=max;i++) {
			for(var j=min;j<=max;j++) {
				var id = i+""+j;
				if(document.getElementById(id).innerHTML != "") {
					moveLeft(id);
				}
			}
		}
		if(isMoved == true) {
			update();
		}
		return false;
	}
	function moveLeft(id) {
		if(!id.endsWith(min)) {
			var arr = id.split("");
			var i = parseInt(arr[0]);
			var j = parseInt(arr[1]);
			for(var k=(j-1);k>=min;k--) {
				var nId = i+""+k;
				if(document.getElementById(nId).innerHTML != "") {
					var val = parseInt(document.getElementById(i+""+(k+1)).innerHTML);
					var nVal = parseInt(document.getElementById(nId).innerHTML);
					if(val == nVal) {
						if(excludeIds.indexOf(nId) == -1){
							excludeIds.push(nId);
							document.getElementById(nId).innerHTML = (val+nVal);
							document.getElementById(nId).style.backgroundColor = getColor((val+nVal));
							document.getElementById(i+""+(k+1)).innerHTML = "";
							document.getElementById(i+""+(k+1)).style.backgroundColor = "#ffffff";
							isMoved = true;
							score += (val+nVal);
						}
						break;
					}
				}
				else {
					document.getElementById(nId).innerHTML = document.getElementById(i+""+(k+1)).innerHTML;
					document.getElementById(nId).style.backgroundColor = document.getElementById(i+""+(k+1)).style.backgroundColor;
					document.getElementById(i+""+(k+1)).innerHTML = "";
					document.getElementById(i+""+(k+1)).style.backgroundColor = "#ffffff";
					isMoved = true;
				}
			}
		}
		return false;
	}
	function down() {
		isMoved = false;
		excludeIds = [];
		for(var i=min;i<=max;i++) {
			for(var j=max;j>=min;j--) {
				var id = j+""+i;
				if(document.getElementById(id).innerHTML != "") {
					moveDown(id);
				}
			}
		}
		if(isMoved == true) {
			update();
		}
		return false;
	}
	function moveDown(id) {
		if(!id.startsWith(max)) {
			var arr = id.split("");
			var i = parseInt(arr[0]);
			var j = parseInt(arr[1]);
			for(var k=(i+1);k<=max;k++) {
				var nId = k+""+j;
				if(document.getElementById(nId).innerHTML != "") {
					var val = parseInt(document.getElementById((k-1)+""+j).innerHTML);
					var nVal = parseInt(document.getElementById(nId).innerHTML);
					if(val == nVal) {
						if(excludeIds.indexOf(nId) == -1){
							excludeIds.push(nId);
							document.getElementById(nId).innerHTML = (val+nVal);
							document.getElementById(nId).style.backgroundColor = getColor((val+nVal));
							document.getElementById((k-1)+""+j).innerHTML = "";
							document.getElementById((k-1)+""+j).style.backgroundColor = "#ffffff";
							isMoved = true;
							score += (val+nVal);
						}
						break;
					}
				}
				else {
					document.getElementById(nId).innerHTML = document.getElementById((k-1)+""+j).innerHTML;
					document.getElementById(nId).style.backgroundColor = document.getElementById((k-1)+""+j).style.backgroundColor;
					document.getElementById((k-1)+""+j).innerHTML = "";
					document.getElementById((k-1)+""+j).style.backgroundColor = "#ffffff";
					isMoved = true;
				}
			}
		}
		return false;
	}
	function right() {
		isMoved = false;
		excludeIds = [];
		for(var i=min;i<=max;i++) {
			for(var j=max;j>=min;j--) {
				var id = i+""+j;
				if(document.getElementById(id).innerHTML != "") {
					moveRight(id);
				}
			}
		}
		if(isMoved == true) {
			update();
		}
		return false;
	}
	function moveRight(id) {
		if(!id.endsWith(max)) {
			var arr = id.split("");
			var i = parseInt(arr[0]);
			var j = parseInt(arr[1]);
			for(var k=(j+1);k<=max;k++) {
				var nId = i+""+k;
				if(document.getElementById(nId).innerHTML != "") {
					var val = parseInt(document.getElementById(i+""+(k-1)).innerHTML);
					var nVal = parseInt(document.getElementById(nId).innerHTML);
					if(val == nVal) {
						if(excludeIds.indexOf(nId) == -1){
							excludeIds.push(nId);
							document.getElementById(nId).innerHTML = (val+nVal);
							document.getElementById(nId).style.backgroundColor = getColor((val+nVal));
							document.getElementById(i+""+(k-1)).innerHTML = "";
							document.getElementById(i+""+(k-1)).style.backgroundColor = "#ffffff";
							isMoved = true;
							score += (val+nVal);
						}
						break;
					}
				}
				else {
					document.getElementById(nId).innerHTML = document.getElementById(i+""+(k-1)).innerHTML;
					document.getElementById(nId).style.backgroundColor = document.getElementById(i+""+(k-1)).style.backgroundColor;
					document.getElementById(i+""+(k-1)).innerHTML = "";
					document.getElementById(i+""+(k-1)).style.backgroundColor = "#ffffff";
					isMoved = true;
				}
			}
		}
		return false;
	}
	function update() {		
		//Add new value
		var ids = [];
		for(var i=min;i<=max;i++) {
			for(var j=min;j<=max;j++) {
				var id = i+""+j;
				if(document.getElementById(id).innerHTML == "") {
					ids.push(id);
				}
			}
		}
		var id = ids[Math.floor(Math.random()*ids.length)];
		document.getElementById(id).innerHTML = "2";
		document.getElementById(id).style.backgroundColor = getColor(2);

		//Check if no move space available
		var allFilled = true;
		for(var i=min;i<=max;i++) {
			for(var j=min;j<=max;j++) {
				var id = i+""+j;
				if(document.getElementById(id).innerHTML == "") {
					allFilled = false;
					break;
				}
			}
		}		
		//Update score
		document.getElementById("score").innerHTML = score;
		if(allFilled) {
			checkGameOver();
		}
	}

	function checkGameOver() {
		var isOver = true;
		for(var j=min;j<=max;j++) {
			for(var i=min;i<=(max-1);i++) {
				//alert(i+" "+j);
				var val = parseInt(document.getElementById(i+""+j).innerHTML);
				var nVal = parseInt(document.getElementById((i+1)+""+j).innerHTML);
				if(val == nVal) {
					isOver = false;
					break;
				}
			}
		}		
		if(isOver == true) {
			for(var i=min;i<=max;i++) {
				for(var j=min;j<=(max-1);j++) {
					//alert(i+" "+j);
					var val = parseInt(document.getElementById(i+""+j).innerHTML);
					var nVal = parseInt(document.getElementById(i+""+(j+1)).innerHTML);
					if(val == nVal) {
						isOver = false;
						break;
					}
				}
			}
		}
		if(isOver) {
			var Over = document.getElementById('Over').style.display = "block";
		}
		return false;
	}
	function getColor(val)
	{
		var color = "#ffffff";
		switch(val) {
			case 2:		color = "#F6CED8"; break;
			case 4:		color = "#F7BE81"; break;
			case 8:		color = "#F3F781"; break;
			case 16:	color = "#BEF781"; break;
			case 32:	color = "#81F7D8"; break;
			case 64:	color = "#58D3F7"; break;
			case 128:	color = "#FA58F4"; break;
			case 256:	color = "#A901DB"; break;
			case 512:	color = "#01DF3A"; break;
			case 1024:	color = "#D7DF01"; break;
			case 2048:	color = "#D7DF01"; break;
			default:	color = "#ffffff";
		}
		return color;
	}
	if ( typeof String.prototype.startsWith != 'function' ) {
	  String.prototype.startsWith = function( str ) {
		return this.substring( 0, str.length ) === str;
	  }
	};
	if ( typeof String.prototype.endsWith != 'function' ) {
	  String.prototype.endsWith = function( str ) {
		return this.substring( this.length - str.length, this.length ) === str;
	  }
	};
	document.onkeydown = function(e) {
		e.preventDefault();//to prevent scroll of screen
		switch (e.keyCode) {
			case 37:
				left();
				break;
			case 38:
				up();
				break;
			case 39:
				right();
				break;
			case 40:
				down();
				break;
		}
	};
	//calling load method
	load();
	function Reload()
	{
		location.reload();
	}
	// On click funtion (AI Help button)
	function AI_AutoPlay() {
		var a = document.getElementById('Pause');
		a.style.display = "none";
		var b = setInterval(AI_AutoPlay2,5);
	}

	function AI_AutoPlay2() {
		AI_Fun();
		var e1 = document.getElementById('point0').value;
		var e2 = document.getElementById('point1').value;
		var e3 = document.getElementById('point2').value;
		var e4 = document.getElementById('point3').value;
		var ee1 = parseFloat(e1);
		var ee2 = parseFloat(e2);
		var ee3 = parseFloat(e3);
		var ee4 = parseFloat(e4);
		var max = 1;
		if (ee1 >= ee2 && ee1 >= ee3 && ee1 >= ee4) max = 1;
		if (ee2 >= ee1 && ee2 >= ee3 && ee2 >= ee4) max = 2;
		if (ee3 >= ee1 && ee3 >= ee2 && ee3 >= ee4) max = 3;
		if (ee4 > ee1 && ee4 > ee2 && ee4 > ee3) max = 4;
		if (ee1 == 0 && ee2 == 0 && ee3 == 0 && ee4 ==0) max = 1;
		if (max ==1) 
			up()
		if (max ==2) 
			down()
		if (max ==3) 
			left()
		if (max ==4) 
			right()
		AI_Fun();
	}
	function AI_Fun() {
		i = 0;
		j = 0;
		var Des = document.getElementById('Des')
		var Box = document.getElementById('AI_BOX')
		var Goal = document.getElementById('Goal')
		var Close = document.getElementById('Close')
		var Help = document.getElementById('AI_Help')
		Help.style.marginLeft = "240px"
		Des.style.display = "block";
		Box.style.display = "block";
		Goal.style.display = "block";
		Close.style.display = "inline-block";
		var c = new Array();
		var k = 0;
		for (var i = 0; i <4; i++) {
			for (var j=0; j <4; j++) {
   			var val = parseInt(document.getElementById(i+""+j).innerHTML);
			c[k] = val;
			if(String(c[k]) == "NaN")
				c[k] = 0;
			k++;
			}
		}	

		/-- Trạng thái đích --/
		var UT = new Array();
		var Count = 0;
		for(var i=0;i<16;i++)
			UT[i] = document.getElementById('AP'+i)
		var UTT = new Array();
		for(var i=0;i<16;i++)
			UTT[i] = parseInt(UT[i].value);
		for(var i=0;i<16;i++)
			if (c[i] == UTT[i]) Count++;
		if (c[12] > UTT[0] || Count == 16) {
			for(var i=0;i<16;i++){
				if (UTT[i] == 0) {
					UTT[i] = 2;
					break;
				}
				else
					UTT[i] *=2;
			}
		}
		for(var i=0;i<16;i++) {
			UT[i].value = UTT[i];	
		}
		/-- Điểm ưu tiên --/
		Calc_left();
		Calc_up();
		Calc_down();
		Calc_right();
		/-- Estimate after moving --/
		var e1 = document.getElementById('point0').value;
		var e2 = document.getElementById('point1').value;
		var e3 = document.getElementById('point2').value;
		var e4 = document.getElementById('point3').value;
		var ee1 = parseFloat(e1);
		var ee2 = parseFloat(e2);
		var ee3 = parseFloat(e3);
		var ee4 = parseFloat(e4);
		var max = 0;
		if (ee1 > ee2 && ee1 > ee3 && ee1 > ee4) max = 1;
		if (ee2 > ee1 && ee2 > ee3 && ee2 > ee4) max = 2;
		if (ee3 > ee1 && ee3 > ee2 && ee3 > ee4) max = 3;
		if (ee4 > ee1 && ee4 > ee2 && ee4 > ee3) max = 4;
		if (ee1 == ee2 && ee2 == ee3 && ee3 == ee4) {
			max = 1;
		}
		var ETM = c;
		if (max ==1) Upp(ETM);
		else if (max == 2) Downn(ETM);
		else if (max == 3) Leftt(ETM);
		else Rightt(ETM);
		var id = "";
		for(var i = 0;i<16;i++){
			id = "IP" + i;
			var a = document.getElementById(id);
			a.value = ETM[i];
			if (ETM[i] > 128) a.style.fontSize = 10
			if(ETM[i] == 0)
				a.value = ""
		}
	// AI BOX -------------------
		var d = document.getElementById('Move')
		d.style.transitionDuration = "0.1s"
		var f = document.getElementById('a_tag')
		var e = 0
		var ff = new Array()
		ff[0] = parseFloat(document.getElementById('point0').value)
		ff[1] = parseFloat(document.getElementById('point1').value)
		ff[2] = parseFloat(document.getElementById('point2').value)
		ff[3] = parseFloat(document.getElementById('point3').value)
		var max = ff[0]
		for (var i=0;i<4;i++){
			if (ff[i] > max) {
				max = ff[i];
				e = i;
			}
		}
		if (e == 1){
			f.innerHTML = "You should move down"
			d.style.transform = "rotate(180deg)"
		}
		else if(e == 2){
			f.innerHTML = "You should move left"
			d.style.transform = "rotate(270deg)"
		}
		else if(e == 3){
			f.innerHTML = "You should move right"
			d.style.transform = "rotate(90deg)"
		}
		else if(e == 0){
			f.innerHTML = "You should move up"
			d.style.transform = "rotate(0deg)"
		}
		var aa = 0;
}
	/-- Tính điểm ưu tiên cho move up --/
	function Calc_up() {
		var d = new Array()
		var e = new Array();
		var k = 0;
		const p = 50;
		var point = 0;
		for (var i = 0; i <4; i++) {
			for (var j=0; j <4; j++) {
   			var val = parseInt(document.getElementById(i+""+j).innerHTML);
			e[k] = val;
			if(String(e[k]) == "NaN")
				e[k] = 0;
			k++;
			}
		}	
		Upp(e);
		k=0;
		for (var i = 0; i <4; i++) {
			for (var j=0; j <4; j++) {
   			var val2 = parseInt(document.getElementById(i+""+j).innerHTML);
			d[k] = val2;
			if(String(d[k]) == "NaN")
				d[k] = 0;
			k++;
			}
		}	
		/*if (e[12] > d[12]) {
			point += p + e[12] - d[12]
		}
		if (e[13] > d[13]) {
			point += p/2 + e[13] - d[13]
		}
		if (e[14] >d[14]) {
			point += p/4 + e[14] - d[14]
		}
		if (e[15] > d[15]) {
			point += p/8 + e[15] - d[15]
		}
		if (e[8] > d[8]) {
			point += p/128
		}
		if (e[9] > d[9]) {
			point += p/64
		}
		if (e[10] > d[10]) {
			point += p/32
		}
		if (e[11] > d[11]) {
			point += p/16
		}
		if (e[4] > d[4]) {
			point += p/256
		}
		if (e[5] > d[5]) {
			point += p/512
		}
		if (e[6] > d[6]) {
			point += p/1024
		}
		if (e[7] > d[7]) {
			point += p/2048
		}
		if (e[0] > d[0]) {
			point += p/4096
		}
		if (e[1] > d[1]) {
			point += p/8192
		}
		if (e[2] > d[2]) {
			point += p/16384
		}
		if (e[3] > d[3]) {
			point += p/32768
		}*/
		var Condition1 = document.getElementById('point1').value;
		var c1 = parseFloat(Condition1);
		var Condition2 = document.getElementById('point2').value;
		var c2 = parseFloat(Condition2);
		var Condition3 = document.getElementById('point3').value;
		var c3 = parseFloat(Condition3);
		var CcDown = document.getElementById('point0')
		point = parseFloat(point).toFixed(5);
		if (e[0] == d[0] && e[4] == d[4] && e[8] == d[8] && e[12] == d[12] && e[0] != 0) {
			point += 0.1;
		}
		else if (true) {
			point = parseFloat(0).toFixed(5);
		}
		CcDown.value = point;
	}
	/-- Tính điểm ưu tiên cho move down --/
	function Calc_down() {
		var d = new Array()
		var e = new Array();
		var k = 0;
		const p = 50;
		var point = 0;
		for (var i = 0; i <4; i++) {
			for (var j=0; j <4; j++) {
   			var val = parseInt(document.getElementById(i+""+j).innerHTML);
			e[k] = val;
			if(String(e[k]) == "NaN")
				e[k] = 0;
			k++;
			}
		}	
		Downn(e);
		k=0;
		for (var i = 0; i <4; i++) {
			for (var j=0; j <4; j++) {
   			var val2 = parseInt(document.getElementById(i+""+j).innerHTML);
			d[k] = val2;
			if(String(d[k]) == "NaN")
				d[k] = 0;
			k++;
			}
		}	
		if (e[12] > d[12]) {
			point += p + e[12] - d[12]
		}
		if (e[13] > d[13]) {
			point += p/2 + e[13] - d[13]
		}
		if (e[14] >d[14]) {
			point += p/4 + e[14] - d[14]
		}
		if (e[15] > d[15]) {
			point += p/8 + e[15] - d[15]
		}
		if (e[8] > d[8]) {
			point += p/128
		}
		if (e[9] > d[9]) {
			point += p/64
		}
		if (e[10] > d[10]) {
			point += p/32
		}
		if (e[11] > d[11]) {
			point += p/16
		}
		//
		if (e[4] > d[4]) {
			point += p/256
		}
		if (e[5] > d[5]) {
			point += p/512
		}
		if (e[6] > d[6]) {
			point += p/1024
		}
		if (e[7] > d[7]) {
			point += p/2048
		}
		if (e[0] > d[0]) {
			point += p/4096
		}
		if (e[1] > d[1]) {
			point += p/8192
		}
		if (e[2] > d[2]) {
			point += p/16384
		}
		if (e[3] > d[3]) {
			point += p/32768
		}

		var CcDown = document.getElementById('point1')
		point = parseFloat(point).toFixed(5);
		CcDown.value = point;
	}
	/-- Tính điểm ưu tiên cho move left --/
	function Calc_left() {
		var d = new Array()
		var e = new Array();
		var k = 0;
		const p = 50;
		var point = 0;
		for (var i = 0; i <4; i++) {
			for (var j=0; j <4; j++) {
   			var val = parseInt(document.getElementById(i+""+j).innerHTML);
			e[k] = val;
			if(String(e[k]) == "NaN")
				e[k] = 0;
			k++;
			}
		}	
		Leftt(e);
		k=0;
		for (var i = 0; i <4; i++) {
			for (var j=0; j <4; j++) {
   			var val2 = parseInt(document.getElementById(i+""+j).innerHTML);
			d[k] = val2;
			if(String(d[k]) == "NaN")
				d[k] = 0;
			k++;
			}
		}	
		if (e[12] > d[12]) {
			point += p + e[12] - d[12]
		}
		if (e[13] > d[13]) {
			point += p/2 + e[13] - d[13]
		}
		if (e[14] >d[14]) {
			point += p/4 + e[14] - d[14]
		}
		if (e[15] > d[15]) {
			point += p/8 + e[15] - d[15]
		}
		if (e[8] > d[8]) {
			point += p/128
		}
		if (e[9] > d[9]) {
			point += p/64
		}
		if (e[10] > d[10]) {
			point += p/32
		}
		if (e[11] > d[11]) {
			point += p/16
		}
		//
		if (e[4] > d[4]) {
			point += p/256
		}
		if (e[5] > d[5]) {
			point += p/512
		}
		if (e[6] > d[6]) {
			point += p/1024
		}
		if (e[7] > d[7]) {
			point += p/2048
		}
		if (e[0] > d[0]) {
			point += p/4096
		}
		if (e[1] > d[1]) {
			point += p/8192
		}
		if (e[2] > d[2]) {
			point += p/16384
		}
		if (e[3] > d[3]) {
			point += p/32768
		}

		var CcDown = document.getElementById('point2')
		point = parseFloat(point).toFixed(5);
		CcDown.value = point;
	}
	function Calc_right(c) {
		var d = new Array()
		var e = new Array();
		var k = 0;
		const p = 50;
		var point = 0;
		for (var i = 0; i <4; i++) {
			for (var j=0; j <4; j++) {
   			var val = parseInt(document.getElementById(i+""+j).innerHTML);
			e[k] = val;
			if(String(e[k]) == "NaN")
				e[k] = 0;
			k++;
			}
		}	
		Rightt(e);
		k=0;
		for (var i = 0; i <4; i++) {
			for (var j=0; j <4; j++) {
   			var val2 = parseInt(document.getElementById(i+""+j).innerHTML);
			d[k] = val2;
			if(String(d[k]) == "NaN")
				d[k] = 0;
			k++;
			}
		}
		if (e[12] < d[12]) {
			point -= p/32
		}	
		/*if (e[12] > d[12]) {
			point += p + e[12] - d[12]
		}
		if (e[13] > d[13]) {
			point += p/2 + e[13] - d[13]
		}
		if (e[14] >d[14]) {
			point += p/4 + e[14] - d[14]
		}*/
		if (e[15] > d[15]) {
			point += p/8 + e[15] - d[15]
		} 
		if (e[8] > d[8]) {
			point += p/128
		}
		if (e[9] > d[9]) {
			point += p/64
		}
		if (e[10] > d[10]) {
			point += p/32
		}
		if (e[11] > d[11]) {
			point += p/16
		}
		//
		if (e[4] > d[4]) {
			point += p/256
		}
		if (e[5] > d[5]) {
			point += p/512
		}
		if (e[6] > d[6]) {
			point += p/1024
		}
		if (e[7] > d[7]) {
			point += p/2048
		}
		if (e[0] > d[0]) {
			point += p/4096
		}
		if (e[1] > d[1]) {
			point += p/8192
		}
		if (e[2] > d[2]) {
			point += p/16384
		}
		if (e[3] > d[3]) {
			point += p/32768
		}
		var Condition1 = document.getElementById('point1').value;
		var c1 = parseFloat(Condition1);
		var Condition2 = document.getElementById('point2').value;
		var c2 = parseFloat(Condition2);
		var CcDown = document.getElementById('point3')
		point = parseFloat(point).toFixed(5);
		if (d[12] > 0 && d[13] > 0 && d[14] > 0 && d[15] > 0 && d[12] == e[12] && d[13] == e[13] && d[14] == e[14] && d[15] == e[15]) {
				// Do nothing
		}
		else if (c1 != 0 || c2 !=0) {
			point = 0;
		}
		CcDown.value = point;
	}
	function AI_Close() {
		var Des = document.getElementById('Des')
		var Box = document.getElementById('AI_BOX')
		var Goal = document.getElementById('Goal')
		var Close = document.getElementById('Close')
		Des.style.display = "none";
		Box.style.display = "none";
		Goal.style.display = "none";
		Close.style.display = "none";
}
	/-- Move up --/
	function Upp(c) {
		var d = new Array(c[12],c[13],c[14],c[15])
			for(var i=0;i<4;i++){
			if(c[i] == 0){
				if(c[i+4] == 0){
					if(c[i+8] == 0){
						if(c[i+12] != 0){
							c[i] = c[i+12]
							c[i+12] = 0
						}
					}
					else{
						c[i] = c[i+8]
						c[i+4] = c[i+12]
						c[i+8] = 0;
						c[i+12] = 0
					}
				}
				else{
					c[i] = c[i+4]
					c[i+4] = c[i+8]
					c[i+8] = c[i+12]
					c[i+12] = 0
				}
			}
		}
		for(var i=4;i<8;i++){
			if(c[i] == 0){
				if(c[i+4] == 0){
					c[i] = c[i+8]
					c[i+8] = 0
				}
				else{
					c[i] = c[i+4]
					c[i+4] = c[i+8]
					c[i+8] = 0
				}
			}
		}
		for(var i=8;i<12;i++){
			if(c[i] == 0){
				if(c[i+4] != 0){
					c[i] = c[i+4]
					c[i+4] = 0
				}
			}
		}
		/--    xử lý khoảng trống    --/
		for(var i=0;i<4;i++){
			if (c[i] == c[i+4]) {
				c[i] = c[i] + c[i+4]
				c[i+4] = c[i+8]
				c[i+8] = c[i+12]
				c[i+12] = 0
			}
		}
		for(var i=4;i<8;i++){
			if (c[i] == c[i+4]) {
				c[i] = c[i] + c[i+4]
				c[i+4] = c[i+8]
				c[i+8] = 0
			}
		}
		for (var i=8;i<12;i++){
			if (c[i] == c[i+4]) {
				c[i] = c[i] + c[i+4]
				c[i+4] = 0
			}
		}
		return 0;
}
/-- Move down --/
function Downn(c) {
	for(var i=12;i<16;i++){
		if (c[i] == 0) {
			if (c[i-4] == 0) {
				if (c[i-8] == 0) {
					c[i] = c[i-12]
					c[i-12] = 0
				}
				else{
					c[i] = c[i-8]
					c[i-4] = c[i-12]
					c[i-8] = 0
					c[i-12] = 0
				}
			}
			else{
				c[i] = c[i-4]
				c[i-4] = c[i-8]
				c[i-8] = c[i-12]
				c[i-12] = 0
			}
		}
	}
	for (var i=8;i<12;i++){
		if (c[i] == 0) {
			if (c[i-4] == 0) {
				c[i] = c[i-8]
				c[i-8] = 0
			}
			else{
				c[i] = c[i-4]
				c[i-4] = c[i-8]
				c[i-8] = 0
			}
		}
	}
	for (var i=4;i<8;i++){
		if(c[i] == 0){
			c[i] = c[i-4]
			c[i-4] = 0
		}
	}
	/--    xử lý khoảng trống    --/
	for(var i=12;i<16;i++){
		if (c[i] == c[i-4]) {
			c[i] = c[i]*2
			c[i-4] = c[i-8]
			c[i-8] = c[i-12]
			c[i-12] = 0
		}
	}
	for (var i=8;i<12;i++){
		if (c[i] == c[i-4]) {
			c[i] *= 2
			c[i-4] = c[i-8]
			c[i-8] =0
		}
	}
	for (var i=4;i<8;i++){
		if (c[i] == c[i-4]) {
			c[i] *=2
			c[i-4] = 0
		}
	}
}
	/-- Move left --/
	function Leftt(c) {
		for (var i=0;i<16;i+=4){
			if (c[i]==0) {
				if (c[i+1] == 0) {
					if (c[i+2] == 0) {
						c[i] = c[i+3]
						c[i+3] = 0 
					}
					else{
						c[i] = c[i+2]
						c[i+1] = c[i+3]
						c[i+2] = 0
						c[i+3] = 0
					}
				}
				else{
					c[i] = c[i+1]
					c[i+1] = c[i+2]
					c[i+2] = c[i+3]
					c[i+3] = 0
				}
			}
		}
		for(var i=1;i<16;i+=4){
			if (c[i] == 0) {
				if (c[i+1] == 0) {
					c[i] = c[i+2]
					c[i+2] = 0
				}
				else{
					c[i] = c[i+1]
					c[i+1] = c[i+2]
					c[i+2] = 0
				}
			}
		}
		for(var i=2;i<16;i+=4){
			if (c[i] == 0) {
				c[i] = c[i+1]
				c[i+1] = 0
			}
		}
		/--    xử lý khoảng trống    --/
		for(var i = 0;i<16;i+=4){
			if (c[i] == c[i+1]) {
				c[i] *=2
				c[i+1] = c[i+2]
				c[i+2] = c[i+3]
				c[i+3] = 0
			}
		}
		for(var i=1;i<16;i+=4){
			if (c[i] == c[i+1]) {
				c[i] *=2
				c[i+1] = c[i+2]
				c[i+2] = 0
			}
		}
		for (var i=2;i<16;i+=4){
			if (c[i] == c[i+1]) {
				c[i] *=2
				c[i+1] = 0
			}
		}
	}
	/-- Move right --/
	function Rightt(c) {
		for(var i=3;i<16;i+=4){
			if (c[i] == 0) {
				if (c[i-1] == 0) {
					if (c[i-2] == 0) {
						c[i] = c[i-3]
						c[i-3] = 0
					}
					else{
						c[i] = c[i-2]
						c[i-1] = c[i-3]
						c[i-2] = 0
						c[i-3] = 0
 					}
				}
				else{
					c[i] = c[i-1]
					c[i-1] = c[i-2]
					c[i-2] = c[i-3]
					c[i-3] = 0
 				}
			}
		}
		for(var i=2;i<16;i+=4){
			if (c[i] == 0) {
				if (c[i-1] == 0) {
					c[i] = c[i-2]
					c[i-2] = 0
				}
				else{
					c[i] = c[i-1]
					c[i-1] = c[i-2]
					c[i-2] = 0
				}
			}
		}
		for(var i=1;i<16;i+=4){
			if (c[i] == 0) {
				c[i] = c[i-1]
				c[i-1] = 0
			}
		}
		/--    xử lý khoảng trống    --/
		for(var i=3;i<16;i+=4){
			if (c[i] == c[i-1]) {
				c[i] *=2
				c[i-1] = c[i-2]
				c[i-2] = c[i-3]
				c[i-3] = 0
			}
		}
		for(var i=2;i<16;i+=4){
			if (c[i] == c[i-1]) {
				c[i] *=2
				c[i-1] = c[i-2]
				c[i-2] = 0
			}
		}
		for(var i=1;i<16;i+=4){
			if (c[i] == c[i-1]) {
				c[i] *=2
				c[i-1] = 0
			}
		}
	}
