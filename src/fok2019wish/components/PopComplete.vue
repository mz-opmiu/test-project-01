<template>
  <div
    class="popup pop-wish-complete"
    id="pop-wish-complete"
    :class="{ 'is-show': currentPop === 'wish-complete' }"
  >
    <div class="popup__cover">
      <div class="popup__header">
        <img src="../images/pop/tl-pop-event1.jpg" alt="킨더야 소원을 들어줘" />
      </div>
      <div class="popup__content">
        <p>
          <img
            src="../images/pop/txt-complete.jpg"
            alt="이벤트 참여 완료. 킨더야 소원을 들어줘 이벤트에 참여가 완료 되었습니다!"
          />
        </p>
        <button
          type="button"
          class="btn__pop btn__complete"
          @click.self="$emit('close')"
        >
          완료
        </button>
        <p>
          <img
            src="../images/pop/txt-sns-share.jpg"
            alt="개인 sns에 이벤트 내용 공유 시 당첨 확률이 높아집니다!"
          />
        </p>
        <div class="sns-box">
          <button type="button" class="btn__pop">
            페이스북 공유
          </button>
          <button type="button" class="btn__pop">
            카카오톡 공유
          </button>
          <button type="button" class="btn__pop">
            카카오스토리 공유
          </button>
        </div>
      </div>
      <button type="button" class="btn__close" @click.self="$emit('close')">
        닫기
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopComplete',
  props: ['currentPop'],
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '../scss/popup.scss';

.pop-wish-complete {
  text-align: center;

  .sns-box {
    width: 615px;
    margin: 0 auto;
    font-size: 0;

    button {
      display: inline-block;
      width: 195px;
      height: 52px;
      margin: 0 5px;

      @for $i from 1 through 3 {
        &:nth-child(#{$i}) {
          background-position: (-(($i - 1) * 206) + px) -387px;
        }
      }
    }
  }
}
</style>
