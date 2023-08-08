<template>
  <section class="event-details">
    <div class="event-details__item first">
      <img src="@/assets/images/newlyweds.jpg" alt="Молодожены" />
    </div>
    <div class="event-details__item second">
      <div v-animate.title class="event-details__label text">Когда?</div>
      <time v-animate.title class="event-details__date">27 августа 2023</time>
    </div>
    <div class="event-details__item third">
      <div v-animate.title class="event-details__label text">Где?</div>
      <div v-animate.title class="event-details__place">Трасса Алматы-Бишкек, 114</div>
      <span v-animate.title>Rancho Club</span>
    </div>
    <div class="event-details__item fourth">
      <img src="@/assets/images/newlyweds.jpg" alt="Молодожены" />
    </div>
  </section>
</template>

<style scoped lang="scss">
.event-details {
  padding: 0;
  display: grid;
  grid-template: repeat(2, 220px) / repeat(2, 1fr);

  &__item {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 20px;
    text-transform: uppercase;
    text-align: center;
    line-height: 1.2;

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
        width: 150px;
        height: 150px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    &.second {
      border-top: 1px solid $mainColor;
      border-bottom: 1px solid $mainColor;
      justify-content: flex-start;
      gap: 30px;
    }

    &.third {
      color: #fff;
      background-color: #3c3f35;

      span {
        text-transform: none;
      }
    }
  }

  &__date {
    font-size: 26px;
  }

  &__place {
    font-size: 20px;
  }

  &__label {
    font-style: normal;
  }
}
</style>
