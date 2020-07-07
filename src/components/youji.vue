<template>
  <div class="page">
    <div class="sections part1 text-xlg transition-no" :class="classScroll1" :style="'padding-top:'+scroll1+'vh;'">
      <span class="text-gradient  ">
        云游万里中德 <br>
        从这里开始&nbsp;&nbsp;&nbsp;&nbsp;
      </span>
    </div>
    <div class="section-full transition-no" >
      <video class="animate" data-ani="fadeIn" poster=" " width="100%"
             controls>
        <source src="https://wanli-files.oss-cn-hangzhou.aliyuncs.com/%E5%AE%A3%E4%BC%A0%E7%89%873.mov" type="video/mp4">
        对不起；您的浏览器不支持HTML5视频
      </video>
    </div>


    <div class="sections">
      <p class="content-text">
        浙江万里学院与德国品牌应用科学大学合作举办中德设计与传播学院，共同开设视觉传达设计专业、广告学专业、会展经济与管理专业2+2中德双学位专业（英语授课），与美国纽约州立大学普拉茨堡分校、新西兰马努卡理工学院、美国普莱斯比学院、法国东部克雷戴尔大学、英国赫特福德大学、英国南威尔士大学合作开设国际经济与贸易2+2中外双学位专业。
        <br><br>
        学生第一学年、第二学年在浙江万里学院学习，第三学年、第四学年在国外合作大学学习，毕业可同时获得浙江万里学院本科学历证书、学士学位证书和国外合作大学学士学位证书。
      </p>
    </div>
    <div class="black-bg sections scrolling" :class="classScroll2">
      <p class="text-xlg">
        什么是品牌？<br>
        <span style="opacity: 0" id="scroll2-hini" >从这里找到答案</span>
      </p>
    </div>
    <div class="black-bg sections done" :class="classScroll2">
      <p class="text-xlg">
        什么是品牌？<br>
        从这里找到答案
      </p>
    </div>
<!--    第一个视频-->
    <div class="section-full">
    <video class="animate" data-ani="fadeIn"  width="100%"
           controls>
      <source src="https://wanli-files.oss-cn-hangzhou.aliyuncs.com/Chapter%201.mp4" type="video/mp4">
      对不起；您的浏览器不支持HTML5视频
    </video>
    </div>
    <div class="sections black-bg">
      <p class="content-text">
        <strong>讲座主题：</strong>数字时代的商业与品牌 <br>
        <strong>讲者：</strong>Prof. Dr. Thomas Suwelack <br>
        <strong>讲者介绍：</strong><br>
        托马斯·苏伟拉克教授，毕业于德国明斯特大学。曾作为buw集团内部顾问和CRM项目经理，为宝马、沃达丰、Unitymedia、Metro、ProSiebenSat.1等国际品牌提供顾问服务。专注于数字客户体验、数字品牌与营销、数据科学、人工智能、数字技术与发展等研究领域。
      </p>
    </div>
    <!--    第二个视频-->
    <div class="section-full">
    <video class="animate" data-ani="fadeIn" width="100%"
           controls>
      <source src="https://wanli-files.oss-cn-hangzhou.aliyuncs.com/class2.mp4" type="video/mp4">
      对不起；您的浏览器不支持HTML5视频
    </video>
    </div>
    <div class="sections black-bg">
      <p class="content-text">
        <strong>讲座主题：</strong>数字化转型时代的品牌思考 <br>
        <strong>讲者：</strong>Prof. Dr. Joachim Bongard<br>
        <strong>讲者介绍：</strong><br>
        约阿希姆•邦加德教授，任教于德国品牌应用科学大学品牌管理专业，德国 Caliber 53.5 品牌策略与设计公司创始人，曾在杜塞多夫、汉诺威、汉堡的多家国际广告公司任品牌战略策划总监和品牌传播顾问，曾服务于bp、铃木、雅马哈、梅赛德斯奔驰、奥迪和麦肯锡等品牌。
      </p>
    </div>
    <!--    第3个视频-->
    <div class="section-full">
    <video class="animate" data-ani="fadeIn"  width="100%"
           controls>
      <source src="https://wanli-files.oss-cn-hangzhou.aliyuncs.com/class3.mp4" type="video/mp4">
      对不起；您的浏览器不支持HTML5视频
    </video>
    </div>
    <div class="sections black-bg">
      <p class="content-text">
        <strong>讲座主题：</strong>消费者神经学与品牌推广 <br>
        <strong>讲者：</strong>Prof. Dr. Yonca Limon-Calisan<br>
        <strong>讲者介绍：</strong><br>
        丽蒙-卡莉珊教授，德国品牌应用科学大学国际品牌传播系主任，拥有多年在德国、奥地利、中国等地的跨文化教学经验以及食品行业的市场营销经验，专注于跨文化、设计与感知、神经营销等领域的研究。  </p>
    </div>
