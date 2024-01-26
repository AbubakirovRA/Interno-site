<template>
  <section class="article-wrapper">
    <div class="article-content">
      <!-- Итерация по первым четырем карточкам -->
      <div>
        <div class="article-title">
          Let’s Get Solution for Building Construction Work
        </div>
        <div class="cover">
          <div class="articleImage-wrapper">
            <img
              class="articleImage"
              src="@/assets/images/posts/coverImage.png"
              alt=""
            />
          </div>
          <div class="cover-bottom">
            <div class="date">26 December,2022</div>
            <div class="breadcrumb">Interior / Home / Decore</div>
          </div>
        </div>
        <div class="description">
          <p>
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
            turpmaximus.posuere in.Contrary to popular belief.There are many
            variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, by injecthumour, or
            randomised words which don't look even slightly believable.
          </p>
          <p>
            Embarrassing hidden in the middle of text. All the Lorem Ipsum
            generators on the Internet tend to repeat predefined chunks as
            necessary.
          </p>
        </div>
        <!-- Обработка первого изображения -->
        <div class="postImage-cover">
          <img
            class="postImages"
            src="@/assets/images/Quotes.png"
            alt="Post Images"
          />
          <div class="postImage-text"></div>
        </div>

        <div class="post">
          <div class="subtitle">Design sprints are great</div>

          <!-- Использование v-if для проверки postText -->
          <div class="post-text">
            <div class="paragraph-text">
              <p>
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary to popular belief.There are many
                variations of passages of Lorem Ipsum available, but the
                majority have suffered.
              </p>
            </div>
            <div class="wrapper1">
              <div class="marker">
                <span></span><span>3</span><span>2</span><span>1</span>
              </div>
              <div class="paragraph">
                <p>
                  Contrary to popular belief.There are many variations of
                  passages of Lorem Ipsum available, but the majority have
                  suffered.
                </p>
                <p>
                  Contrary to popular belief.There are many variations of
                  passages of Lorem Ipsum available, but the majority have
                  suffered.
                </p>
                <p>
                  Contrary to popular belief.There are many variations of
                  passages of Lorem Ipsum available, but the majority have
                  suffered.
                </p>
              </div>
            </div>

            <div>
              <div class="postImage-cover">
                <div>
                  <img
                    src="@/assets/images/posts/postImage1.png"
                    alt="Post Images"
                    class="postImages"
                  />
                  <div class="postImage-text">
                    <p>
                      Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
                      vitae turpmaximus.posuere in.Contrary to popular
                      belief.There are many variations of passages of Lorem
                      Ipsum available, but the majority have suffered.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Кнопки тегов -->
    <div class="tags-wrapper">
      <h2 class="tags-text">Tags</h2>
      <button @click="filterByTag('Kitchen')">Kitchen</button>
      <button @click="filterByTag('Bedroom')">Bedroom</button>
      <button @click="filterByTag('Building')">Building</button>
      <button @click="filterByTag('Architecture')">Kitchen</button>
      <button @click="filterByTag('Kitchen Planning')">Bedroom</button>
      <button @click="filterByTag('Bedroom')">Building</button>
      <!-- Добавьте кнопки для других тегов по аналогии -->
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.tags-wrapper {
  margin-left: 52px;
}

.tags-text {
  font-family: DM Serif Display;
  font-size: 25px;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 0.02em;
  text-align: left;
  margin-bottom: 24px;
}

button {
  width: 132px;
  height: 41px;
  border-radius: 10px;
  border: none;
  row-gap: 11px;
  margin-bottom: 11px;
}

button:hover {
  color: #292f36;
}

.article-wrapper {
  width: 1200px;
  height: 2660px;
  display: flex;
  margin-left: 360px;
  margin-top: 200px;
}

.article-content {
  width: 800px;
  height: max-height;
}

.article-title {
  width: 684px;
  height: 126px;
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
  line-height: 63px;
  letter-spacing: 0.02em;
  text-align: left;
  margin-bottom: 21px;
}

.articleImage-wrapper {
  margin-bottom: 46px;
}

.cover-bottom {
  display: flex;
  justify-content: space-between;
  font-family: Jost;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.01em;
  text-align: left;
}

.cover {
  margin-bottom: 46px;
}

.description {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 800px;
  height: 236px;
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 35px;
}

.post-text {
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;
  margin-bottom: 44px;
}

.post {
  width: 560px;
  height: 63px;
  margin-top: 27px;
  margin-bottom: 20px;
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
  line-height: 63px;
  letter-spacing: 0.02em;
  text-align: left;
}
.tags-wrapper {
  margin-top: 20px;
}

/* Стили для кнопок тегов (добавьте свои стили по необходимости) */
.tags-wrapper button {
  margin-right: 10px;
  padding: 8px 12px;
  cursor: pointer;
}

.wrapper1 {
  display: flex;
}

.marker {
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  font-family: DM Serif Display;
  font-size: 20px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #cda274;
  margin-right: 14px;
}

p {
  margin-bottom: 32px;
}

.postImages {
  margin-bottom: 32px;
}
</style>
