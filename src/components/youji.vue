<template>
  <div class="page">
    <div class="sections part1 text-xlg" :class="classScroll1" :style="'padding-top:'+scroll1+'vh'">
      <span class="text-gradient  ">
        云游万里中德 <br>
        从这里开始&nbsp;&nbsp;&nbsp;&nbsp;
      </span>
    </div>
<!--    https://zhaoshengjianzhang.oss-cn-shenzhen.aliyuncs.com/%E5%AE%A3%E4%BC%A0%E7%89%873.mov-->

    <div class="section-full">
      <video class="animate" data-ani="fadeIn" poster="../assets/images/video5.png" width="100%"
             controls>
        <source src="https://zhaoshengjianzhang.oss-cn-shenzhen.aliyuncs.com/%E5%AE%A3%E4%BC%A0%E7%89%873.mov" type="video/mp4">
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
    <video class="animate" data-ani="fadeIn" poster="../assets/images/video5.png" width="100%"
           controls>
      <source src="https://zhaoshengjianzhang.oss-cn-shenzhen.aliyuncs.com/%E5%AE%A3%E4%BC%A0%E7%89%873.mov" type="video/mp4">
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
    <video class="animate" data-ani="fadeIn" poster="../assets/images/video5.png" width="100%"
           controls>
      <source src="https://zhaoshengjianzhang.oss-cn-shenzhen.aliyuncs.com/%E5%AE%A3%E4%BC%A0%E7%89%873.mov" type="video/mp4">
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
    <video class="animate" data-ani="fadeIn" poster="../assets/images/video5.png" width="100%"
           controls>
      <source src="https://zhaoshengjianzhang.oss-cn-shenzhen.aliyuncs.com/%E5%AE%A3%E4%BC%A0%E7%89%873.mov" type="video/mp4">
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

    <div class="sections part1">
      <span class="text-gradient text-xlg">
        这些专业秘密 ， <br>
        一键就知道
      </span>
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
        console.log(top);
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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



</style>
<style src="../utils/animate.css"></style>
