<template>
  <div class="counterBanner">
    <div class="counter">
      <div class="yearsOfExperiance">
        <h2>12</h2>
        <br />
        <p>Years Of Experiance</p>
      </div>
      <div class="line">
        <img
          src="@/assets/images/Line.png"
          alt="Line Image"
          class="Line-image"
        />
        <h2>85</h2>
        <br />
        <p>Success Project</p>
      </div>
      <div class="line">
        <img
          src="@/assets/images/Line.png"
          alt="Line Image"
          class="Line-image"
        />
        <h2>15</h2>
        <br />
        <p>Active Project</p>
      </div>
      <div class="line">
        <img
          src="@/assets/images/Line.png"
          alt="Line Image"
          class="Line-image"
        />
        <h2>95</h2>
        <br />
        <p>Happy Customers</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CounterComponent",
};
</script>

<style scoped>
.counterBanner {
  width: 1920px;
  height: 457px;
  background: url("~@/assets/images/CounterBackground.png");
}

.counter {
  position: relative;
  width: 1082px;
  height: 155px;
  margin-left: 419px;
  top: 151px;
  display: flex;
  justify-content: space-between;
}

.line {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

h2 {
  font-family: "DM Serif Display", serif;
  font-size: 85px;
  line-height: 65px;
  color: #cda274;
  margin-bottom: 16px;
}

p {
  font-family: "Jost", sans-serif;
  font-size: 22px;
  line-height: 33px;
  color: #4d5053;
}

p,
h2 {
  text-align: center;
  margin-left: 76px;
}
</style>
