<template>
    <div class="btn btn-primary btn-lg btn-block upload-btn-wrapper">
        <input type="file" id="upload-btn" class="btn btn-primary btn-lg" accept="image/*" @change="onFileChange" @click="onClick">
        <span ref="btnText">เลือกรูป</span>
    </div>
</template>

<script>

export default {
    data: () => ({
        img: ''
    }),
    methods: {
        onClick(){
        },
        onFileChange(e){
            $(this.$refs.btnText).html('โหลดแปปนะ')
            $('div.upload-btn-wrapper').addClass('disabled')
            let file = e.target.files || e.dataTransfer.files
            if(!file.length){
                return
            }
            this.readImage(file[0])
        },
        readImage(file){
            let image = new Image()
            let reader = new FileReader()

            reader.onload = (e) => {
                this.img = e.target.result
                this.$emit('input', this.img)
                this.$emit('uploaded')
            }
            reader.readAsDataURL(file)
        }
    }
}
</script>