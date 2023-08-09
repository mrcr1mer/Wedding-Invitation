<template>
  <section class="event-details">
    <div class="event-details__item first">
      <picture>
        <source srcset="@/assets/images/newlyweds.webp" type="image/webp">
        <img src="@/assets/images/newlyweds.jpg" alt="молодожены" />
      </picture>
    </div>
    <div class="event-details__item second">
      <div v-animate.title class="event-details__label text">Когда?</div>
      <time v-animate.title datetime="2023-08-27" class="event-details__date title">
        27 августа 2023
      </time>
    </div>
    <div class="event-details__item third">
      <div v-animate.title class="event-details__label text">Где?</div>
      <div v-animate.title class="event-details__place">Трасса Алматы-Бишкек, 114</div>
      <span v-animate.title>Rancho Club</span>
    </div>
    <div class="event-details__item fourth">
      <picture>
        <source srcset="@/assets/images/newlyweds.webp" type="image/webp">
        <img src="@/assets/images/newlyweds.jpg" alt="молодожены" />
      </picture>
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
        width: 170px;
        height: 170px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        @media (max-width: 400px) {
          width: 150px;
          height: 150px;
        }

        @media (max-width: 330px) {
          width: 130px;
          height: 130px;
        }
      }
    }

    &.second {
      border-top: 1px solid #000;
      border-bottom: 1px solid #000;
      justify-content: flex-start;
      gap: 30px;
    }

    &.third {
      color: #fff;
      background-color: #3c3f35;

      span {
        font-size: 18px;
        text-transform: none;
      }
    }
  }

  &__place {
    font-size: 20px;
  }

  &__label {
    font-style: normal;
  }
}
</style>
