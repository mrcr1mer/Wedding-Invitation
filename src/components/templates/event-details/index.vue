<template>
  <div class="event-details">
    <div class="event-details__item first">
      <img src="@/assets/images/newlyweds.jpg" alt="Молодожены">
    </div>
    <div class="event-details__item second">
      <span>Когда?</span>
      <date class="event-details__date">27 августа 2023</date>
    </div>
    <div class="event-details__item third">
      <span>Когда?</span>
      <div class="event-details__date">Загородный отель 'АЛЬБАТРОС'</div>
      <span class="event-details__date">с. Охотское</span>
    </div>
    <div class="event-details__item fourth">
      <img src="@/assets/images/newlyweds.jpg" alt="Молодожены">
    </div>
  </div>
</template>
 
<script setup>
</script>
 
<style scoped lang="scss">
.event-details {
  display: grid;
  grid-template: repeat(2, 200px) / repeat(2, 1fr);

  &__item {
    border: 1px solid $mainColor;
    position: relative;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &.first {
      background-color: #272526;
      img {
        border-radius: 50%;
      }
    }

    &.second {
      background-color: #272526;
    }

    &.third {
      background-color: #3c3f35;
    }

    &.fourth {
      background-color: #272526;

    }
  }
}
</style>
 