<!--    专业秘密一看就知-->
    <div class="fixed-full flex-center text-center" style="opacity: 0;" id="zhuanye-warp">
      <p class="text-gradient text-xlg abs " :class="biger1">
        广告学
        <br>2+2中德双学位
      </p>
      <p class="text-gradient text-xlg abs zhuanye2" :class="biger2">
        会展经济与管理<br>2+2中德双学位
      </p>
      <p class="text-gradient text-xlg abs zhuanye3" :class="biger3">
        视觉传达设计<br>2+2中德双学位
      </p>
    </div>

    <div class="sections part1 animate" data-ani="zoomInUp" data-delay="200" style="opacity: 0;margin-top: 100vh;background: none;">
      <p class="text-gradient text-xlg">
        这些专业秘密 ， <br>
        一键就知道
      </p>
    </div>
<!--广告学专业介绍-->
    <div class="section-full">
      <video class="animate" data-ani="fadeIn" width="100%"
             controls>
        <source src="https://wanli-files.oss-cn-hangzhou.aliyuncs.com/guanggaoxue.MP4" type="video/mp4">
        对不起；您的浏览器不支持HTML5视频
      </video>
    </div>
    <div class="sections-sm">
      <h3 class="">
        广告学（2+2中德双学位）专业
      </h3>
    </div>
    <!--会展经济与管理专业介绍视频-->
    <div class="section-full">
      <video class="animate" data-ani="fadeIn" width="100%"
             controls>
        <source src="https://wanli-files.oss-cn-hangzhou.aliyuncs.com/huizhan.mp4" type="video/mp4">
        对不起；您的浏览器不支持HTML5视频
      </video>
    </div>
    <div class="sections-sm">
      <h3 class="">
        会展经济与管理（2+2中德双学位）专业
      </h3>
    </div>
    <!--视觉创达设计-->
    <div class="section-full">
      <video class="animate" data-ani="fadeIn"  width="100%"
             controls>
        <source src="https://wanli-files.oss-cn-hangzhou.aliyuncs.com/shichuan.mp4" type="video/mp4">
        对不起；您的浏览器不支持HTML5视频
      </video>
    </div>
    <div class="sections-sm">
      <h3 class="">
        视觉传达设计（2+2中德双学位）专业
      </h3>
    </div>
<!--    听他们说。。。-->
    <div class="black-bg sections "  >
      <p class="text-xlg animate" data-ani="fadeInUp">
        听他们说，关于<br>
        在万里中德的故事
      </p>
    </div>
    <!--听他们说-->
    <div class="section-full">
      <video class="animate" data-ani="fadeIn" width="100%"
             controls>
        <source src="https://wanli-files.oss-cn-hangzhou.aliyuncs.com/studentSay.mov" type="video/mp4">
        对不起；您的浏览器不支持HTML5视频
      </video>
    </div>
    <div class="sections-sm black-bg">
      <h3 class="">
        中德学院的师兄师姐们向即将入读的学弟学妹们送上祝福：保持炙热，相信自己。祝你成功viel Erfolg!
      </h3>
    </div>
    <div class="sections part1 text-xlg white-bg" >
      <span class="text-gradient animate" data-ani="fadeInUp">
       听他们说，关于<br>
       教学初体验，<br> 感受跨文化交流
      </span>
    </div>
    <!-- 教学初体验，<br> 感受跨文化交流  -->
    <div class="section-full" id="kuawenhua">
      <img src="../assets/images/ketang.jpg" width="100%" style="display: block;" class="animate" data-ani="fadeIn"  alt="">

    </div>
