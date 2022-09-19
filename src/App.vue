<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!--header-->
  <div id="wrapper">
      <div id="logo">
        <ol>
          <li>
            <div class="dropdown">
              <RouterLink class="a dropbtn" to="/about">關於我們</RouterLink>
              <div class="dropdown-content">
                <div class="dropdown-content">
                  <a href="http://www.runoob.com">關於我們 1</a>
                  <div class="dropdown-content_a">
                    <a href="http://www.runoob.com">關於我們 1-1</a>
                      <div class="dropdown-content_a">
                        <a href="http://www.runoob.com">關於我們 1-1-1</a>
                        <a href="http://www.runoob.com">關於我們 1-1-2</a>
                        <a href="http://www.runoob.com">關於我們 1-1-3</a>
                      </div>
                    <a href="http://www.runoob.com">關於我們 1-2</a>
                    <a href="http://www.runoob.com">關於我們 1-3</a>
                  </div>
                </div>
                <div class="dropdown-content">
                  <a href="http://www.runoob.com">關於我們 2</a>
                  <div class="dropdown-content_a">
                    <a href="http://www.runoob.com">關於我們 2-1</a>
                    <div class="dropdown-content_a">
                      <a href="http://www.runoob.com">關於我們 2-1-1</a>
                      <a href="http://www.runoob.com">關於我們 2-1-2</a>
                      <a href="http://www.runoob.com">關於我們 2-1-3</a>
                    </div>
                    <a href="http://www.runoob.com">關於我們 2-2</a>
                    <a href="http://www.runoob.com">關於我們 2-3</a>
                  </div>
                </div>
                <div class="dropdown-content">
                  <a href="http://www.runoob.com">關於我們 3</a>
                  <div class="dropdown-content_a">
                    <a href="http://www.runoob.com">關於我們 3-1</a>
                    <div class="dropdown-content_a">
                      <a href="http://www.runoob.com">關於我們 3-1-1</a>
                      <a href="http://www.runoob.com">關於我們 3-1-2</a>
                      <a href="http://www.runoob.com">關於我們 3-1-3</a>
                    </div>
                    <a href="http://www.runoob.com">關於我們 3-2</a>
                    <div class="dropdown-content_a">
                      <a href="http://www.runoob.com">關於我們 3-2-1</a>
                      <a href="http://www.runoob.com">關於我們 3-2-2</a>
                      <a href="http://www.runoob.com">關於我們 3-2-3</a>
                    </div>
                    <a href="http://www.runoob.com">關於我們 3-3</a>
                  </div>
                </div>
              </div>
              <!-- <div class="dropdown-content">
                <a href="http://www.runoob.com">關於我們 1</a>
                <div class="dropdown-content_2">
                  <a href="http://www.runoob.com">關於我們 2</a>
                  <div class="dropdown-content_2_1">
                    <a href="http://www.runoob.com">關於我們 2-1</a>
                    <a href="http://www.runoob.com">關於我們 2-2</a>
                    <a href="http://www.runoob.com">關於我們 2-3</a>
                  </div>
                </div>
                <div class="dropdown-content_3">
                  <a href="http://www.runoob.com">關於我們 3</a>
                  <div class="dropdown-content_3_1">
                    <a href="http://www.runoob.com">關於我們 3-1</a>
                    <a href="http://www.runoob.com">關於我們 3-2</a>
                    <a href="http://www.runoob.com">關於我們 3-3</a>
                  </div>
                </div>
              </div> -->
            </div>
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

