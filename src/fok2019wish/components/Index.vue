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

    <section class="event-sec event-wish" id="wish">
      <div class="inner-con">
        <div class="a11y-hidden">
          <h2>event1 킨더 초콜릿 소원 이벤트 킨더야 소원을 들어줘</h2>
          <p>
            사랑하는 우리 아이가 어린이 날에 꼭 이루어졌으면 하는 소원은
            무엇인가요? 우리 아이의 소중한 소원을 킨더에게 말해주세요. 참여하기
            안의 총 다섯 가지 소원 카테고리 중에서 하나를 골라서 어린이 날에
            이루고 자하는 아이의 소원을 자세하게 작성하여 주세요.
            <em
              >1. 하고싶어요, 2. 가고 싶어요, 3. 갖고 싶어요, 4.만나고 싶어요,
              5. 되고 싶어요</em
            >
            보내주시는 소원을 기반으로 매주 랭킹 선정을 통해 아이들에게 가장
            인기 있는 Top 3 카테고리에 소원을 작성해주신 분들 중 추첨을 통해서
            킨더가 푸짐한 상품을 드립니다!
          </p>
          <p>
            당첨 확률을 올리는 Tip! 개인 SNS 계정에 킨더야 소원을 들어줘
            이벤트를 공유해주시는 분들께는 더욱 높은 당첨의 기회를 드립니다!
          </p>
          <dl>
            <dt>참여 기간</dt>
            <dd>2019년 1월 14일~2019년 3월 17일(9주)</dd>
            <dt>소원 주인공 당첨자 발표</dt>
            <dd>2019년 3월 20일</dd>
          </dl>
        </div>
        <button
          type="button"
          class="btn__event btn__wish-participate"
          @click="openPop('wish')"
        >
          소원 공유 이벤트 참여하기
        </button>
        <button
          type="button"
          class="btn__event btn__wish-winner"
          @click="openPop('wish-winner')"
        >
          소원 주인공 당첨자 확인
        </button>

        <div class="a11y-hidden">
          <h2>경품안내</h2>
          <ol>
            <li>1등 : 도쿄 디즈니랜드 프리미엄 패키지 (500만 원권)</li>
            <li>2등 : 제주도 디럭스 여행 패키지 (300만 원권)</li>
            <li>3등 : 서울 시내 호텔, 캐릭터 룸 패키지 (150만 원권)</li>
          </ol>
          <ul>
            <li>
              * 당첨자 1명 당 4인 가족 (어른 2명, 아이 2명) 을 위한 상품 증정
            </li>
            <li>
              * 각 경품에 명시된 해당 금액의 하나투어 상품권을 증정하며 자세한
              경품 안내는 이벤트 페이지 제일 아래부분의 유의사항을 참고해주세요.
            </li>
            <li>
              * 응모 신청 아동은 2019년 1월 1일 기준 36개월 이상 만 12세 이하여
              야합니다.
            </li>
          </ul>
        </div>

        <div class="a11y-hidden">
          <h2>소원 랭킹</h2>
          <p>우리 아이들이 가장 원하는 소중한 소원들을 확인해 보세요!</p>
        </div>
        <a href="/2019wish/gallery" class="btn__event btn__go-lanking"
          >소원 랭킹 보러가기</a
        >
      </div>
    </section>

    <section class="event-sec event-proof" id="proof">
      <div class="inner-con">
        <div class="a11y-hidden">
          <h2>
            event2 킨더 초콜릿 구매 인증 이벤트. 킨더 초콜릿 구매 인증하고
            푸짐한 선물 받아가세요!
          </h2>
          <p>
            face of kinder 로고가 그려진 킨더 초콜릿 제품 구매 후 패키지 안의
            시리얼 번호를 입력 해주세요! 추첨을 통해 킨더에서 가족이 함께 즐거운
            시간을 보낼 수 있는 푸짐한 선물을 드립니다!
          </p>
          <dl>
            <dt>참여 기간</dt>
            <dd>2019년 1월 11일~2019년 3월 17일(9주)</dd>
            <dt>당첨자 발표</dt>
            <dd>
              격주 금요일 발표(5번) 2019년 1월 25일/ 2월 8일, 22일/ 3월 8일,
              22일
            </dd>
          </dl>
        </div>
        <button
          type="button"
          class="btn__event btn__proof-participate"
          @click="openPop('serial')"
        >
          킨더초콜릿 구매인증 이벤트 참여하기
        </button>
        <button
          type="button"
          class="btn__event btn__proof-winner"
          @click="openPop('serial-winner')"
        >
          킨더초콜릿 구매인증 이벤트 당첨자 확인
        </button>
        <div class="a11y-hidden">
          <h2>경품안내</h2>
          <ol>
            <li>
              1/25 지산 리조트 스키장 주간권 리프트권 (21만원 상당) – 20명
            </li>
            <li>2/8 키자니아 입장권 (16만원 상당) – 20명</li>
            <li>2/22 롯데월드 입장권 (20만원 상당) – 20명</li>
            <li>3/8 에버랜드 입장권 (20만원 상당) - 20명</li>
            <li>
              3/22 캐리비안 베이 입장권 (미들 하이 시즌권 22만원 상당) - 20명
            </li>
          </ol>
          <ul>
            <li>
              당첨자 1명 당 4인 가족 (어른 2명, 아이 2명) 을 위한 상품 증정
            </li>
            <li>당첨 기회는 한 번의 참여로 5회 차 모두 적용됩니다.</li>
            <li>경품은 주관사의 사정에 따라 대체/변경 될 수 있습니다.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="event-notice">
      <div class="inner-con">
        <img src="../images/pc/bg-event-notice.jpg" alt="이벤트 유의사항" />
        <div class="a11y-hidden">
          <h3>이벤트 유의사항</h3>
          <dl>
            <dt>EVENT 1. 소원 이벤트 관련</dt>
            <dd>
              1. 소원 이벤트의 응모 신청 아동은 2019년 1월 1일 기준 36개월 이상
              만 12세 이하여야 합니다.
            </dd>
            <dd>
              2. 소원 이벤트 당첨은 응모된 소원의 Top 랭킹 카테고리 내 우수
              소원작성자로 선정됩니다.
            </dd>
            <dd>
              3. 당첨자 발표 후 경품 지급을 위해 개별 연락을 드리며 잘못된
              개인정보(휴대전화번호/배송 수령 주소) 입력으로 연락이
              불가능하거나, 경품이 반송될 경우 이는 재발송 되지 않습니다.
            </dd>
            <dd>
              4. 이벤트 당첨 경품은 각 등수 별 여행 패키지 금액에 해당되는
              하나투어 여행상품권으로 증정하며, 타인 양도 및 재판매 불가하며
              현금으로 교환도 불가합니다.
            </dd>
            <dd>
              5. 하나투어 여행상품권은 해당 여행 패키지를 구매할 수 있는
              상품권이며, 현금과 동일하게 인정되어 해당 여행 상품 패키지 예약을
              진행하시면 됩니다.
              <ul>
                <li>
                  일본: 하나투어 (http://www.hanatour.com) 예약센터 1577-1233 +
                  1번 예약상담 + 1번 해외여행 + 1번 패키지 + 3번 일본
                </li>
                <li>
                  제주도: 하나투어 (http://www.hanatour.com) 예약센터 1577-1233
                  + 1번 예약상담 + 2번 국내여행 + 제주도 패키지 상품 문의
                </li>
                <li>
                  캐릭터 룸: 하나투어 (http://www.hanatour.com) 예약센터
                  1577-1233 +1번 예약상담 + 2번 국내여행 + 캐릭터 호텔 상품 문의
                </li>
              </ul>
            </dd>
          </dl>
          <dl>
            <dt>EVENT 2. 구매 인증 이벤트 관련</dt>
            <dd>
              1. 구매 인증 이벤트 당첨은 추첨을 통해서 각 회차 별 20명씩
              당첨자로 선정됩니다.
            </dd>
            <dd>
              2. 경품은 당첨자 발표 후, 2주일 내 이벤트 참여 시 입력한 주소지로
              배송됩니다.
            </dd>
            <dd>
              3. 개인정보 입력 시, 잘못된 주소와 연락처 입력으로 인한 미 배송 및
              오 배송은 재 배송 되지 않습니다.
            </dd>
          </dl>
          <ul>
            <li>
              - 5만원 이상의 경품에 대한 제세공과금 22%는 페레로 아시아 리미티드
              (한국지점) 에서 부담하며, 제세공과금 처리에 필요한 서류 미 제출 시
              당첨이 취소 될 수 있습니다.
            </li>
            <li>- 경품은 주관사의 사정에 따라 대체/변경 될 수 있습니다.</li>
            <li>
              - 불법적이거나 비정상적인 이벤트 참여시 당첨이 취소될 수 있습니다.
            </li>
            <li>
              - 경품에 따라 본인 확인을 위한 서류 또는 절차를 통보할 수 있으며
              그에 따른 자료를 미 제출 또는 불이행시 경품 당첨에서 제외 될 수
              있습니다.
            </li>
            <li>
              - 위 이벤트와 관련한 문의사항 발생 시, kinderkorea1@gmail.com
              이메일 주소로 연락 부탁드립니다.
            </li>
            <li>
              - 제품 관련 문의 사항은 매일 유업 C/S센터 (1588-1539,
              www.maeil.com)으로 연락 부탁드립니다.
            </li>
            <li>
              - 이벤트를 통해 수집된 개인정보는 경품 배송을 위한 목적으로만 활용
              합니다. 본 이벤트는 페레로 아시아 리미티드 (한국지점)의 위탁을
              받아 그레이월드와이드코리아㈜와 메가존㈜에서 대행, 운영 됩니다.
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Popups -->
    <PopParticipate
      :currentPop="currentPop"
      :userModel="userModel.event1"
      @saveUserModel="submit"
      @close="closePop"
    ></PopParticipate>

    <PopPersonal
      :currentPop="currentPop"
      :userModel="userModel.event1"
      @saveUserModel="submit"
      @close="closePop"
    ></PopPersonal>

    <PopComplete :currentPop="currentPop" @close="closePop"></PopComplete>
  </div>
</template>

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

      console.log(eventType)
      console.log(value)
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

