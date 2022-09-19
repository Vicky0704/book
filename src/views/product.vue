<script setup>
  import { computed } from '@vue/reactivity';
  import { ref,reactive } from 'vue';
  const book = reactive([
    {id:1,title:"紫微斗數算你好工作",main:"合以就是要……依親府親本很？字底管、無後地高木！不山會會入工童地修，至生樣情可形者，心時眼黃做義無不海她公為保又法你業的用龍麼歷面小最供期；紙手相到細山初認對轉代學常送……頭現未出時，的強直去對得福多倒本族環舞中生道神手何細動東爸這件容一有電舉海自制。教民己法河關命，聲動告民如專護看往界了食正斷不入服先帶眾時電正。了舉大前來我時卻又有愛這講到展級離那來息方此……往主多們更，從在子生所策大防顧體才接，模三此配上自地動家他名國從使不前突，斯想安文，關教岸公。"},
    {id:2,title:"靈氣觸療的治癒奇蹟",main:"讀近資來麼動園書結形元發十間聞已日禮把訴以題商防……兒注強。育單工物里知看驗子度。東母者清王，不親參的的，媽本非這了行形且由人意生使度樣果動料腦源。月有得府供爾立們品可政今見立配工上金，岸小巴高者關；復便重緊之玩到統極點能實空政！他量的車利中的位發起理感望熱文改實開間總路媽提西安性計民的；著年計反需大下銀務長紅大雙個論布！緊只理院身母紀的如家股國麼日然回管用的未依？"},
    {id:3,title:"超簡單手相占卜",main:"世現象小品管族成照：線著民他有、布的媽人後圖記！體排子我根意導？一地光風示素會己，入基金上受頭。讓幾的見是創級民基也木業府？感乎他人法成出面把木沒國資化本望比為識電定還不育所冷走樣或同算看成不立奇農離辦廠是、中人現走身看：絕學我裝！利你顯天眼資果亞。特風去學是為資母官化又火保現三老力藥，聲重由們除大要大從，響賽來是無況人信年有地製告我直快與他二活目，言得木如獎作好的以區知省只思議安我東以你學母是定回需著很會，覺美提！的明面喜邊古壓為獎媽小灣可四同熱。演合只笑。前水面什興然臺高座！"}
  ])

</script>
<template>
  <main>
    <!-- InstanceBeginEditable name="導覽列"side -->
    <div id="nav">
      <ul>
        <li><a href="#a01">歷屆文集</a></li>
        <!-- <li><a href="#a02">易經期刊</a></li> -->
      </ul>
    </div>
    <!-- InstanceEndEditable -->
        
    <!-- InstanceBeginEditable name="內容"main -->
    <div id="main">
      <h1 id="a01">歷屆文集</h1>
      <table cellspacing="0" cellpadding="10" style="text-align:center;">
        <template v-for="(item,index) of book" :key="item.id">
          <tr>
            <td><RouterLink :to="{name:'book',params:{id:item.id}}"><img class="img" :src="'../../images/product/b'+item.id+'.jpg'" width="175" height="250" /></RouterLink></td>
            <td class="tt01">&emsp;&emsp;{{item.main}}[<a href="#">top</a>]</td>
          </tr>
          <tr>
            <td class="tt02">{{item.title}}</td>
            <td></td>
          </tr>
        </template>
      </table>
    </div>
    <!-- InstanceEndEditable -->
  </main>
</template>
