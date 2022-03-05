<template>
<div class="parent">
<div class="div1"> </div>
<div class="div2">
  <div class="flex-col group_1">
  <div class="flex-col group_2">
    <span class="text_1">Welcome Back</span>
    <div class="flex-col group_3">
      <input class="flex-row section_1" type="text" placeholder="username"/>
      <input class="justify-between section_3" type="password" placeholder="password"/>
    </div>
    <span class="text_4">Forgot Password?</span>
    <div @click="handleLogin" class="flex-col items-center text-wrapper">
      <span class="text_5">Log in</span>
    </div>
  </div>
  <div class="flex-col items-center group_4">
    <div class="group_5">
      <span class="text_6">Don’t have an account? </span>
      <span class="text_7" @click="handleSignUp">Sign Up</span>
    </div>
  </div>
</div>
</div>
<div class="div3"> </div>
</div>

</template>

<script>

export default {

  data () {
    return { listVHC6CKGW: [null, null, null] }
  },
  methods: {
    handleSignUp () {
      this.$router.push('/register')
    },
    handleLogin () {
      this.$router.push('/MySearchV')
    }
  }
}
</script>

<style lang="scss" scoped>
.group_1 {
  padding-top: 1.5rem;
  flex: 1 1 auto;
  overflow-y: auto;
  .group_2 {
    padding-left: 1.88rem;
    padding-right: 1.75rem;
    .text_1 {
      color: rgb(7, 3, 4);
      font-size: 2rem;
      line-height: 2.38rem;
      white-space: nowrap;
    }
    .group_3 {
      margin-top: 1.88rem;
      .section_1 {
        margin-right: 0.13rem;
        padding: 0.81rem 1.25rem 0.94rem;
        color: rgb(7, 3, 4);
        font-size: 0.88rem;
        line-height: 1.06rem;
        white-space: nowrap;
        border-radius: 0.5rem;
        border: solid 0.13rem rgb(221, 221, 221);;
        .text_2 {
          margin: 0.13rem 0 0.19rem;
        }
        .section_2 {
          margin-left: 0.13rem;
          background-color: rgb(7, 3, 4);
          border-radius: 0.031rem;
          width: 0.063rem;
          height: 1.38rem;
        }
      }
      .section_3 {
        margin-right: 0.13rem;
        margin-top: 0.94rem;
        padding: 1rem 1.31rem 1.19rem;
        color: rgb(202, 202, 202);
        font-size: 0.88rem;
        line-height: 1.06rem;
        white-space: nowrap;
        border-radius: 0.5rem;
        border: solid 0.063rem rgb(221, 221, 221);
        .image_2 {
          margin: 0.22rem 0.16rem 0.094rem 0;
          width: 1.25rem;
          height: 0.75rem;
        }
      }
    }
    .text_4 {
      margin-top: 1.13rem;
      align-self: flex-end;
      color: rgb(7, 3, 4);
      font-size: 0.88rem;
      line-height: 1.06rem;
      white-space: nowrap;
    }
    .text-wrapper {
      margin-top: 1.69rem;
      padding: 1.13rem 0 1.25rem;
      color: rgb(7, 3, 4);
      font-size: 0.81rem;
      line-height: 1rem;
      letter-spacing: 0.093rem;
      white-space: nowrap;
      background-color: rgb(221, 242, 71);
      border-radius: 1.69rem;
      width: 7.75rem;
      .text_5 {
        text-transform: uppercase;
      }
    }
  }
  .group_4 {
    margin-top: 5.75rem;
    padding: 1.31rem 0 1.19rem;
    // border-top: solid 0.063rem rgb(238, 238, 238);
    .group_5 {
      line-height: 1.06rem;
      white-space: nowrap;
      .text_6 {
        color: #fff;
        font-size: 0.88rem;
        line-height: 1.06rem;
      }
      .text_7 {
        color: rgb(7, 3, 4);
        font-size: 0.88rem;
        line-height: 1.06rem;
      }
    }
  }
}
.parent {
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(7, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 1 / 2 / 2; }
.div2 { grid-area: 2 / 1 / 7 / 2; }
.div3 { grid-area: 7 / 1 / 8 / 2; }
</style>
