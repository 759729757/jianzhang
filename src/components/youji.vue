<template>
  <div class="page">

    <div id="img-warp" style="position: fixed;width: 20px;height: 20px;left: -40px;top: 0;">
      <div class=" fixed-title transition-no part1 text-xlg section1" id="text">
            <span class="text-gradient bili  ">
            云游万里中德 <br>
            从这里开始&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
      </div>
      <img src="../assets/images/poster1.jpg" id="poster-bg">
      <img src="../assets/images/textLogo.png" id="textLogo">
      <img src="../assets/images/textLogo2.png" id="textLogo2">
    </div>
    <canvas id="myCanvas" width="100%" style="height:100vh;">您的浏览器不支持该功能</canvas>

    <div class="section-full transition-no">
      <video class="animate" data-ani="fadeIn" poster="../assets/images/xuanchuan.jpg" width="100%"
             controls>
        <source src="https://wanli-files.oss-cn-hangzhou.aliyuncs.com/%E5%AE%A3%E4%BC%A0%E7%89%8710.mov"
                type="video/mp4">
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



    <div class="sections part1 "  >
      <img src="../assets/images/textBg2.png" class="text-bg animate" data-ani="fadeOut" >
      <p class="text-gradient text-xlg animate "  data-ani="fadeIn" data-delay="600">
        这些专业秘密 ， <br>
        一键就知道
      </p>
    </div>
    <!--广告学专业介绍-->
    <div class="section-full">
      <video class="animate" data-ani="fadeIn" poster="../assets/images/guanggaoxue.png" width="100%"
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
      <video class="animate" data-ani="fadeIn" poster="../assets/images/huizhan.png" width="100%"
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
      <video class="animate" data-ani="fadeIn" poster="../assets/images/shichuan.png" width="100%"
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
    <div class="black-bg sections ">
      <img src="../assets/images/textBg1.png"  class="text-bg animate" data-ani="fadeOut" >
      <p class="text-xlg animate" data-ani="fadeInUp" data-delay="1100">
        听他们说，关于<br>
        在万里中德的故事
      </p>
    </div>
    <!--听他们说-->
    <div class="section-full">
      <video class="animate" data-ani="fadeIn" poster="../assets/images/zhufu.jpg" width="100%"
             controls>
        <source src="https://wanli-files.oss-cn-hangzhou.aliyuncs.com/%E5%AD%A6%E7%94%9F%E8%AF%B430.mov"
                type="video/mp4">
        对不起；您的浏览器不支持HTML5视频
      </video>
    </div>
    <div class="sections-sm black-bg">
      <h3 class="">
        中德学院的师兄师姐们向即将入读的学弟学妹们送上祝福：保持炙热，相信自己。祝你成功viel Erfolg!
      </h3>
    </div>
    <div class="sections part1  white-bg">
      <img src="../assets/images/textBg4.png"  class="text-bg animate" data-ani="fadeOut" >
      <div class="text-xlg">
         <p class="text-gradient animate" data-ani="fadeInUp">
         教学初体验，<br>
         感受跨文化交流
        </p>
      </div>
    </div>
    <!-- 教学初体验，<br> 感受跨文化交流  -->
    <div class="section-full" id="kuawenhua">
      <swiper :options="swiperOption" ref="productSwiper" >
        <swiper-slide >
          <img src="../assets/images/tiyan7.jpg" width="100%" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/tiyan1.jpg" width="100%" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/tiyan3.jpg" width="100%" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/tiyan5.jpg" width="100%" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/tiyan4.jpg" width="100%" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/images/tiyan6.jpg" width="100%" alt="">
        </swiper-slide>
      </swiper>
    </div>
    <!--    学生作品-->
    <div class="zIndex6">

      <div class="box3">
        <div class="cover-half"></div>
        <!--    第1个学生作品-->
        <div class="product product1"
             :style="'background-size:'+product1bg+'%'"
             id="product1" style="display: none;">
          <h2 class="author">
            学生 蒋世航 的作品《音乐》
          </h2>
        </div>
        <!--    第二个学生作品-->
        <div class="product product2"
             :style="'background-size:'+product2bg+'%'"
             id="product2" style="display: none;">
          <h2 class="author">

            学生 赵欣怡 的作品《美食》
          </h2>
        </div>
        <!--    第3个学生作品-->
        <div class="product product3"
             :style="'background-size:'+product3bg+'%;'"
             id="product3" style="display: none;">
          <h2 class="author">
            学生 成树 的海报拼贴作品
          </h2>
        </div>

      </div>

      <!--更多的作品-->
      <div class="product-cover white-bg" id="product-cover">
        <div class="product-warp" id="product-warp">

          <swiper :options="productOption" v-if="true">
            <swiper-slide>
              <img src="../assets/images/product8.jpg" alt="">
              <div class="hini">
                学生 陶杰 作品
              </div>
            </swiper-slide>
            <swiper-slide>
              <img src="../assets/images/product6.jpg" alt="">
              <div class="hini">
                学生 池芝禾 作品
              </div>
            </swiper-slide>
            <swiper-slide>
              <img src="../assets/images/product9.jpg" alt="">
              <div class="hini">
                学生 于轶弢 作品
              </div>
            </swiper-slide>
            <swiper-slide>
              <img src="../assets/images/product7.jpg" alt="">
              <div class="hini">
                学生 池芝禾 作品
              </div>
            </swiper-slide>
            <swiper-slide>
              <img src="../assets/images/product3.jpg" alt="">
              <div class="hini">
                学生 章强 作品
              </div>
            </swiper-slide>
          </swiper>

