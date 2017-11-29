$(document).ready( function(){
    
    function getPOD() {
      $.ajax({
        type: "GET",
        dataType: 'json',
        url: "https://api.nasa.gov/planetary/apod?api_key=B9ADgyLbDtxMAg8FPv5Uc0xfeSLB8UOOCEipIGDo",
        success: function(responce) {
            $(".date").html(responce.date);
            $(".main").html(
                `<img class="img-responsive main-img" src="${responce.url}" alt="${responce.title}" /> 
                 <h2>${responce.title}</h2>
                 <p>${responce.explanation}</p>`
            );
        }
        });
    };
    
    
    getPOD();
});