<script setup>
  import Feedback from './Feature/Feedback.vue';
</script>

<template>
  <article class="feedbackBlock">
    <section class="title">
      <span class="spanTitle"></span>
      <h2 class="textTitle">Feedback</h2>
    </section>
    <section class="containerFeedback">
      <Feedback imgPath="../../public/FeedbackImage1.png" title="Floyd Miles" span="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit." paragraph="Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." />
      <Feedback imgPath="../../public/FeedbackImage2.png" title="Ronald Richards" span="ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." paragraph=" " />
      <Feedback imgPath="../../public/FeedbackImage3.png" title="Savannah Nguyen" span="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit." paragraph="Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." />
    </section>
  </article>
</template>

<style scoped lang="scss">
  @import '../assets/styles/FeedbackBlockStyle.scss';
</style>