<!--          <div class="pdc">-->
<!--            &lt;!&ndash;        陶杰 &ndash;&gt;-->
<!--            <img src="../assets/images/product8.jpg" alt="">-->
<!--          </div>-->
<!--          <div class="pdc">-->
<!--            &lt;!&ndash;        池芝禾 &ndash;&gt;-->
<!--            <img src="../assets/images/product6.jpg" alt="">-->
<!--          </div>-->
<!--          <div class="pdc">-->
<!--            &lt;!&ndash;        池芝禾 &ndash;&gt;-->
<!--            <img src="../assets/images/product7.jpg" alt="">-->
<!--          </div>-->
<!--          <div class="pdc">-->
<!--            &lt;!&ndash;        于轶弢 &ndash;&gt;-->
<!--            <img src="../assets/images/product9.jpg" alt="">-->
<!--          </div>-->
<!--          <div class="pdc">-->
<!--            &lt;!&ndash;              章强 &ndash;&gt;-->
<!--            <img src="../assets/images/product3.jpg" alt="">-->
<!--          </div>-->
<!--          <div class="hini">-->
<!--            学生 {{ productName[productIndex] }} 作品-->
<!--          </div>-->

        </div>
      </div>

      <div id="pinpai">
<!--        <div class="black-bg sections scrolling" id="pinpai-cover" :class="classScroll2">-->
<!--          <p class="text-xlg">-->
<!--            什么是品牌？<br>-->
<!--            <span style="opacity: 0" id="scroll2-hini">从这里找到答案</span>-->
<!--          </p>-->
<!--        </div>-->
        <div class="black-bg sections done" :class="classScroll2">
          <img src="../assets/images/textBg3.png"  class="text-bg animate" data-ani="fadeOut" >
          <p class="text-xlg animate" data-ani="fadeInUp" >
            什么是品牌？<br>
            从这里找到答案
          </p>
        </div>
      </div>

      <!--    第一个视频-->
      <div class="section-full">
        <video class=" " poster="../assets/images/class1.jpg" width="100%"
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
        <video class=" " poster="../assets/images/class2.jpg" width="100%"
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
          约阿希姆•邦加德教授，任教于德国品牌应用科学大学品牌管理专业，德国 Caliber 53.5
          品牌策略与设计公司创始人，曾在杜塞多夫、汉诺威、汉堡的多家国际广告公司任品牌战略策划总监和品牌传播顾问，曾服务于bp、铃木、雅马哈、梅赛德斯奔驰、奥迪和麦肯锡等品牌。
        </p>
      </div>
      <!--    第3个视频-->
      <div class="section-full">
        <video class=" " poster="../assets/images/class3.jpg" width="100%"
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
          丽蒙-卡莉珊教授，德国品牌应用科学大学国际品牌传播系主任，拥有多年在德国、奥地利、中国等地的跨文化教学经验以及食品行业的市场营销经验，专注于跨文化、设计与感知、神经营销等领域的研究。 </p>
      </div>

      <!--    <div id="productCover" style="height: 15vh;"></div>-->
      <div class="sections part1 text-xlg white-bg" id="yuntandian">
      <span class="text-gradient">
       校园云探店
      </span>
      </div>
      <!--校园云探店-->
      <div class="section-full">
        <video poster="../assets/images/tandian.png" width="100%"
               controls>
          <source src="https://wanli-files.oss-cn-hangzhou.aliyuncs.com/tandian.mp4" type="video/mp4">
          对不起；您的浏览器不支持HTML5视频
        </video>
      </div>
      <div class="sections ">
        <h3 class="">
          浙江万里学院校内餐饮选择多样，寝室楼附近有商业广场，每层（共三层）都有特色餐饮店，例如包子叔叔、张亮麻辣烫、开心花甲、台湾美食等。
          <br><br>
          教学楼附近有瑞幸咖啡、罗森便利店和特色早餐店，今年年初，校内还新建了KFC和星巴克，附近还有一鸣鲜奶吧、COCO、古茗等店，是同学们早餐或下午茶的首选。
          <br><br>
          本期云探店带大家参观去年新装修的万里餐厅。
          <br><br>
          点击视频来观看吧！
        </h3>
      </div>
      <div class="jianzhang-warp">
        <img class="bg" src="../assets/images/page1.png" alt="">

        <div class="sections hini text-xlg ">
          想要报考？ <br>
          <span class="">
              <a class="click-text" href="/jz">
                         点击这里
              </a>
                <!--          <router-link to="/#top" class="click-text">-->
                <!--               点击这里-->
                <!--          </router-link>-->
          </span>
        </div>
      </div>
    </div>


  </div>