<!--    学生作品-->
    <div class="box3"></div>
<!--    第1个学生作品-->
    <div class="product product1"
         :style="'background-size:'+product1bg+'%'"
         id="product1" style="display: none;">
      <h2 class="author">
        学生 徐焓涛 的作品
      </h2>
    </div>
<!--    第二个学生作品-->
    <div class="product product2"
         :style="'background-size:'+product2bg+'%'"
         id="product2" style="display: none;">
      <h2 class="author">
        学生 谢璐冰 的作品
      </h2>
    </div>
    <!--    第二个学生作品-->
    <div class="product product3"
         :style="'background-size:'+product3bg+'%;top:'+product3Top+'px'"
         id="product3" style="display: none;">
      <h2 class="author">
        学生 成树 的作品
      </h2>
    </div>
<!--    <div id="productCover" style="height: 15vh;"></div>-->
    <div class="sections part1 text-xlg white-bg" >
      <span class="text-gradient animate" data-ani="fadeInUp">
       校园云探店
      </span>
    </div>
    <!--校园云探店-->
    <div class="section-full">
      <video class="animate" data-ani="fadeIn"  width="100%"
             controls>
        <source src="https://wanli-files.oss-cn-hangzhou.aliyuncs.com/tandian.mp4" type="video/mp4">
        对不起；您的浏览器不支持HTML5视频
      </video>
    </div>
    <div class="sections ">
      <h3 class="">
        浙江万里学院校内餐饮选择多样，寝室楼附近有商业广场，每层（共三层）都有特色餐饮店，例如包子叔叔、张亮麻辣烫、开心花甲、台湾美食等。
        <br>
        教学楼附近有瑞幸咖啡、罗森便利店和特色早餐店，今年年初，校内还新建了KFC和星巴克，附近还有一鸣鲜奶吧、COCO、古茗等店，是同学们早餐或下午茶的首选。
        <br>
        本期云探店带大家参观去年新装修的万里餐厅。
        <br>
        点击视频来观看吧！
      </h3>
    </div>
    <div class="jianzhang-warp">
      <img class="animate bg" data-ani="fadeIn" src="../assets/images/page1.png" alt="">

      <div class="sections hini text-xlg " >
        想要报考？ <br>
        <span class="animate" data-ani="zoomInLeft">
          <a href="/jz">
            点击这里
          </a>
      </span>
      </div>
<!--      <div class="hini2">-->
<!--          <h2>-->
<!--            2020年招生介绍-->
<!--          </h2>-->
<!--          INTRODUCTION OF 2020 ENROLLMENT-->
<!--      </div>-->
    </div>



  </div>
