
// Height header
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()>50){
            $(".header").css('height','70px');
            $(".header_logo_img").css('width','136px');
        }
        else{
            $(".header").css('height','100px');
            $(".header_logo_img").css('width','245px');

        }
    });
// modal layout
    $("#login").on('click',function(){
        if($(this).hasClass("No_DangNhap")){
            $("#myModalDN").show();
        }
        
    });
    $('#btn_showDK').click(function(){
        $("#myModalDN").show('hide');
        $("#DangKi_Modal").show();
    })
    $(".btn_thoatmodal").click(function(){
        $("#myModalDN").css('display','none');
        $("#DangKi_Modal").css('display','none');   
    });
 
    
     let dsTk=[  tk={
        UserName:'Nam Trinh',
        PS:'123',
        Email:'nam123',}
    ];
    $("#DangKi").click(function(){
        let messages=[];
        var hoten=$("#txtHoTen").val();
        var email=$("#txtemail").val();
        var matkhau=$("#txtmatkhau").val();
        var XMMK =$("#txtXNMatKhau").val();

        var regexEmail= /^\w+@\w+\.com$/;
        var regexMatKhau=/^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})$/;
     
        if(hoten.trim()===""){
            messages.push("Họ tên không được bỏ trống!");
        }
        if(email.trim()==="" && !regexEmail.test(email)){
            messages.push("Email phải đúng định dạng");
        }
        if(matkhau.trim()==="" &&!regexMatKhau.test(matkhau)){
            messages.push("Mật Khẩu ít nhất 6 chữ số");
        }
        if(!(XMMK===matkhau)){
            messages.push("Mật Khẩu nhập lại không trùng khớp");
        }
        if(messages.length>0){
            $("#tbDK").html(messages.join(";"));
            return false;
        
        }
        $("#tbDK").html("");
        alert("Đăng kí Thành Công!!");
        $("#DangKi_Modal").css('display','none');
        var tk={
            UserName:hoten,
            PS:matkhau,
            Email:email,
        }
        dsTk.push(tk);
       
        
        return true;
        
    });
    $("#btnDangNhap").click(function(){
        
        let TenDN=$("#EmailDangNhap").val();
        let MKDN=$("#MKDangNhap").val();
        for (var value of dsTk){
            if(TenDN===""||MKDN===""){
                $("#tbDN").html("Nhập Email và Mật Khẩu Để Đăng Nhập Đăng Nhập");
            }
            else{
                if(TenDN===value.Email&&MKDN===value.PS){
                    alert("Đăng Nhập Thành Công!!");
                    $("#myModalDN").css('display','none');
                    $("#User").css('display','none');
                    let ite=`<p>${value.UserName}</p>`
                    $("#login").append(ite);
                    $("#login").removeClass("No_DangNhap")
                }
                else{
                    $("#tbDN").html("Sai Email hoặc Mật Khẩu");
    
                }
            }


          
            
        }
    });
   
});








// Slick slider dối tác
$(function(){

    
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        prevArrow:' <span class="priv-btn" ><img src="../img/doitac/prev-30.png" alt=""></span>',
        nextArrow:'<span class="next-btn" ><img src="../img/doitac/next-30.png" alt=""></span>',
        autoplay:true,
        autoplaySpeed:1500,
    });
})
 $(document).ready(function(){
        $('.slider-for').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         arrows: false,
         fade: true,
         asNavFor: '.slider-nav'  
        });
     
        $('.slider-nav').slick({
         slidesToShow: 4,
         slidesToScroll: 1,
         asNavFor: '.slider-for',
         dots: false,
         centerMode: true,
         focusOnSelect: true,
         prevArrow:' <span class="priv-btn" ><img src="../img/footer/prev_16.png" alt=""></span>',
         nextArrow:'<span class="next-btn" ><img src="../img/footer/next_16.png" alt=""></span>'
        });

 });


  

