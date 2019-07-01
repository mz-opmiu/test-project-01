<template>
  <div
    class="popup pop-personal"
    id="pop-personal"
    :class="{ 'is-show': currentPop === 'personal' }"
  >
    <div class="popup__cover">
      <div class="popup__header">
        <img src="../images/pop/tl-pop-event1.jpg" alt="킨더야 소원을 들어줘" />
        <!-- <img
          src="../images/pop/tl-pop-event2.jpg"
          alt="킨더초콜릿 구매인증 이벤트"
          v-else
        /> -->
      </div>

      <div class="popup__content popup__inner-con">
        <p>
          <img
            src="../images/pop/txt-personal.jpg"
            alt="개인 정보를 입력해 주세요. 이벤트 주인공이 될 우리아이가 아닌 등록해 주시는 참여자 본인의 개인정보를 입력해주세요."
          />
        </p>
        <form @submit.prevent="goNextStep">
          <dl>
            <dt><label for="personal-name">이름</label></dt>
            <dd>
              <input
                type="text"
                name="name"
                id="personal-name"
                v-model="userModel.name"
              />
            </dd>
          </dl>

          <dl>
            <dt><label for="personal-phone">휴대폰</label></dt>
            <dd>
              <input
                type="tel"
                name="phone"
                maxlength="11"
                id="personal-phone"
                placeholder="'-'기호없이 입력해주세요"
                v-model="userModel.mobile"
              />
            </dd>
          </dl>

          <dl>
            <dt><label for="personal-address-detail">주소</label></dt>
            <dd>
              <input
                type="text"
                class="post-input"
                name="zipcode"
                id="personal-zipcode"
                readonly
              />
              <button
                type="button"
                class="btn__pop btn__post"
                @click="openPostCode()"
              >
                <label for="personal-zipcode">우편번호</label>
              </button>
            </dd>
            <dd class="full-address">
              <label for="personal-address"
                ><input
                  type="text"
                  name="address"
                  id="personal-address"
                  readonly
              /></label>
              <input
                type="text"
                name="addressDetail"
                id="personal-address-detail"
                placeholder="상세주소를 입력해주세요"
                v-model="userModel.addressDetail"
              />
            </dd>
          </dl>

          <dl>
            <dt><label for="personal-birth">생년월일</label></dt>
            <dd>
              <input
                type="tel"
                name="birth"
                maxlength="6"
                id="personal-birth"
                v-model="userModel.birth"
                placeholder="EX)910101"
              />
            </dd>
          </dl>

          <dl>
            <dt><label for="personal-email">이메일</label></dt>
            <dd>
              <input
                type="text"
                name="email"
                maxlength="30"
                id="personal-email"
                v-model="userModel.email"
              />
            </dd>
          </dl>

          <dl>
            <!-- <dl v-if="eventType === 'wish'"> -->
            <dt><label for="personal-sns">개인 SNS</label></dt>
            <dd>
              <textarea
                name="sns"
                id="personal-sns"
                cols="30"
                rows="10"
                v-model="userModel.snsUrls"
              ></textarea>
            </dd>
          </dl>

          <div class="agree-wrap">
            <label for="marketing-agree1">
              <input
                type="checkbox"
                id="marketing-agree1"
                name="agree1"
                v-model="userModel.agree"
              />
              <span></span>
              <img
                src="../images/pop/text-agree.png"
                alt="이벤트 약관, 개인정보 수집 방침에 동의"
              />
            </label>
            <button
              type="button"
              class="btn__pop btn__agree-detail"
              @click="showPop('policy')"
            >
              자세히 보기
            </button>
          </div>
          <button type="submit" class="btn__pop btn__entry">
            소원 공유 이벤트 참여하기
          </button>
          <!-- <button
            type="submit"
            class="btn__pop btn__entry"
            v-if="eventType === 'serial'"
          >
            시리얼 등록 이벤트 참여하기
          </button> -->
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
  name: 'PopPersonal',
  props: ['currentPop'],
  data() {
    return {
      userModel: {
        name: '',
        mobile: '',
        address: '',
        addressDetail: '',
        birth: '',
        email: '',
        snsUrls: '',
        agree: null
      }
    }
  },
  methods: {
    goNextStep() {
      this.$emit('saveUserModel', `event1`, this.userModel)
      this.$emit('close', 'wish-complete')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/popup.scss';

.pop-personal {
  dl {
    @for $i from 1 through 6 {
      &:nth-child(#{$i}) dt {
        background-position-y: -(($i - 1) * 70) + px;
      }
    }

    &:nth-child(6) {
      //개인 sns
      dt {
        height: 100px;
      }
    }
  }

  dt {
    width: 136px;
    background-position-x: -200px;
  }

  dd {
    width: calc(100% - 136px);

    &.full-address {
      width: calc(100% - 136px);
      margin-left: 136px;

      label {
        display: inline-block;
        width: 100%;
        margin: 10px 0;
      }
    }

    .post-input {
      width: 253px;
      margin-right: 10px;
    }
  }

  .agree-wrap {
    margin-top: 25px;
    padding-top: 20px;
    border-top: 2px solid #009ee0;

    input[type='checkbox'] {
      position: absolute;
      opacity: 0.01;

      & ~ span {
        display: inline-block;
        width: 34px;
        height: 34px;
        @include background('/icon-check.png');
        background-position: 0 top;
        cursor: pointer;
      }

      &:checked ~ span {
        background-position: 0 bottom;
      }
    }

    img {
      vertical-align: top;
      margin: 5px 0 0 10px;
    }

    label {
      cursor: pointer;
    }

    .btn__agree-detail {
      float: right;
      width: 116px;
      height: 28px;
      margin-top: 5px;
      background-position: -170px 0;
      vertical-align: top;
    }
  }
}
</style>
