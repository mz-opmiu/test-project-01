<template>
  <div class="store">
    <div class="inner-con">
      <div class="a11y-hidden">
        <h2>킨더 초콜릿 매장 이벤트</h2>
        <p><strong>매장 행사 기간 : 2월 9일 ~ 2월 14일</strong></p>
        <p>
          킨더 제품 10,000원 이상 구매 시, 킨더 소원 카드와 킨더 초콜릿 맥시 바
          2개를 선물로 드립니다!
        </p>
        <p>
          엄마의 사랑이 담긴 킨더 초콜릿과 함께, 어린이 날 아이가 가장 바라는
          소원과 꿈에 대해 이야기해보세요! 아이와 함께 하는 소중한 시간을 통해
          엄마와 아이가 더 가까워질 수 있어요!
        </p>
        <h3>아래 매장에서 스페셜 킨더 행사를 만나보세요!</h3>
        <ul>
          <li>홈플러스 동수원점 : 경기도 수원시 팔달구 효원로 257</li>
          <li>홈플러스 송탄점 : 경기도 평택시 경기대로 1103</li>
          <li>홈플러스 병점점 : 경기도 화성시 경기대로 98</li>
          <li>홈플러스 광구하남점 : 광주광역시 광산구 용아로 390</li>
          <li>홈플러스 전주효자점 : 전라북도 전주시 완산구 용머리로 31</li>
          <li>홈플러스 전주완산점 : 전라북도 전주시 완산구 기린대로 170</li>
          <li>이마 하남점 : 경기도 하남시 덕풍서로 70 하남풍산지구</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$image-url: '../images/pc';

.store {
  height: 100vh;
  min-height: 1548px;
  @include background(
    '/bg-store-list.jpg',
    $position: top center,
    $color: #62bfe1
  );
}
</style>
