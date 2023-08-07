<template>
  <section>
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
        <div class="event-details__place">Загородный отель 'АЛЬБАТРОС'</div>
        <span>с. Охотское</span>
      </div>
      <div class="event-details__item fourth">
        <img src="@/assets/images/newlyweds.jpg" alt="Молодожены">
      </div>
    </div>
  </section>
</template>
 
<script setup>
</script>
 
<style scoped lang="scss">
.event-details {
  display: grid;
  grid-template: repeat(2, 200px) / repeat(2, 1fr);
  margin: 0 -20px;
  $self: &;

  &__item {
    position: relative;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    text-transform: uppercase;

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
      border-top: 1px solid $mainColor;
      border-bottom: 1px solid $mainColor;
      justify-content: flex-start;

      #{$self}__date {
        font-size: 24px;

        text-align: center;
      }

    }

    &.third {
      color: #fff;
      background-color: #3c3f35;

      #{$self}__place {
        font-size: 20px;
        line-height: 1.5;
        text-align: center;
      }
    }

    &.fourth {
      border-bottom: 1px solid $mainColor;
    }
  }
}
</style>
 