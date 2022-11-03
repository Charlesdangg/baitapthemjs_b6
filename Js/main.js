

/**
 * 
 * Bai tập thêm
 * 
 * 
 */
function kiemTraSoNguyenTo(number){
    var checkSNT = true;
    for ( var i = 2; i<= Math.sqrt(number); i++){
        if(number % i === 0){
            checkSNT = false;
            break;
        }
    }
    return checkSNT;
};


document.getElementById("infothem").onclick = function(){
    

    var number = document.getElementById("nhapSo").value * 1;
    var ketQua = "";
    for (var iso = 2; iso <= number; iso++){
        var checkSNT = kiemTraSoNguyenTo(iso);
        if(checkSNT){
            ketQua += iso + ' ';
        }
    }
    console.log(ketQua);
    document.getElementById("ketquab5").innerHTML = ketQua;
};