import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
export const useStore = defineStore('main', {
  state: () => {
      return {
        main: [
          {id:1,name:'台中分會',src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.72793302358!2d120.73026791541538!3d24.146190979457042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3469235d7fb2c4a7%3A0x1cc856130460088d!2z5ZyL56uL5Yuk55uK56eR5oqA5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1635605080811!5m2!1szh-TW!2stw',add:'臺中市太平區坪林里中山路二段57號',cphone:'(04)23924505',mphone:'(04)23923363',mail:'aaa123@gmail.com'}
        ],
        branch: [
          {id:1,idname:'taipei_city',name:'台北分會',src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.6260057569243!2d121.53858061542581!3d25.012821145293152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa2176c4c0ad%3A0x90db5e44ee29f455!2z5ZyL56uL6Ie654Gj56eR5oqA5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1635670672357!5m2!1szh-TW!2stw',add:'台北市大安區基隆路四段43號',cphone:'(04)23924505',mphone:'(02)27333141',mail:'bbb123@gmail.com'},
          {id:2,idname:'yunlin_country',name:'雲林分會',src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.439665260044!2d120.53187611541001!3d23.695988396768758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346ec804c079615b%3A0xdf19d859983954be!2z5ZyL56uL6Zuy5p6X56eR5oqA5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1635670709595!5m2!1szh-TW!2stw',add:'雲林縣斗六市大學路三段123號',cphone:'(04)23924505',mphone:'(05)5342601',mail:'ccc123@gmail.com'},
          {id:3,idname:'kaohsiung_city',name:'高雄分會',src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.0609203573194!2d120.32647221539801!3d22.651517135776736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e04d91d096a91%3A0x75ce7e7f7c793c56!2z5ZyL56uL6auY6ZuE56eR5oqA5aSn5a24IOW7uuW3peagoeWNgA!5e0!3m2!1szh-TW!2stw!4v1635670751966!5m2!1szh-TW!2stw',add:'高雄市三民區建工路415號',cphone:'(07)3814526',mphone:'(04)23923363',mail:'ddd123@gmail.com'},
          {id:4,idname:'pingtung_country',name:'屏東分會',src:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.219363859245!2d120.608258865398!3d22.645608385992848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e3cb5a7cb807b%3A0x7fdab22079019ef3!2z5ZyL56uL5bGP5p2x56eR5oqA5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1635670793623!5m2!1szh-TW!2stw',add:'屏東縣內埔鄉學府路1號',cphone:'(08)7703202',mphone:'(08)7703202',mail:'eee123@gmail.com'}
        ]
      }
  }
})
