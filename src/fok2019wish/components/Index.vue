<template>
  <div class="main" id="fok2019Wish">
    <section class="event-visual">
      <div class="inner-con a11y-hidden">
        <h2>킨더에게 소원을 말해 보세요</h2>
        <p>킨더와 함께라면 사랑하는 우리 아이의 소원이 이루어 질 거예요!</p>
        <p>
          사랑하는 우리 아이가 어린이 날에 가장 바라는 소중한 소원을 킨더에게
          말해주세요!
        </p>
        <p>
          엄마의 사랑이 담긴 킨더 초콜릿과 함께, 어린이 날 아이가 가장 바라는
          소원과 꿈에 대해 이야기해보세요. 아이와 함께 하는 소중한 시간을 통해
          엄마와 아이가 더 가까워질 수 있어요!
        </p>
      </div>
    </section>
  </div>
</template>

<style lang="scss">
</style>


<script>
import PopParticipate from '../components/PopParticipate'
import PopPersonal from '../components/PopPersonal'
import PopComplete from '../components/PopComplete'

export default {
  name: 'event',
  data() {
    return {
      userModel: {
        event1: {
          wishOption: '',
          age: '',
          wishText: ''
        },
        event2: {}
      },
      currentPop: ''
    }
  },
  components: {
    PopParticipate,
    PopPersonal,
    PopComplete
  },
  created() {
    const testArr = [1, 2, 3, 4, 5]

    console.log(['testarr', ...testArr])
    const promise1 = new Promise(resolve => {
      setTimeout(() => {
        resolve('sojung test ing!!!!!')
      }, 300)
    })

    promise1.then(value => {
      console.log(value)
      // expected output: "foo"
    })

    console.log(promise1)

    let sf = Symbol.for('test')
    console.log(sf === Symbol.for('test')) // true
  },
  methods: {
    openPop(popName) {
      this.currentPop = popName
      let scrollTop = $(window).scrollTop()
      this.$nextTick(() => {
        $('.popup.is-show .popup__cover').css('top', scrollTop)
      })
    },
    closePop(nextPopName) {
      this.currentPop = ''

      console.log(nextPopName)
      if (nextPopName) this.openPop(nextPopName)
    },
    submit(eventType, value) {
      let userModel = this.userModel[eventType]
      this.userModel[eventType] = {
        ...userModel,
        ...value
      }

      // console.log(eventType)
      // console.log(value)
    }
  }
}
</script>

<style lang="scss" scoped>
$image-url: '../images/pc';

.main {
  .btn__event {
    position: absolute;
    left: 50%;
    height: 96px;
    font-size: 0;
    @include background('/event-btns.png');
    transform: translateX(-50%);
  }

  .inner-con {
    position: relative;
    height: 100%;
    text-align: center;
  }

  .event {
    &-visual {
      height: 1576px;
      @include background('/bg-event-visual.jpg', $position: top center);
    }

    &-wish {
      height: 2051px;
      @include background('/bg-event-wish.jpg', $position: top center);

      .btn__wish-participate {
        width: 412px;
        top: 928px;
        left: 52.5%;
      }

      .btn__wish-winner {
        width: 412px;
        top: 1042px;
        left: 52.5%;
        background-position-y: -106px;
      }

      .btn__go-lanking {
        width: 412px;
        bottom: 67px;
        background-position-y: -106 * 2 + px;
      }
    }

    &-proof {
      height: 1712px;
      @include background('/bg-event-proof.jpg', $position: top center);

      .btn__proof-participate {
        position: absolute;
        width: 619px;
        top: 857px;
        background-position-y: -106 * 3 + px;
      }

      .btn__proof-winner {
        position: absolute;
        width: 619px;
        top: 970px;
        background-position-y: -106 * 4 + px;
      }
    }

    &-notice {
      text-align: center;
      background-color: #ebebeb;
    }
  }
}
</style>

