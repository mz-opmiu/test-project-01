<template>
  <div class="gallery">
    <div class="inner-con">
      <div class="a11y-hidden">
        <h2>이번주 순위 킨더야 소원을 들어줘 소원 랭킹</h2>
        <ol>
          <li>1위 만나고 싶어요! (40%)</li>
          <li>2위 가고 싶어요! (30%)</li>
          <li>3위 갖고 싶어요! (15%)</li>
          <li>4위 되고 싶어요! (10%)</li>
          <li>5위 하고 싶어요! (5%)</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$image-url: '../images/pc';

.gallery {
  height: 100vh;
  min-height: 1278px;
  @include background(
    '/bg-wish-gallery.jpg',
    $position: top center,
    $color: #62bfe1
  );
}
</style>