// Load danh sanh motor vao page motor
$(document).ready( function(){


    let sp1={
        name:"DUCATI PANIGALE 899",
        id_moto:170,
        image_motor:"../img/DSXe/170. DUCATI PANIGALE 899/170-ducati-panigale-20171615963376.jpg",
        price:"300.000.000 đ"};
    let sp2={
        name:" Kawasaki Zx10r 2016",
        id_moto:35,
        image_motor:"../img/DSXe/35/kawasaki-zx10r-20161563101224.JPG",
        price:"444.000.000.đ"};
    
    let sp3={
        name:" Honda CBR 600 2008",
        id_moto:60,
        image_motor:"../img/DSXe/60/honda-cbr-600-20081562153142.jpg",
        price:"494.000.000.đ"};
    
    let sp4={
        name:"Honda CBR600 2009",
        id_moto:65,
        image_motor:"../img/DSXe/65/honda-cbr600-20091562153244.JPG",
            price:"170.000.000 đ"};
    
            
    let sp5={
        name:"Honda CBR600 2008",
        id_moto:72,
        image_motor:"../img/DSXe/72/honda-cbr600-20081563087613.jpg",
        price:"694.000.000.đ"};
            
    let sp6={
        name:"Kawasaki ZX10R 2007",
       id_moto:90,
        image_motor:"../img/DSXe/90/87-kawasaki-zx10r-20091568282340.JPG",
        price:"394.000.000.đ "};
                    
    let sp7={
        name:"Ducati Panigale 899",
        id_moto:136,
        image_motor:"../img/DSXe/136/141-ducati-panigale-8991599066760.jpg",
        price:"394.000.000.đ"};
                
    let sp8={
        name:" BMW S1000RR 2016",
        id_moto:143,
        image_motor:"../img/DSXe/143/bmw-s1000rr-20161597990408.jpg",
        price:"302.000.000 đ"};
                
    // let sp9={
    //     id_moto:170,
    //     image_motor:"../img/DSXe/170. DUCATI PANIGALE 899/170-ducati-panigale-20171615963376.jpg",
    //     price:"302.000.000 đ"};
    let dsmt=[sp1,sp2,sp3,sp4,sp5,sp6,sp7,sp8];
    let dsmt1=[]
    function getitems(arr){
       let i= Math.floor(Math.random()*arr.length);
       let item=arr[i];
       return item;
    }
     for (var j=1; j<4;j++){
        dsmt1[j]=getitems(dsmt);
        dsmt1[j+1]=getitems(dsmt);
        if(dsmt1[j]===dsmt1[j+1]){
            dsmt1[j+1]=getitems(dsmt);
        }
        else{
            j++;
        }
      
       
        
    }
    console.log(dsmt1)
  
    
    
    function napDSMoTor(sp){
        
       let ite = `<a id="Chitiet " class="Motor_items_links col-lg-6 col-xl-3 text-center" href="../ChitietMotor${sp.id_moto}.html"> 
            <div class="Motor_items_avatar">
           <img class="Motor_items_img " src="${sp.image_motor}" alt="">
            </div>
            <p class="Motor_items_Name my-12"><span class="Motor_items_id">${sp.id_moto}</span>.${sp.name}
            </p>
            <p class="Motor_items__price">
            ${sp.price}
            </p>
            </a>`; 
    
            $("#Motor_Content").append(ite);
            // console.log( $("#Motr_Content"))
    }
    
    dsmt.forEach(napDSMoTor)
    
    function napDSMoTorLQ(sp){
        
        let ite = `<a id="Chitiet " class="Motor_items_links col-lg-6 col-xl-3 text-center" href="../html/ChitietMotor${sp.id_moto}.html"> 
             <div class="Motor_items_avatar">
            <img class="Motor_items_img " src="${sp.image_motor}" alt="">
             </div>
             <p class="Motor_items_Name my-12"><span class="Motor_items_id">${sp.id_moto}</span>.${sp.name}
             </p>
             <p class="Motor_items__price">
             ${sp.price}
             </p>
             </a>`; 
     
             $("#Motor_Content_LQ").append(ite);
            }
            dsmt1.forEach(napDSMoTorLQ)
});

