<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!--header-->
  <div id="wrapper">
      <div id="logo">
        <ol>
          <li>
            <RouterLink class="a dropbtn" to="/about">關於我們</RouterLink>
            <ol class="dropdown-menu">
              <li><a href="#">關於我們 1</a></li>
              <li><a class="dropbtn" href="#">第 1 層關於我們 <span class="caret"></span></a>
                  <ol class="dropdown-menu1">
                      <li><a href="#">關於我們 1-1</a></li>
                      <li><a class="dropbtn" href="#">第 2 層關於我們 <span class="caret"></span></a>
                        <ol class="dropdown-menu1">
                          <li><a class="dropbtn" href="#">第3-1層關於我們 <span class="caret"></span></a>
                            <ol class="dropdown-menu1">
                              <li><a href="#">關於我們 3-1-1</a></li>
                              <li><a href="#">關於我們 3-1-2</a></li>
                            </ol>
                          </li>
                          <li><a class="dropbtn" href="#">第3-2層關於我們 <span class="caret"></span></a>
                            <ol class="dropdown-menu1">
                              <li><a href="#">關於我們 3-2-1</a></li>
                              <li><a href="#">關於我們 3-2-2</a></li>
                            </ol>
                          </li>
                        </ol>
                      </li>
                  </ol>
              </li>
            </ol>
          </li>
          <li><RouterLink class="a b02" to="/product">歷屆文集</RouterLink></li>
          <li><RouterLink class="a b03" to="/hotnews">最新消息</RouterLink></li>
          <li><RouterLink class="a b04" to="/contact">聯絡我們</RouterLink></li>
        </ol>
        <ul>
          <li><RouterLink to="/">回首頁</RouterLink></li>
          <li><a target="_blabk" href="https://www.ncut.edu.tw/">勤益科大</a></li>
          <li><a target="_blabk" href="http://www.google.com">谷哥</a></li>
          <li ><a style="border-right:none;" href="mailto:aaa123@gmail.com">寫信給我</a></li>
        </ul>
      </div>
      <div id="banner"><!-- 置圖 --></div>
      <RouterView/>
      <!-- InstanceBeginEditable name="頁尾"footer -->
      <div id="footer">臺中市太平區坪林里中山路二段57號　　TEL:(04)23924505　FAX:(04)23923363　<a href="mailto:aaa123@google.com">aaa123@google.com</a>　&copy;copyright2021</div>
      <!-- InstanceEndEditable -->
    </div>
</template>

