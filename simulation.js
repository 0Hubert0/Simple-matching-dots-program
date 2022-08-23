var noc=0, dot='', color="red", radius=4, kr=0;
var poin = new Array(1000);

document.addEventListener("click", draw, true);

function drawlines(noc)
{
	if (noc>=2)
	{
		for (var i=1; i<noc; i++)
		{
			var m=i-1;
			var q="poin["+m+"]";
			var ee=noc-1;
			var e="poin["+ee+"]";
			var xi=parseInt (document.getElementById(q).style.getPropertyValue("margin-left"));
			var yi=parseInt (document.getElementById(q).style.getPropertyValue("margin-top"));
			var xf=parseInt (document.getElementById(e).style.getPropertyValue("margin-left"));
			var yf=parseInt (document.getElementById(e).style.getPropertyValue("margin-top"));
			var dx, dy, r, theta;
			draw2(xi, yi, xf, yf, dx, dy, r, theta);
			function draw2(xi, yi, xf, yf, dx, dy, r, theta)
			{
				dy = yi - yf;
				if (dy<0) {dy=dy*-1;}
				dx = xi - xf;	
				if (dx<0) {dx=dx*-1;}
				theta = Math.atan(dy/dx);
				theta *= 180/Math.PI;
				r=Math.sqrt(dy*dy+dx*dx);
				ddraw(xi, yi, xf, yf, "black", "3px", r, theta);
			}
		}
	}
}




function ddraw(xi, yi, xf, yf, color, width, height, angle)
{
	/*if(height>=150){*/
		var newLine = document.createElement("div");
		document.getElementById("simulation").appendChild(newLine);
		newLine.style.setProperty("background-color", color);
		newLine.style.setProperty("width", width);
		newLine.setAttribute("class", "line");
		var w="line["+noc+kr+"]";
		newLine.setAttribute("id", w);
		kr++;
		var q=height+"px";
		newLine.style.setProperty("height", q);
		var uu= 90-angle;
		newLine.style.setProperty("--rotation", uu);
		var u=xf+2+"px";
		var i=xi+2+"px";
		var o=yi+4+"px";
		var p=yf+4+"px";
		if (xi>xf && yi>yf)
		{
		newLine.style.setProperty("margin-left", u);
		newLine.style.setProperty("margin-top", p);
		}
		else if (xi<xf && yi<yf)
		{
		newLine.style.setProperty("margin-left", i);
		newLine.style.setProperty("margin-top", o);
		}
		else if (xi>xf && yi<yf)
		{
		newLine.style.setProperty("margin-left", i);
		newLine.style.setProperty("margin-top", o);
		newLine.setAttribute("class", "line1");
		}
		else if (xi<xf && yi>yf)
		{
		newLine.style.setProperty("margin-left", u);
		newLine.style.setProperty("margin-top", p);
		newLine.setAttribute("class", "line1");
	}/*}*/
}

function draw(e)
{
	var cursorX = e.pageX;
	var cursorY = e.pageY;
	if(cursorX>=60 && cursorX <=860 && cursorY>=89 && cursorY<=490){
	var br=document.createElement("div");
	var g=cursorY-95+"px";
	var h=cursorX-63+"px";
	var j = "poin["+noc+"]";
	br.setAttribute("id", j);
	br.style.setProperty("margin-top", g);
	br.style.setProperty("margin-left", h);
	br.style.setProperty("background-color", color);
	var u =radius*2+"px";
	br.style.setProperty("width", u);
	br.style.setProperty("height", u);
	br.style.setProperty("position", "absolute");
	br.setAttribute("class", "point");
	document.getElementById("simulation").appendChild(br);
	noc++;
	/*console.log(punkt);*/
	drawlines(noc);}
}


