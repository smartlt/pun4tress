<template>
    <div class="container">
        <div class="justpun">
            <img class="header-img" src="../assets/web2.png">
            <div class="moniter row">
                <div class="col-10 col-md-9 col-xl-8">
                    <div class="moniter-text">
                        <p :key="index" v-for="(text, index) in texts">{{text}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'justpun',
  components: {
    // HelloWorld,
  },
  data() {
    return {
      texts: [
        '🎉 "JUSTPUN" 🚀',
        'เป็นโปรเจกต์ที่จัดทำขึ้นโดย PUN4TRESS เพื่อสนับสนุนการลงสมัคร BNK48 6th Single Senbatsu General Election ของ ปัญ BNK48 ซึ่งทำต่อเนื่องจากโปรเจกต์วันเกิดของปัญที่ผ่านมา โดยจะยกยอดคงเหลือทั้งหมดจากโปรเจกต์เดิม รวมถึงเปิดช่องทางระดมทุนใหม่ มาสนับสนุนปัญในการลงสมัครครั้งนี้ทุกคน "สามารถร่วมเป็นส่วนสำคัญส่วนหนึ่ง” ในการโหวตได้ไม่จำกัด ไม่ว่าคุณจะเป็นใคร ทุกการสนับสนุนมีค่า ทุกการผลักดันครั้งนี้มีส่วนเป็นอย่างยิ่งที่ส่งให้ปัญสามารถขึ้นไปอยู่ในจุดที่สูงที่สุดเพื่อให้ทุกๆ การสนับสนุนจากทุกคนเกิดประโยชน์มากที่สุด เราจะไม่มีการเปิดจำหน่ายสินค้าใดๆ โดยจะมีเพียงกิจกรรมที่จัดเป็นครั้งคราวเพื่อให้ทุกคนได้มาร่วมสนุกกัน',
        '🌟 เพราะจุดประสงค์คือ',
        '"เพื่ออันดับที่สูงสุดของปัญ BNK48"',
        'เราจึงมีความจำเป็นในการระดมทุนจากทุกคน เพื่อสนับสนุนการโหวตให้กับ "ปัญ" ในครั้งนี้ ทั้งนี้ทั้งนั้น ทางเราจะเป็นผู้พิจารณาการนำทุนทั้งหมดที่ได้จากยอดคงเหลือโปรเจกต์วันเกิดและที่จะได้จากการเปิดระดมทุนใหม่ ไปใช้ในการโหวตให้คุ้มค่าและมีประสิทธิภาพสูงสุด',
        '✅ ช่องทางการสนับสนุน',
        '🔶TRUEMONEY WALLET',
        '097-057-8359 : ชุติมณฑน์ จินดาโรจนกุล',
        '🔷ธนาคารไทยพาณิชย์ บัญชีออมทรัพย์ ',
        'เลขที่บัญชี 404-0150306 : พิมพ์นารา เที่ยงกมล',
        '🔶PAYPAL',
        'https://www.paypal.me/justpsk',
        'Piyaporn Wattanapirom',
        'ผู้ที่เปิดบัญชีเป็นบุคคลที่มีตัวตนอยู่จริงและสามารถยืนยันตัวตนได้',
        'ทางเราจะไม่มีแบบฟอร์มในการแจ้งโอน แต่ทีมงานจะทำการอัพเดตยอดต่างๆ ให้ทราบในหน้าแฟนเพจ facebook.com/pun4tress',
        '#JUSTPUN #PunBNK48 #BNK48 #bnk48generalelection',
      ],
    };
  },
};
</script>


<style>
.justpun{
  background-image: url('../assets/namek.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}

.header-img{
    width: 90%;
}


.moniter{
    min-height: 90vh;
    justify-content: center;
    align-items: center;
    background-image: url('../assets/monitor.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.moniter-text{
    max-height: 50vh;
    overflow-y: auto;
    font-weight: 600;
    font-size: medium;
    padding: 20px;
}

.moniter-text::-webkit-scrollbar-track{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.1);
    border-radius: 10px;
    background-color: #06cb89;
    opacity: 30%;
}

.moniter-text::-webkit-scrollbar
{
    height: 2px;
    width: 6px;
    background-color: #06cb89;
    opacity: 30%;
}

.moniter-text::-webkit-scrollbar-thumb
{
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #06cb89;
    opacity: 30%;
}

@media only screen and (max-width: 1200px) {
    .header-img{
        width: 100%;
    }
    .moniter{
        min-height: 75vh;
    }
    .moniter-text{
        max-height: 35vh;
    }

}
@media only screen and (max-width: 991px) {
    .header-img{
        width: 100%;
    }
    .moniter{
        min-height: 70vh;
    }
    .moniter-text{
        max-height: 35vh;
    }

}

@media only screen and (max-width: 768px) {
    .header-img{
        width: 100%;
    }
    .moniter{
        min-height: 70vh;
    }
    .moniter-text{
        max-height: 35vh;
    }

}

@media only screen and (max-width: 576px) {
    .header-img{
        width: 100%;
    }
    .moniter{
        min-height: 45vh;
    }
    .moniter-text{
        max-height: 25vh;
    }
}
</style>
