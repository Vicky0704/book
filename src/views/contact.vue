<script setup>
  import { useStore } from '../stores/counter'
  import taiwan from './taiwan.vue'
  import place_data from '../assets/Swiper_demo.js'
  import { ref } from 'vue'
  const place_data_vue = ref(place_data)
  const bool_array = place_data_vue.value
    .filter(bool => bool.value === 1)
    .map(item => item.content)
  function clickmap(cm){
    console.log(cm);
    window.scrollTo({ 
      top: document.getElementById(cm).offsetTop, 
      behavior: "smooth" 
    });
    // location.hash='#'+cm;
  }
  const store = useStore()
  // function changeCount() {
  //   store.count++;
  // }
</script>
<template>
  <main>
    <!-- InstanceBeginEditable name="導覽列"side -->
    <div id="nav">
          <ul>
            <li><a href="#a01">聯絡我們</a></li>
            <li><a href="#a02">各地分會</a></li>
          </ul>
        </div>
        <!-- InstanceEndEditable -->
        <!-- InstanceBeginEditable name="內容"main -->
        <div id="main">
          <h1 id="a01">聯絡我們</h1>
          <br>
          <!-- <button type="button" @click="changeCount">count is: {{ store.count }}, count2 is : {{store.count2}}</button> -->
          <h2 id="aa5">{{store.main[0].name}}</h2>
          <p><iframe src="{{store.main[0].src}}" width="425" height="350" style="border:0;" loading="lazy"></iframe></p>         
          <p>
            <ul class="tt01" style="list-style: none;">
              <li>✈ 地&emsp;&emsp;址：{{store.main[0].add}}</li>
              <li>☏ 聯絡專線：{{store.main[0].cphone}}</li>
              <li>℻ 傳真電話：{{store.main[0].mphone}}</li>
              <li>✉ 信&emsp;&emsp;箱：<a style="border-right:none;" href="mailto:{{store.main[0].mail}}">{{store.main[0].mail}}</a></li>
            </ul>
          </p>
          <br>
          <h1 id="a02">各地分會</h1>
          <br>
          <div id="taiwan"><taiwan :dataname="bool_array" @update="clickmap" /></div>
          <!-- <img src="../../images/contact/taiwan01.jpg" usemap="#taiwanmap" height="450px" width="450px" /> -->
          <!-- <map name="taiwanmap">
            <area href="#aa1" alt="台北分校" shape="circle" coords="303,41,20">
            <area href="#aa2" alt="雲林分校" shape="circle" coords="188,206,20">
            <area href="#aa3" alt="高雄分校" shape="circle" coords="165,325,20">
            <area href="#aa4" alt="屏東分校" shape="circle" coords="203,302,20">
            <area href="#aa5" alt="台中分校" shape="circle" coords="203,148,20">
          </map> -->

          <br>
          <template v-for="(item,index) of store.branch" :key="item.id">
            <h2 id="taipei_city">{{item.name}}</h2>
            <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.6260057569243!2d121.53858061542581!3d25.012821145293152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa2176c4c0ad%3A0x90db5e44ee29f455!2z5ZyL56uL6Ie654Gj56eR5oqA5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1635670672357!5m2!1szh-TW!2stw" width="425" height="350" style="border:0;" loading="lazy"></iframe></p>
            <p>
              <ul class="tt01" style="list-style: none;">
                <li>✈ 地&emsp;&emsp;址：{{item.add}}</li>
                <li>☏ 聯絡專線：{{item.cphone}}</li>
                <li>✉ 信&emsp;&emsp;箱：<a style="border-right:none;" href="mailto:bbb123@gmail.com">{{item.mail}}</a></li>
              </ul>
            </p>
            <br>[<a href="#a02">map</a>][<a href="#">top</a>]
          </template>
          <!-- <h2 id="yunlin_country">雲林分會</h2>
          <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.439665260044!2d120.53187611541001!3d23.695988396768758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346ec804c079615b%3A0xdf19d859983954be!2z5ZyL56uL6Zuy5p6X56eR5oqA5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1635670709595!5m2!1szh-TW!2stw" width="425" height="350" style="border:0;" loading="lazy"></iframe></p>
          <p>
            <ul class="tt01" style="list-style: none;">
              <li>✈ 地&emsp;&emsp;址：雲林縣斗六市大學路三段123號</li>
              <li>☏ 聯絡專線：(05)5342601</li>
              <li>✉ 信&emsp;&emsp;箱：<a style="border-right:none; " href="mailto:ccc123@gmail.com">ccc123@gmail.com</a></li>
            </ul>
          </p>
          <br>[<a href="#a02">map</a>][<a href="#">top</a>]
          <h2 id="kaohsiung_city">高雄分會</h2>
          <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.0609203573194!2d120.32647221539801!3d22.651517135776736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e04d91d096a91%3A0x75ce7e7f7c793c56!2z5ZyL56uL6auY6ZuE56eR5oqA5aSn5a24IOW7uuW3peagoeWNgA!5e0!3m2!1szh-TW!2stw!4v1635670751966!5m2!1szh-TW!2stw" width="425" height="350" style="border:0;" loading="lazy"></iframe></p>
          <p>
            <ul class="tt01" style="list-style: none;">
              <li>✈ 地&emsp;&emsp;址：高雄市三民區建工路415號</li>
              <li>☏ 聯絡專線：(07)3814526</li>
              <li>✉ 信&emsp;&emsp;箱：<a style="border-right:none; " href="mailto:ddd123@gmail.com">ddd123@gmail.com</a></li>
            </ul>
          </p>
          <br>[<a href="#a02">map</a>][<a href="#">top</a>]
          <h2 id="pingtung_country">屏東分會</h2>
          <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.219363859245!2d120.608258865398!3d22.645608385992848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e3cb5a7cb807b%3A0x7fdab22079019ef3!2z5ZyL56uL5bGP5p2x56eR5oqA5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1635670793623!5m2!1szh-TW!2stw" width="425" height="350" style="border:0;" loading="lazy"></iframe></p>
          <p>
            <ul class="tt01" style="list-style: none;">
              <li>✈ 地&emsp;&emsp;址：屏東縣內埔鄉學府路1號</li>
              <li>☏ 聯絡專線：(08)7703202</li>
              <li>✉ 信&emsp;&emsp;箱：<a style="border-right:none; " href="mailto:eee123@gmail.com">eee123@gmail.com</a></li>
            </ul>
          </p>
          <br>[<a href="#a02">map</a>][<a href="#">top</a>] -->
          </div>
        <!-- InstanceEndEditable -->
  </main>
</template>