</template>
<script>
  export default {
    name: 'youji',
    data() {
      return {
        screenWidth:window.screen.width,
        screenHeight:window.screen.height,
        flag: true,

        //下面是绑定滚动栏动效
        scroll1:50,
        classScroll1:'scroll-1',
        classScroll2:'scroll-2',

        biger1:'',
        biger2:'',
        biger3:'',

        product1bg:'180',
        product2bg:'180',
        product3bg:'180',
        product3Top:0,

      }
    },
    methods: {
      handleAnimate() {
        let top = pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;//滚动条滚去的高度
        let vh = document.documentElement.clientHeight;
        let dom = document.querySelectorAll(".animate");

        //第一部分
        if((35 - GetPercent(top,this.screenHeight)/2 ) > 10){
          this.classScroll1 = 'scroll-1';
          this.scroll1 = 35 + GetPercent(top,this.screenHeight)/2;
        }else{
          this.classScroll1 = 'scroll-1-done';
        }
          //第二部分
        // console.log(top);
        //控制“从这里找到答案”显示与否
        if(top > 790){
          $('#scroll2-hini')[0].style.opacity = GetPercent(top-790,60)+"%";
        }else{
          $('#scroll2-hini')[0].style.opacity =0;
        }
        if(top > 850){
          $('.scroll-2.scrolling').hide();
          $('.scroll-2.done')[0].style.opacity = 1;
        }else{
          $('.scroll-2.scrolling').show();
          $('.scroll-2.done')[0].style.opacity = 0;
        }

        //三个专业放大
        if(top>1900){
          $('#zhuanye-warp')[0].style.opacity = 1;
        }else {
          $('#zhuanye-warp')[0].style.opacity = 0;
        }

        if(top>2360){
          this.biger1='biger1-done';
          $('.zhuanye2')[0].style.opacity = 1;
        }else {
          this.biger1='';
          $('.zhuanye2')[0].style.opacity = 0;
        }
        if(top>2660){
          this.biger2='biger2-done';
          $('.zhuanye3')[0].style.opacity = 1;
        }else {
          this.biger2='';
          $('.zhuanye3')[0].style.opacity = 0;
        }
        if(top>2960){
          this.biger3='biger3-done';
        }else {
          this.biger3='';
        }

        if(top>($('#kuawenhua').offset().top-vh)){
          if((top-1.8*vh) > $('.box3').offset().top){
            $('#product3')[0].style.display='block';
            $('#product2')[0].style.display='none';
            $('#product1')[0].style.display='none';
          }else if((top-1.2*vh) > $('.box3').offset().top){
            $('#product3')[0].style.display='none';
            $('#product2')[0].style.display='block';
            $('#product1')[0].style.display='none';
          }else{
            $('#product3')[0].style.display='none';
            $('#product2')[0].style.display='none';
            $('#product1')[0].style.display='block';
          }
        }else{
          $('#product1')[0].style.display='none';
        }

        //  显示第一个学生作品
        if(top > ($('.box3').offset().top-vh/2)){
          var ruler = GetPercent((top-$('.box3').offset().top),79+vh/2) >= 80 ?
            80 : GetPercent((top-$('.box3').offset().top),79+vh/2)
          this.product1bg = 180 - ruler;
        }
        //  显示第2个学生作品
        if((top-1.2*vh) > $('.box3').offset().top){
          var ruler = GetPercent(((top-1.2*vh)-$('.box3').offset().top),79) >= 80 ?
            80 : GetPercent(((top-1.2*vh)-$('.box3').offset().top),79)
          this.product2bg = 180 - ruler;
        }
        //  显示第3个学生作品
        if((top-1.8*vh) > $('.box3').offset().top){
          var ruler = GetPercent(((top-1.8*vh)-$('.box3').offset().top),79) >= 100 ?
            100 : GetPercent(((top-1.8*vh)-$('.box3').offset().top),79)
          this.product3bg = 180 - ruler;
        }
        //第3个学生作品缩小向上 7130 - 7450
        if( top > 7070 && top < 8000){
          console.log('cover up')
          this.product3Top = 7130 - top;
        }else{

        }





        //为animate元素添加动画
          [].slice.call(dom).forEach(v => {
          // console.log(top, vh, $(v).offset().top);
          if ((top + vh) > $(v).offset().top) {
            var delay = v.dataset.delay;
            if (delay) {
              setTimeout(() => {
                v.style.opacity = 1;
                v.classList.add(v.dataset.ani)
              }, delay)
            } else {
              v.style.opacity = 1;
              v.classList.add(v.dataset.ani)
            }
          } else {
            v.classList.remove(v.dataset.ani)
            v.style.opacity = 0;
          }
        })
        //为animate元素添加动画 end5

      },

    },
    mounted() {
      this.$nextTick(() => {
        this.handleAnimate()//初始化第一次加载时在视口内就执行动画
        addEventListener('scroll', this.handleAnimate);
      })

    },
    destroyed() {
      removeEventListener('scroll', this.handleAnimate);
    }
  }

  function GetPercent(num, total) {
    /// <summary>
    /// 求百分比
    /// </summary>
    /// <param name="num">当前数</param>
    /// <param name="total">总数</param>
    num = parseFloat(num);
    total = parseFloat(total);
    if (isNaN(num) || isNaN(total)) {
      return "-";
    }
    return total <= 0 ? 0 : (Math.round(num / total * 10000) / 100.00);
  }