</template>
<script>
  // import swiper from 'swiper';
  import {swiper, swiperSlide ,directive } from 'vue-awesome-swiper'
  // import '../assets/swiper.css';
  import 'swiper/swiper-bundle.css'

  export default {
    name: 'youji',
    component: {
      swiper,swiperSlide
    },
    directives: {
      swiper: directive
    },
    data() {
      return {
        jiaoxue:[
          '../assets/images/tiyan7.jpg','../assets/images/tiyan1.jpg',
          '../assets/images/tiyan3.jpg',
          '../assets/images/tiyan4.jpg',
          '../assets/images/tiyan5.jpg',
          '../assets/images/tiyan6.jpg',

        ],
        swiperOption: {
          autoplay: {
            delay: 3000,//秒
            stopOnLastSlide: false,
            disableOnInteraction: false,//滑动不会失效
          },
          // autoplayDisableOnInteraction: false,
          loop: true,
          effect: 'cube',
          cubeEffect: {
            slideShadows: true,
            shadow: true,
            shadowOffset: 100,
            shadowScale: 0.6
          },
        },
        productOption: {
          autoplay: {
            delay: 3000,//秒
            stopOnLastSlide: false,
            disableOnInteraction: false,//滑动不会失效
          },
        },
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        flag: true,

        //下面是绑定滚动栏动效
        scroll1: 50, scrolltext: 50,
        classScroll1: 'scroll-1',
        classScroll2: 'scroll-2',

        biger1: '',
        biger2: '',
        biger3: '',

        product1bg: '180',
        product2bg: '180',
        product3bg: '180',
        product3Top: 0,

        productName: ['陶杰', '池芝禾', '池芝禾', '于轶弢', '章强'],
        productIndex: 4,//  监听学生作品索引值改变


      }
    },
    computed:{
      swiper(){
        return this.$refs.productSwiper.swiper
      }
    },
    created() {

    },
    mounted() {

      let canvas = document.getElementById("myCanvas");
      canvas.width = this.screenWidth;
      canvas.height = this.screenHeight;
      this.ctx = canvas.getContext('2d');//设置canvas
      // ctx.fillStyle = 'red';ctx.fillRect(100,100,100,100);
      let bg = document.getElementById('poster-bg');
      let textLogo = document.getElementById('textLogo');
      let textLogo2 = document.getElementById('textLogo2');
      bg.onload = () => {
        console.log('图片加载完成', bg.src);
        this.ctx.drawImage(bg, 0, 0, this.screenWidth, this.screenHeight);
        this.ctx.drawImage(textLogo, 0, 100,this.screenWidth,this.screenWidth);
        this.ctx.font = "normal normal bold 36px Avenir";
        let gradient = this.ctx.createLinearGradient(0, this.screenHeight * 3 / 4, this.screenWidth, this.screenHeight * 3 / 4 + 50);
        gradient.addColorStop("0.1", "#62ad30");
        gradient.addColorStop("0.5", "#0e6dd0");
        this.ctx.fillStyle = gradient;
        // this.ctx.fillRect(0, this.screenHeight*3/4, this.screenWidth,this.screenHeight*3/4+150 );
        this.ctx.fillText('云游万里中德', 20, this.screenHeight * 3 / 4)
        this.ctx.fillText('从这里开始', 20, this.screenHeight * 3 / 4 + 50)
      };


      this.$nextTick(() => {
        this.handleAnimate()//初始化第一次加载时在视口内就执行动画
        addEventListener('scroll', this.handleAnimate);
      });
      document.title = '云游万里中德-浙江万里学院 中德设计与传播学院'


    },
    watch: {
      productIndex: function (val) {
        //  监听学生作品索引值改变
        var pdc = $('.pdc');//拿到元素先
        $('.pdc').removeClass('active');
        $($('.pdc')[val]).addClass('active');

      }
    },
    methods: {
      //canvas 画布
      draw(top) {
        let bg = document.getElementById('poster-bg');
        let textLogo = document.getElementById('textLogo');
        let textLogo2 = document.getElementById('textLogo2');
        console.log('图片加载完成', bg.src);
        this.ctx.clearRect(0, 0, this.screenWidth, this.screenHeight);//清楚画布

        this.ctx.drawImage(bg, 0, 0, this.screenWidth, this.screenHeight);//背景
        this.ctx.drawImage(textLogo, 0, top,this.screenWidth,this.screenWidth+top);
        // this.ctx.drawImage(textLogo2, this.screenWidth/4,this.screenHeight+100+top*0.4,this.screenWidth*3/4,(this.screenWidth*3/16 ) );

        this.ctx.fillText('云游万里中德', 20, this.screenHeight * 3 / 4 + top * 0.5)
        this.ctx.fillText('从这里开始', 20, this.screenHeight * 3 / 4 + 50 + top * 0.5)
      },
      handleAnimate() {
        let top = pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;//滚动条滚去的高度
        let vh = document.documentElement.clientHeight;

        //第一部分
        if (top < (1.5 * vh)) {
          this.classScroll1 = 'scroll-1';
          // this.scroll1 = 50 - GetPercent(top, this.screenHeight) / 1.3;
          this.scroll1 = -top / 1.4;
          this.scrolltext = 50 - top / 1.2;
          this.draw(50 - top / 1.2)
          //
          // $('.done-title')[0].style.opacity = 0;
          // $('.done-title')[0].style.fontSize = '4em';
        }
        // else {
        //   this.classScroll1 = 'scroll-1-done';
        //   $('.done-title')[0].style.opacity = 1;
        //   $('.done-title')[0].style.fontSize = '3em';
        // }


        // //控制“从这里找到答案”显示与否
        // if (top > $('#pinpai').offset().top - vh / 2) {
        //   $('#pinpai-cover').show();
        //   $('#scroll2-hini')[0].style.opacity = GetPercent(top - ($('#pinpai').offset().top - vh / 2), 135) + "%";
        // } else {
        //   $('#pinpai-cover').hide();
        //   $('#scroll2-hini')[0].style.opacity = 0;
        // }
        // if (top > ($('#pinpai').offset().top - vh / 3)) {
        //   $('.scroll-2.scrolling').hide();
        //   $('.scroll-2.done')[0].style.opacity = 1;
        // } else {
        //   $('.scroll-2.scrolling').show();
        //   $('.scroll-2.done')[0].style.opacity = 0;
        // }


        if (top > ($('#kuawenhua').offset().top - vh)) {
          if ((top - 2 * vh) > $('.box3').offset().top) {
            $('#product3')[0].style.display = 'block';
            $('#product2')[0].style.display = 'none';
            $('#product1')[0].style.display = 'none';
          } else if ((top - vh) > $('.box3').offset().top) {
            $('#product3')[0].style.display = 'none';
            $('#product2')[0].style.display = 'block';
            $('#product1')[0].style.display = 'none';
          } else {
            $('#product3')[0].style.display = 'none';
            $('#product2')[0].style.display = 'none';
            $('#product1')[0].style.display = 'block';
          }
        } else {
          $('#product1')[0].style.display = 'none';
        }


        //  显示第一个学生作品JpM<M<M<M<M<mmkk
        if (top > ($('.box3').offset().top - vh / 2)) {
          let _r = GetPercent((top - $('.box3').offset().top + vh / 2), 1.5 * vh);
          var ruler = _r >= 80 ? 80 : _r;
          this.product1bg = 180 - ruler;
        }
        //  显示第2个学生作品
        if ((top - vh) > $('.box3').offset().top) {
          let _r = GetPercent(((top - vh) - $('.box3').offset().top), vh)
          var ruler = _r >= 80 ? 80 : _r;
          this.product2bg = 180 - ruler;
        }
        //  显示第3个学生作品
        if ((top - 2 * vh) > $('.box3').offset().top) {
          let _r = GetPercent(((top - vh) - $('.box3').offset().top), 2 * vh)
          var ruler = _r >= 100 ? 100 : _r;
          this.product3bg = 180 - ruler;
        }
        // //第3个学生作品缩小向上 7130 - 7450
        if (top > ($('#yuntandian').offset().top - vh) && top < ($('#yuntandian').offset().top)) {
          $('#product3')[0].style.position = 'absolute';
        } else {
          $('#product3')[0].style.position = 'fixed';
        }

        if (top > ($('.box3').offset().top - vh) && top < ($('.box3+div').offset().top) ){
          $('.box3')[0].style.opacity = 1;
        } else{
          $('.box3')[0].style.opacity = 0;
        }


        // //更多学生作品
        // if (top > ($('#product-cover').offset().top)) {
        //   //  固定学生作品到屏幕
        //   var pdc = $('.pdc'), l = pdc.length;//拿到元素先
        //
        //   $('#product-warp')[0].style.position = 'fixed';
        //   if (top > ($('#product-cover').offset().top + vh)) {
        //     //  为元素开始做动画
        //     var i = Math.floor((top - $('#product-cover').offset().top - vh) / vh);//为第几个元素做效果
        //     var left = GetPercent(top - $('#product-cover').offset().top - vh - i * vh, vh);
        //     console.log(left);
        //     if(i===0){
        //       $($('.pdc')[l-1]).addClass('active');
        //     }
        //     if (l - 1 - i <= 0) {
        //       return
        //     }
        //
        //     let productIndex = l - 1 - i;
        //     this.productIndex = productIndex;
        //     $(pdc)[productIndex].style.left = 10 + left + '%';
        //
        //   }
        // } else {
        //   //  取消固定学生作品到屏幕
        //   $('.pdc').removeClass('active');
        //   $('#product-warp')[0].style.position = 'relative';
        // }


        let dom = document.querySelectorAll(".animate");
        let textBg = document.querySelectorAll(".text-bg-warp");
        //为animate元素添加动画
        [].slice.call(dom).forEach(v => {
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
        });
        //为animate元素添加动画 end5
          [].slice.call(textBg).forEach(v => {
          if ((top + vh) > $(v).offset().top) {
              $(v).find('.text')[0].style.opacity = 1;
            $(v).find('.text-bg')[0].style.opacity = 0;
          } else {
              $(v).find('.text')[0].style.opacity = 0;
            $(v).find('.text-bg')[0].style.opacity = 1;
      }
        })
      },

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
  a {
    text-decoration: none;
    color: white;
  }

  video {
    display: block;
  }

  * {
    transition: all .31s;
  }

  figure {
    margin: 0;
  }

  canvas {
    width: 100%;
    position: relative;
    z-index: 5;
  }

  .animate {
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    -ms-transform: translateZ(0);
    -o-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-perspective: 1000;
    -moz-perspective: 1000;
    -ms-perspective: 1000;
    perspective: 1000; /* Other transform properties here */
  }

  .page {
    color: black;
  }

  .sections {
    padding: 8%;
  }

  .sections, .section-full {
    position: relative;
    z-index: 5;
    background-color: white;
  }


  .sections-sm {
    padding: 3% 8%;
    background: white;
    position: relative;
    z-index: 4;
  }

  .content-text {
    font-size: 12px;
    line-height: 22px;
    margin: 0;
  }

  .text-xlg {
    font-size: 3em;
    font-weight: bold;
  }

  .text-gradient {
    display: inline-block;
    background-image: linear-gradient(125deg, #6fc07e, #0e6dd0);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  .black-bg {
    background-color: black;
    color: white;
    position: relative;
    z-index: 4;
  }

  .section1 .text-gradient {
    position: relative;
    z-index: 99;
  }
  .text-bg{
    position: absolute;left: 0;top: 0;width: 100%;
  }
  .title-warp {
    padding-left: 8%;
    box-sizing: border-box;
  }

  .fixed-title {
    position: fixed;
    z-index: 3;
    width: 100%;
    padding-left: 8%;
    box-sizing: border-box;
  }

  .text-gradient.bili {
    animation: bgEngle 8s infinite;
  }

  @keyframes bgEngle {
    from {
      background-image: linear-gradient(125deg, #6fc07e, #0e6dd0);
    }
    30% {
      background-image: linear-gradient(211deg, #6fc07e, #0e6dd0);
    }
    50% {
      background-image: linear-gradient(305deg, #6fc07e, #0e6dd0);
    }
    80% {
      background-image: linear-gradient(355deg, #6fc07e, #0e6dd0);
    }
    to {
      background-image: linear-gradient(125deg, #6fc07e, #0e6dd0);
    }
  }

  .textLogo {
    position: fixed;
    top: 50px;
    width: 100%;
    left: 0;
  }

  /*  滚动的样式 */
  .scroll-1 {
    /*transform: translate(0%,-50%);*/
    zoom: 1;
    top: 50%;
    text-align: left;
    font-size: 3.5em;
    white-space: nowrap;
    /*transform: translateY(-50%);*/
  }

  .scroll-1-done {
    display: none;
  }

  .done-title {
    opacity: 0;
    font-size: 4em;
    transition: font-size .2s ease-out;
    position: absolute;
    left: 0;
    bottom: 5%;
  }

  .scroll-2 {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    box-sizing: border-box;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity 0s;
  }

  .scroll-2 p {
    background-color: black;
  }

  .scroll-2.done {
    opacity: 1;z-index: 5;
    position: relative;
  }

  #scroll2-hini {
    transition: opacity 0s;
  }

  .sections-sm h3 {
    margin-top: 0;
  }

  .fixed-full {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    box-sizing: border-box;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .zhuanye2, .zhuanye3 {
    opacity: 0;
    transition: opacity 1s ease-in;
  }

  .biger1-done, .biger2-done, .biger3-done {
    opacity: 1;
    animation: binger 1.2s ease-out forwards;
  }

  @keyframes binger {
    from {
      transform: scale(1);
      opacity: 1;
    }
    to {
      transform: scale(2);
      opacity: 0;
    }
  }

  .fadeInUp {
    animation: fadeInUp .5s ease-out;
  }

  .box3 {
    width: 100%;
    height: 400vh;
  }

  .product {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 1;
    height: 100vh;
    background-color: black;
    background-position: center;
    background-size: 150%;
    background-repeat: no-repeat;
    /*background-attachment: fixed;*/
    transition: all 0s;
  }

  .author {
    position: absolute;
    left: 6%;
    color: white;
    bottom: 3vh;
  }

  .product1 {
    background-image: url("../assets/images/product1.png");
  }

  .product2 {
    background-image: url("../assets/images/product5.jpg");
  }

  .product3 {
    background-image: url("../assets/images/product4.jpg");
  }

  .jianzhang-warp {
    height: 100vh;
    z-index: 6;
    position: relative;
    background: linear-gradient(10deg, #85c46b, #046eb8);
  }

  .jianzhang-warp .bg {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .jianzhang-warp .hini {
    background: none;
    position: absolute;
    left: 0%;
    top: 6%;
    color: white;
    letter-spacing: 4px;
    font-size: 40px;
    line-height: 55px;
  }

  .jianzhang-warp .hini2 {
    position: absolute;
    display: inline-block;
    background: #0e6dd0;
    color: white;
    padding: 20px;
    bottom: 8%;
    right: 0;
  }

  .jianzhang-warp .hini2 h2 {
    font-size: 32px;
    margin: 5px 0;
  }

  .click-text {
    position: relative;
    display: inline-block;
  }

  .click-text:after {
    content: " ";
    position: absolute;
    right: -30px;
    bottom: 10px;
    width: 35px;
    height: 35px;
    background-size: cover;
    background-image: url("../assets/images/finger.png");
    /*opacity: .5;*/
    animation: flash2 1s infinite ease-out;
  }

  @keyframes flash2 {
    from {
      transform: translateX(0);
    }
    50% {
      transform: translateX(15px);
    }
    to {
      transform: translateX(0);
    }
  }

  .box3 {
    position: relative;
    z-index: 3;
  }

  .cover-half {
    height: 25vh;
    background: white;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
  }

  .product-cover {
    width: 100%;
    position: relative;
    z-index: 4;
    left: 0;
    top: 0;
  }

  .product-warp {
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 1;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pdc {
    position: absolute;
    width: 80%;
    left: 10%;
    top: 50vh;
    /*padding-top: 100px;*/
    transform: translateY(-50%);
  }

  .pdc img {
    max-width: 100%;
  }

  .product-warp .hini {
    display: block;
    text-align: center;
    color: #000;
    z-index: 2;
    font-weight: bold;
    margin-top: 30px;
    font-size: 1.6em;
  }
  .product-warp img{
    width: 80%;margin:0 10%;
    box-shadow: 0 0 20px 0 #000;
    border:1px solid white;
    border-radius: 10px;
  }
  .swiper-container{
    padding: 20px 0;
  }

  .pdc.active {
    transform: translateY(-50%) scale(1.1);
  }

  #img-warp img {
    max-width: 100%;
  }

  zIndex6 {
    position: relative;
    z-index: 6;
  }
  #yuntandian{
    height: 200px;
    line-height: 160px;box-sizing: border-box;
  }
  #pinpai-cover{display: none;}
  .text-bg-warp .text,.text-bg-warp .text-bg{transition: opacity 2.5s;}
  .text-bg{transition: opacity 2.5s;}
</style>
