<template>
  <div
    class="popup pop-wish"
    id="pop-wish"
    :class="{ 'is-show': currentPop === 'wish' }"
  >
    <div class="popup__cover">
      <div class="popup__header">
        <img src="../images/pop/tl-pop-event1.jpg" alt="킨더야 소원을 들어줘" />
      </div>
      <div class="popup__content popup__inner-con">
        <p>
          <img
            src="../images/pop/txt-wish.jpg"
            alt="우리 아이의 소원을 적어주세요"
          />
        </p>
        <!-- <form @submit.prevent="checkUserWish"> -->
        <form @submit.prevent="goNextStep">
          <dl>
            <dt>
              <label for="wish-list">아이의 소원</label>
            </dt>
            <dd>
              <select name="" id="wish-list" v-model="userModel.wishOption">
                <option
                  v-for="(wishOpt, index) in wishOptionList"
                  :value="wishOpt.value"
                  :key="index"
                  >{{ wishOpt.text }}</option
                >
              </select>
            </dd>
            <p class="wish-example">
              <!-- <img
                v-if="userModel.wishType"
                :src="'../images/pop/txt-wish-ex-' + userModel.wishType + '.jpg'"
                alt="우리 아이의 소원 예시"
              /> -->
              <img src="../images/pop/txt-wish-ex0.jpg" alt="" />
            </p>
          </dl>
          <dl>
            <dt><label for="child-age">아이 나이</label></dt>
            <dd>
              <input
                type="tel"
                name="age"
                maxlength="2"
                id="child-age"
                placeholder="만 나이로 숫자만 적어주세요."
                v-model="userModel.age"
              />
            </dd>
            <dt class="a11y-hidden">
              <label for="child-wish">아이 소원 적기</label>
            </dt>
            <dd>
              <textarea
                name="child-wish"
                id="child-wish"
                cols="30"
                rows="10"
                maxlength="100"
                placeholder="내 아이가 어린이 날에 가장 이루고 싶어하는 소중한 소원을 자세하게 작성해주세요! (100자 제한)"
                v-model="userModel.wishText"
              ></textarea>
            </dd>
          </dl>
          <button type="submit" class="btn__pop btn__next">
            다음으로
          </button>
        </form>
      </div>
      <button type="button" class="btn__close" @click.self="$emit('close')">
        닫기
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopParticipate',
  props: ['currentPop'],
  data() {
    return {
      wishOptionList: [
        { text: '하고 싶어요', value: 'do' },
        { text: '되고 싶어요', value: 'be' },
        { text: '가고 싶어요', value: 'go' },
        { text: '만나고 싶어요', value: 'meet' },
        { text: '갖고 싶어요', value: 'get' }
      ],
      userModel: {
        wishOption: 'do',
        age: '',
        wishText: ''
      }
    }
  },
  methods: {
    goNextStep() {
      this.$emit('saveUserModel', `event1`, this.userModel)
      this.$emit('close', 'personal')
    }
  }
}
</script>


<style lang="scss" scoped>
@import '../scss/popup.scss';

.pop-wish {
  dl {
    @for $i from 1 through 2 {
      &:nth-child(#{$i}) dt {
        background-position-y: -(($i - 1) * 70) + px;
      }
    }
  }

  dt {
    width: 174px;

    &.a11y-hidden + dd {
      width: 100%;
    }
  }

  dd {
    width: calc(100% - 174px);
  }

  textarea {
    margin-top: 20px;
  }
}
</style>