</script>
<style src="../utils/animate.css"></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a{text-decoration: none;color: white;}
  video{display: block;}
  *{transition: all .31s;}
  .page{
    color: black;
  }
  .sections,.section-full{
    position: relative;z-index: 2;background-color: white;
  }
  .sections{
    padding: 8%;
  }
  .sections-sm{
    padding: 3% 8%;background: white;
  }
  .content-text{
    font-size: 12px;line-height: 22px;margin: 0;
  }
  .text-xlg{
    font-size: 3em;font-weight: bold;transition: font-size .1s;
  }
  .text-gradient{
    display: inline-block;
    background-image: linear-gradient(125deg,#6fc07e,#0e6dd0);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;

  }
  .black-bg{
    background-color: black;color: white;
  }
  .title-warp{
    padding-left: 8%;box-sizing: border-box;
  }

/*  滚动的样式 */
  .scroll-1{
    /*transform: translate(0%,-50%);*/
    zoom: 1;
    padding-top: 35vh;
    text-align: center;
    font-size: 4em;
    white-space: nowrap;

  }
  .scroll-1+div{padding-top: 100%;}
  .scroll-1-done{
    position: relative;
    /*transform:translate(0%,-50%);*/
    font-size: 3em;
  }

  .scroll-2{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;box-sizing: border-box;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0s;
  }
  .scroll-2 p{
    background-color: black;
  }
  .scroll-2.done{opacity: 0;position: relative;}
  #scroll2-hini{transition: opacity 0s;}
  .sections-sm h3{margin-top: 0;}
  .fixed-full{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;box-sizing: border-box;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .zhuanye2,.zhuanye3{opacity: 0;transition: opacity 1s ease-in;}
  .biger1-done,.biger2-done,.biger3-done{
    opacity: 1;
    animation: binger 1.2s ease-out forwards;
  }
  @keyframes binger {
    from{
      transform:scale(1);
      opacity: 1;
    }
    to{
      transform: scale(2);
      opacity: 0;
    }
  }
  .fadeInUp{
    animation: fadeInUp .5s ease-out;
  }

  .box3{width: 100%;height: 300vh;}
  .product{
    width: 100%;position: fixed;left: 0;top: 0;z-index: -1;
    height: 100vh;background-color: black;
    background-position: center;background-size: 150%;background-repeat: no-repeat;
    /*background-attachment: fixed;*/
    transition: all 0s;
  }
  .author{
    position: absolute;left: 6%;color: white;bottom: 6vh;
  }
  .product1{
    background-image: url("../assets/images/product1.jpg");
  }
  .product2{
    background-image: url("../assets/images/product3.jpg");
  }
  .product3{
    background-image: url("../assets/images/product4.jpeg");
  }
  .jianzhang-warp{
    height: 100vh;
    position: relative;background: linear-gradient(10deg, #85c46b, #046eb8);
  }
  .jianzhang-warp .bg{
    width: 100%;position: absolute;bottom: 0;left: 0;
  }
  .jianzhang-warp .hini{
    background: none;position: absolute;left: 0%;top: 6%;color: white;letter-spacing: 4px;
    font-size: 40px;
    line-height: 55px;
  }
  .jianzhang-warp .hini2{
    position: absolute;
    display: inline-block;
    background: #0e6dd0;color: white;padding: 20px;
    bottom: 8%;right: 0;
  }
  .jianzhang-warp .hini2 h2{
    font-size: 32px;
    margin: 5px 0;
  }
</style>
