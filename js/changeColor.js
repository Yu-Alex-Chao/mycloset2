// the first line of bottons
function myFunctiona() {
  var myArray = ['b','c','d','e','f']
  for (i = 0; i < myArray.length; i++) {
    document.getElementById('a').style = "background-color: #ccc !important";
    if (document.getElementById(myArray[i]).style.display != 'none') {
      document.getElementById(myArray[i]).style = "background-color: #fff !important"
    }
  }
}

function myFunctionb() {
  var myArray = ['a','c','d','e','f']
  for (i = 0; i < myArray.length; i++) {
    document.getElementById('b').style = "background-color: #ccc !important";
    if (document.getElementById(myArray[i]).style.display != 'none') {
      document.getElementById(myArray[i]).style = "background-color: #fff !important"
    }
  }
}

function myFunctionc() {
  var myArray = ['a','b','d','e','f']
  for (i = 0; i < myArray.length; i++) {
    document.getElementById('c').style = "background-color: #ccc !important";
    if (document.getElementById(myArray[i]).style.display != 'none') {
      document.getElementById(myArray[i]).style = "background-color: #fff !important"
    }
  }
}

function myFunctiond() {
  var myArray = ['a','b','c','e','f']
  for (i = 0; i < myArray.length; i++) {
    document.getElementById('d').style = "background-color: #ccc !important";
    if (document.getElementById(myArray[i]).style.display != 'none') {
      document.getElementById(myArray[i]).style = "background-color: #fff !important"
    }
  }
}

function myFunctione() {
  var myArray = ['a','b','c','d','f']
  for (i = 0; i < myArray.length; i++) {
    document.getElementById('e').style = "background-color: #ccc !important";
    if (document.getElementById(myArray[i]).style.display != 'none') {
      document.getElementById(myArray[i]).style = "background-color: #fff !important"
    }
  }
}

function myFunctionf() {
  var myArray = ['a','b','c','d','e']
  for (i = 0; i < myArray.length; i++) {
    document.getElementById('f').style = "background-color: #ccc !important";
    if (document.getElementById(myArray[i]).style.display != 'none') {
      document.getElementById(myArray[i]).style = "background-color: #fff !important"
    }
  }
}

// the second line of bottons
function myFunctionA() {
  var myArray = ['B','C','D','E','F']
  for (i = 0; i < myArray.length; i++) {
    document.getElementById('A').style = "background-color: #ccc !important";
    if (document.getElementById(myArray[i]).style.display != 'none') {
      document.getElementById(myArray[i]).style = "background-color: #fff !important"
    }
  }
}

function myFunctionB() {
  var myArray = ['A','C','D','E','F']
  for (i = 0; i < myArray.length; i++) {
    document.getElementById('B').style = "background-color: #ccc !important";
    if (document.getElementById(myArray[i]).style.display != 'none') {
      document.getElementById(myArray[i]).style = "background-color: #fff !important"
    }
  }
}

function myFunctionC() {
  var myArray = ['A','B','D','E','F']
  for (i = 0; i < myArray.length; i++) {
    document.getElementById('C').style = "background-color: #ccc !important";
    if (document.getElementById(myArray[i]).style.display != 'none') {
      document.getElementById(myArray[i]).style = "background-color: #fff !important"
    }
  }
}

function myFunctionD() {
  var myArray = ['A','B','C','E','F']
  for (i = 0; i < myArray.length; i++) {
    document.getElementById('D').style = "background-color: #ccc !important";
    if (document.getElementById(myArray[i]).style.display != 'none') {
      document.getElementById(myArray[i]).style = "background-color: #fff !important"
    }
  }
}

function myFunctionE() {
  var myArray = ['A','B','C','D','F']
  for (i = 0; i < myArray.length; i++) {
    document.getElementById('E').style = "background-color: #ccc !important";
    if (document.getElementById(myArray[i]).style.display != 'none') {
      document.getElementById(myArray[i]).style = "background-color: #fff !important"
    }
  }
}

function myFunctionF() {
  var myArray = ['A','B','C','D','E']
  for (i = 0; i < myArray.length; i++) {
    document.getElementById('F').style = "background-color: #ccc !important";
    if (document.getElementById(myArray[i]).style.display != 'none') {
      document.getElementById(myArray[i]).style = "background-color: #fff !important"
    }
  }
}

function changeToInfo() {
  document.getElementById("user-comment").style = "display:none";
  document.getElementById("pro-info").style = "display:block";
  document.getElementById("infoli").style = "color:#fff; background-color:#369";
  document.getElementById("commentli").style = "color:#666; background-color:#f7f7f7";
}

function changeToComm() {
  document.getElementById("user-comment").style = "display:block";
  document.getElementById("pro-info").style = "display:none";
  document.getElementById("commentli").style = "color:#fff; background-color:#369";
  document.getElementById("infoli").style = "color:#666; background-color:#f7f7f7";
}