<template>
	<div id="app">
		<div id="gradient"></div>
		<div class="main">
			<div class="container-fluid">
				<div class="row custom header">
					<div class="col-xs-3 brand">
						<img src="./assets/images/logo.png" alt="Lawa Youth Camp 2017 (Strong)">
					</div>
					<div class="col-xs-9 head-text">
						<h2>
							มาร่วมกันแสดงพลังความสตรอง !!
							<small>ด้วยการสร้างรูปโปรไฟล์ที่ "สตรอง" สำหรับคุณ</small>
						</h2>
					</div>
				</div>
				<hr>
				<div class="row">
					<div class="col-xs-12" ref="stage" id="stage">
						<UploadBtn v-model="img" v-if="step === 1" @uploaded="onUploaded"/>
						<Cropper :img="img" :res="res" v-else-if="step === 2" @reset="reset" @next="next" v-model="result"/>
						<Display :result="result" v-else-if="step === 3" @reset="reset" />
					</div>
				</div>
				<hr>
				<div class="row">
					<div class="col-xs-12">
						<p class="text-center"><strong>Made with <del>Love</del> keyboard</strong></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import UploadBtn from './components/UploadBtn'
import Cropper from './components/Cropper'
import Display from './components/Display'

export default {
  name: 'app',
  data: () => ({
	  step: 1,
	  img: '',
	  res: 0,
	  result: {}
  }),
  components: {
	  UploadBtn,
	  Cropper,
	  Display
  },
  mounted(){
	  let stage = $('#stage')
	  _.debounce(() => {
		console.log(stage.width())
		stage.css('min-height', `${stage.width()}px`)
		this.res = stage.width()
	  }, 250)()
  },
  methods: {
	  onUploaded(){
		  this.step += 1;
	  },
	  reset(){
		  this.step = 1;
		  this.img = '';
	  },
	  next(){
		  this.step += 1;
		  console.log($(this.$refs.stage).width())
	  },
	  setHeight(width){
			stage.css('min-height', `${width}px`)
			this.res = width
	  }
  },
  computed: {
	  widthOfMagic(){
		  return $(this.$refs.stage).width()
	  }
  },
  watch: {
	  stage: () => {
		  console.log('It\'s change :', this.widthOfMagic)
		this.setHeight(this.widthOfMagic)
	  }
  }
}
</script>

<style>

</style>
